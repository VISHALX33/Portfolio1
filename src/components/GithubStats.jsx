import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function GithubStats() {
  const username = 'VISHALX33';
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section id="github-stats" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">GitHub Statistics</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          My coding activity and contributions on GitHub
        </p>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-4 shadow-sm overflow-hidden"
          >
            {!imageErrors.stats ? (
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22c55e&icon_color=22c55e&text_color=666666&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
                onError={() => handleImageError('stats')}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-48 p-4">
                <FaGithub className="text-5xl text-primary mb-4" />
                <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  View GitHub Profile
                </a>
              </div>
            )}
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-4 shadow-sm overflow-hidden"
          >
            {!imageErrors.langs ? (
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=22c55e&text_color=666666&bg_color=00000000`}
                alt="Top Languages"
                className="w-full"
                loading="lazy"
                onError={() => handleImageError('langs')}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-48 p-4">
                <div className="text-center mb-4">
                  <h3 className="font-semibold mb-2">Top Languages</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>HTML</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 p-8 shadow-sm md:col-span-2 text-center"
          >
            <FaGithub className="text-6xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Follow Me on GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my open source projects and contributions
            </p>
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

