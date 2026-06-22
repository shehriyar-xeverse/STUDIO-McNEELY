/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BIO_CONTENT } from '../data';
import { Award, Feather, Sparkles, Building, Quote } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page-container" className="pt-24 sm:pt-32 pb-24 bg-grain min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated content container */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* Header block (Title animates from Top) */}
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
            >
              The Principal Designer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-gray-950 mt-2 leading-tight"
            >
              {BIO_CONTENT.headline}
            </motion.h1>
          </div>

          {/* Primary Split: Large Portrait Right/Left alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Big portrait Block (Slides in from the Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative space-y-4"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-150 border border-brand-100 shadow-md group">
                <img
                  src={BIO_CONTENT.portraitUrl}
                  alt="Jeanette McNeely Portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 scale-100 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative border highlight */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/60 to-transparent p-6 text-white text-xs font-mono uppercase tracking-widest">
                  JEANETTE McNEELY, FOUNDER
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 font-mono">
                * Photo shot at our Pacific Palisades design studio, 2026.
              </p>
            </motion.div>

            {/* Prose/Biography text (Slides in from the Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-8"
            >
              
              <div className="space-y-6 font-serif text-[#333] leading-relaxed text-sm sm:text-base lg:text-lg">
                {BIO_CONTENT.paragraphs.map((paragraph, id) => (
                  <p key={id} className="first-letter:font-serif first-letter:text-2xl first-letter:font-semibold first-letter:text-brand-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Aesthetic Quote separator */}
              <div className="border-l-2 border-brand-300 pl-6 py-1 italic text-gray-700 font-serif">
                "We don't believe in standard configurations. Each chair, fixture, and painting alignment we specify carries an absolute spatial weight."
              </div>

              {/* Table of credentials / metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-8 mt-10">
                {BIO_CONTENT.credentials.map((cred, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur p-4 rounded-xl border border-gray-100 leading-normal hover:border-brand-200 transition-colors">
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-[#999] font-semibold mb-1">
                      {cred.label}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-gray-900">
                      {cred.value}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

          {/* SECONDARY EDITORIAL FEATURE: THE STUDIO CORE VALUES */}
          <section className="border-t border-brand-100 pt-16">
            <div className="max-w-3xl mb-12">
              <motion.span 
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-widest text-[#888] block"
              >
                The Values
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-2xl sm:text-4xl font-light text-gray-950 mt-1"
              >
                Foundations of our discipline.
              </motion.h2>
            </div>

            {/* Value cards sliding in from Left */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-100">
                  <Feather className="w-5 h-5 text-brand-600" />
                </div>
                <h4 className="font-serif text-lg font-medium text-gray-950">
                  Tactile Honesty
                </h4>
                <p className="text-xs text-gray-650 leading-relaxed">
                  We reject veneers and mock materials. Oiled oak, solid hand-beaten bronze, linen cords, and raw stone are specified for organic aging.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-100">
                  <Sparkles className="w-5 h-5 text-brand-600" />
                </div>
                <h4 className="font-serif text-lg font-medium text-gray-950">
                  Quiet Restraint
                </h4>
                <p className="text-xs text-gray-650 leading-relaxed">
                  We believe that the best design contains beautiful voids. Giving light, wall panels, and sculpture space to breathe results in deep serenity.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-100">
                  <Building className="w-5 h-5 text-brand-600" />
                </div>
                <h4 className="font-serif text-lg font-medium text-gray-950">
                  Site Continuity
                </h4>
                <p className="text-xs text-gray-650 leading-relaxed">
                  We align each room's spatial openings with natural horizon paths, ensuring your indoor spaces honor local views.
                </p>
              </motion.div>

            </div>
          </section>

        </div>
        
      </div>
    </div>
  );
}
