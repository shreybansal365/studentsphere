"use client";

import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from '@/lib/firebase';
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRobot, FaTasks, FaGraduationCap, FaChartLine, FaBell, FaComments } from 'react-icons/fa';
import Link from 'next/link';

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // SLCM Vault States
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [slcmPassword, setSlcmPassword] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState("");

  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchUserData = async (uid: string) => {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setUser(userDoc.data());
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleSyncSLCM = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.username || !slcmPassword) return;
    setIsSyncing(true);
    setSyncStatus("Waking up invisible browser...");

    try {
      const res = await fetch("/api/slcm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slcmId: user.username, password: slcmPassword }),
      });
      
      const data = await res.json();
      
      if (!data.success) {
        setSyncStatus("Error: " + (data.error || "Invalid Credentials or MUJ SLCM is down."));
        setIsSyncing(false);
        return;
      }
      
      setSyncStatus("Data extracted! Securely saving to your profile...");
      
      // Update the user's Firestore doc with the scraped HTML strings!
      const userRef = doc(db, "users", auth.currentUser!.uid);
      import("firebase/firestore").then(async ({ setDoc }) => {
        await setDoc(userRef, {
           slcmScrapeTime: new Date().toISOString(),
           slcmTimetableHTML: data.timetableData,
           slcmAttendanceHTML: data.attendanceData
        }, { merge: true });
        
        setSyncStatus("Successfully Synced! You can now close this window.");
        setIsSyncing(false);
        setSlcmPassword("");
      });

    } catch (err) {
      setSyncStatus("Critical Failure: API Pipeline broke.");
      setIsSyncing(false);
    }
  };

  const dashboardModules = [
    { name: "Attendance & Analytics", icon: <FaChartLine className="text-4xl" />, path: "/student/attendance", color: "text-purple-500", desc: "View attendance trends & risk predictions" },
    { name: "Live Timetable", icon: <FaCalendarAlt className="text-4xl" />, path: "/student/timetable", color: "text-blue-500", desc: "Check your daily & weekly class schedule" },
    { name: "Assignments", icon: <FaTasks className="text-4xl" />, path: "/student/assignments", color: "text-green-500", desc: "Track pending work and deadlines" },
    { name: "Marks & Progress", icon: <FaGraduationCap className="text-4xl" />, path: "/student/marks", color: "text-yellow-500", desc: "View marks and academic performance" },
    { name: "Smart Reminders", icon: <FaBell className="text-4xl" />, path: "/student/reminders", color: "text-red-500", desc: "Alerts for exams and low attendance" },
    { name: "Discussion Forum", icon: <FaComments className="text-4xl" />, path: "/student/forum", color: "text-pink-500", desc: "Participate in academic discussions" },
    { name: "AI Chatbot", icon: <FaRobot className="text-4xl" />, path: "/student/chatbot", color: "text-cyan-500", desc: "Get instant academic assistance" },
  ];

  if (loading) {
    return <div className="min-h-screen bg-black flex justify-center items-center text-white">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Welcome Section */}
        <motion.div 
          className="w-full text-center mb-12"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl border-b border-gray-800 pb-4 font-extrabold text-[#0096FF]">
            Welcome{user?.name ? `, ${user.name}` : ''}!
          </h1>
          <p className="text-gray-400 mt-4 text-lg">Your personalized smart academic dashboard.</p>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {dashboardModules.map((mod, index) => (
            <Link href={mod.path} key={index}>
              <motion.div 
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-[#0096FF] hover:bg-gray-800 transition-all cursor-pointer shadow-lg group"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
              >
                <div className={`mb-4 ${mod.color} group-hover:scale-110 transition-transform`}>
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{mod.name}</h3>
                <p className="text-sm text-gray-400">{mod.desc}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        {/* SLCM Sync Card Trigger */}
        <motion.div 
          className="mt-12 w-full max-w-3xl bg-gray-900 border border-blue-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-[0_0_20px_rgba(0,150,255,0.1)] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
           <div className="mb-4 md:mb-0">
             <h3 className="text-2xl font-black text-white">Sync MUJ Portal</h3>
             <p className="text-gray-400 text-sm mt-1">Automatically extract your real timetable and attendance from SLCM.</p>
           </div>
           <button onClick={() => setShowSyncModal(true)} className="bg-[#0096FF] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#007acc] transition shadow-lg">
             Connect Account
           </button>
        </motion.div>

        {/* Sync Modal Popup */}
        {showSyncModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
              <button 
                onClick={() => { setShowSyncModal(false); setSyncStatus(""); }} 
                className="absolute top-4 right-6 text-gray-400 hover:text-white text-3xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-[#0096FF] mb-2">Link SLCM Account</h2>
              <p className="text-xs text-gray-500 mb-6 italic">Your credentials are never stored permanently. They are used once by our robotic browser to securely sync your academic data.</p>
              
              <form onSubmit={handleSyncSLCM} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-1">Username</label>
                  <p className="text-xs text-gray-500 mb-2">Automatically sourced from your profile</p>
                  <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-500 cursor-not-allowed focus:outline-none" readOnly value={user?.username || ""} />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">SLCM Password</label>
                  <input type="password" className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-[#0096FF] focus:outline-none" required value={slcmPassword} onChange={e=>setSlcmPassword(e.target.value)} placeholder="••••••••" />
                </div>
                <button type="submit" disabled={isSyncing} className="w-full bg-[#0096FF] text-black font-bold text-lg rounded-lg py-3 mt-4 hover:bg-[#007acc] transition disabled:opacity-50">
                  {isSyncing ? 'Scraping Portal (≈ 15 secs)...' : 'Extract Data'}
                </button>
              </form>
              
              {syncStatus && (
                <div className={`mt-6 p-4 rounded-xl text-center text-sm font-bold ${syncStatus.includes('Error') || syncStatus.includes('Critical') ? 'bg-red-900/50 text-red-500' : 'bg-green-900/50 text-green-500'}`}>
                  {syncStatus}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
