import { achievements } from '../data/achievements';
import { FaCheckCircle } from 'react-icons/fa';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(a => (
            <div key={a.title} className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-5 flex flex-col gap-2">
              <span className="text-primary text-2xl"><FaCheckCircle /></span>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-primary-dark/70 dark:text-bg-subtle">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
