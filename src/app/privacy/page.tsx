import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SafeNest Technologies',
  description: 'SafeNest Technologies privacy policy — how we collect, use, and protect your data.',
};

export default function Page() {
  return (
<main className="pt-[140px] pb-[128px]">
<section className="max-w-[800px] mx-auto px-8">
<h1 className="font-display text-[44px] font-bold text-white mb-4">Privacy Policy</h1>
<p className="text-[14px] text-content-secondary mb-12">Last Updated: May 2026</p>
<div className="prose prose-invert max-w-none text-content-secondary space-y-6 text-[15px] leading-relaxed">
<p>At SafeNest Technologies, we build systems designed to protect lives. We recognize that true safety includes the security and privacy of the data we process. This Privacy Policy outlines our commitment to data minimization, edge processing, and your rights.</p>
<h3 className="text-white font-bold text-[20px] mt-8 mb-4">1. Data Minimization & Edge Processing</h3>
<p>SafeNest hardware is designed to process biometric and environmental data locally (on the edge). Video feeds and audio are not transmitted to the cloud unless specifically configured by an enterprise administrator for compliance logging, or an active emergency event is triggered.</p>
<h3 className="text-white font-bold text-[20px] mt-8 mb-4">2. Information We Collect</h3>
<p>We collect account information, hardware telemetry, anonymized risk-scoring metrics, and explicitly opted-in diagnostic logs. We do not sell your personal data. Period.</p>
<h3 className="text-white font-bold text-[20px] mt-8 mb-4">3. Data Security</h3>
<p>All data in transit and at rest is secured using AES-256 encryption. Our infrastructure complies with SOC2 Type II and ISO 27001 standards.</p>
<p className="mt-12 text-[13px]">For full details or data deletion requests, contact privacy@safenest.tech.</p>
</div>
</section>
</main>
  );
}
