import { Activity, Cpu, Eye, Lock, Network, Plug, ShieldAlert, Thermometer, WifiOff } from 'lucide-react';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1440px] mx-auto px-8 text-center mb-24">
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Comprehensive Protection.</h1>
<p className="text-[18px] text-content-secondary max-w-[700px] mx-auto">Explore the exhaustive feature set of the SafeNest Intelligence Platform.</p>
</section>
<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="mb-12">
<h3 className="font-display text-[24px] font-bold text-white mb-6 border-b border-border-subtle pb-4">Detection & Monitoring</h3>
<ul className="space-y-6">
<li className="flex items-start">
<Thermometer className="w-5 h-5 text-brand-primary mr-3 mt-1"></Thermometer>
<div><h4 className="text-white font-bold mb-1">Thermal Imaging</h4><p className="text-[13px] text-content-secondary">0.1°C accuracy temperature mapping.</p></div>
</li>
<li className="flex items-start">
<Eye className="w-5 h-5 text-brand-primary mr-3 mt-1"></Eye>
<div><h4 className="text-white font-bold mb-1">Computer Vision</h4><p className="text-[13px] text-content-secondary">Pose estimation and object recognition.</p></div>
</li>
<li className="flex items-start">
<Activity className="w-5 h-5 text-brand-primary mr-3 mt-1"></Activity>
<div><h4 className="text-white font-bold mb-1">Biometric Proxies</h4><p className="text-[13px] text-content-secondary">Heart rate and respiration estimation.</p></div>
</li>
</ul>
</div>

<div className="mb-12">
<h3 className="font-display text-[24px] font-bold text-white mb-6 border-b border-border-subtle pb-4">AI & Processing</h3>
<ul className="space-y-6">
<li className="flex items-start">
<Cpu className="w-5 h-5 text-brand-primary mr-3 mt-1"></Cpu>
<div><h4 className="text-white font-bold mb-1">Edge Inferencing</h4><p className="text-[13px] text-content-secondary">Local ML processing without cloud dependency.</p></div>
</li>
<li className="flex items-start">
<Network className="w-5 h-5 text-brand-primary mr-3 mt-1"></Network>
<div><h4 className="text-white font-bold mb-1">Sensor Fusion</h4><p className="text-[13px] text-content-secondary">Cross-referencing multiple data inputs.</p></div>
</li>
<li className="flex items-start">
<ShieldAlert className="w-5 h-5 text-brand-primary mr-3 mt-1"></ShieldAlert>
<div><h4 className="text-white font-bold mb-1">Predictive Risk Scoring</h4><p className="text-[13px] text-content-secondary">Dynamic calculation of hazard probability.</p></div>
</li>
</ul>
</div>

<div className="mb-12">
<h3 className="font-display text-[24px] font-bold text-white mb-6 border-b border-border-subtle pb-4">System & Platform</h3>
<ul className="space-y-6">
<li className="flex items-start">
<Lock className="w-5 h-5 text-brand-primary mr-3 mt-1"></Lock>
<div><h4 className="text-white font-bold mb-1">E2E Encryption</h4><p className="text-[13px] text-content-secondary">AES-256 bit encryption in transit and at rest.</p></div>
</li>
<li className="flex items-start">
<WifiOff className="w-5 h-5 text-brand-primary mr-3 mt-1"></WifiOff>
<div><h4 className="text-white font-bold mb-1">Offline Mode</h4><p className="text-[13px] text-content-secondary">Maintains core protection without connectivity.</p></div>
</li>
<li className="flex items-start">
<Plug className="w-5 h-5 text-brand-primary mr-3 mt-1"></Plug>
<div><h4 className="text-white font-bold mb-1">API Integrations</h4><p className="text-[13px] text-content-secondary">REST APIs and Webhooks for enterprise systems.</p></div>
</li>
</ul>
</div>
</section>
</main>
  );
}
