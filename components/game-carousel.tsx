'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GAMES = [
  { id: 1, title: "Regrets", image: "/game1.webp" },
  { id: 2, title: "I am not the hero", image: "/game2.webp" },
];

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (newIndex: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300);
  };

  const nextSlide = () => changeSlide(currentIndex === GAMES.length - 1 ? 0 : currentIndex + 1);
  const prevSlide = () => changeSlide(currentIndex === 0 ? GAMES.length - 1 : currentIndex - 1);

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className={`relative w-full h-full transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src={GAMES[currentIndex].image}
            alt="Background"
            fill
            className="object-cover blur-xl opacity-30 brightness-75" // Reduced blur from blur-3xl to blur-xl
            priority
          />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="z-10 w-full max-w-7xl px-4 flex flex-col items-center">
        
        {/* Game Title */}
        <h2 className={`text-5xl font-bold text-blue-400 mb-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all duration-500 ${fade ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {GAMES[currentIndex].title}
        </h2>

        {/* Gallery Wrapper (Allows arrows to be beside image) */}
        <div className="relative flex items-center justify-center w-full group">
          
          {/* Left Arrow (Outside) */}
          <button 
            onClick={prevSlide}
            className="hidden md:block absolute -left-16 lg:-left-24 p-4 hover:text-blue-400 transition-colors"
          >
            <ChevronLeft size={60} strokeWidth={1.5} />
          </button>

          {/* Main Image Container */}
          <div className={`relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ${fade ? 'opacity-0 scale-98' : 'opacity-100 scale-100'}`}>
            <Image
              src={GAMES[currentIndex].image}
              alt={GAMES[currentIndex].title}
              fill
              className="object-contain" // "contain" ensures NO CROPPING
              priority
            />
          </div>

          {/* Right Arrow (Outside) */}
          <button 
            onClick={nextSlide}
            className="hidden md:block absolute -right-16 lg:-right-24 p-4 hover:text-blue-400 transition-colors"
          >
            <ChevronRight size={60} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-4 mt-12">
          {GAMES.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-16 bg-blue-500' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}