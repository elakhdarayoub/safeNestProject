import { Activity, Brain } from 'lucide-react';
import Link from 'next/link';
import PlatformGraphic from '@/components/PlatformGraphic';

export default function Page() {
  return (
<main className="pt-[72px]">

<section className="max-w-[1440px] mx-auto px-8 py-[128px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start">
<span className="text-eyebrow mb-6">THE SAFENEST PLATFORM</span>
<h1 className="text-display-xl text-content-primary mb-6">Intelligence at Scale.<br/>Protection Without Limits.</h1>
<p className="text-[18px] text-content-secondary mb-10 max-w-[600px]">Cloud-native architecture designed to process multi-factor environmental data in milliseconds.</p>
<div className="flex space-x-4">
<Link className="btn-primary" href="#">Request Platform Demo</Link>
</div>
</div>

<div className="h-[500px] w-full flex items-center justify-center bg-surface border border-border-subtle rounded-[16px] relative overflow-hidden">
<PlatformGraphic />
</div>
</section>

<section className="bg-surface py-[128px] border-y border-border-subtle">
<div className="max-w-[1440px] mx-auto px-8">
<div className="mb-16">
<h2 className="text-[34px] font-display font-bold text-white">Core Platform Capabilities</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-base border border-border-subtle p-6 rounded-[8px]">
<Activity className="w-6 h-6 text-brand-primary mb-4"></Activity>
<h4 className="font-bold text-[16px] text-white mb-2">Real-Time Monitoring</h4>
<p className="text-[13px] text-content-secondary">Sub-second data ingestion from any connected sensor or endpoint.</p>
</div>
<div className="bg-base border border-border-subtle p-6 rounded-[8px]">
<Brain className="w-6 h-6 text-brand-primary mb-4"></Brain>
<h4 className="font-bold text-[16px] text-white mb-2">AI Risk Modeling</h4>
<p className="text-[13px] text-content-secondary">Machine learning models that identify anomalous patterns dynamically.</p>
</div>

</div>
</div>
</section>
</main>
  );
}
