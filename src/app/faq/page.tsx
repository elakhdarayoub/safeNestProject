'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FAQS = [
  {
    question: "Does SafeNest require a constant internet connection?",
    answer: "No. SafeNest uses Edge AI processing via on-device NPUs, meaning core risk detection and emergency protocol activation function completely offline. Cloud connectivity is only required for remote dashboard monitoring, system updates, and historical analytics."
  },
  {
    question: "Is facial recognition or audio recording used?",
    answer: "SafeNest prioritizes privacy. Our platform uses skeletal tracking and thermal heat mapping to identify risks without storing identifiable facial data. Audio is processed locally for acoustic anomaly detection (like glass breaking or distress calls) and is never streamed or stored in the cloud."
  },
  {
    question: "How do you integrate with existing enterprise systems?",
    answer: "SafeNest offers a robust set of RESTful APIs and webhooks that integrate seamlessly with major VMS, ERP, and emergency dispatch systems. We support standard protocols like ONVIF for camera integration and MQTT for IoT communication."
  },
  {
    question: "What is the battery life of remote sensors?",
    answer: "Our ultra-low-power remote sensors are designed for longevity, typically offering 2-3 years of battery life on a single charge. All devices report battery health in real-time, allowing for proactive maintenance before power issues occur."
  },
  {
    question: "How secure is the data transmitted to the cloud?",
    answer: "All data transmitted to the SafeNest cloud is encrypted using AES-256 at rest and TLS 1.3 in transit. We follow SOC 2 Type II compliance standards and offer end-to-end encryption for mission-critical deployments."
  }
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[800px] mx-auto px-8">
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-[18px] text-content-secondary mb-16 text-center">Everything you need to know about the SafeNest platform and hardware.</p>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-surface border rounded-[8px] overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'border-brand-primary ring-1 ring-brand-primary/20' : 'border-border-subtle hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h4 className={`font-bold text-[16px] transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-white'}`}>
                  {faq.question}
                </h4>
                <ChevronDown className={`text-content-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-primary' : ''}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[14px] text-content-secondary leading-relaxed border-t border-border-subtle pt-6 mx-6">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-content-secondary text-[14px]">
            Still have questions? <Link className="text-brand-primary font-medium hover:underline" href="/contact">Contact our support team.</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
