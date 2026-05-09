"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function HeroGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      {/* Background Radar Sweeps */}
      <motion.div 
        className="absolute w-[80%] h-[80%] rounded-full border border-brand-primary/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-[60%] h-[60%] rounded-full border border-brand-primary/40"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      
      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100">
        <motion.line 
          stroke="rgba(0,94,255,0.4)" 
          strokeWidth="0.5" 
          x1="50" x2="20" y1="50" y2="20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line 
          stroke="rgba(0,94,255,0.4)" 
          strokeWidth="0.5" 
          x1="50" x2="80" y1="50" y2="25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.line 
          stroke="rgba(0,94,255,0.4)" 
          strokeWidth="0.5" 
          x1="50" x2="85" y1="50" y2="70"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
        />
        <motion.line 
          stroke="rgba(0,94,255,0.4)" 
          strokeWidth="0.5" 
          x1="50" x2="30" y1="50" y2="80"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
        />
      </svg>

      {/* Central Engine */}
      <motion.div 
        className="absolute w-24 h-24 bg-surface border-2 border-brand-primary shadow-glow-lg rounded-full flex flex-col items-center justify-center z-20"
        animate={{ boxShadow: ["0 0 10px rgba(0,94,255,0.2)", "0 0 40px rgba(0,94,255,0.6)", "0 0 10px rgba(0,94,255,0.2)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <BrainCircuit className="w-10 h-10 text-white" />
        <span className="text-[9px] text-brand-primary font-mono mt-1 uppercase tracking-widest">Active</span>
      </motion.div>

      {/* Peripheral Nodes (Sensors/Threats) */}
      <motion.div 
        className="absolute top-[10%] left-[10%] group cursor-default z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-4 h-4 bg-status-teal rounded-full shadow-[0_0_10px_var(--color-status-teal)]"></div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <div className="bg-elevated border border-border-subtle text-[11px] px-3 py-1 rounded text-content-secondary">Thermal Sensor - Nominal</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-[15%] right-[10%] group cursor-default z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <motion.div 
          className="w-4 h-4 bg-status-red rounded-full shadow-[0_0_10px_var(--color-status-red)]"
          animate={{ scale: [1, 1.5, 1], backgroundColor: ["#E84040", "#00C47A", "#00C47A"] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 1] }}
        />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <div className="bg-elevated border border-border-subtle text-[11px] px-3 py-1 rounded text-content-secondary">Acoustic Anomaly - Resolved</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] right-[5%] group cursor-default z-10"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_10px_var(--color-brand-primary)]"></div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <div className="bg-elevated border border-border-subtle text-[11px] px-3 py-1 rounded text-content-secondary">Edge Node - Syncing</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[10%] left-[20%] group cursor-default z-10"
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-4 h-4 bg-status-green rounded-full shadow-[0_0_10px_var(--color-status-green)]"></div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <div className="bg-elevated border border-border-subtle text-[11px] px-3 py-1 rounded text-content-secondary">Visual Feed - Clear</div>
        </div>
      </motion.div>
    </div>
  );
}
