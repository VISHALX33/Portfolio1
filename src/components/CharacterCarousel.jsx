import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  { src: img15, name: 'Happy & Confident', mood: 'Positive', color: 'bg-green-100' },
  { src: img11, name: 'Professional', mood: 'Confident', color: 'bg-blue-100' },
  { src: img12, name: 'Relaxed & Chill', mood: 'Calm', color: 'bg-purple-100' },
  { src: img13, name: 'Ready to Work', mood: 'Motivated', color: 'bg-yellow-100' },
  { src: img18, name: 'Determined', mood: 'Focused', color: 'bg-red-100' },
  { src: img19, name: 'Deep in Thought', mood: 'Thoughtful', color: 'bg-indigo-100' },
  { src: img21, name: 'Serious Mode', mood: 'Professional', color: 'bg-gray-100' },
  { src: img14, name: 'Wow!', mood: 'Excited', color: 'bg-orange-100' },
  { src: img17, name: 'Hopeful', mood: 'Optimistic', color: 'bg-teal-100' },
  { src: img16, name: 'Thinking...', mood: 'Curious', color: 'bg-pink-100' },
  { src: img20, name: 'Concerned', mood: 'Careful', color: 'bg-amber-100' }
];

export default function CharacterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCharacter = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const currentChar = characters[currentIndex];

  return (
    <div className="max-w-md mx-auto my-8">
      <div className={`rounded-2xl ${currentChar.color} dark:bg-neutral-800 p-8 shadow-xl`}>
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
            {currentChar.name}
          </h3>
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
            {currentChar.mood}
          </span>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="w-64 h-64 mx-auto"
          >
            <img
              src={currentChar.src}
              alt={currentChar.name}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCharacter}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white dark:bg-neutral-700 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous character"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextCharacter}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white dark:bg-neutral-700 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next character"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to character ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>Character {currentIndex + 1} of {characters.length}</p>
        </div>
      </div>
    </div>
  );
}
