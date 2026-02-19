'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Logic: 
      // 1. If we are at the very top (less than 10px), always show it.
      // 2. If scrolling DOWN (current > last) and not at top -> Hide
      // 3. If scrolling UP (current < last) -> Show
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-slate-900/60 backdrop-blur-md border-b border-white/10
      `}
    >
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        
        {/* Left Side: Home & About */}
        <nav className="flex gap-6 flex-1 justify-start">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
        </nav>

        {/* Center: Title */}
        <div className="font-bold text-xl text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Pligh Studios
        </div>

        {/* Right Side: FAQ & Contact */}
        <nav className="flex gap-6 flex-1 justify-end">
          <Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>

      </div>
    </header>
  );
}