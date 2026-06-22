/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection to update navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="studio-navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-100 py-3'
            : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Studio Name */}
            <button
              id="nav-brand-logo"
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-2.5 group transition-transform hover:scale-[1.01] text-left cursor-pointer"
            >
              {/* Elegant Geometric Minimal Logo Icon */}
              <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-200 shadow-inner overflow-hidden transition-all duration-300 group-hover:border-brand-300 group-hover:bg-brand-100">
                <span className="font-serif text-sm font-semibold text-brand-700">SM</span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-400" />
              </div>
              <div>
                <span className="block font-serif tracking-[0.2em] text-sm lg:text-base font-medium text-gray-900 leading-tight">
                  STUDIO McNEELY
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#555] uppercase">
                  Interior Architecture & Styling
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links (with tablet proper spacing adaptivity) */}
            <nav id="nav-desktop-menu" className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    id={`nav-link-${link.id}`}
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="relative py-2 text-xs lg:text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer group"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? 'text-brand-700 font-semibold'
                          : 'text-gray-600 hover:text-brand-500'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active Link Indicators: Underline + soft blue glow dot */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-500 shadow-[0_1px_5px_rgba(56,189,248,0.5)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-300 transition-all duration-300 group-hover:w-full" />
                    )}
                  </button>
                );
              })}

              {/* Consultation quick action CTA */}
              <button
                id="nav-consultation-btn"
                onClick={() => handleLinkClick('contact')}
                className="hidden lg:flex items-center space-x-1 border border-brand-300 bg-brand-50/50 hover:bg-brand-100 hover:border-brand-400 text-brand-800 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Book Curation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-500" />
              </button>
            </nav>

            {/* Mobile / Tablet Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 px-1.5 rounded-lg text-gray-700 hover:text-brand-600 hover:bg-brand-50/80 transition-all cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[1.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[1.5]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Slide-in with Overlay backdrop) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              id="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />

            {/* Slide-in sidebar */}
            <motion.div
              id="mobile-navigation-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] sm:w-[380px] h-full bg-white z-50 shadow-2xl flex flex-col justify-between py-6 px-6"
            >
              {/* Mobile Sidebar Head */}
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-200">
                      <span className="font-serif text-xs font-semibold text-brand-700">SM</span>
                    </div>
                    <div>
                      <span className="block font-serif tracking-[0.1em] text-xs font-semibold text-gray-900">
                        STUDIO McNEELY
                      </span>
                      <span className="block text-[7px] font-mono tracking-wider text-gray-500">
                        INTERIOR DESIGN
                      </span>
                    </div>
                  </div>
                  <button
                    id="mobile-menu-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full text-gray-500 hover:text-brand-600 hover:bg-brand-50 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Nav Links */}
                <nav className="flex flex-col space-y-4">
                  {/* Home Link explicitly present on mobile menu too */}
                  <motion.button
                    id="mobile-nav-home"
                    onClick={() => handleLinkClick('home')}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-left font-serif text-lg tracking-wide transition-all ${
                      activePage === 'home'
                        ? 'bg-brand-50 text-brand-800 font-medium border-l-4 border-brand-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Home Studio</span>
                    <span className="text-xs font-mono text-brand-400">01</span>
                  </motion.button>

                  {navLinks.map((link, idx) => {
                    const isActive = activePage === link.id;
                    return (
                      <motion.button
                        id={`mobile-nav-${link.id}`}
                        key={link.id}
                        onClick={() => handleLinkClick(link.id)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.05 }}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl text-left font-serif text-lg tracking-wide transition-all ${
                          isActive
                            ? 'bg-brand-50 text-brand-800 font-medium border-l-4 border-brand-500'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs font-mono text-brand-400">0{idx + 2}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Sidebar Footer Info */}
              <div className="border-t border-gray-100 pt-6">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#888] mb-3">
                  Studio Inquiries
                </span>
                <p className="font-serif text-gray-800 text-sm mb-1">hello@studiomcneely.com</p>
                <p className="text-xs text-gray-500 mb-6">+1 (310) 459-0021</p>
                <button
                  id="mobile-nav-cta"
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 text-xs tracking-widest uppercase font-medium shadow-md transition-all cursor-pointer"
                >
                  <span>Request Custom Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
