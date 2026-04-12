"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SystemHUD: React.FC = () => {
  const [time, setTime] = useState("");
  const [metrics, setMetrics] = useState({ cpu: 0, ram: 0, lat: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      
      // Random mock metrics for "Engineering vibe"
      setMetrics({
        cpu: Math.floor(Math.random() * 15) + 5,
        ram: Math.floor(Math.random() * 10) + 40,
        lat: Math.floor(Math.random() * 20) + 10,
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] p-6 hidden md:block">
      {/* Top Left: System Context */}
      <div className="absolute top-10 left-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-[10px] text-[#0096FF]/60 space-y-1"
        >
          <p>[ SYSTEMCORE_V1.1 ]</p>
          <p>[ ENVIRONMENT: PRODUCTION ]</p>
          <p>[ AUTH_SYNC: ACTIVE ]</p>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <p>SPHERICAL_DATABASE_ONLINE</p>
          </div>
        </motion.div>
      </div>

      {/* Top Right: Real-time Telemetry */}
      <div className="absolute top-10 right-10 text-right">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-[10px] text-[#0096FF]/60 space-y-1"
        >
          <p>TIME: {time}</p>
          <p>INFRA_LATENCY: {metrics.lat}MS</p>
          <p>GRID_LOAD: {metrics.cpu}%</p>
          <p className="text-white/40 italic">LINKED_BY_SHREYBANSAL</p>
        </motion.div>
      </div>

      {/* Bottom Left: Logic Trace */}
      <div className="absolute bottom-10 left-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] [writing-mode:vertical-lr]"
        >
          Neural_Mesh_Interactive_Logic_Enabled
        </motion.div>
      </div>
    </div>
  );
};

export default SystemHUD;
