"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/lib/firebase";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaComments,
  FaDatabase,
  FaGraduationCap,
  FaTasks,
  FaUpload,
} from "react-icons/fa";

interface FacultyProfile {
  name?: string;
}

interface DashboardModule {
  name: string;
  path: string;
  description: string;
  status: "Ready" | "In Progress";
  accent: string;
  badgeClass: string;
  icon: React.ReactNode;
}

const dashboardModules: DashboardModule[] = [
  {
    name: "Mark Attendance",
    path: "/admin/attendance",
    description: "Magic Filter roster, subject intelligence, and one-click attendance actions.",
    status: "Ready",
    accent: "text-cyan-300",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    icon: <FaChalkboardTeacher className="text-4xl" />,
  },
  {
    name: "Manage Timetable",
    path: "/admin/timetable",
    description: "Upload and maintain class schedules for the faculty side.",
    status: "In Progress",
    accent: "text-sky-400",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/20",
    icon: <FaCalendarAlt className="text-4xl" />,
  },
  {
    name: "Assignments",
    path: "/admin/assignments",
    description: "Create, edit, filter, and retire assignments without leaving the workspace.",
    status: "Ready",
    accent: "text-emerald-300",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    icon: <FaTasks className="text-4xl" />,
  },
  {
    name: "Upload Marks",
    path: "/admin/marks",
    description: "Validate full grading sheets, review summaries, and upload with confidence.",
    status: "Ready",
    accent: "text-amber-300",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
    icon: <FaUpload className="text-4xl" />,
  },
  {
    name: "Data Management",
    path: "/admin/data",
    description: "Manage academic data that powers chatbot-connected workflows.",
    status: "In Progress",
    accent: "text-rose-300",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/20",
    icon: <FaDatabase className="text-4xl" />,
  },
  {
    name: "Discussion Forum",
    path: "/admin/forum",
    description: "Coordinate academic communication and support conversations.",
    status: "In Progress",
    accent: "text-violet-300",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/20",
    icon: <FaComments className="text-4xl" />,
  },
];

const Page: React.FC = () => {
  const [facultyUser, setFacultyUser] = useState<User | null>(null);
  const [facultyProfile, setFacultyProfile] = useState<FacultyProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchUserData = async (uid: string) => {
      const userDoc = await getDoc(doc(db, "users", uid));

      if (userDoc.exists()) {
        setFacultyProfile(userDoc.data() as FacultyProfile);
      }

      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setFacultyUser(currentUser);
        void fetchUserData(currentUser.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const readyModules = dashboardModules.filter((module) => module.status === "Ready").length;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center text-white">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-8 rounded-[2rem] border border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-950 p-8 shadow-[0_0_40px_rgba(0,150,255,0.08)]"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full border border-[#0096FF]/30 bg-[#0096FF]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-[#7fc9ff]">
                Faculty Portal
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0096FF]">
                Welcome{facultyProfile?.name ? `, ${facultyProfile.name}` : ""}
              </h1>
              <p className="mt-4 max-w-3xl text-base text-gray-400 md:text-lg">
                Your core faculty workflows are now centralized here. Attendance,
                assignments, and grading are ready; the remaining modules are queued for polish.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:min-w-[320px]">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Ready Now</p>
                <p className="mt-2 text-3xl font-black text-white">{readyModules}</p>
              </div>
              <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">In Progress</p>
                <p className="mt-2 text-3xl font-black text-white">
                  {dashboardModules.length - readyModules}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {dashboardModules.map((module) => (
            <Link href={module.path} key={module.name}>
              <motion.div
                className="group h-full rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:border-[#0096FF] hover:bg-gray-800"
                variants={{
                  hidden: { opacity: 0, scale: 0.94 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`rounded-2xl border border-gray-800 bg-black/60 p-4 transition-transform group-hover:scale-105 ${module.accent}`}
                  >
                    {module.icon}
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${module.badgeClass}`}
                  >
                    {module.status}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">{module.name}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{module.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7fc9ff]">
                  Open Workspace
                  <FaGraduationCap className="text-xs" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {!facultyUser && (
          <p className="mt-6 text-sm text-red-300">
            Faculty session data is missing. Sign in again if navigation feels limited.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
