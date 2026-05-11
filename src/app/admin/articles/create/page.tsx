"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Save, FileText, Image as ImageIcon, LogOut, Loader2 } from 'lucide-react';
import PremiumInput from '@/components/PremiumInput';
import { articleSchema, type ArticleFormData } from '@/lib/validations';

function LogoutButton() {
  return (
    <form action="/api/admin/logout" method="POST">
      <button
        type="submit"
        className="flex items-center gap-2 text-[13px] text-content-secondary hover:text-white transition-colors px-3 py-1.5 rounded-[8px] hover:bg-elevated border border-transparent hover:border-border-subtle"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </form>
  );
}

export default function CreateArticlePage() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ArticleFormData>({ resolver: zodResolver(articleSchema) });

  const onSubmit = async (data: ArticleFormData) => {
    setServerError('');
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.success) {
      router.push('/admin/dashboard');
    } else {
      setServerError(json.error ?? 'Failed to create article. Please try again.');
    }
  };

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[800px] mx-auto px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/admin/dashboard" className="text-[13px] text-content-secondary hover:text-white transition-colors">← Back to Dashboard</Link>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center space-x-2 bg-elevated border border-border-subtle rounded-[8px] px-3 py-1">
              <span className="text-[11px] font-semibold tracking-widest text-content-secondary uppercase">Admin Access Only</span>
            </div>
            <LogoutButton />
          </div>
        </div>

        <h1 className="font-display text-[40px] font-bold leading-[1.05] text-white mb-2">Create New Article</h1>
        <p className="text-[16px] text-content-secondary mb-10">Publish insights, news, and case studies to the SafeNest platform.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border-subtle rounded-[16px] p-8 shadow-xl space-y-8">

          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-white flex items-center border-b border-border-subtle pb-4">
              <FileText className="w-5 h-5 mr-3 text-brand-primary" />
              Basic Details
            </h3>

            <PremiumInput
              label="Article Title *"
              error={errors.title?.message}
              {...register('title')}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="absolute left-4 top-2 text-[11px] text-content-muted pointer-events-none z-10">
                  Category *
                </label>
                <select
                  {...register('category')}
                  defaultValue=""
                  className="w-full bg-base border border-border-subtle rounded-[8px] h-[56px] pt-5 px-4 text-white text-[16px] focus:border-brand-primary outline-none transition-all appearance-none hover:border-brand-primary/50"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Case Study">Case Study</option>
                  <option value="Platform Update">Platform Update</option>
                  <option value="AI Safety">AI Safety</option>
                  <option value="News">News</option>
                </select>
                {errors.category && (
                  <p className="text-[12px] text-red-400 mt-1">{errors.category.message}</p>
                )}
              </div>

              <PremiumInput
                label="Author Name *"
                error={errors.authorName?.message}
                {...register('authorName')}
              />
            </div>

            <PremiumInput
              label="Short Excerpt (max 150 chars) *"
              isTextArea
              error={errors.excerpt?.message}
              {...register('excerpt')}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-white flex items-center border-b border-border-subtle pb-4 mt-8">
              <ImageIcon className="w-5 h-5 mr-3 text-brand-primary" />
              Media
            </h3>

            <PremiumInput
              label="Cover Image URL (Optional)"
              error={errors.coverImage?.message}
              {...register('coverImage')}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-white flex items-center border-b border-border-subtle pb-4 mt-8">
              <FileText className="w-5 h-5 mr-3 text-brand-primary" />
              Content
            </h3>

            <div className="relative">
              <label className="block text-[12px] text-content-secondary mb-2">
                Article Body (Markdown Supported) *
              </label>
              <textarea
                {...register('content')}
                className="w-full bg-base border border-border-subtle rounded-[8px] min-h-[400px] p-4 text-white text-[16px] font-mono focus:border-brand-primary outline-none transition-all hover:border-brand-primary/50 resize-y"
                placeholder={"## Introduction\n\nStart writing your article here..."}
              />
              {errors.content && (
                <p className="text-[12px] text-red-400 mt-1">{errors.content.message}</p>
              )}
            </div>
          </div>

          {serverError && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-[8px] px-4 py-3 text-[13px] text-red-400">
              {serverError}
            </div>
          )}

          <div className="pt-8 border-t border-border-subtle flex justify-end gap-4">
            <Link href="/admin/dashboard" className="btn-secondary">Cancel</Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Publishing...</>
              ) : (
                <>Publish Article <Save className="w-4 h-4" /></>
              )}
            </button>
          </div>

        </form>
      </section>
    </main>
  );
}
