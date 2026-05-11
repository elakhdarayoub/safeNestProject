"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Eye, EyeOff, ArrowRight } from 'lucide-react';
import PremiumInput from '@/components/PremiumInput';

export default function AdminLoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      const data = await res.json();
      setError(data.error ?? 'Invalid password');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-base">
      <div className="w-full max-w-[420px]">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <img
              src="/images/safeNest_logo_processed.png"
              alt="SafeNest"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-surface border border-border-subtle rounded-[16px] p-8 shadow-2xl shadow-black/40">

          {/* Icon + heading */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-brand-primary/10 border border-brand-primary/20 rounded-full flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-brand-primary" />
            </div>
            <div className="inline-flex items-center bg-elevated border border-border-subtle rounded-[8px] px-3 py-1 mb-4">
              <span className="text-[11px] font-semibold tracking-widest text-content-secondary uppercase">Admin Access Only</span>
            </div>
            <h1 className="font-display text-[24px] font-bold text-white">Dashboard Login</h1>
            <p className="text-[14px] text-content-secondary mt-2 text-center">
              Enter your password to access the admin panel.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <PremiumInput
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-4 top-[28px] text-content-muted hover:text-content-secondary transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-[8px] px-4 py-3 text-[13px] text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 !h-[52px]"
            >
              {isSubmitting ? 'Verifying...' : 'Access Dashboard'}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>

        <p className="text-center text-[12px] text-content-muted mt-6">
          <Link href="/" className="hover:text-content-secondary transition-colors">
            ← Return to SafeNest
          </Link>
        </p>

      </div>
    </main>
  );
}
