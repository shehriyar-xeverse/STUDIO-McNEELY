/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { ContactFormState } from '../types';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sliders } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    projectAddress: '',
    projectScope: 'renovation',
    preferredContact: 'email',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required for credentialing.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full legal or corporate name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'An email coordinate is necessary.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid structural email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'A direct line is required for consultation scheduling.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please specify a complete telephone number.';
    }

    if (!formData.projectAddress.trim()) {
      newErrors.projectAddress = 'We require a structural address to audit municipal codes.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioChange = (val: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury API transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div id="contact-page-container" className="pt-24 sm:pt-32 pb-24 bg-grain min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block (Subtitle for design brief from Top, title from top, description from left) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-600 font-semibold block"
          >
            Initiate Brief
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl font-light text-gray-950 mt-2"
          >
            Schedule a <span className="font-serif italic font-normal text-brand-500">Design Brief.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-650 text-sm sm:text-base mt-4 max-w-xl font-serif leading-relaxed"
          >
            Fill out our architectural questionnaire. We review local municipal blueprints and parcel details prior to initiating your initial FaceTime context call.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <div
              id="contact-interactive-panel"
              key="contact-form"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              
              {/* Left Column: Coordinates & Large Image (4 columns) */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
                
                {/* Coordinates grid (Slides in from Left) */}
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-gray-105 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl font-medium text-gray-950">
                    The Palisades Studio
                  </h3>
                  
                  <div className="space-y-4 text-xs sm:text-sm text-gray-750 font-serif">
                    <div className="flex items-start space-x-3.5">
                      <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{CONTACT_INFO.address}</span>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-600 transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3.5 font-sans">
                      <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-600 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>

                    <div className="flex items-start space-x-3.5 pt-2 border-t border-gray-100">
                      <Clock className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-gray-900 font-sans">Working Hours</span>
                        <span className="block text-xs text-gray-500 mt-0.5">{CONTACT_INFO.workingHours}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Big Editorial Image (Slides in from the Right) */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-3xl aspect-video border border-brand-100 shadow-lg bg-gray-100 group"
                >
                  <img
                    src={CONTACT_INFO.imageUrl}
                    alt="STUDIO McNEELY Office setup"
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none" />
                </motion.div>

              </div>

              {/* Right Column: Premium Interior Scoping Form Container (Slides in from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 bg-white p-6 sm:p-10 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                
                <div className="pb-6 mb-8 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Sliders className="w-4 h-4 text-brand-500" />
                    <span>Project Questionnaire</span>
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#999] uppercase">Stage 01</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                      Full Client Name <span className="text-brand-550">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="e.g., Katherine Sterling"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border px-4 py-3.5 rounded-xl font-serif text-sm transition-all focus:outline-none focus:bg-white ${
                        errors.name
                          ? 'border-red-300 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-250 focus:border-brand-400 focus:ring-1 focus:ring-brand-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-mono pl-1">{errors.name}</p>
                    )}
                  </div>

                  {/* 2-Column coordinates (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email coordinate */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                        Email Address <span className="text-brand-550">*</span>
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="katherine@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border px-4 py-3.5 rounded-xl font-serif text-sm transition-all focus:outline-none focus:bg-white ${
                          errors.email
                            ? 'border-red-300 focus:ring-1 focus:ring-red-400'
                            : 'border-slate-250 focus:border-brand-400 focus:ring-1 focus:ring-brand-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-mono pl-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone line */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                        Direct Phone Line <span className="text-brand-550">*</span>
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        placeholder="+1 (310) 555-0192"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border px-4 py-3.5 rounded-xl font-serif text-sm transition-all focus:outline-none focus:bg-white ${
                          errors.phone
                            ? 'border-red-300 focus:ring-1 focus:ring-red-400'
                            : 'border-slate-250 focus:border-brand-400 focus:ring-1 focus:ring-brand-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 font-mono pl-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Address field */}
                  <div className="space-y-1.5">
                    <label htmlFor="address-input" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                      Project Site / Plot Address <span className="text-brand-550">*</span>
                    </label>
                    <input
                      id="address-input"
                      type="text"
                      name="projectAddress"
                      placeholder="e.g., 220 Ocean Way, Malibu, CA"
                      value={formData.projectAddress}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border px-4 py-3.5 rounded-xl font-serif text-sm transition-all focus:outline-none focus:bg-white ${
                        errors.projectAddress
                          ? 'border-red-300 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-250 focus:border-brand-400 focus:ring-1 focus:ring-brand-100'
                      }`}
                    />
                    {errors.projectAddress && (
                      <p className="text-xs text-red-500 font-mono pl-1">{errors.projectAddress}</p>
                    )}
                  </div>

                  {/* Project Scope dropdown selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="scope-select" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                      Anticipated Design Scope <span className="text-brand-550">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="scope-select"
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-250 px-4 py-3.5 rounded-xl font-serif text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-1 focus:ring-brand-100 appearance-none cursor-pointer text-gray-800"
                      >
                        <option value="construction">New Architectural Build / Hard Surface Selection</option>
                        <option value="renovation">Total Ground-Up Structural Renovation</option>
                        <option value="furniture">Custom Bedding, Sofas & Millwork Cabinet Sourcing</option>
                        <option value="decorating">Atmospheric Curation & Styling Consult</option>
                        <option value="management">Concierge Order & Staging Project Management</option>
                        <option value="other">Combination / Alternate Briefing</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 block pointer-events-none text-xs">▼</span>
                    </div>
                  </div>

                  {/* Preferred Contact Method selector */}
                  <div className="space-y-2.5">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                      Preferred Communication Path
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {['email', 'call', 'text'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => handleRadioChange(method)}
                          className={`py-3 px-4 rounded-xl text-xs uppercase tracking-widest border cursor-pointer select-none transition-all font-bold ${
                            formData.preferredContact === method
                              ? 'bg-brand-50 text-brand-800 border-brand-400 shadow-sm font-extrabold font-sans'
                              : 'bg-white text-gray-600 border-gray-150 hover:border-brand-300 hover:bg-brand-50/10 font-sans'
                          }`}
                        >
                          {method === 'call' ? 'Direct Call' : method === 'text' ? 'SMS / Text' : 'Email Box'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific requirements Optional details */}
                  <div className="space-y-1.5">
                    <label htmlFor="msg-textarea" className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-semibold">
                      Specific Context or Design Objectives
                    </label>
                    <textarea
                      id="msg-textarea"
                      name="message"
                      rows={4}
                      placeholder="e.g., We recently acquired a cliffside lot in Malibu and want to design double-height dining layouts honoring the afternoon sun colors..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-250 px-4 py-3.5 rounded-xl font-serif text-sm focus:outline-none focus:border-brand-400 focus:bg-white focus:ring-1 focus:ring-brand-100 transition-all"
                    ></textarea>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      id="btn-submit-scoping-brief"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-4 uppercase tracking-widest text-xs font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Formatting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Design Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] font-mono text-gray-400 text-center mt-3 leading-relaxed">
                      * All submitted parcel and municipal addresses are treated under strict client-firm confidentiality protocols.
                    </p>
                  </div>

                </form>
              </motion.div>

            </div>
          ) : (
            /* 4. SUCCESS STATE: GORGEOUS TRANSITIONAL CONFIRMATION VIEW */
            <motion.div
              id="contact-success-view"
              key="success-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="max-w-2xl mx-auto bg-white border border-brand-150 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-large"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto border border-brand-200 text-brand-500 shadow-inner">
                <CheckCircle className="w-8 h-8 stroke-[1.5]" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-semibold">
                  Transmission Executed
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-gray-950">
                  Brief Transmitted Successfully.
                </h2>
                <p className="text-[#333] font-serif text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Thank you, <span className="font-semibold text-brand-800">{formData.name}</span>. Our Palisade scheduling desk will review your address coordinates (<span className="italic text-gray-650">{formData.projectAddress}</span>) and contact you within 24 working hours to coordinate details.
                </p>
              </div>

              {/* Brief summary recaps */}
              <div className="bg-brand-50/50 rounded-2xl p-5 border border-brand-100 text-left max-w-md mx-auto space-y-3.5">
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-brand-700 font-bold border-b border-brand-100 pb-2">
                  Brief Specifications Summary
                </h4>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="font-mono text-gray-400 uppercase tracking-widest">Client Name</span>
                  <span className="font-serif font-semibold text-gray-950 text-right">{formData.name}</span>

                  <span className="font-mono text-gray-400 uppercase tracking-widest">Direct Phone</span>
                  <span className="font-serif font-semibold text-gray-950 text-right">{formData.phone}</span>

                  <span className="font-mono text-gray-400 uppercase tracking-widest">Scope Mode</span>
                  <span className="font-serif font-semibold text-gray-950 text-right uppercase text-[10px] text-brand-700">
                    {formData.projectScope}
                  </span>

                  <span className="font-mono text-gray-400 uppercase tracking-widest">Contact Path</span>
                  <span className="font-serif font-semibold text-gray-950 text-right uppercase text-[10px]">
                    {formData.preferredContact}
                  </span>
                </div>
              </div>

              {/* Transmit reset/Return btn */}
              <div>
                <button
                  id="btn-amend-brief"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs uppercase tracking-widest font-extrabold text-brand-600 hover:text-brand-800 underline transition-colors cursor-pointer"
                >
                  Amend Or Transmit Another Brief
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
