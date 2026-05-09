import { CheckCircle, User } from 'lucide-react';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h1 className="font-display text-[44px] font-bold leading-[1.05] text-white mb-6">See SafeNest in Action.</h1>
<p className="text-[18px] text-content-secondary mb-10">Discover how our proactive intelligence platform can transform safety outcomes for your organization.</p>
<ul className="space-y-6">
<li className="flex items-start">
<CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1"></CheckCircle>
<div>
<h4 className="font-bold text-white text-[16px]">Customized Platform Walkthrough</h4>
<p className="text-[14px] text-content-secondary">Tailored to your specific industry and use cases.</p>
</div>
</li>
<li className="flex items-start">
<CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1"></CheckCircle>
<div>
<h4 className="font-bold text-white text-[16px]">Hardware Demonstration</h4>
<p className="text-[14px] text-content-secondary">See how our multi-sensor edge devices operate in real-time.</p>
</div>
</li>
<li className="flex items-start">
<CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1"></CheckCircle>
<div>
<h4 className="font-bold text-white text-[16px]">Integration Consultation</h4>
<p className="text-[14px] text-content-secondary">Discuss how SafeNest connects with your existing infrastructure.</p>
</div>
</li>
</ul>
<div className="mt-12 p-6 bg-surface border border-border-subtle rounded-[12px]">
<div className="flex items-center space-x-4 mb-4">
<div className="w-12 h-12 bg-elevated rounded-full flex items-center justify-center">
<User className="text-content-secondary"></User>
</div>
<div>
<h5 className="text-white font-bold text-[14px]">"SafeNest didn't just upgrade our safety protocols; it completely redefined them. It's the difference between reviewing an incident and preventing one."</h5>
</div>
</div>
<p className="text-[12px] text-content-secondary ml-16">— Director of Safety, Fortune 500 Manufacturing</p>
</div>
</div>

<div className="bg-surface border border-border-subtle rounded-[16px] p-8 lg:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<h3 className="font-display text-[24px] font-bold text-white mb-6">Request Your Demo</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[12px] text-content-secondary mb-1">First Name *</label>
<input className="w-full bg-base border border-border-subtle rounded-[8px] h-[48px] px-4 text-white focus:border-brand-primary outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block text-[12px] text-content-secondary mb-1">Last Name *</label>
<input className="w-full bg-base border border-border-subtle rounded-[8px] h-[48px] px-4 text-white focus:border-brand-primary outline-none transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-[12px] text-content-secondary mb-1">Work Email *</label>
<input className="w-full bg-base border border-border-subtle rounded-[8px] h-[48px] px-4 text-white focus:border-brand-primary outline-none transition-colors" type="email"/>
</div>
<div>
<label className="block text-[12px] text-content-secondary mb-1">Company *</label>
<input className="w-full bg-base border border-border-subtle rounded-[8px] h-[48px] px-4 text-white focus:border-brand-primary outline-none transition-colors" type="text"/>
</div>
<div>
<label className="block text-[12px] text-content-secondary mb-1">Primary Interest *</label>
<select className="w-full bg-base border border-border-subtle rounded-[8px] h-[48px] px-4 text-white focus:border-brand-primary outline-none transition-colors appearance-none">
<option>Enterprise Platform</option>
<option>Defense & Military</option>
<option>Automotive / Fleet</option>
<option>Other</option>
</select>
</div>
<div className="pt-4">
<button className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold h-[48px] rounded-[8px] transition-colors" type="submit">Schedule Demo</button>
</div>
<p className="text-[11px] text-content-secondary text-center mt-4">By submitting this form, you agree to our Privacy Policy.</p>
</form>
</div>
</section>
</main>
  );
}
