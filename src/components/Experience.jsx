import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold">{item.role} @ {item.company}</h3>
                <span className="badge">{item.duration}</span>
                <span className="text-xs text-primary-dark/60 dark:text-bg-subtle">{item.location}</span>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-sm max-w-2xl">
                {item.points.map((p,i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
