import Link from "next/link";
import { Linkedin, Globe, Instagram, Mail } from "lucide-react";

export default function GlobalFooter() {
  return (
    <footer className="bg-base border-t border-border-subtle pt-12 md:pt-[64px] pb-8 md:pb-[32px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-12 md:mb-[64px]">
        {/* Column 1 - Brand */}
        <div className="col-span-1 lg:col-span-1">
          <div className="flex flex-col space-y-4">
            <img src="/images/safeNest_logo_processed.png" alt="SafeNest Logo" className="h-12 w-auto object-contain mb-2" />
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-content-secondary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-content-secondary hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-content-secondary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-content-secondary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 - Platform */}
        <div className="col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Platform</h4>
          <ul className="space-y-3">
            <li><Link href="/solutions/platform" className="text-[14px] text-content-secondary hover:text-white transition-colors">Overview</Link></li>
            <li><Link href="/technology" className="text-[14px] text-content-secondary hover:text-white transition-colors">Architecture</Link></li>
            <li><Link href="/features" className="text-[14px] text-content-secondary hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/why-safenest" className="text-[14px] text-content-secondary hover:text-white transition-colors">Why SafeNest</Link></li>
          </ul>
        </div>

        {/* Column 3 - Solutions */}
        <div className="col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Solutions</h4>
          <ul className="space-y-3">
            <li><Link href="/solutions" className="text-[14px] text-content-secondary hover:text-white transition-colors">All Solutions</Link></li>
            <li><Link href="/solutions/safenest-car" className="text-[14px] text-content-secondary hover:text-white transition-colors">SafeNest Car</Link></li>
            <li><Link href="/solutions/defensenest-k9" className="text-[14px] text-content-secondary hover:text-white transition-colors">DefenseNest K9</Link></li>
          </ul>
        </div>

        {/* Column 4 - Applications */}
        <div className="col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Use Cases</h4>
          <ul className="space-y-3">
            <li><Link href="/applications" className="text-[14px] text-content-secondary hover:text-white transition-colors">Industries</Link></li>
            <li><Link href="/enterprise" className="text-[14px] text-content-secondary hover:text-white transition-colors">Enterprise</Link></li>
            <li><Link href="/defense" className="text-[14px] text-content-secondary hover:text-white transition-colors">Military & Defense</Link></li>
          </ul>
        </div>

        {/* Column 5 - Company */}
        <div className="col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Company</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-[14px] text-content-secondary hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/story" className="text-[14px] text-content-secondary hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/how-it-works" className="text-[14px] text-content-secondary hover:text-white transition-colors">How It Works</Link></li>
          </ul>
        </div>

        {/* Column 6 - Resources */}
        <div className="col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/insights" className="text-[14px] text-content-secondary hover:text-white transition-colors">Articles</Link></li>
            <li><Link href="/resources" className="text-[14px] text-content-secondary hover:text-white transition-colors">Intelligence Hub</Link></li>
            <li><Link href="/faq" className="text-[14px] text-content-secondary hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/demo" className="text-[14px] text-content-secondary hover:text-white transition-colors">Request Demo</Link></li>
            <li><Link href="/contact" className="text-[14px] text-content-secondary hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 7 - Stay Informed */}
        <div className="col-span-1 lg:col-span-1">
          <h4 className="font-display font-semibold text-[15px] text-white mb-4">Stay Informed</h4>
          <p className="text-[13px] text-content-secondary mb-4">Join our newsletter for updates on technology, impact, and more.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-surface border border-border-subtle focus:border-brand-primary outline-none text-white text-[14px] px-4 h-[40px] rounded-[6px] transition-colors"
            />
            <button type="submit" className="btn-primary !h-[40px] w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 border-t border-border-subtle pt-[20px] flex flex-col md:flex-row justify-between items-center">
        <p className="text-[12px] text-content-muted mb-4 md:mb-0">
          &copy; 2026 SafeNest Technologies. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="text-[12px] text-content-secondary hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[12px] text-content-secondary hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
