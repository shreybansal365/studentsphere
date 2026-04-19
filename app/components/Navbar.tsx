'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems: { name: string; path: string }[] = [
    { name: 'SYSTEM_DASH', path: '/' },
    { name: 'THE_ARCHITECT', path: '/members' },
    { name: 'CHRONICLE', path: '/about' },
    { name: 'COMM_MATRIX', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-b border-white/10" />
      
      <div className="container mx-auto px-6 h-20 relative z-10 flex items-center justify-between">
        {/* Logo Node */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="p-2 bg-[#0096FF]/10 rounded-lg border border-[#0096FF]/20 group-hover:border-[#0096FF]/50 transition-all">
              <Terminal className="text-[#0096FF]" size={20} />
            </div>
            <h1 className="text-xl font-black text-white italic tracking-tighter uppercase">
              STUDENT<span className="text-[#0096FF]">SPHERE</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation Matrix */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link key={index} href={item.path}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
                    isActive ? "text-[#0096FF] bg-[#0096FF]/5" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0096FF] rounded-full shadow-[0_0_10px_#0096FF]"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
          
          <div className="ml-6 pl-6 border-l border-white/10 flex items-center space-x-4">
             <div className="flex items-center space-x-2 text-[8px] text-gray-600 font-mono uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>Uplink_Active</span>
             </div>
          </div>
        </nav>

        {/* Mobile Command Toggle */}
        <button
          className="md:hidden p-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Modular Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden z-50"
          >
            <nav className="flex flex-col p-8 space-y-6">
              {navItems.map((item, index) => (
                <Link key={index} href={item.path} onClick={toggleMenu}>
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-xl font-black uppercase italic tracking-tighter ${
                      pathname === item.path ? "text-[#0096FF]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 font-mono uppercase tracking-[0.3em]">
                 <span>Node_Status</span>
                 <span className="text-green-500">Certified</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;