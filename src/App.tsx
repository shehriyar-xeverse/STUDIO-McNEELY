/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FallingParticles from './components/FallingParticles';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Page title mapping for SEO and premium brand feel
  useEffect(() => {
    let pageTitle = 'STUDIO McNEELY | Elevated Interior Design';
    
    switch (activePage) {
      case 'home':
        pageTitle = 'STUDIO McNEELY | Elevated Interior Design';
        break;
      case 'portfolio':
        pageTitle = 'STUDIO McNEELY | Commissioned Works & Sanctuaries';
        break;
      case 'services':
        pageTitle = 'STUDIO McNEELY | Architectural Services & Systems';
        break;
      case 'about':
        pageTitle = 'STUDIO McNEELY | Spatial Philosophy & Profile';
        break;
      case 'contact':
        pageTitle = 'STUDIO McNEELY | Initiate Design Brief';
        break;
    }
    
    document.title = pageTitle;
  }, [activePage]);

  // Page navigation orchestrator
  const handlePageChange = (newPage: PageId) => {
    // Reset scroll offset instantly before render to guarantee smooth scroll position reset
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActivePage(newPage);
  };

  // Switch page content
  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'portfolio':
        return <Portfolio />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div id="studio-app-root" className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden antialiased bg-[#f4f8fc]">
      
      {/* Falling Architectural Particles Backdrop */}
      <FallingParticles />

      {/* Premium Double Ring Custom Cursor (disabled below 1024px and on touch devices) */}
      <CustomCursor />

      {/* Persistent Glassmorphic Responsive Navbar */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Content Arena with exit-staggered slide fade motion transitions */}
      <main id="studio-main-viewport" className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Elevated Architectural Footer */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
