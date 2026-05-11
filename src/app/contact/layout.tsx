import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SafeNest Technologies',
  description: 'Get in touch with SafeNest Technologies — sales, technical support, press inquiries, and strategic partnerships.',
  openGraph: {
    title: 'Contact Us | SafeNest Technologies',
    description: 'Reach our team for sales, support, partnerships, and press inquiries.',
    url: 'https://safenestsafety.com/contact',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
