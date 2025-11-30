import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map(group => (
            <div key={group.title} className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-5">
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(i => <span key={i} className="badge">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
