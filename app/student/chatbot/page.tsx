"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPaperPlane, FaRobot } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchStudentAcademicBundle } from "@/lib/student-data";
import { buildAttendanceInsights, buildChatbotAcademicContext } from "@/lib/academic";

export default function Chatbot() {
  const [msgs, setMsgs] = useState([
    {
      sender: "bot",
      text: "Hi! I am SphereAI. I can now answer using your live timetable, attendance, assignments, and marks context.",
    },
  ]);
  const [inp, setInp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [academicContext, setAcademicContext] = useState("");

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }

      const academicBundle = await fetchStudentAcademicBundle(user.uid);

      if (!academicBundle) {
        return;
      }

      const attendanceInsights = buildAttendanceInsights(
        academicBundle.slcmAttendance,
        academicBundle.attendanceRecords
      );

      const profileSummary = `I am a student at Manipal University Jaipur. My name is ${
        academicBundle.profile.name || academicBundle.profile.username || "unknown"
      }, my email is ${academicBundle.profile.email}, my branch is ${
        academicBundle.profile.branch
      }, and my graduation batch is ${academicBundle.profile.batch}.`;

      setAcademicContext(
        buildChatbotAcademicContext({
          profileSummary,
          attendanceInsights,
          assignments: academicBundle.assignments,
          marks: academicBundle.marks,
          timetableSlots: academicBundle.timetableSlots,
        })
      );
    });

    return () => unsubscribe();
  }, [auth]);

  const send = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inp.trim() || isLoading) {
      return;
    }

    const nextMessages = [...msgs, { sender: "user", text: inp }];
    setMsgs(nextMessages);
    setInp("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          academicContext,
          messages: nextMessages.map((message) => ({
            role: message.sender === "user" ? "user" : "assistant",
            content: message.text,
          })),
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]) {
        setMsgs((currentMessages) => [
          ...currentMessages,
          { sender: "bot", text: data.choices[0].message.content },
        ]);
      } else {
        setMsgs((currentMessages) => [
          ...currentMessages,
          { sender: "bot", text: `Error: ${data.error || "Failed to fetch AI response."}` },
        ]);
      }
    } catch (error) {
      setMsgs((currentMessages) => [
        ...currentMessages,
        { sender: "bot", text: "Error connecting to the backend server." },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="w-full max-w-5xl mx-auto p-6 md:p-8">
        <Link
          href="/student"
          className="text-gray-400 hover:text-[#0096FF] flex items-center mb-6 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <div className="flex items-center space-x-4 border-b border-gray-800 pb-4">
          <FaRobot className="text-5xl text-[#0096FF]" />
          <div>
            <h1 className="text-3xl font-extrabold text-[#0096FF]">SphereAI</h1>
            <p className="text-gray-400 text-sm">
              Your intelligent campus assistant with live academic context
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-5xl mx-auto w-full custom-scrollbar flex flex-col">
        {msgs.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl w-fit max-w-[85%] shadow-lg text-lg leading-relaxed ${
              message.sender === "user"
                ? "bg-[#0096FF] text-black self-end rounded-tr-sm"
                : "bg-gray-800 text-white self-start border border-gray-700 rounded-tl-sm"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="p-6 max-w-5xl mx-auto w-full mb-4">
        <form onSubmit={send} className="flex bg-gray-900 rounded-xl shadow-2xl">
          <input
            type="text"
            className="flex-1 p-5 rounded-l-xl bg-transparent text-white focus:outline-none placeholder-gray-500"
            value={inp}
            onChange={(event) => setInp(event.target.value)}
            placeholder="Ask about attendance, timetable, assignments, or marks..."
          />
          <button
            type="submit"
            disabled={!inp.trim()}
            className="bg-[#0096FF] text-black px-8 rounded-r-xl font-bold text-2xl hover:bg-[#007bcc] disabled:opacity-50 transition"
          >
            <FaPaperPlane />
          </button>
        </form>
        <p className="text-center text-xs text-gray-600 mt-4">
          SphereAI now answers with your live academic context, but you should still verify critical deadlines through official channels.
        </p>
      </div>
    </div>
  );
}
