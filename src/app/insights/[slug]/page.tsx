import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 60

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const { data } = await supabase
    .from('articles')
    .select('slug')
    .eq('published', true)
  return (data ?? []).map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const { data: article } = await supabase
    .from('articles')
    .select('title, excerpt')
    .eq('slug', slug)
    .single()
  if (!article) return { title: 'Article Not Found | SafeNest Intelligence' }
  return {
    title: `${article.title} | SafeNest Intelligence`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | SafeNest Intelligence`,
      description: article.excerpt,
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!article) notFound()

  const { data: related } = await supabase
    .from('articles')
    .select('slug, title, category')
    .eq('published', true)
    .neq('slug', slug)
    .limit(3)

  return (
    <main className="pt-[140px] pb-[128px]">
      <article className="max-w-[800px] mx-auto px-8">

        <div className="mb-8">
          <Link href="/insights" className="inline-flex items-center text-[13px] text-content-muted hover:text-white transition-colors">
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to Insights
          </Link>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">{article.category}</span>
            <span className="text-[13px] text-content-muted flex items-center gap-1"><Clock className="w-3 h-3" /> {article.read_time}</span>
            <span className="text-[13px] text-content-muted">· {article.date}</span>
          </div>
          <h1 className="text-display-md text-white mb-6">{article.title}</h1>
          <p className="text-[20px] text-content-secondary leading-relaxed mb-8">{article.excerpt}</p>

          <div className="flex items-center justify-between border-t border-b border-border-subtle py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-elevated border border-border-subtle flex items-center justify-center text-white font-bold">
                {article.author_initials}
              </div>
              <div>
                <div className="text-[14px] font-bold text-white">{article.author_name}</div>
                <div className="text-[12px] text-content-muted">{article.author_role}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-content-muted hover:text-white hover:border-brand-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-content-muted hover:text-white hover:border-brand-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-content-muted hover:text-white hover:border-brand-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        <figure className="mb-12 w-full h-[400px] bg-surface border border-border-subtle rounded-[16px] overflow-hidden flex items-center justify-center">
          <span className="text-content-muted">Article Hero Image Placeholder</span>
        </figure>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-primary hover:prose-a:text-brand-hover prose-p:text-content-secondary prose-p:leading-relaxed prose-li:text-content-secondary whitespace-pre-wrap font-sans">
          {article.content}
        </div>
      </article>

      {related && related.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-8 mt-24 border-t border-border-subtle pt-16">
          <h3 className="font-display text-[32px] font-bold text-white mb-8 text-center">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel, index) => (
              <Link key={rel.slug} href={`/insights/${rel.slug}`} className="group flex flex-col w-full bg-surface border border-border-subtle rounded-[12px] overflow-hidden hover:border-brand-primary/50 transition-colors">
                <div className="h-[160px] relative bg-base overflow-hidden">
                  <div className="w-full h-full bg-border-subtle flex items-center justify-center">
                    <span className="text-[12px] text-content-muted">Image {index + 1}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-semibold tracking-widest text-brand-primary uppercase">{rel.category}</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-white mb-2 group-hover:text-brand-primary transition-colors leading-tight">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
