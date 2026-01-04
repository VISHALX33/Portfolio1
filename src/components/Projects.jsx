import { projects } from '../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-lift transition"
            >
              {/* Project Name */}
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>

              {/* Description */}
              <p className="text-sm mb-3 text-primary-dark/80 dark:text-bg-subtle">
                {p.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>

              {/* Features and Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {/* Features (optional display) */}
                {p.features && (
                  <ul className="list-disc ml-4 text-xs text-neutral-600 dark:text-neutral-300 flex-1">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-2 text-sm sm:min-w-[120px]">
                  <a
                    href={p.live}
                    className="btn-outline justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={p.repo}
                    className="btn-outline justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
