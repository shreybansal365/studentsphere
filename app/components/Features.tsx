"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRobot, FaCalendarAlt, FaTasks, FaChartLine, FaBell, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Smart Attendance Tracking",
    description: "Track attendance easily. Students get risk predictions and alerts if their attendance drops below required thresholds.",
    icon: <FaChartLine className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
  {
    title: "Interactive Timetables",
    description: "Real-time class schedules and daily/weekly timetable views. Teachers can upload and update schedules effortlessly.",
    icon: <FaCalendarAlt className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
  {
    title: "AI Chatbot Assistant",
    description: "Instant help for academic queries. Ask about assignments, marks, schedules, or general college information.",
    icon: <FaRobot className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
  {
    title: "Assignment Management",
    description: "Faculty can assign work and set deadlines. Students receive automated smart reminders so they never miss a due date.",
    icon: <FaTasks className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
  {
    title: "Performance & Marks",
    description: "Centralized hub for all grades. Track academic progress seamlessly over the course of the semester.",
    icon: <FaGraduationCap className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
  {
    title: "Smart Reminders",
    description: "Automated, AI-driven notifications for upcoming exams, low attendance warnings, and assignment deadlines.",
    icon: <FaBell className="text-[#0096FF] text-4xl mb-4 mx-auto" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section className="bg-black py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            What makes <span className="text-[#0096FF]">StudentSphere</span> Smart?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg"
          >
            A unified academic management platform that helps students and faculty manage everything efficiently, supercharged by AI-based predictions and assistance.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:border-[#0096FF] transition-colors duration-300 shadow-xl group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* User Segment Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            <div className="bg-gradient-to-br from-[#001f3f] to-black border border-[#0096FF]/30 p-10 rounded-2xl">
                <FaUsers className="text-[#0096FF] text-4xl mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">For Students</h3>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                    <li>View daily and weekly timetables</li>
                    <li>Track attendance with AI risk prediction</li>
                    <li>Manage assignments and smart reminders</li>
                    <li>View marks and performance trends</li>
                    <li>Chatbot for instant academic queries</li>
                </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#001f3f] to-black border border-[#0096FF]/30 p-10 rounded-2xl">
                <FaChalkboardTeacher className="text-[#0096FF] text-4xl mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">For Faculty</h3>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                    <li>Mark and manage attendance easily</li>
                    <li>Upload timetables and define rules</li>
                    <li>Create assignments with deadlines</li>
                    <li>Upload evaluation marks and publish info</li>
                    <li>Centralized hub to manage academic data</li>
                </ul>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
