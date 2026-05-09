import { Briefcase, Handshake, LifeBuoy, Newspaper } from 'lucide-react';

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1440px] mx-auto px-8 text-center mb-16">
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Contact Us</h1>
<p className="text-[18px] text-content-secondary max-w-[600px] mx-auto">Whether you're looking for enterprise solutions, partnership opportunities, or support, our team is here to help.</p>
</section>
<section className="max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
<Briefcase className="w-10 h-10 text-brand-primary mb-4"></Briefcase>
<h3 className="font-display text-[24px] font-bold text-white mb-2">Sales & Enterprise</h3>
<p className="text-[14px] text-content-secondary mb-6">Discuss platform deployment, licensing, and custom implementations.</p>
<span className="text-brand-primary font-semibold">sales@safenest.tech</span>
</div>

<div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
<LifeBuoy className="w-10 h-10 text-brand-primary mb-4"></LifeBuoy>
<h3 className="font-display text-[24px] font-bold text-white mb-2">Technical Support</h3>
<p className="text-[14px] text-content-secondary mb-6">Get help with your existing SafeNest hardware or software.</p>
<span className="text-brand-primary font-semibold">support@safenest.tech</span>
</div>

<div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
<Newspaper className="w-10 h-10 text-brand-primary mb-4"></Newspaper>
<h3 className="font-display text-[24px] font-bold text-white mb-2">Press & Media</h3>
<p className="text-[14px] text-content-secondary mb-6">Inquiries for interviews, press kits, and media relations.</p>
<span className="text-brand-primary font-semibold">press@safenest.tech</span>
</div>

<div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
<Handshake className="w-10 h-10 text-brand-primary mb-4"></Handshake>
<h3 className="font-display text-[24px] font-bold text-white mb-2">Partnerships</h3>
<p className="text-[14px] text-content-secondary mb-6">Integration partners, distributors, and strategic alliances.</p>
<span className="text-brand-primary font-semibold">partners@safenest.tech</span>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-8">
<div className="bg-elevated border border-border-subtle p-12 rounded-[16px] text-center">
<h3 className="font-display text-[24px] font-bold text-white mb-2">Global Headquarters</h3>
<p className="text-[16px] text-content-secondary mb-6">100 Innovation Drive, Suite 400<br/>San Francisco, CA 94107</p>
<p className="text-[14px] text-content-muted">Note: Security clearance required for on-site facility visits.</p>
</div>
</section>
</main>
  );
}
