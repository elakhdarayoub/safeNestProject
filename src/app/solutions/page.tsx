import { Activity, Bot, BrainCircuit, Flame, HeartPulse, Network, Radio, Server, Shield, ShieldCheck, Smartphone, Thermometer } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
<main className="pt-[72px]">

<section className="py-[128px] max-w-[1440px] mx-auto px-8 text-center flex flex-col items-center">
<span className="text-eyebrow mb-6">OUR SOLUTIONS</span>
<h1 className="text-display-xl text-content-primary mb-6 max-w-[800px]">Intelligent Protection. Built for Every Environment.</h1>
<p className="text-body-lg text-content-secondary max-w-[600px]">Three purpose-built solutions. One unified platform.</p>
</section>

<section className="max-w-[1440px] mx-auto px-8 space-y-12 pb-[128px]">

<div className="flex flex-col md:flex-row bg-surface border border-border-subtle rounded-[16px] overflow-hidden hover:border-border-accent hover:shadow-glow transition-all duration-300">
<div className="md:w-[45%] h-[400px] relative">
<img alt="SafeNest Car" className="absolute inset-0 w-full h-full object-cover opacity-80" src="/images/ai_vehicle_seat_baby.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface"></div>
</div>
<div className="md:w-[55%] p-12 flex flex-col justify-center">
<div className="inline-flex items-center bg-brand-primary/20 text-brand-primary text-[11px] font-bold px-3 py-1 rounded-full mb-6 w-max border border-brand-primary/30">CHILD SAFETY</div>
<h2 className="text-display-md mb-4">SafeNest Car</h2>
<p className="text-body-lg text-content-secondary mb-8">AI-powered infant monitoring system for vehicles. Prevents heatstroke, detects inactivity, and connects to your phone.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-center"><Thermometer className="w-5 h-5 text-status-red mr-3"></Thermometer><span className="text-[14px] font-medium">Heatstroke Prevention</span></div>
<div className="flex items-center"><ShieldCheck className="w-5 h-5 text-brand-primary mr-3"></ShieldCheck><span className="text-[14px] font-medium">Proper Fit Alerts</span></div>
<div className="flex items-center"><Activity className="w-5 h-5 text-orange mr-3"></Activity><span className="text-[14px] font-medium">Inactivity Detection</span></div>
<div className="flex items-center"><Smartphone className="w-5 h-5 text-brand-primary mr-3"></Smartphone><span className="text-[14px] font-medium">Vehicle Connect</span></div>
</div>
<Link className="btn-ghost" href="safenest-car.html">Explore SafeNest Car →</Link>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse bg-surface border border-border-subtle rounded-[16px] overflow-hidden hover:border-orange/30 hover:shadow-[0_0_18px_rgba(232,125,0,0.15)] transition-all duration-300">
<div className="md:w-[45%] h-[400px] relative">
<img alt="DefenseNest K9" className="absolute inset-0 w-full h-full object-cover opacity-80" src="/images/ai_tech_dog.png"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface"></div>
</div>
<div className="md:w-[55%] p-12 flex flex-col justify-center">
<div className="inline-flex items-center bg-orange/20 text-orange text-[11px] font-bold px-3 py-1 rounded-full mb-6 w-max border border-orange/30">MILITARY & DEFENSE</div>
<h2 className="text-display-md mb-4">DefenseNest K9</h2>
<p className="text-body-lg text-content-secondary mb-8">Smart thermal monitoring vest for military working dogs. Tracks body temperature, stress, and activity in real time.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-center"><Flame className="w-5 h-5 text-orange mr-3"></Flame><span className="text-[14px] font-medium">Heat Stress Index</span></div>
<div className="flex items-center"><HeartPulse className="w-5 h-5 text-status-green mr-3"></HeartPulse><span className="text-[14px] font-medium">Core Vital Tracking</span></div>
<div className="flex items-center"><Shield className="w-5 h-5 text-content-secondary mr-3"></Shield><span className="text-[14px] font-medium">Rugged Mil-Spec</span></div>
<div className="flex items-center"><Radio className="w-5 h-5 text-brand-primary mr-3"></Radio><span className="text-[14px] font-medium">Tactical Alerts</span></div>
</div>
<Link className="inline-flex items-center text-orange font-body text-[15px] font-medium hover:underline transition-all duration-150" href="defensenest-k9.html">Explore DefenseNest K9 →</Link>
</div>
</div>

<div className="flex flex-col md:flex-row bg-surface border border-border-subtle rounded-[16px] overflow-hidden hover:border-border-accent hover:shadow-glow transition-all duration-300">
<div className="md:w-[45%] h-[400px] relative">
<img alt="SafeNest Platform" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface"></div>
</div>
<div className="md:w-[55%] p-12 flex flex-col justify-center">
<div className="inline-flex items-center bg-brand-primary/20 text-brand-primary text-[11px] font-bold px-3 py-1 rounded-full mb-6 w-max border border-brand-primary/30">ENTERPRISE PLATFORM</div>
<h2 className="text-display-md mb-4">Smart Monitoring Platform</h2>
<p className="text-body-lg text-content-secondary mb-8">Cloud-native, AI-powered enterprise safety intelligence platform. Multi-environment, multi-factor, predictive protection.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-center"><BrainCircuit className="w-5 h-5 text-brand-primary mr-3"></BrainCircuit><span className="text-[14px] font-medium">AI Risk Modeling</span></div>
<div className="flex items-center"><Network className="w-5 h-5 text-brand-primary mr-3"></Network><span className="text-[14px] font-medium">Multi-Factor Fusion</span></div>
<div className="flex items-center"><Server className="w-5 h-5 text-content-secondary mr-3"></Server><span className="text-[14px] font-medium">Cloud-Native Scale</span></div>
<div className="flex items-center"><Bot className="w-5 h-5 text-brand-primary mr-3"></Bot><span className="text-[14px] font-medium">Automated Response</span></div>
</div>
<Link className="btn-ghost" href="platform.html">Explore Platform →</Link>
</div>
</div>
</section>

<section className="py-[96px] bg-subtle border-t border-border-subtle text-center px-8">
<h2 className="text-display-md text-content-primary mb-6">One Platform. Every Solution.</h2>
<p className="text-body-lg text-content-secondary max-w-[700px] mx-auto">
                Whether protecting a single infant in a car seat or an entire fleet of military working dogs, every SafeNest device is powered by the same underlying AI intelligence foundation.
            </p>
</section>
</main>
  );
}
