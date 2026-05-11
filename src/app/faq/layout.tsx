import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | SafeNest Technologies',
  description: 'Frequently asked questions about SafeNest — how it works, deployment, integrations, pricing, and more.',
  openGraph: {
    title: 'FAQ | SafeNest Technologies',
    description: 'Answers to common questions about SafeNest\'s AI safety intelligence platform.',
    url: 'https://safenestsafety.com/faq',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
