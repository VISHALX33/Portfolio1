import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <>
      <AnimatedCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
