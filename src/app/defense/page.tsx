import { Activity, Flame, HeartPulse, Radio, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
<main className="pt-[72px]">

<section className="relative min-h-[80vh] flex items-center border-b border-border-subtle">
<img alt="Military Operations" className="absolute inset-0 w-full h-full object-cover opacity-60" src="/images/military-k9-tactical.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent"></div>
<div className="max-w-[1440px] w-full mx-auto px-8 relative z-10">
<span className="text-orange text-[12px] font-bold uppercase tracking-[0.1em] mb-4 block">DEFENSE & MILITARY</span>
<h1 className="font-display text-[56px] font-bold text-white leading-[1.05] max-w-[800px] mb-6 uppercase">Mission Readiness.<br/>Powered by AI.</h1>
<p className="text-[18px] text-content-secondary max-w-[600px] mb-10">Advanced thermal safety and biometric intelligence for military working dogs, field personnel, and mission-critical assets.</p>
<Link className="inline-flex items-center justify-center bg-orange hover:bg-orange/80 text-white font-bold h-[48px] px-8 rounded-[8px]" href="#">Contact Defense Team</Link>
</div>
</section>

<section className="py-[96px] max-w-[1440px] mx-auto px-8">
<h2 className="font-display text-[34px] font-bold text-white mb-12 border-l-4 border-orange pl-4 uppercase">DefenseNest K9 Highlights</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="bg-surface border border-border-subtle p-6 rounded-[8px]">
<Flame className="w-6 h-6 text-orange mb-4"></Flame>
<h4 className="font-bold text-[13px] uppercase text-white">Heat Stress</h4>
</div>
<div className="bg-surface border border-border-subtle p-6 rounded-[8px]">
<HeartPulse className="w-6 h-6 text-orange mb-4"></HeartPulse>
<h4 className="font-bold text-[13px] uppercase text-white">Vitals</h4>
</div>
<div className="bg-surface border border-border-subtle p-6 rounded-[8px]">
<Shield className="w-6 h-6 text-orange mb-4"></Shield>
<h4 className="font-bold text-[13px] uppercase text-white">Mil-Spec</h4>
</div>
<div className="bg-surface border border-border-subtle p-6 rounded-[8px]">
<Radio className="w-6 h-6 text-orange mb-4"></Radio>
<h4 className="font-bold text-[13px] uppercase text-white">Tactical Comms</h4>
</div>
<div className="bg-surface border border-border-subtle p-6 rounded-[8px]">
<Activity className="w-6 h-6 text-orange mb-4"></Activity>
<h4 className="font-bold text-[13px] uppercase text-white">Activity Tracking</h4>
</div>
</div>
</section>
<section className="bg-surface border-t border-border-subtle py-[96px]">
<div className="max-w-[800px] mx-auto px-8 text-center">
<h2 className="font-display text-[34px] font-bold text-white mb-8">Contact Our Defense Solutions Team</h2>
<form className="grid grid-cols-2 gap-4 text-left">
<input className="col-span-2 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Organization/Branch" type="text"/>
<input className="col-span-1 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Name" type="text"/>
<input className="col-span-1 bg-base border border-border-subtle p-3 rounded text-white text-[14px]" placeholder="Official Email" type="email"/>
<textarea className="col-span-2 bg-base border border-border-subtle p-3 rounded text-white text-[14px] h-[120px]" placeholder="Message / Requirements"></textarea>
<button className="col-span-2 bg-orange text-white font-bold h-[48px] rounded mt-2" type="submit">Submit Request</button>
</form>
</div>
</section>
</main>
  );
}
