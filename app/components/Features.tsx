"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRobot, FaCalendarAlt, FaTasks, FaChartLine, FaBell, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Smart Attendance Tracking",
    description: "Predictive analytics for attendance safety margins.",
    icon: <FaChartLine className="text-[#0096FF] text-3xl" />,
  },
  {
    title: "Neural Timetables",
    description: "Dynamic schedule synchronization with SLCM data.",
    icon: <FaCalendarAlt className="text-[#0096FF] text-3xl" />,
  },
  {
    title: "SphereAI Assistant",
    description: "Deep context-aware academic intelligence.",
    icon: <FaRobot className="text-[#0096FF] text-3xl" />,
  },
  {
    title: "Task Orchestration",
    description: "Automated assignment tracking and smart deadlines.",
    icon: <FaTasks className="text-[#0096FF] text-3xl" />,
  },
  {
    title: "Performance Metrics",
    description: "Visual logic for grades and academic progression.",
    icon: <FaGraduationCap className="text-[#0096FF] text-3xl" />,
  },
  {
    title: "System Alerts",
    description: "Real-time notifications for critical campus events.",
    icon: <FaBell className="text-[#0096FF] text-3xl" />,
  },
];

const Card3D = ({ feature }: { feature: any }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] transition-all duration-200 hover:border-[#0096FF]/40 hover:shadow-[0_0_30px_rgba(0,150,255,0.1)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0096FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-6 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#0096FF]/50 group-hover:bg-[#0096FF]/10 transition-all duration-500">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0096FF] transition-colors">{feature.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
      </div>

      {/* Decorative Corner Glow */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#0096FF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="bg-black py-32 px-6 sm:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#0096FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 text-balance">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#0096FF] font-mono tracking-widest text-sm mb-4"
          >
            INTELLIGENCE OVERLAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            WHAT MAKES <span className="text-[#0096FF] italic">STUDENTSPHERE</span> SMART?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card3D key={index} feature={feature} />
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
            <div className="group glass-card p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl">01</div>
                <FaUsers className="text-[#0096FF] text-5xl mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-white mb-4">FOR STUDENTS</h3>
                <div className="space-y-4 text-gray-400 font-medium tracking-tight">
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Real-time SLCM synchronization</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Predictive Attendance Logic</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Smart Task Orchestration</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Visual Performance Trends</p>
                </div>
            </div>
            
            <div className="group glass-card p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-6xl">02</div>
                <FaChalkboardTeacher className="text-[#0096FF] text-5xl mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-white mb-4">FOR FACULTY</h3>
                <div className="space-y-4 text-gray-400 font-medium tracking-tight">
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Centralized Data Management</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Seamless Timetable Publishing</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Bulk Evaluation Tools</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 bg-[#0096FF] rounded-full mr-3" /> Automated Engagement Metrics</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
