"use client";
import React from "react";
import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";


const Hero: React.FC = () => {

  return (
    <div className="relative min-h-[90vh] bg-black flex flex-col pt-32 overflow-hidden">
      <NeuralBackground />
      
      {/* Background Grid Pattern for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative"
        >
          {/* Holographic Pulse Glow */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#0096FF]/20 blur-[120px] rounded-full" 
          />
          
          <div className="space-y-4">
             <motion.p 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[#0096FF] font-mono text-xs tracking-[0.6em] uppercase mb-4"
             >
               Establishing_Neural_Link
             </motion.p>
             <h1 className="relative text-6xl md:text-9xl font-black text-white tracking-tighter leading-none italic group">
               WELCOME TO
             </h1>
             <h2 className="relative text-5xl md:text-8xl font-black text-[#0096FF] tracking-tight italic drop-shadow-[0_0_30px_rgba(0,150,255,0.3)]">
               STUDENT <span className="text-white">SPHERE</span>
             </h2>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-500 mt-10 max-w-2xl mx-auto text-sm md:text-base font-mono uppercase tracking-[0.4em] leading-relaxed"
        >
          The_Ultimate_Decentralized_Campus_Ecosystem
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <a href="/sign-in" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0096FF] to-blue-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-5 bg-black border border-[#0096FF]/30 text-white font-mono text-xs tracking-[0.3em] rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500">
              INITIATE_EXPLORATION
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
