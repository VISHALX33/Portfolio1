import { motion } from 'framer-motion';
import aboutImage from '../assets/character/14.png';

export default function About() {
  const highlights = [
    
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img src={aboutImage} alt="About Me" className="w-full max-w-sm mx-auto object-contain drop-shadow-xl" />
          </motion.div>
          <div className="order-1 md:order-2">

        {/* Heading */}
        <h2 className="section-title text-green-600 animate-fade-in-up">About Me</h2>

        {/* About Text */}
        <p className="mb-4 animate-fade-in-up animation-delay-200">
          I'm Vishal, a passionate <strong>Full Stack Web Developer</strong> specializing in the 
          <strong> MERN stack</strong>. I build scalable, efficient, and user-centric web applications 
          while continuously improving my development and problem-solving skills.
        </p>

        <p className="mb-4 animate-fade-in-up animation-delay-400">
          I enjoy working across both frontend and backend, building clean, optimized, and 
          intuitive digital experiences. Currently pursuing my 
          <strong> B.Tech in Computer Science</strong> with a <strong>CGPA of 8.5/10</strong>, and 
          actively participating in hackathons and coding competitions.
        </p>
          </div>
        </div>

        {/* Highlights */}
       

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 animate-fade-in-up animation-delay-600">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      
    

        {/* Interests */}
        <h3 className="text-xl font-semibold mb-2 animate-fade-in-up animation-delay-800">Hobbies & Interests</h3>

        <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-1000">
          {[
            'Full Stack Development',
            'DSA & Problem Solving',
            'Hackathons',
            'Web Technologies',
            'AI/ML'
          ].map((item, index) => (
            <span key={item} className="badge hover:scale-110 transition-transform duration-300" style={{animationDelay: `${index * 100}ms`}}>{item}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
