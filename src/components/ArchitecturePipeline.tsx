"use client";

import { motion, Variants } from "framer-motion";
import { Radio, Cpu, Brain, Send } from "lucide-react";

export default function ArchitecturePipeline() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto py-12">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2 z-0">
          <div className="w-full h-full bg-border-subtle overflow-hidden relative">
            <motion.div 
              className="absolute top-0 bottom-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Animated connecting line (mobile) */}
        <div className="md:hidden absolute left-1/2 top-[10%] bottom-[10%] w-[2px] -translate-x-1/2 z-0">
          <div className="w-full h-full bg-border-subtle overflow-hidden relative">
            <motion.div 
              className="absolute left-0 right-0 top-0 h-[50%] bg-gradient-to-b from-transparent via-brand-primary to-transparent opacity-50"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Step 1: Edge */}
        <motion.div variants={itemVariants} className="z-10 w-full md:w-1/4">
          <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-primary/50 hover:shadow-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-base border border-border-subtle flex items-center justify-center mb-4">
              <Radio className="w-5 h-5 text-content-secondary" />
            </div>
            <h3 className="font-display font-semibold text-white text-[16px] mb-2">Edge & Hardware</h3>
            <p className="text-[12px] text-content-secondary">Sensors & Local Processing</p>
          </div>
        </motion.div>

        {/* Step 2: Intelligence */}
        <motion.div variants={itemVariants} className="z-10 w-full md:w-1/4">
          <div className="bg-elevated border border-brand-primary shadow-[0_0_20px_rgba(0,94,255,0.15)] rounded-xl p-6 flex flex-col items-center text-center transform md:scale-110">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="font-display font-semibold text-white text-[16px] mb-2">Intelligence Layer</h3>
            <p className="text-[12px] text-content-secondary">AI Models & Risk Engine</p>
          </div>
        </motion.div>

        {/* Step 3: Platform */}
        <motion.div variants={itemVariants} className="z-10 w-full md:w-1/4">
          <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-primary/50 hover:shadow-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-base border border-border-subtle flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-content-secondary" />
            </div>
            <h3 className="font-display font-semibold text-white text-[16px] mb-2">Platform Services</h3>
            <p className="text-[12px] text-content-secondary">APIs, Auth & Routing</p>
          </div>
        </motion.div>

        {/* Step 4: Apps */}
        <motion.div variants={itemVariants} className="z-10 w-full md:w-1/4">
          <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-primary/50 hover:shadow-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-base border border-border-subtle flex items-center justify-center mb-4">
              <Send className="w-5 h-5 text-content-secondary" />
            </div>
            <h3 className="font-display font-semibold text-white text-[16px] mb-2">Applications</h3>
            <p className="text-[12px] text-content-secondary">Consumer & Enterprise UIs</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
