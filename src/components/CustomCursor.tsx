/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports hover / is touch-only
    const checkTouch = () => {
      const match = window.matchMedia('(any-hover: none)');
      setIsTouchDevice(match.matches || window.innerWidth < 1024);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) {
      return () => {
        window.removeEventListener('resize', checkTouch);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Scan for hoverable items to grow cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-card') || 
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer';

      setHovered(!!isHoverable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, hidden]);

  if (isTouchDevice || hidden) {
    return null;
  }

  return (
    <>
      {/* Absolute pointer dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-600 rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${hovered ? 0.3 : 1})`,
        }}
      />
      {/* Outer tracking ring */}
      <div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 border border-brand-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate3d(-50%, -50%, 0) scale(${hovered ? 1.6 : 1})`,
          backgroundColor: hovered ? 'rgba(14, 165, 233, 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
