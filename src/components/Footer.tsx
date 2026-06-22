/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import { Mail, Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="studio-footer" className="bg-white border-t border-brand-100 text-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gray-100">
          
          {/* Brand block (Cols 1-4) */}
          <div className="md:col-span-5 space-y-4">
            <button
              id="footer-brand-logo"
              onClick={() => { onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center space-x-2 text-left cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-200">
                <span className="font-serif text-xs font-semibold text-brand-700">SM</span>
              </div>
              <div>
                <span className="block font-serif tracking-widest text-sm font-medium">STUDIO McNEELY</span>
                <span className="block text-[8px] font-mono tracking-widest text-gray-500 uppercase">
                  Interior Architecture & Styling
                </span>
              </div>
            </button>
            <p className="font-serif text-sm text-[#444] max-w-sm leading-relaxed pt-2">
              Choreographing tranquil sanctuaries through subtle material stories, elegant proportions, and raw organic textures.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links block (Cols 5-8) */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-gray-400 mb-4 font-semibold">
              Explore Curation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-widest font-medium">
              <li>
                <button
                  onClick={() => { onPageChange('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-brand-600 cursor-pointer pt-1 block"
                >
                  Portfolio Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onPageChange('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-brand-600 cursor-pointer pt-1 block"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onPageChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-brand-600 cursor-pointer pt-1 block"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onPageChange('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-brand-600 cursor-pointer pt-1 block"
                >
                  Inquire Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact coordinates (Cols 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-semibold mb-2">
              Studio Coordinates
            </h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>1528 Chautauqua Blvd, Pacific Palisades, CA 90272</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:hello@studiomcneely.com" className="hover:text-brand-600">
                  hello@studiomcneely.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+13104590021" className="hover:text-brand-600">
                  +1 (310) 459-0021
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-[#777]">
          <div>
            <p>© {new Date().getFullYear()} STUDIO McNEELY. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <button
              onClick={() => { onPageChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-brand-600 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 group hover:text-brand-600 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
