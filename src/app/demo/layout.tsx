import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo | SafeNest Technologies',
  description: 'See SafeNest in action. Schedule a personalized walkthrough of our AI safety intelligence platform with a specialist.',
  openGraph: {
    title: 'Request a Demo | SafeNest Technologies',
    description: 'Schedule a personalized demo and see how SafeNest\'s proactive AI safety platform can protect your organization.',
    url: 'https://safenestsafety.com/demo',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
