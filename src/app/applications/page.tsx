import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Applications | SafeNest Technologies',
  description: 'SafeNest protects across 11 industries — child safety, workplace safety, smart cities, defense, healthcare, fleet, agriculture, and more.',
  openGraph: {
    title: 'Applications | SafeNest Technologies',
    description: 'Proactive AI safety intelligence deployed across 11 industries worldwide.',
    url: 'https://safenestsafety.com/applications',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[1440px] mx-auto px-8 text-center mb-24">
<span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-primary mb-4 block">APPLICATIONS</span>
<h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">One Platform. Limitless Protection.</h1>
<p className="text-[18px] text-content-secondary max-w-[700px] mx-auto">From children to critical infrastructure — SafeNest adapts to protect what matters in every environment.</p>
</section>
<section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="h-[450px] relative rounded-[12px] overflow-hidden group cursor-pointer border border-border-subtle">
<img alt="Child Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_vehicle_seat_baby.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="font-display text-[26px] font-semibold text-white mb-2">Child Safety</h3>
<p className="text-[14px] text-content-secondary mb-4 line-clamp-2">Protecting infants from heatstroke and incorrect harnessing in vehicles.</p>
<ul className="text-[13px] text-white space-y-1 mb-4">
<li>• Heatstroke Prevention</li>
<li>• Harness Fit Detection</li>
<li>• Inactivity Alerts</li>
</ul>
<span className="text-brand-primary text-[14px] font-medium group-hover:underline">Learn More →</span>
</div>
</div>

<div className="h-[450px] relative rounded-[12px] overflow-hidden group cursor-pointer border border-border-subtle">
<img alt="Pet Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_tech_dog.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="font-display text-[26px] font-semibold text-white mb-2">Pet Safety</h3>
<p className="text-[14px] text-content-secondary mb-4 line-clamp-2">Environmental monitoring for pets left in vehicles or confined spaces.</p>
<ul className="text-[13px] text-white space-y-1 mb-4">
<li>• Thermal Monitoring</li>
<li>• Stress Indicators</li>
<li>• Ventilation Assessment</li>
</ul>
<span className="text-brand-primary text-[14px] font-medium group-hover:underline">Learn More →</span>
</div>
</div>

<div className="h-[450px] relative rounded-[12px] overflow-hidden group cursor-pointer border border-border-subtle">
<img alt="Workplace Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_workplace_safety.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="font-display text-[26px] font-semibold text-white mb-2">Workplace Safety</h3>
<p className="text-[14px] text-content-secondary mb-4 line-clamp-2">Hazard detection and compliance monitoring for industrial environments.</p>
<ul className="text-[13px] text-white space-y-1 mb-4">
<li>• PPE Compliance</li>
<li>• Environmental Hazards</li>
<li>• Machine Safety Zones</li>
</ul>
<span className="text-brand-primary text-[14px] font-medium group-hover:underline">Learn More →</span>
</div>
</div>


</section>
<section className="max-w-[1440px] mx-auto px-8 mt-24 text-center">
<h2 className="font-display text-[34px] font-bold text-white mb-6">Every industry. One intelligence platform.</h2>
<p className="text-[16px] text-content-secondary max-w-[600px] mx-auto mb-8">Deploy SafeNest in your environment today to instantly upgrade your safety capabilities.</p>
<Link className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-hover text-white font-body text-[15px] font-semibold h-[48px] px-[28px] rounded-[8px] transition-colors" href="#">Contact Enterprise Team</Link>
</section>
</main>
  );
}
