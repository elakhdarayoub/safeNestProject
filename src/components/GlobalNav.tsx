"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[72px] z-50 bg-base/90 backdrop-blur-[20px] border-b border-border-subtle flex items-center px-4 md:px-8 transition-all">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group z-50">
            <img src="/images/safeNest_logo_processed.png" alt="SafeNest Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/solutions/platform"
              className={`text-[14px] font-medium transition-colors ${pathname === '/solutions/platform' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Platform
            </Link>
            <Link
              href="/technology"
              className={`text-[14px] font-medium transition-colors ${pathname === '/technology' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Technology
            </Link>
            <Link
              href="/applications"
              className={`text-[14px] font-medium transition-colors ${pathname === '/applications' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Applications
            </Link>
            <Link
              href="/enterprise"
              className={`text-[14px] font-medium transition-colors ${pathname === '/enterprise' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Enterprise
            </Link>
            <Link
              href="/defense"
              className={`text-[14px] font-medium transition-colors ${pathname === '/defense' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Defense
            </Link>
            <Link
              href="/insights"
              className={`text-[14px] font-medium transition-colors ${pathname === '/insights' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              Articles
            </Link>
            <Link
              href="/about"
              className={`text-[14px] font-medium transition-colors ${pathname === '/about' ? 'text-brand-primary' : 'text-content-secondary hover:text-content-primary'}`}
            >
              About Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact" className="btn-primary !h-[38px] !text-[14px] !px-5">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-content-primary z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl pt-[96px] px-6 lg:hidden flex flex-col h-screen overflow-y-auto">
          <div className="flex flex-col space-y-6 mb-8">
            <Link href="/solutions/platform" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-brand-primary">Platform</Link>
            <Link href="/technology" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">Technology</Link>
            <Link href="/applications" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">Applications</Link>
            <Link href="/enterprise" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">Enterprise</Link>
            <Link href="/defense" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">Defense</Link>
            <Link href="/insights" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">Articles</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[20px] font-display font-medium text-white hover:text-brand-primary">About Us</Link>
          </div>
          <div className="mt-auto pb-12 pt-6 border-t border-border-subtle">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full !h-[48px] text-center">
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
