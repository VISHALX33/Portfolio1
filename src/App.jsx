import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Achievements from './components/Achievements';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';
import FloatingCharacter from './components/FloatingCharacter';

function App() {
  return (
    <>
      <AnimatedCursor />
      <FloatingCharacter />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Achievements />
        {/* <GithubStats /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
