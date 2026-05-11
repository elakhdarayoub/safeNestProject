"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase, Handshake, LifeBuoy, Newspaper, CheckCircle, Loader2, Send } from 'lucide-react';
import PremiumInput from '@/components/PremiumInput';
import { contactSchema, type ContactFormData } from '@/lib/validations';

export default function Page() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setServerError('');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.success) {
      setIsSuccess(true);
    } else {
      setServerError(json.error ?? 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[1440px] mx-auto px-8 text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 rounded-[8px] px-3 py-1 mb-6">
          <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">Typical Response Time: 2-4 Hours</span>
        </div>
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">Contact Us</h1>
        <p className="text-[18px] text-content-secondary max-w-[600px] mx-auto">Let's build a safer future together. Whether you're looking for enterprise solutions, partnership opportunities, or technical support, our dedicated specialists are ready to help.</p>
      </section>

      <section className="max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
          <Briefcase className="w-10 h-10 text-brand-primary mb-4" />
          <h3 className="font-display text-[24px] font-bold text-white mb-2">Sales & Enterprise</h3>
          <p className="text-[14px] text-content-secondary mb-6">Discuss platform deployment, licensing, and custom implementations.</p>
          <span className="text-brand-primary font-semibold">sales@safenest.tech</span>
        </div>

        <div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
          <LifeBuoy className="w-10 h-10 text-brand-primary mb-4" />
          <h3 className="font-display text-[24px] font-bold text-white mb-2">Technical Support</h3>
          <p className="text-[14px] text-content-secondary mb-6">Get help with your existing SafeNest hardware or software.</p>
          <span className="text-brand-primary font-semibold">support@safenest.tech</span>
        </div>

        <div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
          <Newspaper className="w-10 h-10 text-brand-primary mb-4" />
          <h3 className="font-display text-[24px] font-bold text-white mb-2">Press & Media</h3>
          <p className="text-[14px] text-content-secondary mb-6">Inquiries for interviews, press kits, and media relations.</p>
          <span className="text-brand-primary font-semibold">press@safenest.tech</span>
        </div>

        <div className="bg-surface border border-border-subtle p-8 rounded-[12px] flex flex-col items-center text-center hover:border-brand-primary transition-colors cursor-pointer">
          <Handshake className="w-10 h-10 text-brand-primary mb-4" />
          <h3 className="font-display text-[24px] font-bold text-white mb-2">Partnerships</h3>
          <p className="text-[14px] text-content-secondary mb-6">Integration partners, distributors, and strategic alliances.</p>
          <span className="text-brand-primary font-semibold">partners@safenest.tech</span>
        </div>
      </section>

      {/* General Inquiry Form */}
      <section className="max-w-[800px] mx-auto px-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-[36px] font-bold text-white mb-3">Send a Message</h2>
          <p className="text-[16px] text-content-secondary">Not sure who to contact? Send us a general inquiry and we'll route it to the right team.</p>
        </div>

        <div className="bg-surface border border-border-subtle rounded-[16px] p-8 shadow-xl">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display text-[24px] font-bold text-white mb-3">Message Sent</h3>
              <p className="text-content-secondary mb-8 max-w-[360px]">Thank you for reaching out. Our team will respond within 2-4 hours.</p>
              <button onClick={() => { setIsSuccess(false); reset(); }} className="btn-secondary">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Honeypot */}
              <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PremiumInput
                  label="First Name *"
                  error={errors.firstName?.message}
                  {...register('firstName')}
                />
                <PremiumInput
                  label="Last Name *"
                  error={errors.lastName?.message}
                  {...register('lastName')}
                />
              </div>

              <PremiumInput
                type="email"
                label="Email Address *"
                error={errors.email?.message}
                {...register('email')}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PremiumInput
                  label="Phone"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
                <PremiumInput
                  label="Company"
                  error={errors.company?.message}
                  {...register('company')}
                />
              </div>

              <PremiumInput
                label="Message *"
                isTextArea
                error={errors.message?.message}
                {...register('message')}
              />

              {serverError && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-[8px] px-4 py-3 text-[13px] text-red-400">
                  {serverError}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full !h-[52px] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-content-secondary text-center">By submitting this form, you agree to our Privacy Policy.</p>
            </form>
          )}
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-8">
        <div className="bg-elevated border border-border-subtle p-12 rounded-[16px] text-center">
          <h3 className="font-display text-[24px] font-bold text-white mb-2">Global Headquarters</h3>
          <p className="text-[16px] text-content-secondary mb-6">100 Innovation Drive, Suite 400<br />San Francisco, CA 94107</p>
          <p className="text-[14px] text-content-muted">Note: Security clearance required for on-site facility visits.</p>
        </div>
      </section>
    </main>
  );
}
