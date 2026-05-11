import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import InsightsClient from './InsightsClient'

export const metadata: Metadata = {
  title: 'SafeNest Intelligence | Insights & Case Studies',
  description: 'Latest insights, case studies, platform updates, and AI safety research from SafeNest Technologies.',
  openGraph: {
    title: 'SafeNest Intelligence | Insights & Case Studies',
    description: 'AI safety research, case studies, and platform updates from SafeNest Technologies.',
    url: 'https://safenestsafety.com/insights',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export const revalidate = 60

export default async function InsightsPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, title, category, date, read_time, excerpt')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[1440px] mx-auto px-8 text-center mb-16">
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-white mb-6">SafeNest Intelligence</h1>
        <p className="text-[18px] text-content-secondary max-w-[600px] mx-auto">Latest insights, case studies, and updates on AI safety technology and proactive risk intelligence.</p>
      </section>

      <InsightsClient articles={articles ?? []} />
    </main>
  )
}
