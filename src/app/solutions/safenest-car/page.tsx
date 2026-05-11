import type { Metadata } from 'next';
import { Activity, AlertOctagon, ShieldCheck, Smartphone, Thermometer } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SafeNest Car | AI Infant Vehicle Safety',
  description: 'SafeNest Car — AI-powered infant safety monitoring for vehicles. Heatstroke prevention, inactivity detection, smart alerts, and family sharing built in.',
  openGraph: {
    title: 'SafeNest Car | AI Infant Vehicle Safety',
    description: 'Smarter Safety From The Start. AI-powered infant monitoring that prevents heatstroke and keeps families safe.',
    url: 'https://safenestsafety.com/solutions/safenest-car',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
<main>

<section className="relative min-h-[100vh] flex items-center pt-[72px]">
<img alt="Cinematic Baby Car Seat" className="absolute inset-0 w-full h-full object-cover opacity-50" src="/images/ai_vehicle_seat_baby.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent"></div>
<div className="max-w-[1440px] w-full mx-auto px-8 relative z-10 flex flex-col justify-center">
<h1 className="text-display-xl flex flex-col mb-6">
<span className="text-white uppercase">SMARTER SAFETY</span>
<span className="text-orange uppercase">FROM THE START.</span>
</h1>
<p className="text-[20px] text-white mb-2 max-w-[600px]">AI-Powered Environmental Intelligence for Every Ride.</p>
<p className="text-[16px] text-content-secondary mb-10 max-w-[600px]">SafeNest Car Seat Guardian detects life-threatening risks and alerts you in real time — so you can protect what matters most.</p>
<div className="flex space-x-4">
<Link className="btn-primary" href="#">Request a Demo</Link>
<Link className="btn-secondary" href="#">Learn How It Works</Link>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 py-[80px]">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="bg-surface/80 border border-border-subtle rounded-[8px] p-6">
<Thermometer className="w-8 h-8 text-status-red mb-4"></Thermometer>
<h4 className="text-[12px] font-bold uppercase text-white mb-2">HEATSTROKE PREVENTION</h4>
<p className="text-[13px] text-content-secondary">Instant thermal analysis.</p>
</div>
<div className="bg-surface/80 border border-border-subtle rounded-[8px] p-6">
<ShieldCheck className="w-8 h-8 text-brand-primary mb-4"></ShieldCheck>
<h4 className="text-[12px] font-bold uppercase text-white mb-2">PROPER FIT ALERTS</h4>
<p className="text-[13px] text-content-secondary">Harness tension monitoring.</p>
</div>
<div className="bg-surface/80 border border-border-subtle rounded-[8px] p-6">
<Activity className="w-8 h-8 text-orange mb-4"></Activity>
<h4 className="text-[12px] font-bold uppercase text-white mb-2">INACTIVITY DETECTION</h4>
<p className="text-[13px] text-content-secondary">Vital sign tracking.</p>
</div>
<div className="bg-surface/80 border border-border-subtle rounded-[8px] p-6">
<Smartphone className="w-8 h-8 text-status-teal mb-4"></Smartphone>
<h4 className="text-[12px] font-bold uppercase text-white mb-2">VEHICLE CONNECT</h4>
<p className="text-[13px] text-content-secondary">Seamless phone pairing.</p>
</div>
<div className="bg-surface/80 border border-border-subtle rounded-[8px] p-6">
<AlertOctagon className="w-8 h-8 text-status-green mb-4"></AlertOctagon>
<h4 className="text-[12px] font-bold uppercase text-white mb-2">CRASH DETECTION</h4>
<p className="text-[13px] text-content-secondary">Auto-emergency response.</p>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 py-[128px] border-t border-border-subtle flex flex-col items-end text-right">
<h2 className="text-display-xl flex flex-col mb-4">
<span className="text-white uppercase">PEACE OF MIND.</span>
<span className="text-orange uppercase">EVERY MILE.</span>
</h2>
<p className="text-[18px] text-content-secondary max-w-[400px]">Intelligence that rides with you. Because safety should be proactive, never reactive.</p>
</section>
</main>
  );
}
