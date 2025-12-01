import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin , FaInstagram,FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roles = ['Full Stack Web Developer', 'React Enthusiast', 'Problem Solver'];

function useTyping(list, speed = 120, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  useEffect(() => {
    let active = true;
    const role = list[index % list.length];
    let i = 0;
    function type() {
      if (!active) return;
      if (i <= role.length) {
        setSub(role.slice(0, i));
        i += 1;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          i = 0;
          setIndex(idx => idx + 1);
        }, pause);
      }
    }
    type();
    return () => { active = false; };
  }, [index, list, speed, pause]);
  return sub;
}

export default function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="hero" className="pt-24">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Hi, I'm <span className="text-primary">Vishal</span></h1>
          <h2 className="text-xl md:text-2xl mb-4 typing-caret">{typed}</h2>
          <p className="mb-6 max-w-xl text-primary-dark/80 dark:text-bg-subtle">I build fast, accessible and delightful web experiences with a focus on clean architecture and performance.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="/resume.pdf" className="btn" download>Download Resume</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <a href="https://github.com/VISHALX33" target="_blank" rel="noopener" className="text-primary-dark dark:text-primary-light hover:text-primary"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vishal-prajapati-445799289/" target="_blank" rel="noopener" className="text-primary-dark dark:text-primary-light hover:text-primary"><FaLinkedin /></a>
            <a href="https://www.instagram.com/vishal_20_03/" target="_blank" rel="noopener" className="text-primary-dark dark:text-primary-light hover:text-primary"><FaInstagram /></a>
            <a href="https://x.com/VishalPraja89" target="_blank" rel="noopener" className="text-primary-dark dark:text-primary-light hover:text-primary"><FaTwitter /></a>

          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: .1 }} className="flex-1 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary overflow-hidden shadow-lift">
            {/* Placeholder profile image */}
            <img src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1764528724/WhatsApp_Image_2025-11-19_at_19.35.18_3897ad09_pdbrul.jpg" alt="Profile" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
