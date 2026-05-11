import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found | SafeNest Technologies',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-[560px]">
        <div className="inline-flex items-center bg-brand-primary/10 border border-brand-primary/30 rounded-[8px] px-3 py-1 mb-8">
          <span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">Error 404</span>
        </div>

        <h1 className="font-display text-[120px] font-bold leading-none text-white/10 mb-0 select-none">
          404
        </h1>

        <h2 className="font-display text-[32px] font-bold text-white mb-4 -mt-4">
          Signal Lost
        </h2>

        <p className="text-[16px] text-content-secondary mb-10">
          The page you're looking for isn't in our system. It may have been moved, removed, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}
