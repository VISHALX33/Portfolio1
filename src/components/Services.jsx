import { services } from '../data/services';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Services Offered</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          I provide a range of web development services to help bring your ideas to life
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-6 shadow-sm hover:shadow-lift transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-xs flex items-center gap-2 text-gray-700 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
