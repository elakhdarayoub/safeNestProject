import { Cpu, Network } from 'lucide-react';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1440px] mx-auto px-8 text-center mb-24">
<span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-primary mb-4 block text-center">TECHNOLOGY</span>
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Engineering Safe Environments.</h1>
<p className="text-[18px] text-content-secondary max-w-[700px] mx-auto">Explore the hardware and software architecture powering the world's most advanced safety intelligence platform.</p>
</section>

<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

<div className="bg-surface border border-border-subtle p-10 rounded-[16px]">
<div className="flex items-center mb-6">
<Cpu className="w-8 h-8 text-brand-primary mr-4"></Cpu>
<h3 className="font-display text-[26px] font-bold text-white">Hardware Engineering</h3>
</div>
<ul className="space-y-4">
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Thermal Imaging Arrays</span>
<span className="text-[14px] text-content-secondary">High-resolution microbolometers capable of detecting 0.1°C temperature differentials.</span>
</li>
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Neural Processing Units (NPU)</span>
<span className="text-[14px] text-content-secondary">Custom silicon dedicated to accelerating machine learning inferencing at the edge.</span>
</li>
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Multi-Band Telemetry</span>
<span className="text-[14px] text-content-secondary">Redundant communication via BLE, Wi-Fi, LTE-M, and satellite fallback for remote deployment.</span>
</li>
</ul>
</div>

<div className="bg-surface border border-border-subtle p-10 rounded-[16px]">
<div className="flex items-center mb-6">
<Network className="w-8 h-8 text-brand-primary mr-4"></Network>
<h3 className="font-display text-[26px] font-bold text-white">AI & Software Architecture</h3>
</div>
<ul className="space-y-4">
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Computer Vision Models</span>
<span className="text-[14px] text-content-secondary">Proprietary pose-estimation and behavioral analysis trained on millions of contextual environments.</span>
</li>
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Sensor Fusion Engine</span>
<span className="text-[14px] text-content-secondary">Kalman filters and deep learning algorithms combining multiple disparate sensor inputs into a single truth state.</span>
</li>
<li className="flex flex-col">
<span className="font-mono text-[13px] text-brand-primary mb-1">Cloud Control Plane</span>
<span className="text-[14px] text-content-secondary">Distributed Kubernetes architecture processing millions of events per second with 99.999% uptime.</span>
</li>
</ul>
</div>
</section>
</main>
  );
}
