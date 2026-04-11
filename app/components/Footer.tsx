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
    <div className="bg-black text-gray-500">
      <footer className="py-8 px-4">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-6">
          <div className="flex justify-center">
            <img
              src="/muj.svg"
              alt="Manipal University Jaipur Logo"
              className="h-16 w-auto bg-white p-2 rounded-lg object-contain cursor-pointer"
              onClick={handleMujLogoClick}
            />
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-300">
              Inspiring Connections, Amplifying Voices
            </h2>
            <p className="mt-2 text-sm">
              Enabling impactful communication for Manipal University Jaipur.
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-center space-x-2">
                <FaEnvelope className="text-gray-400" size={20} />
                <a
                  href="mailto:pr.council@muj.manipal.edu"
                  className="text-gray-400 hover:text-white transition"
                >
                  studentsphere@muj.manipal.edu
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <FaPhone className="text-gray-400" size={20} />
                <a
                  href="tel:+911413999100"
                  className="text-gray-400 hover:text-white transition"
                >
                  +91 141-3999100
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-5 space-x-6">
              <a
                href="https://www.youtube.com/@MUJaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.facebook.com/manipal.university.jaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com/jaipur_manipal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/school/manipal-university-jaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/jaipurmanipal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Placeholder for future MUJ secondary logo */}
          </div>
        </div>

        <div className="text-center text-sm mt-6">
          <p>© {currentYear} Student Sphere, Manipal University Jaipur. All rights reserved.</p>
        </div>
                
      </footer>
    </div>
  );
};

export default Footer;