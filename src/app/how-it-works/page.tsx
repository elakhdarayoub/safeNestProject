import type { Metadata } from 'next';
import { BrainCircuit, Cpu, Radio, Siren } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | SafeNest Technologies',
  description: 'Learn how SafeNest\'s three-step intelligence loop — Detect, Analyze, Respond — prevents incidents before they occur using multi-sensor AI fusion.',
  openGraph: {
    title: 'How It Works | SafeNest Technologies',
    description: 'Detect. Analyze. Respond. The SafeNest intelligence loop explained.',
    url: 'https://safenestsafety.com/how-it-works',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1440px] mx-auto px-8 text-center mb-24">
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">How SafeNest Works.</h1>
<p className="text-[18px] text-content-secondary max-w-[700px] mx-auto">From raw data acquisition to automated emergency response in under 500 milliseconds.</p>
</section>

<section className="max-w-[1000px] mx-auto px-8 space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="w-16 h-16 bg-surface border border-brand-primary rounded-xl flex items-center justify-center text-brand-primary text-xl font-bold mb-6">01</div>
<h3 className="font-display text-[26px] font-bold text-white mb-4">Multi-Sensor Ingestion</h3>
<p className="text-[16px] text-content-secondary">Hardware endpoints continuously collect thermal, acoustic, visual, and environmental data. This creates a high-fidelity contextual map of the monitored area.</p>
</div>
<div className="md:w-1/2 w-full aspect-video bg-surface border border-border-subtle rounded-[16px] flex items-center justify-center">
<Radio className="w-12 h-12 text-brand-primary opacity-50"></Radio>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="md:w-1/2">
<div className="w-16 h-16 bg-surface border border-brand-primary rounded-xl flex items-center justify-center text-brand-primary text-xl font-bold mb-6">02</div>
<h3 className="font-display text-[26px] font-bold text-white mb-4">Edge AI Processing</h3>
<p className="text-[16px] text-content-secondary">Data is processed locally on the device using proprietary Neural Processing Units (NPUs). This ensures privacy, eliminates cloud latency, and works entirely offline.</p>
</div>
<div className="md:w-1/2 w-full aspect-video bg-surface border border-border-subtle rounded-[16px] flex items-center justify-center">
<Cpu className="w-12 h-12 text-brand-primary opacity-50"></Cpu>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="w-16 h-16 bg-surface border border-brand-primary rounded-xl flex items-center justify-center text-brand-primary text-xl font-bold mb-6">03</div>
<h3 className="font-display text-[26px] font-bold text-white mb-4">Risk Prediction</h3>
<p className="text-[16px] text-content-secondary">Our machine learning models analyze the fused data stream against millions of known hazard profiles, calculating risk trajectories dynamically.</p>
</div>
<div className="md:w-1/2 w-full aspect-video bg-surface border border-border-subtle rounded-[16px] flex items-center justify-center">
<BrainCircuit className="w-12 h-12 text-brand-primary opacity-50"></BrainCircuit>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="md:w-1/2">
<div className="w-16 h-16 bg-surface border border-brand-primary rounded-xl flex items-center justify-center text-brand-primary text-xl font-bold mb-6">04</div>
<h3 className="font-display text-[26px] font-bold text-white mb-4">Automated Action</h3>
<p className="text-[16px] text-content-secondary">When critical thresholds are breached, the system executes predefined protocols: alerting handlers, activating local sirens, or integrating with emergency services API.</p>
</div>
<div className="md:w-1/2 w-full aspect-video bg-surface border border-border-subtle rounded-[16px] flex items-center justify-center">
<Siren className="w-12 h-12 text-brand-primary opacity-50"></Siren>
</div>
</div>
</section>
</main>
  );
}
