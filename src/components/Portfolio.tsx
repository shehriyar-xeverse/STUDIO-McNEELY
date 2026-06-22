/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data';
import { Project } from '../types';
import { Calendar, MapPin, Minimize, ArrowLeft, ZoomIn, ArrowRight, Sparkles, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter state (All, Full-Home, Construction, Curation)
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Home Renovation', 'New Construction', 'Interior Decoration & Styling', 'Custom Millwork & Interior Decorating'];
  
  const filteredProjects = filter === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div id="portfolio-container" className="pt-24 sm:pt-32 pb-24 bg-grain min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              id="portfolio-list-view"
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header block (Title from Top, Description from Left) */}
              <div className="max-w-3xl mb-12 sm:mb-16">
                <motion.span 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
                >
                  Studio Archives
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: -35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl sm:text-6xl font-light text-gray-950 mt-2"
                >
                  Commissioned <span className="font-serif italic font-normal text-brand-500">Sanctuaries.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, x: -45 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gray-650 text-sm sm:text-base mt-4 max-w-xl font-serif leading-relaxed"
                >
                  We maintain a limited client roster to guarantee absolute design devotion, delivering cohesive, custom-curated atmospheres scaled with architectural excellence.
                </motion.p>
              </div>

              {/* Categorical filters scrolling bar (Slides in from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none scroll-smooth"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border cursor-pointer ${
                      filter === cat
                        ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-150 hover:border-brand-300 hover:bg-brand-50/50'
                    }`}
                  >
                    {cat === 'All' ? 'View All' : cat}
                  </button>
                ))}
              </motion.div>

              {/* Grid Gallery displaying commissions with 3D Tilt Effect */}
              {filteredProjects.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100">
                  <p className="font-serif text-gray-500 italic">No commissions listed under this category at present.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {filteredProjects.map((project, idx) => (
                    /* Wrap each card with a right-sliding animation container */
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: Math.min(idx * 0.1, 0.4), ease: [0.16, 1, 0.3, 1] }}
                    >
                      <TiltCard
                        project={project}
                        onClick={() => handleProjectClick(project)}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            /* 2. PREMIUM IMMERSIVE PROJECT DETAIL PAGE/VIEW */
            <motion.div
              id="portfolio-detail-view"
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Top back button */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <button
                  id="btn-back-to-portfolio"
                  onClick={closeDetail}
                  className="group flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-gray-900 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Back to Collection</span>
                </button>
                <span className="text-[10px] font-mono tracking-widest text-brand-600 font-semibold uppercase">
                  ACTIVE CASE STUDY: {selectedProject.title}
                </span>
              </div>

              {/* Content body split: Images on Left, Specs on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Image Showcase and Carousel (Slides in from the Right) */}
                <motion.div 
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-4"
                >
                  
                  {/* Big Hero Image */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/2] bg-gray-150 border border-brand-100 group shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} Main Shot`}
                      className="w-full h-full object-cover select-none transition-transform duration-500 scale-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Lightbox Trigger icon */}
                    <button
                      id="btn-open-lightbox"
                      onClick={() => setLightboxImage(selectedProject.images[activeImageIndex])}
                      className="absolute btn-lightbox-reveal bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-full shadow-md text-brand-700 hover:bg-brand-50 hover:scale-110 transition-all cursor-pointer border border-brand-100"
                      title="Enlarge Image to Zoom View"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    
                    <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#bae6fd] font-medium">
                      IMAGE {activeImageIndex + 1} OF {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Slider Thumbnail Selectors */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto py-2 pr-4 scrollbar-thin scroll-smooth">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={img}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative shrink-0 w-16 sm:w-20 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImageIndex === idx 
                              ? 'border-brand-500 scale-[1.03] shadow-sm' 
                              : 'border-transparent opacity-65 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt="Preview Selection"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Controls help text */}
                  <div className="text-[10px] font-mono text-gray-400 flex items-center justify-end space-x-1">
                    <span>* Click the spyglass icon to inspect high resolution millwork.</span>
                  </div>
                </motion.div>

                {/* Spec metadata, description, objectives (Slides left/from left) */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 space-y-8 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  
                  <div className="space-y-3">
                    <div className="inline-block bg-brand-50 text-brand-800 border border-brand-150 px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold">
                      {selectedProject.category}
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-950">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <p className="font-serif text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>

                  {/* Core specifications table */}
                  <div className="border-t border-b border-gray-100 py-5 space-y-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center space-x-2 font-mono text-gray-400 uppercase tracking-widest">
                        <MapPin className="w-3.5 h-3.5 text-brand-400" />
                        <span>Location</span>
                      </span>
                      <span className="font-serif font-semibold text-gray-900">{selectedProject.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="flex items-center space-x-2 font-mono text-gray-450 uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 text-brand-400" />
                        <span>Completion</span>
                      </span>
                      <span className="font-serif font-semibold text-gray-900">{selectedProject.year}</span>
                    </div>

                    {selectedProject.size && (
                      <div className="flex items-center justify-between text-xs font-sans">
                        <span className="flex items-center space-x-2 font-mono text-gray-450 uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                          <span>Spatial Volume</span>
                        </span>
                        <span className="font-serif font-semibold text-gray-900">{selectedProject.size}</span>
                      </div>
                    )}
                  </div>

                  {/* Customized project scope details */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-brand-600 font-bold">
                      Delivered Project Scope
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.scope.map((item, id) => (
                        <li key={id} className="text-xs text-gray-650 flex items-start space-x-2 font-serif leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 block shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project close action CTA */}
                  <div className="pt-2">
                    <button
                      id="btn-close-and-return"
                      onClick={closeDetail}
                      className="w-full flex items-center justify-center space-x-2 uppercase border border-gray-150 hover:border-brand-350 hover:bg-brand-50/20 py-3.5 rounded-xl text-xs tracking-widest font-semibold text-gray-800 transition-all cursor-pointer"
                    >
                      <Minimize className="w-3.5 h-3.5 font-bold" />
                      <span>Compress Case Study</span>
                    </button>
                  </div>

                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* 3. ENHANCED PORTFOLIO IMAGE LIGHTBOX ZOOM MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            id="lightbox-zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <button
              id="btn-close-lightbox"
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
              title="Close Zoom Overlay"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox zoomed high fidelity image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking the image itself
            >
              <img
                src={lightboxImage}
                alt="Enlarged Spatial Texturing"
                className="max-w-full max-h-[80vh] object-contain select-none shadow-inner"
                referrerPolicy="no-referrer"
              />
              <div className="bg-[#111] py-3.5 px-6 text-center text-xs tracking-wide text-gray-300 font-serif">
                {selectedProject?.title} Detail View - High Definition Curation Specimen
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

/* 3D TILT CARD COMPONENT */
interface TiltCardProps {
  key?: string;
  project: Project;
  onClick: () => void;
}

function TiltCard({ project, onClick }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within element
    const y = e.clientY - rect.top;  // y coordinate within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation strength (max 4 degrees)
    const rotateX = ((centerY - y) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-white p-4.5 rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-200 cursor-pointer flex flex-col justify-between select-none relative"
      style={{
        transform: transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[1.3] bg-[#f9f9f9] shadow-sm mb-4 border border-gray-50 animate-pulse-once">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transform duration-1000 group-hover:scale-102"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest text-brand-800 font-semibold border border-brand-100">
          {project.category}
        </div>
      </div>

      <div className="flex justify-between items-end px-1 mt-1">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-light text-gray-950 group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{project.location}</p>
        </div>
        
        {/* Hover Arrow action */}
        <div className="w-8 h-8 rounded-full border border-gray-150 flex items-center justify-center text-gray-400 group-hover:text-brand-600 group-hover:border-brand-300 group-hover:bg-brand-50/50 transition-all duration-300 transform group-hover:translate-x-1 shrink-0">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
