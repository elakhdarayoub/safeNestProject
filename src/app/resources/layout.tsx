import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | SafeNest Technologies',
  description: 'SafeNest resources — whitepapers, technical documentation, investor materials, and product guides.',
  openGraph: {
    title: 'Resources | SafeNest Technologies',
    description: 'Whitepapers, technical guides, and product documentation from SafeNest Technologies.',
    url: 'https://safenestsafety.com/resources',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
