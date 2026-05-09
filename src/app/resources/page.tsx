'use client';

import { FileText } from 'lucide-react';
import { useState } from 'react';

const RESOURCES = [
  {
    category: 'Case Study',
    title: 'Reducing Industrial Accidents by 40% with Predictive AI',
    description: 'How a leading manufacturing firm deployed SafeNest to preemptively identify safety hazards.',
    image: '/images/industrial-ai-monitoring.png',
    linkText: 'Read Case Study →'
  },
  {
    category: 'Whitepaper',
    title: 'The Evolution of Edge Inference in Mission-Critical Systems',
    description: 'Technical dive into how SafeNest\'s NPU architecture achieves sub-100ms response times offline.',
    image: '/images/ai-whitepaper-concept.png',
    linkText: 'Download PDF →'
  },
  {
    category: 'Engineering Blog',
    title: 'Developing the Thermal DefenseNest K9 Vest',
    description: 'Challenges and breakthroughs in building military-grade biometric sensors for working dogs.',
    image: '/images/military-k9-tactical.png',
    linkText: 'Read Article →'
  }
];

const TABS = ['All', 'Case Studies', 'Whitepapers', 'Engineering Blog'];

export default function Page() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredResources = RESOURCES.filter(resource => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Case Studies') return resource.category === 'Case Study';
    if (activeTab === 'Whitepapers') return resource.category === 'Whitepaper';
    if (activeTab === 'Engineering Blog') return resource.category === 'Engineering Blog';
    return true;
  });

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[1440px] mx-auto px-8 mb-16">
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Resources & Insights</h1>
        <p className="text-[18px] text-content-secondary max-w-[600px]">Research, case studies, and whitepapers on the future of proactive AI safety.</p>
      </section>

      <section className="max-w-[1440px] mx-auto px-8 mb-12 flex space-x-4">
        {TABS.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all ${
              activeTab === tab 
                ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(0,94,255,0.3)]' 
                : 'bg-surface border border-border-subtle hover:border-white text-content-secondary hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </section>

      <section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource, i) => (
          <div key={i} className="bg-surface border border-border-subtle rounded-[12px] overflow-hidden group cursor-pointer hover:border-brand-primary transition-colors">
            <div className="h-[240px] bg-elevated relative overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src={resource.image} alt={resource.title} />
              {resource.category === 'Whitepaper' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <FileText className="w-16 h-16 text-white opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              )}
            </div>
            <div className="p-8">
              <span className="text-[12px] font-bold uppercase text-brand-primary mb-2 block">{resource.category}</span>
              <h3 className="font-display text-[22px] font-bold text-white mb-4">{resource.title}</h3>
              <p className="text-[14px] text-content-secondary mb-6">{resource.description}</p>
              <span className="text-content-muted text-[13px] group-hover:text-brand-primary transition-colors">{resource.linkText}</span>
            </div>
          </div>
        ))}
        {filteredResources.length === 0 && (
          <div className="col-span-full py-20 text-center text-content-secondary border border-dashed border-border-subtle rounded-[12px]">
            No resources found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
