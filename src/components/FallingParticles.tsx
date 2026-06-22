/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  shape: 'circle' | 'square' | 'hollow-circle' | 'hollow-square' | 'plus' | 'draft-line';
  size: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  scale: number;
}

export default function FallingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 24 elegant interior-design, blueprint-inspired particles on client mount
    const shapes: Particle['shape'][] = ['circle', 'square', 'hollow-circle', 'hollow-square', 'plus', 'draft-line'];
    const generated: Particle[] = Array.from({ length: 24 }).map((_, i) => {
      const size = Math.floor(Math.random() * 12) + 6; // sizes between 6px and 18px
      const left = Math.random() * 100; // left offset percent
      const delay = Math.random() * 20; // delay in seconds before falling starts
      const duration = Math.random() * 25 + 25; // incredibly slow, serene duration of 25s - 50s
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const rotation = Math.floor(Math.random() * 360);
      const scale = Math.random() * 0.4 + 0.6; // subtle scale variations

      return {
        id: i,
        shape,
        size,
        left,
        delay,
        duration,
        rotation,
        scale,
      };
    });

    setParticles(generated);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
      id="architectural-falling-vessel"
    >
      <style>{`
        @keyframes architectural-drift {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .architectural-particle-body {
          animation: architectural-drift linear infinite;
        }
      `}</style>
      
      {particles.map((p) => {
        const style = {
          left: `${p.left}%`,
          top: `-60px`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
        };

        return (
          <div
            key={p.id}
            className="absolute architectural-particle-body text-brand-400 flex items-center justify-center pointer-events-none opacity-0"
            style={style}
          >
            {p.shape === 'circle' && (
              <div className="w-full h-full rounded-full bg-brand-300/30 border border-brand-400/10" />
            )}
            {p.shape === 'square' && (
              <div className="w-full h-full bg-brand-300/20 border border-brand-400/10" />
            )}
            {p.shape === 'hollow-circle' && (
              <div className="w-full h-full rounded-full border border-brand-400/30" />
            )}
            {p.shape === 'hollow-square' && (
              <div className="w-full h-full border border-brand-450/30" />
            )}
            {p.shape === 'plus' && (
              <span className="font-mono text-xs text-brand-400/40 select-none font-light leading-none">+</span>
            )}
            {p.shape === 'draft-line' && (
              <div className="w-8 h-[1px] bg-brand-400/25 rotate-45 shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
