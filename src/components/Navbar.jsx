import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-primary/20">
      <div className="container flex items-center justify-between h-16">
        <div className="font-heading text-lg font-semibold text-primary-dark dark:text-primary-light">Vishal</div>
        <nav className="hidden md:flex gap-2">
          {SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`nav-link ${active === s.id ? 'active' : ''}`}>{s.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="md:hidden flex items-center gap-3">
            <a href="https://github.com/VISHALX33" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vishal-prajapati-445799289/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/vishal_20_03/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/VishalPraja89" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <button aria-label="Toggle dark mode" className="btn-outline !p-2" onClick={() => setDark(d => !d)}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button className="md:hidden btn-outline !p-2" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-primary/20">
          <div className="container flex flex-col py-4">
            {SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`} onClick={() => { setOpen(false); }} className={`nav-link ${active === s.id ? 'active' : ''}`}>{s.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
