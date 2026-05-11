import type { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

const BASE = 'https://safenestsafety.com'

const staticPages: MetadataRoute.Sitemap = [
  { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/story`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/solutions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/safenest-car`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/defensenest-k9`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/platform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/applications`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/why-safenest`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/enterprise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/defense`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/technology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/features`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE}/demo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/insights`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, updated_at')
    .eq('published', true)

  const articlePages: MetadataRoute.Sitemap = (articles ?? []).map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: a.updated_at ? new Date(a.updated_at) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
