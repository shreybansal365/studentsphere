"use client";
import React from "react";
import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";


const Hero: React.FC = () => {

  return (
    <div className="relative min-h-[90vh] bg-black flex flex-col pt-20">
      <NeuralBackground />
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Subtle Glow Behind Text */}
          <div className="absolute inset-0 bg-[#0096FF]/20 blur-[100px] rounded-full" />
          
          <h1 className="relative text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-2">
            WELCOME TO
          </h1>
          <h2 className="relative text-4xl md:text-7xl font-bold text-[#0096FF] tracking-tight drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]">
            STUDENT SPHERE
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 mt-8 max-w-xl mx-auto text-lg md:text-xl font-medium tracking-wide"
        >
          THE ULTIMATE DECENTRALIZED CAMPUS ECOSYSTEM
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex space-x-4"
        >
          <button className="px-10 py-4 bg-[#0096FF] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,150,255,0.5)] hover:shadow-[0_0_30px_white]">
            <a href="/sign-in">INITIATE EXPLORATION</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
