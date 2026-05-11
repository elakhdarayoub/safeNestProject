import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Solutions | SafeNest Technologies',
  description: 'SafeNest enterprise safety intelligence — scalable AI monitoring for large facilities, multi-site deployments, compliance, and custom integrations.',
  openGraph: {
    title: 'Enterprise Solutions | SafeNest Technologies',
    description: 'Enterprise-grade AI safety intelligence for complex, multi-site environments.',
    url: 'https://safenestsafety.com/enterprise',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
