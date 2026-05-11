"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, FileText, Image as ImageIcon } from 'lucide-react';
import PremiumInput from '@/components/PremiumInput';

export default function CreateArticlePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In the future, Claude will wire this to the backend API route.
    // For now, we simulate a successful submission.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[800px] mx-auto px-8">
        <div className="mb-8 flex items-center justify-end">
          <div className="inline-flex items-center space-x-2 bg-elevated border border-border-subtle rounded-[8px] px-3 py-1">
            <span className="text-[11px] font-semibold tracking-widest text-content-secondary uppercase">Admin Access Only</span>
          </div>
        </div>

        <h1 className="font-display text-[40px] font-bold leading-[1.05] text-white mb-2">Create New Article</h1>
        <p className="text-[16px] text-content-secondary mb-10">Publish insights, news, and case studies to the SafeNest platform.</p>

        {isSuccess ? (
          <div className="bg-surface border border-green-500/30 rounded-[16px] p-12 text-center animate-fade-in shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-display text-[24px] font-bold text-white mb-4">Article Created Successfully</h3>
            <p className="text-content-secondary mb-8">Your article has been saved and is now ready for publication review.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setIsSuccess(false)} className="btn-secondary">Create Another</button>
              <Link href="/insights" className="btn-primary">View on Live Site</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface border border-border-subtle rounded-[16px] p-8 shadow-xl space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-[18px] font-bold text-white flex items-center border-b border-border-subtle pb-4">
                <FileText className="w-5 h-5 mr-3 text-brand-primary" />
                Basic Details
              </h3>
              
              <PremiumInput 
                name="title" 
                label="Article Title *" 
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="absolute left-4 top-2 text-[11px] text-content-muted pointer-events-none z-10">
                    Category *
                  </label>
                  <select name="category" required defaultValue="" className="w-full bg-base border border-border-subtle rounded-[8px] h-[56px] pt-5 px-4 text-white text-[16px] focus:border-brand-primary outline-none transition-all appearance-none hover:border-brand-primary/50 relative">
                    <option value="" disabled>Select a category</option>
                    <option value="case-study">Case Study</option>
                    <option value="platform-update">Platform Update</option>
                    <option value="ai-safety">AI Safety</option>
                    <option value="news">News</option>
                  </select>
                </div>

                <PremiumInput 
                  name="author" 
                  label="Author Name *" 
                  required
                />
              </div>

              <PremiumInput 
                name="excerpt" 
                label="Short Excerpt (max 150 chars) *" 
                isTextArea
                required
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-[18px] font-bold text-white flex items-center border-b border-border-subtle pb-4 mt-8">
                <ImageIcon className="w-5 h-5 mr-3 text-brand-primary" />
                Media
              </h3>
              
              <PremiumInput 
                name="coverImage" 
                label="Cover Image URL (Optional)" 
              />
              <div className="relative">
                <label className="block text-[12px] text-content-secondary mb-2">
                  Or Upload Local Image
                </label>
                <input 
                  type="file" 
                  name="coverImageFile" 
                  accept="image/*"
                  className="w-full bg-base border border-border-subtle rounded-[8px] h-[56px] pt-3 px-4 text-white text-[14px] focus:border-brand-primary outline-none transition-all file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-[12px] file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-hover cursor-pointer"
                />
              </div>
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
                  name="content"
                  required
                  className="w-full bg-base border border-border-subtle rounded-[8px] min-h-[400px] p-4 text-white text-[16px] font-mono focus:border-brand-primary outline-none transition-all hover:border-brand-primary/50 resize-y"
                  placeholder="## Introduction&#10;&#10;Start writing your article here..."
                />
              </div>
            </div>

            <div className="pt-8 border-t border-border-subtle flex justify-end gap-4">
              <button type="button" className="btn-secondary">Save Draft</button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary flex items-center gap-2"
              >
                {isSubmitting ? 'Saving...' : 'Publish Article'} 
                {!isSubmitting && <Save className="w-4 h-4" />}
              </button>
            </div>

          </form>
        )}
      </section>
    </main>
  );
}
