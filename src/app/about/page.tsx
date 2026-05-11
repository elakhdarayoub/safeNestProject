import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SafeNest Technologies | Our Mission & Vision',
  description: 'Learn about SafeNest Technologies — our mission to build intelligent safety technology that proactively protects people, animals, infrastructure, and environments.',
  openGraph: {
    title: 'About SafeNest Technologies',
    description: 'Building intelligent safety technology that proactively protects every environment.',
    url: 'https://safenestsafety.com/about',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};


export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">

<section className="max-w-[1440px] mx-auto px-8 mb-24 text-center">
<span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-primary mb-4 block">ABOUT SAFENEST</span>
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Pioneering Proactive Safety.</h1>
<p className="text-[18px] text-content-secondary max-w-[700px] mx-auto">We are engineers, data scientists, and safety advocates on a mission to eliminate preventable environmental risks through AI.</p>
</section>

<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
<div className="bg-surface border border-border-subtle p-12 rounded-[16px]">
<h3 className="font-display text-[26px] font-bold text-white mb-4">Our Mission</h3>
<p className="text-[16px] text-content-secondary">To build the world's most intelligent environmental monitoring platform, ensuring that no life is ever lost to a preventable contextual hazard.</p>
</div>
<div className="bg-surface border border-border-subtle p-12 rounded-[16px]">
<h3 className="font-display text-[26px] font-bold text-white mb-4">Our Vision</h3>
<p className="text-[16px] text-content-secondary">A future where every vehicle, facility, and mission-critical environment possesses the intelligence to autonomously protect the people within it.</p>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-8 mb-32">
<h2 className="font-display text-[34px] font-bold text-white mb-12 text-center">Our Core Values</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface border border-border-subtle p-10 rounded-[12px]">
<div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 border border-brand-primary/40">
<span className="text-brand-primary font-bold">01</span>
</div>
<h4 className="font-bold text-white text-[20px] mb-3">Relentless Innovation</h4>
<p className="text-[15px] text-content-secondary">We constantly push the boundaries of AI and edge computing to stay ahead of environmental threats before they emerge.</p>
</div>

<div className="bg-surface border border-border-subtle p-10 rounded-[12px]">
<div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 border border-brand-primary/40">
<span className="text-brand-primary font-bold">02</span>
</div>
<h4 className="font-bold text-white text-[20px] mb-3">Uncompromising Security</h4>
<p className="text-[15px] text-content-secondary">Data integrity and privacy are fundamental. Our edge-first architecture ensures military-grade protection for all user information.</p>
</div>

<div className="bg-surface border border-border-subtle p-10 rounded-[12px]">
<div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 border border-brand-primary/40">
<span className="text-brand-primary font-bold">03</span>
</div>
<h4 className="font-bold text-white text-[20px] mb-3">Human-Centric Design</h4>
<p className="text-[15px] text-content-secondary">Complex technology must be accessible. We design intuitive, frictionless experiences that empower users without overwhelming them.</p>
</div>

</div>
</section>

<section className="max-w-[800px] mx-auto px-8 text-center bg-surface border border-border-subtle p-16 rounded-[16px]">
<h2 className="font-display text-[34px] font-bold text-white mb-4">Join Our Mission</h2>
<p className="text-[16px] text-content-secondary mb-8">We're always looking for brilliant minds who want to build technology that saves lives.</p>
<Link className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-hover text-white font-bold h-[48px] px-8 rounded-[8px]" href="#">View Open Positions</Link>
</section>
</main>
  );
}
