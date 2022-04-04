import cn from '@/helpers/classNames';
import SkillItemType from '@/ptypes/skill';
import TagComponent from '@/components/Tag';

const cellCn = cn(['rounded bg-[rgba(80,80,87,40%)] p-7 text-slate-50']);

export interface IProjectItem {
  id: string;
  name: string;
  description: string;
  period: [string, string];
  tech: SkillItemType[];
}

interface ProjectItemProps {
  item: IProjectItem;
}

const ProjectItem = ({ item }: ProjectItemProps) => {
  return (
    <div className="w-100 gap-6 grid grid-cols-[1fr_2fr]">
      <div className={cellCn}>
        <div className="font-medium text-slate-100">{item.name}</div>
        <div className="text-slate-300">
          ({item.period[0]}-{item.period[1]})
        </div>
      </div>
      <div className={cellCn}>
        <div className="text-slate-100">{item.description}</div>

        <div className="flex flex-wrap mt-4">
          {item.tech.map((t) => (
            <TagComponent className="mr-2 mb-2" key={t.name} text={t.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
