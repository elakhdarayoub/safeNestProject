import { Bell, Brain, Check, Minus, Network, Shield, X } from 'lucide-react';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">

<section className="max-w-[1440px] mx-auto px-8 mb-16 flex justify-between items-end">
<div>
<h1 className="text-display-xl text-white mb-4 uppercase">WHY <span className="text-orange">SAFENEST</span> IS DIFFERENT</h1>
<p className="text-[18px] text-content-secondary max-w-[600px]">Not just more data. Smarter intelligence. Faster action. Better outcomes.</p>
</div>
<div className="text-right">
<p className="text-[18px] text-white">Most solutions monitor. <span className="text-orange font-bold">SafeNest</span> predicts, prioritizes, and protects.</p>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row gap-6 mb-16">

<div className="lg:w-[28%] bg-surface border border-border-subtle rounded-[12px] p-8">
<div className="mb-8">
<span className="text-orange font-bold text-[14px] uppercase mb-2 block">SAFENEST</span>
<h3 className="text-[12px] text-brand-primary font-bold uppercase tracking-wider mb-4">AI-POWERED ENVIRONMENTAL INTELLIGENCE</h3>
<p className="text-[13px] text-content-secondary">A unified platform combining multi-sensor hardware with predictive AI to anticipate risks.</p>
</div>
<div className="space-y-6">
<div className="flex items-start">
<Brain className="w-5 h-5 text-orange mr-4 mt-0.5"></Brain>
<div><span className="text-brand-primary font-bold text-[13px] uppercase block">PREDICTIVE INTELLIGENCE</span></div>
</div>
<div className="flex items-start">
<Network className="w-5 h-5 text-brand-primary mr-4 mt-0.5"></Network>
<div><span className="text-brand-primary font-bold text-[13px] uppercase block">MULTI-FACTOR DATA FUSION</span></div>
</div>
<div className="flex items-start">
<Bell className="w-5 h-5 text-status-green mr-4 mt-0.5"></Bell>
<div><span className="text-brand-primary font-bold text-[13px] uppercase block">SMART PRIORITIZATION</span></div>
</div>
</div>
</div>

<div className="lg:w-[72%] border border-border-subtle rounded-[12px] overflow-hidden bg-base flex">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border-subtle text-[11px] font-bold uppercase tracking-wider">
<th className="p-6 bg-elevated border-l-2 border-brand-primary text-white w-1/5">SAFENEST</th>
<th className="p-6 text-content-secondary w-1/5">TRADITIONAL SENSORS</th>
<th className="p-6 text-content-secondary w-1/5">CAMERA SOLUTIONS</th>
<th className="p-6 text-content-secondary w-1/5">WEARABLE-ONLY</th>
<th className="p-6 text-content-secondary w-1/5">SILOED SOFTWARE</th>
</tr>
</thead>
<tbody className="text-[14px]">
<tr className="border-b border-border-subtle/50 hover:bg-white/5 transition-colors">
<td className="p-6 bg-elevated border-l-2 border-brand-primary border-r border-r-border-subtle"><div className="flex items-center text-white"><Check className="w-4 h-4 text-status-green mr-2"></Check><span className="font-bold text-status-green mr-1">Yes.</span> Predicts risk before incident.</div></td>
<td className="p-6 text-content-secondary"><div className="flex items-center"><X className="w-4 h-4 text-status-red mr-2"></X><span className="font-bold text-status-red mr-1">No.</span> Reactive only.</div></td>
<td className="p-6 text-content-secondary"><div className="flex items-center"><Minus className="w-4 h-4 text-status-yellow mr-2"></Minus><span className="font-bold text-status-yellow mr-1">Limited.</span> Requires human monitoring.</div></td>
<td className="p-6 text-content-secondary"><div className="flex items-center"><X className="w-4 h-4 text-status-red mr-2"></X><span className="font-bold text-status-red mr-1">No.</span> Environment blind.</div></td>
<td className="p-6 text-content-secondary"><div className="flex items-center"><X className="w-4 h-4 text-status-red mr-2"></X><span className="font-bold text-status-red mr-1">No.</span> Too slow for real-time.</div></td>
</tr>

</tbody>
</table>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8">
<div className="flex w-full rounded-[8px] overflow-hidden h-[80px]">
<div className="flex-1 bg-surface border-r border-base flex items-center justify-center p-4">
<Shield className="w-6 h-6 text-brand-primary"></Shield>
</div>
<div className="flex-1 bg-brand-primary flex flex-col items-center justify-center p-4 text-white">
<span className="font-bold text-[13px] uppercase">DETECT EARLIER</span>
</div>
<div className="flex-1 bg-status-green flex flex-col items-center justify-center p-4 text-white">
<span className="font-bold text-[13px] uppercase">RESPOND FASTER</span>
</div>
<div className="flex-1 bg-status-teal flex flex-col items-center justify-center p-4 text-white">
<span className="font-bold text-[13px] uppercase">REDUCE RISK</span>
</div>
<div className="flex-1 bg-orange flex flex-col items-center justify-center p-4 text-white">
<span className="font-bold text-[13px] uppercase">IMPROVE OUTCOMES</span>
</div>
<div className="flex-1 bg-status-yellow flex flex-col items-center justify-center p-4 text-white">
<span className="font-bold text-[13px] uppercase">LOWER COSTS</span>
</div>
</div>
<div className="text-center mt-16">
<p className="text-[20px] text-white">SafeNest doesn't just monitor environments. It protects people, assets, and operations. <span className="text-orange font-bold">That's the difference.</span></p>
</div>
</section>
</main>
  );
}
