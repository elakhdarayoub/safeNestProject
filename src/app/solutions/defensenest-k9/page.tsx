import type { Metadata } from 'next';
import { Check, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DefenseNest K9 | Military Working Dog Safety',
  description: 'DefenseNest K9 — AI-powered thermal monitoring and health tracking for military working dogs. Because they can\'t tell us they\'re in danger.',
  openGraph: {
    title: 'DefenseNest K9 | Military Working Dog Safety',
    description: 'AI-powered protection for military working dogs. Real-time health and thermal monitoring in the field.',
    url: 'https://safenestsafety.com/solutions/defensenest-k9',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
<main className="pt-[72px]">

<section className="relative bg-surface py-[96px] border-b border-border-subtle">
<div className="max-w-[1440px] mx-auto px-8 text-center flex flex-col items-center">
<h1 className="text-display-xl flex items-center justify-center space-x-4 mb-6">
<span className="text-orange uppercase">DEFENSENEST™</span>
<span className="text-white uppercase">K9 PROTECTION SYSTEM</span>
</h1>
<p className="text-[14px] font-bold text-content-secondary uppercase tracking-[0.1em]">AI-POWERED THERMAL SAFETY & HEALTH MONITORING FOR MILITARY WORKING DOGS</p>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 py-[96px] grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-surface border border-border-subtle rounded-[10px] p-10">
<h3 className="text-orange text-[14px] font-bold uppercase tracking-[0.1em] mb-8">THE PROBLEM</h3>
<ul className="space-y-6">
<li className="flex items-start">
<X className="w-5 h-5 text-status-red mt-0.5 mr-4 flex-shrink-0"></X>
<div><span className="font-bold text-white block">No Real-Time Monitoring</span><span className="text-[14px] text-content-secondary">Handlers cannot track vitals during active deployment.</span></div>
</li>
<li className="flex items-start">
<X className="w-5 h-5 text-status-red mt-0.5 mr-4 flex-shrink-0"></X>
<div><span className="font-bold text-white block">Heat Exhaustion Risks</span><span className="text-[14px] text-content-secondary">Leading cause of non-combat K9 casualties.</span></div>
</li>
</ul>
</div>

<div className="bg-surface border border-border-subtle rounded-[10px] p-10">
<h3 className="text-status-green text-[14px] font-bold uppercase tracking-[0.1em] mb-8">HOW DEFENSENEST™ HELPS</h3>
<ul className="space-y-6">
<li className="flex items-start">
<Check className="w-5 h-5 text-status-green mt-0.5 mr-4 flex-shrink-0"></Check>
<div><span className="font-bold text-white block">Continuous Biometric Telemetry</span><span className="text-[14px] text-content-secondary">Edge-processed vitals sent directly to handler.</span></div>
</li>
<li className="flex items-start">
<Check className="w-5 h-5 text-status-green mt-0.5 mr-4 flex-shrink-0"></Check>
<div><span className="font-bold text-white block">Predictive Heat Stress Index</span><span className="text-[14px] text-content-secondary">AI alerts before critical temperature thresholds.</span></div>
</li>
</ul>
</div>
</section>

<section className="w-full relative h-[600px] bg-black">
<img alt="Military K9" className="absolute inset-0 w-full h-full object-cover opacity-70" src="/images/military-k9-tactical.png"/>

<div className="absolute inset-0 max-w-[1440px] mx-auto px-8 relative">
<div className="absolute top-[30%] left-[20%] bg-elevated/90 border border-orange p-3 rounded text-[12px] font-mono"><span className="text-orange">➔</span> AI Monitoring Module</div>
<div className="absolute top-[50%] right-[30%] bg-elevated/90 border border-orange p-3 rounded text-[12px] font-mono"><span className="text-orange">➔</span> PCM Thermal Liner</div>
</div>
</section>

<section className="bg-surface w-full py-[64px] border-y border-border-subtle text-center">
<h2 className="text-[24px] font-display font-bold text-white uppercase mb-2">DEFENSENEST™ – BECAUSE THEY CAN'T TELL US THEY'RE IN DANGER.</h2>
<p className="text-[16px] text-status-green uppercase font-semibold">SMARTER PROTECTION. SAFER MISSIONS. STRONGER TOGETHER.</p>
</section>
</main>
  );
}
