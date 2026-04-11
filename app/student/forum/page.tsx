"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import { categorizeForumMessage } from "@/lib/academic";
import { FaArrowLeft, FaPaperPlane, FaTags } from "react-icons/fa";

const categories = [
  "All",
  "Assignments",
  "Attendance",
  "Timetable",
  "Marks",
  "Exams",
  "Study Groups",
  "General",
];

export default function StudentForum() {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username || userDoc.data().name || "Anonymous Student");
        }
      }
    });

    const forumQuery = query(collection(db, "forum"), orderBy("createdAt", "asc"));
    const unsubForum = onSnapshot(forumQuery, (snapshot) => {
      const nextMessages = snapshot.docs.map((messageDoc) => {
        const data = messageDoc.data();
        return {
          id: messageDoc.id,
          ...data,
          category: data.category || categorizeForumMessage(data.text || ""),
        };
      });
      setMessages(nextMessages);
    });

    return () => {
      unsubAuth();
      unsubForum();
    };
  }, [auth, db]);

  const filteredMessages = messages.filter(
    (message) => categoryFilter === "All" || message.category === categoryFilter
  );

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!newMessage.trim() || !user) {
      return;
    }

    const category = categorizeForumMessage(newMessage);

    await addDoc(collection(db, "forum"), {
      text: newMessage,
      category,
      senderId: user.uid,
      senderName: `${username} (Student)`,
      createdAt: new Date().toISOString(),
    });

    setNewMessage("");
    setCategoryFilter(category);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-6xl p-6">
        <Link
          href="/student"
          className="text-gray-400 hover:text-[#0096FF] flex items-center mb-6 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>

        <div className="rounded-[2rem] border border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-950 p-8 shadow-[0_0_40px_rgba(0,150,255,0.08)]">
          <p className="mb-3 inline-flex items-center rounded-full border border-[#0096FF]/30 bg-[#0096FF]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-[#7fc9ff]">
            Categorised Forum
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0096FF]">Discussion Forum</h1>
          <p className="mt-4 text-gray-400">
            New posts are automatically categorised so students can jump straight to the right topic.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                categoryFilter === category
                  ? "border-[#0096FF] bg-[#0096FF] text-black"
                  : "border-gray-700 bg-gray-900 text-gray-300 hover:border-[#0096FF] hover:text-white"
              }`}
            >
              <FaTags className="mr-2 inline text-xs" />
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 max-w-6xl mx-auto w-full custom-scrollbar flex flex-col">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-2xl w-fit max-w-[82%] ${
              message.senderId === user?.uid
                ? "bg-[#0096FF] text-black self-end rounded-tr-sm"
                : "bg-gray-800 text-white self-start rounded-tl-sm shadow-md border border-gray-700"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <p className="text-xs opacity-70 font-bold tracking-wider">{message.senderName}</p>
              <span className="rounded-full border border-current/20 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                {message.category}
              </span>
            </div>
            <p className="text-lg leading-snug">{message.text}</p>
          </div>
        ))}
      </div>

      <div className="p-6 max-w-6xl mx-auto w-full">
        <form onSubmit={sendMessage} className="flex shadow-2xl">
          <input
            type="text"
            className="flex-1 p-4 rounded-l-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-[#0096FF] transition"
            placeholder="Type a message to the public forum..."
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-[#0096FF] text-black px-8 rounded-r-xl font-bold text-xl hover:bg-[#007bcc] transition disabled:opacity-50"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
