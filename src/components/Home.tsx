/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MoveRight, Layers, Compass, Quote } from 'lucide-react';
import { PageId } from '../types';

interface HomeProps {
  onPageChange: (page: PageId) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const heroMutedImages = [
    'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635194050572-FJ2SXOU2H36RMR8J5Y71/3170_210625_Jeanette.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862689118-RWVPPWDEAG1DXIIPUK0O/9431_231010_McNeely.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636054781686-8A1IDAGFQ32R63Q4CPUN/3018_210625_Jeanette.jpg?format=1500w'
  ];

  // Auto-slide Hero image backdrops
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroMutedImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home-page-container" className="relative w-full overflow-hidden bg-grain">
      
      {/* 1. CINEMATIC HERO SLIDESHOW (FULLY VISIBLE & IMMERSIVE) */}
      <section id="home-hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {heroMutedImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              activeHeroIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            {/* NO WHITE OVERLAY: Clear, immersive overlay with extremely gentle sky-blue mist for color continuity */}
            <div className="absolute inset-0 bg-brand-50/10 backdrop-blur-[0.5px] z-10" />
            <img
              src={img}
              alt="Luxury Interior Background"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Hero Interactive Text Panel (Framed in a gorgeous, architectural glazed sky-blue glass console) */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl lg:max-w-3xl bg-white/70 sm:bg-white/60 backdrop-blur-xl p-8 sm:p-14 rounded-3xl border border-white/50 shadow-large hover:shadow-2xl transition-all duration-500"
          >
            {/* Title / Badge Animates from Top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-brand-100/80 border border-brand-200/50 backdrop-blur px-3 py-1 rounded-full text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-brand-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Sanctuary Creation Collective</span>
            </motion.div>

            {/* Title Animates from Top */}
            <motion.h1
              initial={{ opacity: 0, y: -45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-gray-950 leading-[1.1] tracking-tight"
            >
              We craft spaces <br />
              <span className="font-serif italic text-brand-600 font-normal">that whisper quality.</span>
            </motion.h1>

            {/* Description Slides in from Left */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-lg text-gray-800 font-serif leading-relaxed max-w-xl"
            >
              STUDIO McNEELY introduces absolute precision, organic wood textures, and structural rest to your private home. We create high-end interior sanctuaries that elevate domestic experience.
            </motion.p>

            {/* Action buttons list */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <button
                id="hero-explore-btn"
                onClick={() => onPageChange('portfolio')}
                className="flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded-xl shadow-md cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
              >
                <span>Explore Settings</span>
                <MoveRight className="w-4 h-4" />
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => onPageChange('contact')}
                className="flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-900 border border-brand-100 text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded-xl shadow-sm cursor-pointer transition-all hover:translate-y-[-2px]"
              >
                <span>Request Consult</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll prompt anchor */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center space-y-1.5 opacity-80">
          <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">Scroll to Curation</span>
          <div className="w-[1.5px] h-12 bg-white/30 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-4 bg-brand-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY OF SPACE */}
      <section id="philosophy-intro" className="py-24 sm:py-32 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text Block */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
              >
                The Philosophy
              </motion.span>
              
              {/* Title Animates from Top */}
              <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-5xl font-light text-gray-950 leading-tight"
              >
                Honest geometry. <br />
                Bespoke materials. <span className="font-serif italic text-gray-500">Silent harmony.</span>
              </motion.h2>
              
              {/* Description Slides in from Left */}
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-750 leading-relaxed max-w-xl text-sm sm:text-base font-serif"
              >
                An interior should not struggle for attention or mimic temporary trends. It is an architecture of light, sound reflections, and physical touch. By specifying fine oiled timbers, hand-glazed bricks, custom woven textiles, and micro-detailed storage alignments, we cultivate clean domestic rhythms that calm the mind and highlight client collections.
              </motion.p>
              
              {/* Bullet details slides in from Left */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              >
                <div className="flex space-x-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-50 text-brand-600 block shrink-0 border border-brand-100">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-serif font-medium text-gray-900 text-sm">Fine Layering</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Handmade plaster, brushed bronze trim, and textured wools paired for multi-sensory depth.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-50 text-brand-600 block shrink-0 border border-brand-100">
                    <Compass className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-serif font-medium text-gray-900 text-sm">Light Routing</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Spatially directing natural sun patterns to illuminate structural corners and relax seating.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side portrait/architectural quote (Slides in from the Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative border border-brand-100 p-8 sm:p-12 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-12 h-12 text-brand-100 stroke-[1.5] absolute -top-5 -left-2" />
                <p className="font-serif italic text-lg text-gray-800 leading-relaxed relative z-10">
                  "At Studio McNeely, we don't just decorate walls. We restructure how light occupies your private rooms, establishing silent sanctuaries where you can breathe deeply."
                </p>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-200">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/4d3dd9e6-1553-4edf-8018-53f43b240e3f/Jeanette+-+Website+Photo.jpg?format=750w"
                      alt="Jeanette McNeely"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-semibold text-gray-950">Jeanette McNeely</h5>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Founder / Principal Director</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CINEMATIC SCROLL-REVEAL GRID */}
      <section id="cinematic-grid" className="py-24 bg-brand-50/20 border-y border-brand-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title (Animate Title from Top, Subtitle from top) */}
          <div className="max-w-2xl mb-16 text-left">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs font-mono uppercase tracking-widest text-brand-600 block font-semibold"
            >
              Structural Vignettes
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-light text-gray-950 mt-2 leading-tight"
            >
              Cinematic Grid <br />
              <span className="font-serif italic text-brand-650">and spatial snapshots.</span>
            </motion.h2>
          </div>

          {/* Asymmetric Architectural Grid mapping all 5 provided images */}
          {/* ALL image blocks here slide in from the right using smooth staggered delay transitions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Image 1: Tall left (Cols 1-7) - Jeanette Room */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 flex flex-col justify-between border border-gray-100 bg-white p-4 rounded-3xl hover:shadow-md transition-shadow interactive-card"
            >
              <div className="overflow-hidden rounded-2xl h-[300px] sm:h-[450px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635194050572-FJ2SXOU2H36RMR8J5Y71/3170_210625_Jeanette.jpg?format=1500w"
                  alt="Minimalist Living Seating Space"
                  className="w-full h-full object-cover transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline px-1">
                <div>
                  <h4 className="font-serif font-medium text-gray-950 text-base">The Jeanette Salon</h4>
                  <p className="text-xs text-gray-505 mt-1">Slight timber finishes paired with linen covers.</p>
                </div>
                <span className="text-xs font-mono text-brand-500 tracking-wider">© 2026</span>
              </div>
            </motion.div>

            {/* Image 2: Square right upper (Cols 8-12) - Jeanette Close Up */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 flex flex-col justify-between border border-gray-100 bg-white p-4 rounded-3xl hover:shadow-md transition-shadow interactive-card"
            >
              <div className="overflow-hidden rounded-2xl h-[240px] sm:h-[350px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636054781686-8A1IDAGFQ32R63Q4CPUN/3018_210625_Jeanette.jpg?format=1500w"
                  alt="Architectural details"
                  className="w-full h-full object-cover transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 px-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777] block">Material Story</span>
                <h4 className="font-serif font-medium text-gray-950 text-base mt-1">Tactile Cornering</h4>
                <p className="text-xs text-gray-650 mt-1">Detail showing handpicked fixtures and custom wood frame alignment.</p>
              </div>
            </motion.div>

            {/* Image 3: Wide horizontal bottom-left (Cols 1-5) - McNeely Room */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 flex flex-col justify-between border border-gray-100 bg-white p-4 rounded-3xl hover:shadow-md transition-shadow interactive-card"
            >
              <div className="overflow-hidden rounded-2xl h-[220px] sm:h-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862689118-RWVPPWDEAG1DXIIPUK0O/9431_231010_McNeely.jpg?format=1500w"
                  alt="Oceanfront Dining and Lounge Corner"
                  className="w-full h-full object-cover transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 px-1">
                <h4 className="font-serif font-medium text-gray-950 text-base">The Ocean Pavilion</h4>
                <p className="text-xs text-gray-505 mt-1">Light-flooded dining layout overlooking Malibu.</p>
              </div>
            </motion.div>

            {/* Image 4: Tall vertical center bottom (Cols 6-8) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3 flex flex-col justify-between border border-gray-100 bg-white p-4 rounded-3xl hover:shadow-md transition-shadow interactive-card"
            >
              <div className="overflow-hidden rounded-2xl h-[220px] sm:h-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1743701092638-ZEBXY64TRCAK06861XEX/2515_250204_McNeely.jpg?format=300w"
                  alt="Warm ceramic artifact"
                  className="w-full h-full object-cover transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 px-1">
                <h4 className="font-serif font-medium text-gray-950 text-sm">Quiet Curio</h4>
                <p className="text-xs text-gray-505 mt-0.5">Abstract form study.</p>
              </div>
            </motion.div>

            {/* Image 5: Wide right vertical bottom (Cols 9-12) - McNeely Detail */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4 flex flex-col justify-between border border-gray-100 bg-white p-4 rounded-3xl hover:shadow-md transition-shadow interactive-card"
            >
              <div className="overflow-hidden rounded-2xl h-[220px] sm:h-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862749117-E6M20R4EZL20G9XUBE5V/9549_231010_McNeely.jpg?format=1500w"
                  alt="Oak and plaster kitchen alignment"
                  className="w-full h-full object-cover transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 px-1">
                <h4 className="font-serif font-medium text-gray-950 text-base">The Kitchen Line</h4>
                <p className="text-xs text-gray-505 mt-1">Pure stone slabs meeting custom ribbed cabinetry.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED WORKS */}
      <section id="featured-works-highlight" className="py-24 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-xs font-mono uppercase tracking-widest text-brand-600 block font-semibold"
              >
                Signature Works
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl sm:text-5xl font-light text-gray-950 mt-1"
              >
                Selected Commissions
              </motion.h2>
            </div>
            
            {/* Action button slides in from Right */}
            <motion.button
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              onClick={() => onPageChange('portfolio')}
              className="mt-4 sm:mt-0 flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-brand-600 hover:text-brand-800 transition-colors group cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Lead Card 1: Jeanette (Slides in from the Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onPageChange('portfolio')}
              className="group cursor-pointer space-y-4 interactive-card"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-gray-100 shadow-sm border border-brand-100/50">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1637258368701-RSES8XIYWL6UORK9G674/3018_210625_Jeanette+%281%29.jpg?format=1000w"
                  alt="The Jeanette Residence Preview"
                  className="w-full h-full object-cover transform duration-750 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest text-[#444] border border-brand-100">
                  Full-Home Renovation
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-gray-950 group-hover:text-brand-600 transition-colors">
                    The Jeanette Residence
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Pacific Palisades, CA</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">01/</span>
              </div>
            </motion.div>

            {/* Lead Card 2: Oceanfront (Slides in from the Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onPageChange('portfolio')}
              className="group cursor-pointer space-y-4 interactive-card"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-gray-100 shadow-sm border border-brand-100/50">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1710862689118-RWVPPWDEAG1DXIIPUK0O/9431_231010_McNeely.jpg?format=1500w"
                  alt="Oceanfront Retreat Preview"
                  className="w-full h-full object-cover transform duration-750 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest text-[#444] border border-brand-100">
                  New Construction
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-gray-950 group-hover:text-brand-600 transition-colors">
                    Oceanfront Retreat
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Malibu, CA</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">02/</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. GORGEOUS CALL TO ACTION */}
      <section id="homepage-cta" className="relative py-28 overflow-hidden border-t border-brand-100 bg-brand-50/50">
        <div className="absolute inset-0 z-0 opacity-15">
          {/* Background Image Slides in from the Right for immersion */}
          <motion.img
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 0.15, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1635191728388-7L17HMA062HRTQD3L2CF/JeanetteMcNeely-11.5.20%281of9%29.jpg?format=500w"
            alt="Soft textures"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
          >
            Begin the Journey
          </motion.span>
          
          {/* Title Animates from Top */}
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-6xl font-light text-gray-950 leading-[1.25]"
          >
            Let’s sculpt a bespoke <br />
            <span className="font-serif italic font-normal text-brand-650">refuge for your memories.</span>
          </motion.h2>
          
          {/* Description Slides in from Left */}
          <motion.p 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-750 text-sm sm:text-base font-serif max-w-xl mx-auto leading-relaxed"
          >
            Our curated pipeline handles the full architectural design, bespoke vendor sourcing, and final detailing so you simply step into a complete sanctuary.
          </motion.p>
          
          {/* Buttons Slide in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="cta-schedule-brief"
              onClick={() => onPageChange('contact')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gray-950 hover:bg-gray-800 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4.5 rounded-xl shadow-md cursor-pointer transition-all hover:translate-y-[-2px]"
            >
              <span>Schedule Initial Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="cta-services-list"
              onClick={() => onPageChange('services')}
              className="w-full sm:w-auto bg-white border border-brand-200 hover:bg-brand-50 text-brand-900 text-xs uppercase tracking-widest font-semibold px-8 py-4.5 rounded-xl shadow-sm cursor-pointer transition-colors"
            >
              <span>Explore Pricing & Services</span>
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
