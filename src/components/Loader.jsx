import React, { useState, useEffect } from 'react';

const words = ["LEARN", "FUN", "GROW", "WITH", "GDG LNMIIT"];
const DISPLAY_MS = 1000; // 1 second per word
const FADE_MS = 300;     // 300ms fade duration (as Tailwind class)

// Recommended container opacity fade (optional):
const LOADER_VISIBLE_MS = words.length * DISPLAY_MS + FADE_MS;

const Loader = ({ show }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hide, setHide] = useState(false); // for triggering upward transition

  useEffect(() => {
    const timeouts = [];

    timeouts.push(
      window.setTimeout(() => setFade(false), DISPLAY_MS - FADE_MS)
    );

    timeouts.push(
      window.setTimeout(() => {
        setCurrentIndex(i => (i + 1) % words.length);
        setFade(true);
      }, DISPLAY_MS)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [currentIndex]);

  // Trigger upward transition when `show` becomes false
  useEffect(() => {
    if (!show) {
      setHide(true); // start upward movement
      // Optional: after transition ends, unmount using parent logic
    }
  }, [show]);

  return (
    <div className={`
      fixed inset-0 z-[1000] bg-black flex items-center justify-center 
      transition-transform duration-1000 ease-in-out
      ${hide ? 'translate-y-[-100%]' : ''}
    `}>
      <h1
        key={currentIndex}
        className={`
          text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-r from-indigo-500 to-pink-600
          bg-clip-text text-transparent
          transition-opacity duration-[${FADE_MS}ms] ease-in-out
          ${fade ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {words[currentIndex]}
      </h1>
    </div>
  );
};


export default Loader;
