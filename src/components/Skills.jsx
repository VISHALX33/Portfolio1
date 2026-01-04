import { skillGroups } from '../data/skills';
import * as SimpleIcons from 'react-icons/si';
import { FaCode, FaUsers, FaBrain, FaComments } from 'react-icons/fa';

export default function Skills() {
  const getIcon = (iconName) => {
    const Icon = SimpleIcons[iconName];
    return Icon ? <Icon className="text-lg" /> : <FaCode className="text-lg" />;
  };

  return (
    <section id="skills" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map(group => (
            <div key={group.title} className="rounded-xl border border-primary/20 bg-white dark:bg-neutral-800 p-5">
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={typeof item === 'string' ? item : item.name} className="badge !flex !flex-row items-center gap-1.5">
                    {typeof item === 'object' && item.icon && getIcon(item.icon)}
                    <span className="whitespace-nowrap">{typeof item === 'string' ? item : item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
