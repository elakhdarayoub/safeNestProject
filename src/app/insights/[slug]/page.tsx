import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { articles, getArticleBySlug } from '@/data/articles';

// For static export or performance
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Find some related articles (just others in the list)
  const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="pt-[140px] pb-[128px]">
      <article className="max-w-[800px] mx-auto px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/insights" className="inline-flex items-center text-[13px] text-content-muted hover:text-white transition-colors">
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">{article.category}</span>
            <span className="text-[13px] text-content-muted flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
            <span className="text-[13px] text-content-muted">· {article.date}</span>
          </div>
          <h1 className="text-display-md text-white mb-6">{article.title}</h1>
          <p className="text-[20px] text-content-secondary leading-relaxed mb-8">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between border-t border-b border-border-subtle py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-elevated border border-border-subtle flex items-center justify-center text-white font-bold">
                {article.author.initials}
              </div>
              <div>
                <div className="text-[14px] font-bold text-white">{article.author.name}</div>
                <div className="text-[12px] text-content-muted">{article.author.role}</div>
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

        {/* Hero Image */}
        <figure className="mb-12 w-full h-[400px] bg-surface border border-border-subtle rounded-[16px] overflow-hidden flex items-center justify-center">
          <span className="text-content-muted">Article Hero Image Placeholder</span>
        </figure>

        {/* Body Content (Prose) - For a real app, use a markdown parser like marked or react-markdown */}
        {/* Here we're using a simple dangerouslySetInnerHTML just for the dummy content since it's hardcoded and safe, but ideally you'd parse it */}
        {/* Because our dummy content is partially html/markdown, we will just render it directly for this demo if needed, but the original was hardcoded. */}
        {/* To make it work with markdown properly, let's just dump the text and pre-format it if needed, or use dangerouslySetInnerHTML. Our dummy content actually has Markdown formatting. So we can use a basic trick or just plain text if we don't have a markdown parser installed. */}
        {/* Let's just render the raw markdown in a whitespace-pre-wrap div for simplicity, or hardcode the html structure based on the string. */}
        {/* Since I cannot install new packages freely, I will just render it as white-space: pre-wrap text for this template. */}
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-primary hover:prose-a:text-brand-hover prose-p:text-content-secondary prose-p:leading-relaxed prose-li:text-content-secondary whitespace-pre-wrap font-sans">
          {article.content}
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-8 mt-24 border-t border-border-subtle pt-16">
          <h3 className="font-display text-[32px] font-bold text-white mb-8 text-center">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel, index) => (
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
