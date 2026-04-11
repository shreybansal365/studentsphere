"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";

const developers = [
  {
    name: "Student Developer 1",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    email: "mailto:student1@muj.manipal.edu",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    batch: "CSE 2026",
  },
  {
    name: "Student Developer 2",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    email: "mailto:student2@muj.manipal.edu",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    batch: "CSE 2026",
  }
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <Navbar />
      {/* 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl font-extrabold text-[#0096FF] tracking-tight drop-shadow-lg mb-8">
          Meet the Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:border hover:border-[#0096FF]"
            >
              <h2 className="text-2xl font-bold text-center mb-4">{dev.name}</h2>
              <p className="text-center text-gray-400">Batch {dev.batch}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      */}
    </div>
  );
}
