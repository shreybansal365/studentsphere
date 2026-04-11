"use client";
import React from "react";
import Link from 'next/link';
import { FaArrowLeft, FaDatabase, FaServer, FaCodeBranch, FaShieldAlt } from 'react-icons/fa';

export default function DataDash() {
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-start mb-6">
           <Link href="/admin" className="text-gray-400 hover:text-[#0096FF] flex items-center transition">
             <FaArrowLeft className="mr-2"/> Back to Dashboard
           </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0096FF] mb-12">Data Management Core</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <div className="bg-gray-900 p-8 rounded-3xl flex items-center justify-between border border-gray-800 shadow-xl hover:border-purple-500 transition-colors group cursor-default">
              <div>
                 <h2 className="text-xl font-bold text-gray-400 uppercase tracking-wider mb-2">Total System Logs</h2>
                 <p className="text-5xl font-black text-white group-hover:text-purple-500 transition-colors">12,408</p>
              </div>
              <FaServer className="text-7xl text-gray-800 group-hover:text-purple-900 transition-colors" />
           </div>

           <div className="bg-gray-900 p-8 rounded-3xl flex items-center justify-between border border-gray-800 shadow-xl hover:border-green-500 transition-colors group cursor-default">
              <div>
                 <h2 className="text-xl font-bold text-gray-400 uppercase tracking-wider mb-2">AI Tokens Used</h2>
                 <p className="text-5xl font-black text-white group-hover:text-green-500 transition-colors">215K</p>
              </div>
              <FaDatabase className="text-7xl text-gray-800 group-hover:text-green-900 transition-colors" />
           </div>

           <div className="bg-gray-900 p-8 rounded-3xl flex items-center justify-between border border-gray-800 shadow-xl hover:border-[#0096FF] transition-colors group cursor-default">
              <div>
                 <h2 className="text-xl font-bold text-gray-400 uppercase tracking-wider mb-2">DB Commits</h2>
                 <p className="text-5xl font-black text-white group-hover:text-[#0096FF] transition-colors">4,031</p>
              </div>
              <FaCodeBranch className="text-7xl text-gray-800 group-hover:text-[#003966] transition-colors" />
           </div>

           <div className="bg-gray-900 p-8 rounded-3xl flex items-center justify-between border border-gray-800 shadow-xl hover:border-red-500 transition-colors group cursor-default">
              <div>
                 <h2 className="text-xl font-bold text-gray-400 uppercase tracking-wider mb-2">Security Events</h2>
                 <p className="text-5xl font-black text-white group-hover:text-red-500 transition-colors">0</p>
              </div>
              <FaShieldAlt className="text-7xl text-gray-800 group-hover:text-red-900 transition-colors" />
           </div>
        </div>

        <div className="w-full mt-12 bg-gray-900 p-8 border border-gray-800 rounded-3xl flex items-center justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 to-black">
           <div>
              <h2 className="text-3xl font-bold text-white mb-2">System Status is Normal.</h2>
              <p className="text-gray-400">All Firestore databases and AI endpoints are fully operational.</p>
           </div>
           <div className="bg-green-500/20 px-6 py-2 border border-green-500 rounded-full text-green-500 font-bold animate-pulse">
              ONLINE
           </div>
        </div>
      </div>
    </div>
  );
}
