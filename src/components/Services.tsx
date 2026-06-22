/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_LIST } from '../data';
import { Service } from '../types';
import { Hammer, Layers, Armchair, Sparkles, Briefcase, Plus, Minus, HelpCircle } from 'lucide-react';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>('construction');

  // Map service IDs to gorgeous icon React elements
  const getIcon = (id: string) => {
    switch (id) {
      case 'construction':
        return <Hammer className="w-5 h-5 text-brand-600" />;
      case 'renovation':
        return <Layers className="w-5 h-5 text-brand-600" />;
      case 'furniture':
        return <Armchair className="w-5 h-5 text-brand-600" />;
      case 'decorating':
        return <Sparkles className="w-5 h-5 text-brand-600" />;
      case 'project-management':
        return <Briefcase className="w-5 h-5 text-brand-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-brand-600" />;
    }
  };

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="services-page-container" className="pt-24 sm:pt-32 pb-24 bg-grain min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Title from Top, Description from Left) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
          >
            Our Offerings
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl font-light text-gray-950 mt-2"
          >
            Integrated Design <br />
            <span className="font-serif italic font-normal text-brand-500">and execution systems.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-600 text-sm sm:text-base mt-4 max-w-xl font-serif leading-relaxed"
          >
            From preliminary blueprints to curated vintage linens, we manage all coordinates, guaranteeing single-source accountability and immaculate styling.
          </motion.p>
        </div>

        {/* Dynamic Split Layout: Interactive accordions on left, premium imagery on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* List of Services (Slides in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {SERVICE_LIST.map((service, index) => {
              const isOpen = expandedId === service.id;
              
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-350 shadow-md ring-1 ring-brand-100' 
                      : 'border-gray-100 hover:border-brand-250 hover:shadow-sm'
                  }`}
                >
                  {/* Collapsible Header bar */}
                  <button
                    onClick={() => handleToggle(service.id)}
                    className="w-full flex items-center justify-between p-5.5 sm:p-7 text-left cursor-pointer select-none"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Icon backplate */}
                      <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-150 flex items-center justify-center shrink-0">
                        {getIcon(service.id)}
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono uppercase tracking-wider text-gray-400">
                          Offering 0{index + 1}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-gray-950 mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Expand indicator icon */}
                    <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-450 hover:bg-brand-50 transition-colors shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-brand-600" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <div className="px-5.5 sm:px-7 pb-7.5 pt-1 sm:pl-[72px] border-t border-gray-50 space-y-5">
                          <p className="font-serif text-gray-600 leading-relaxed text-sm">
                            {service.description}
                          </p>

                          {/* Specific Deliverables Checklist */}
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-mono tracking-widest uppercase text-brand-600 font-bold">
                              Deliverable Milestones
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.details.map((detail, id) => (
                                <li key={id} className="text-xs text-gray-650 flex items-start space-x-2 leading-tight">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 block shrink-0 mt-1.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Elegant Sticky Right Side Supportive Image Panel (Slides in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[1.1] border border-brand-100 shadow-lg bg-gray-100 group">
              <img
                src="https://images.squarespace-cdn.com/content/v1/614e222dabe60d3394b7f52b/1636053898150-FDE8D22MPGDK2YWSGTQI/JeanetteMcNeely-11.2.20-Edits%284of14%29.jpg?format=500w"
                alt="Studio Craftsmanship Detail"
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#7dd3fc]">
                  Tactile Materials Study
                </span>
                <p className="font-serif italic text-base leading-snug">
                  "Every drawer frame, plaster layer, and upholstery outline is inspected on-site to ensure tactile alignment."
                </p>
              </div>
            </div>

            {/* Quick Consultation brief box */}
            <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl space-y-3 shadow-inner">
              <h4 className="font-serif font-semibold text-brand-800 text-sm sm:text-base">
                Curious about custom furniture?
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                We design bespoke, custom-timber credenzas, mirrors, and seating modeled strictly to scale within your domestic dimensions.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 3-STAGE TRANSITORY COLLABORATIVE PROCESS */}
        <section id="studio-process" className="mt-28 border-t border-brand-100 pt-16">
          <div className="max-w-3xl mb-12">
            <motion.span 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs font-mono uppercase tracking-widest text-[#888] block"
            >
              The Journey Map
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-2xl sm:text-4xl font-light text-gray-950 mt-1"
            >
              Three stages of creation.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stage 1 - Slides in from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-brand-50 text-brand-700 font-mono text-xs flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-serif text-lg font-medium text-gray-950">
                1. Concept Exploration
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We review floor plans and assemble material boards in our studio to establish a quiet textural direction that matches your daily living goals.
              </p>
            </motion.div>

            {/* Stage 2 - Slides in from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-brand-50 text-brand-700 font-mono text-xs flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-serif text-lg font-medium text-gray-950">
                2. Sourcing & Detailing
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our team handles orthographic drawings, bespoke millwork alignments, and sources artisan cabinetry and custom-woven wools.
              </p>
            </motion.div>

            {/* Stage 3 - Slides in from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 bg-white p-6 border border-gray-100 rounded-2xl hover:shadow-sm hover:border-brand-200 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-brand-50 text-brand-700 font-mono text-xs flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-serif text-lg font-medium text-gray-950">
                3. Concierge Installation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We receive, inspect, and fine-tune your items in secure storage, staging the entire residence in one day so you step directly into a serene layout.
              </p>
            </motion.div>

          </div>
        </section>

      </div>
    </div>
  );
}
