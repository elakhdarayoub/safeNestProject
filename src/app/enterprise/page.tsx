"use client";

import { Plug, Server, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">

<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
<div>
<span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-primary mb-4 block">ENTERPRISE</span>
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Enterprise-Grade AI Safety Infrastructure.</h1>
<p className="text-[18px] text-content-secondary mb-10">Unify safety monitoring, predictive analytics, and automated response across your entire organization with a single platform.</p>
<div className="flex space-x-4">
<Link className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-hover text-white font-semibold h-[48px] px-8 rounded-[8px]" href="#">Request Enterprise Demo</Link>
<Link className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-medium h-[48px] px-8 rounded-[8px]" href="#">Download Data Sheet</Link>
</div>
</div>

<div className="h-[400px] w-full bg-surface border border-border-subtle rounded-[16px] relative flex items-center justify-center overflow-hidden">
<svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
<motion.circle 
  cx="50" cy="50" fill="none" r="30" stroke="#005EFF" strokeWidth="0.5" 
  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.circle 
  cx="50" cy="50" fill="none" r="40" stroke="#005EFF" strokeDasharray="2 2" strokeWidth="0.5" 
  style={{ originX: "50px", originY: "50px" }}
  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
  transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
/>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
<div className="bg-surface border border-border-subtle rounded-[12px] p-8">
<ShieldCheck className="w-8 h-8 text-brand-primary mb-6"></ShieldCheck>
<h3 className="font-display text-[26px] font-semibold text-white mb-4">Compliance Ready</h3>
<p className="text-[15px] text-content-secondary">Built to automatically fulfill OSHA, ISO 45001, and SOC2 safety tracking and reporting requirements without manual intervention.</p>
</div>
<div className="bg-surface border border-border-subtle rounded-[12px] p-8">
<Server className="w-8 h-8 text-brand-primary mb-6"></Server>
<h3 className="font-display text-[26px] font-semibold text-white mb-4">Enterprise Scalability</h3>
<p className="text-[15px] text-content-secondary">Manage 1 to 100,000+ endpoints from a centralized cloud dashboard with infinite scaling capabilities.</p>
</div>
<div className="bg-surface border border-border-subtle rounded-[12px] p-8">
<Plug className="w-8 h-8 text-brand-primary mb-6"></Plug>
<h3 className="font-display text-[26px] font-semibold text-white mb-4">Seamless Integration</h3>
<p className="text-[15px] text-content-secondary">REST APIs and pre-built connectors integrate directly with your existing VMS, HRIS, and ERP systems.</p>
</div>
</section>

<section className="bg-surface py-[128px] border-y border-border-subtle mb-32">
<div className="max-w-[1440px] mx-auto px-8">
<h2 className="font-display text-[34px] font-bold text-white text-center mb-16">How Enterprise Deployment Works</h2>
<div className="flex flex-col md:flex-row justify-between relative">
<div className="absolute top-8 left-0 w-full h-[1px] bg-border-subtle hidden md:block z-0"></div>
<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-16 h-16 bg-base border border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold mb-6">01</div>
<h4 className="text-white font-bold mb-2">Assessment</h4>
<p className="text-center text-[13px] text-content-secondary">Site mapping and risk evaluation.</p>
</div>
<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-16 h-16 bg-base border border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold mb-6">02</div>
<h4 className="text-white font-bold mb-2">Configuration</h4>
<p className="text-center text-[13px] text-content-secondary">Custom AI models tuned for your environment.</p>
</div>
<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-16 h-16 bg-base border border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold mb-6">03</div>
<h4 className="text-white font-bold mb-2">Integration</h4>
<p className="text-center text-[13px] text-content-secondary">Connecting to existing enterprise systems.</p>
</div>
<div className="relative z-10 flex flex-col items-center flex-1">
<div className="w-16 h-16 bg-base border border-brand-primary rounded-full flex items-center justify-center text-brand-primary font-bold mb-6">04</div>
<h4 className="text-white font-bold mb-2">Monitoring</h4>
<p className="text-center text-[13px] text-content-secondary">24/7 proactive intelligence active.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[800px] mx-auto px-8 bg-surface border border-border-subtle rounded-[16px] p-12 text-center">
<h2 className="font-display text-[34px] font-bold text-white mb-8">Talk to Our Enterprise Team</h2>
<form className="grid grid-cols-2 gap-6 text-left">
<input className="col-span-1 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Name" type="text"/>
<input className="col-span-1 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Company" type="text"/>
<input className="col-span-2 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Work Email" type="email"/>
<button className="col-span-2 bg-brand-primary text-white font-bold h-[48px] rounded mt-4" type="submit">Submit</button>
</form>
</section>
</main>
  );
}
