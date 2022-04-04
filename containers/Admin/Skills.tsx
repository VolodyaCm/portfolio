import SkillItemType from '@/ptypes/skill';
import { useState, useEffect } from 'react';
import { getSkills } from '@/fireb/db/skills';
import SkillComponent from '@/components/Admin/Skill';

const SkillsContainer = () => {
  const [skills, setSkills] = useState<SkillItemType[]>([]);

  const fetchSkills = () => {
    getSkills().then((data: SkillItemType[]) => {
      setSkills(data);
    });
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="grid gap-6">
      {skills.map((skill) => (
        <SkillComponent key={skill.id} reload={fetchSkills} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsContainer;
