export default function About() {
  const highlights = [
    
  ];

  return (
    <section id="about">
      <div className="container fade-in visible">

        {/* Heading */}
        <h2 className="section-title text-green-600">About Me</h2>

        {/* About Text */}
        <p className="max-w-3xl mb-4">
          I'm Vishal, a passionate <strong>Full Stack Web Developer</strong> specializing in the 
          <strong> MERN stack</strong>. I build scalable, efficient, and user-centric web applications 
          while continuously improving my development and problem-solving skills.
        </p>

        <p className="max-w-3xl mb-4">
          I enjoy working across both frontend and backend, building clean, optimized, and 
          intuitive digital experiences. Currently pursuing my 
          <strong> B.Tech in Computer Science</strong> with a <strong>CGPA of 8.5/10</strong>, and 
          actively participating in hackathons and coding competitions.
        </p>

        {/* Highlights */}
       

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facts */}


        {/* Education */}
    

        {/* Interests */}
        <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>

        <div className="flex flex-wrap gap-3">
          {[
            'Full Stack Development',
            'DSA & Problem Solving',
            'Hackathons',
            'Web Technologies',
            'AI/ML'
          ].map((item) => (
            <span key={item} className="badge">{item}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
