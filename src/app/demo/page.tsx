"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, User, Loader2, ShieldCheck } from 'lucide-react';
import PremiumInput from '@/components/PremiumInput';
import { demoSchema, type DemoFormData } from '@/lib/validations';

export default function Page() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormData>({ resolver: zodResolver(demoSchema) });

  const onSubmit = async (data: DemoFormData) => {
    setServerError('');
    const res = await fetch('/api/demo', {
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
      <section className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 rounded-[8px] px-3 py-1 mb-6">
            <ShieldCheck className="w-[14px] h-[14px] text-brand-primary" />
            <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">Guaranteed 24h Response</span>
          </div>
          <h1 className="font-display text-[44px] font-bold leading-[1.05] text-white mb-6">See SafeNest in Action.</h1>
          <p className="text-[18px] text-content-secondary mb-10">Let's build a safer future together. Discover how our proactive intelligence platform can transform safety outcomes for your organization.</p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-white text-[16px]">Customized Platform Walkthrough</h4>
                <p className="text-[14px] text-content-secondary">Tailored to your specific industry and use cases.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-white text-[16px]">Hardware Demonstration</h4>
                <p className="text-[14px] text-content-secondary">See how our multi-sensor edge devices operate in real-time.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-brand-primary mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-white text-[16px]">Integration Consultation</h4>
                <p className="text-[14px] text-content-secondary">Discuss how SafeNest connects with your existing infrastructure.</p>
              </div>
            </li>
          </ul>

          <div className="mt-12 p-6 bg-surface border border-border-subtle rounded-[12px]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-elevated rounded-full flex items-center justify-center">
                <User className="text-content-secondary" />
              </div>
              <div>
                <h5 className="text-white font-bold text-[14px]">"SafeNest didn't just upgrade our safety protocols; it completely redefined them. It's the difference between reviewing an incident and preventing one."</h5>
              </div>
            </div>
            <p className="text-[12px] text-content-secondary ml-16">— Director of Safety, Fortune 500 Manufacturing</p>
          </div>
        </div>

        <div className="bg-surface border border-border-subtle rounded-[16px] p-6 sm:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] h-fit relative overflow-hidden">
          {isSuccess ? (
            <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center p-8 text-center animate-fade-in z-10">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-display text-[28px] font-bold text-white mb-4">Request Received</h3>
              <p className="text-content-secondary mb-8 max-w-[300px]">Thank you. A SafeNest specialist will be in touch within 24 hours to schedule your demo.</p>
              <button onClick={() => { setIsSuccess(false); reset(); }} className="btn-secondary">Submit Another Request</button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-[24px] font-bold text-white mb-6">Request Your Demo</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot — hidden from real users */}
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
                  label="Work Email *"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <PremiumInput
                  label="Company *"
                  error={errors.company?.message}
                  {...register('company')}
                />

                <PremiumInput
                  label="Phone"
                  error={errors.phone?.message}
                  {...register('phone')}
                />

                <PremiumInput
                  label="Message"
                  isTextArea
                  error={errors.message?.message}
                  {...register('message')}
                />

                <div className="relative">
                  <label className="absolute left-4 top-2 text-[11px] text-content-muted pointer-events-none z-10">
                    Primary Interest *
                  </label>
                  <select
                    {...register('interest')}
                    className="w-full bg-base border border-border-subtle rounded-[8px] h-[56px] pt-5 px-4 text-white text-[16px] focus:border-brand-primary outline-none transition-all appearance-none hover:border-brand-primary/50"
                  >
                    <option value="smart-platform">Enterprise Platform</option>
                    <option value="defensenest-k9">Defense & Military</option>
                    <option value="safenest-car">SafeNest Car Safety</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="text-[12px] text-red-400 mt-1">{errors.interest.message}</p>
                  )}
                </div>

                {serverError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-[8px] px-4 py-3 text-[13px] text-red-400">
                    {serverError}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold h-[56px] rounded-[8px] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <span className="group-hover:scale-105 transition-transform">Schedule Demo</span>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-content-secondary text-center mt-4">By submitting this form, you agree to our Privacy Policy.</p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
