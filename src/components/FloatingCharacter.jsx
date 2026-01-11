import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img11 from '../assets/character/11.png';
import img12 from '../assets/character/12.png';
import img13 from '../assets/character/13.png';
import img14 from '../assets/character/14.png';
import img15 from '../assets/character/15.png';
import img16 from '../assets/character/16.png';
import img17 from '../assets/character/17.png';
import img18 from '../assets/character/18.png';
import img19 from '../assets/character/19.png';
import img20 from '../assets/character/20.png';
import img21 from '../assets/character/21.png';

const characters = [
  { src: img11, name: 'Confident' },
  { src: img12, name: 'Relaxed' },
  { src: img13, name: 'Ready' },
  { src: img14, name: 'Surprised' },
  { src: img15, name: 'Happy' },
  { src: img16, name: 'Confused' },
  { src: img17, name: 'Hopeful' },
  { src: img18, name: 'Determined' },
  { src: img19, name: 'Thinking' },
  { src: img20, name: 'Worried' },
  { src: img21, name: 'Serious' }
];

export default function FloatingCharacter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % characters.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
    >
      <div className="relative group">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 z-10"
        >
          ×
        </button>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
            transition={{ 
              duration: 0.5,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="w-40 h-40 md:w-48 md:h-48 cursor-pointer"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % characters.length)}
          >
            <img
              src={characters[currentIndex].src}
              alt={characters[currentIndex].name}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {characters[currentIndex].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
