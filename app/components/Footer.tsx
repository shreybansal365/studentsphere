"use client"
import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const [mujLogoClicks, setMujLogoClicks] = useState(0);

  const handleMujLogoClick = () => {
    setMujLogoClicks((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        window.location.href = "https://muj.manipal.edu"; 
      }
      return newCount;
    });
  };

  return (
    <div className="bg-black text-gray-500 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0096FF]/5 blur-[100px] pointer-events-none" />

      <footer className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-start">
          {/* Left Side: Logo & System Statement */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl group cursor-pointer" onClick={handleMujLogoClick}>
                <img
                    src="/muj.svg"
                    alt="MUJ_LOGO"
                    className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-white tracking-tighter italic">
                STUDENT <span className="text-[#0096FF]">SPHERE</span>
              </h2>
              <p className="text-xs font-mono text-gray-400 max-w-sm mt-3 leading-relaxed uppercase tracking-widest">
                Centralized_Academic_Nervous_System.
              </p>
            </div>
          </div>

          {/* Right Side: Connections & Synaptic Socials */}
          <div className="flex flex-col items-center md:items-end space-y-10">
            <div className="text-center md:text-right">
              <h3 className="text-[10px] font-mono font-black text-[#0096FF] uppercase tracking-[0.4em] mb-6">
                Connect_With_The_Core
              </h3>
              <div className="flex flex-col items-center md:items-end space-y-4">
                <a
                  href="mailto:shreybansal365@gmail.com"
                  className="flex items-center text-sm font-bold text-gray-300 hover:text-[#0096FF] transition-all group"
                >
                  <span>shreybansal365@gmail.com</span>
                  <FaEnvelope className="ml-4 text-[#0096FF]/40 group-hover:scale-125 transition-transform" />
                </a>
                <a
                  href="tel:+919773828948"
                  className="flex items-center text-sm font-bold text-gray-300 hover:text-[#0096FF] transition-all group"
                >
                  <span>+91 9773828948</span>
                  <FaPhone className="ml-4 text-[#0096FF]/40 group-hover:scale-125 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: FaYoutube, href: "https://www.youtube.com/@MUJaipur" },
                { icon: FaFacebookF, href: "https://www.facebook.com/manipal.university.jaipur/" },
                { icon: FaTwitter, href: "https://x.com/jaipur_manipal" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/school/manipal-university-jaipur/" },
                { icon: FaInstagram, href: "https://www.instagram.com/jaipurmanipal/" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:bg-[#0096FF] hover:text-black hover:border-[#0096FF] transition-all duration-500 transform hover:-translate-y-2 shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono tracking-[0.3em] text-gray-600 uppercase">
          <p>© {currentYear} MANIPAL UNIVERSITY JAIPUR • ALL_SYSTEMS_OPERATIONAL</p>
          <div className="mt-6 md:mt-0 flex items-center space-x-2">
            <span>MADE WITH</span>
            <motion.span 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-500"
            >
                ❤️
            </motion.span>
            <span>BY</span>
            <span className="text-white font-black italic">SHREY BANSAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;