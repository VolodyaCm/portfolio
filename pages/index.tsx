import type { NextPage } from 'next';
import Header from '@/containers/Header';
import Skills from '@/containers/Skills';
import WorkExperience from '@/containers/WorkExperience';
import SkillItemType from '@/ptypes/skill';
import { motion } from 'framer-motion';
import { getMe } from '@/fireb/db/me';
import { getSkills } from '@/fireb/db/skills';
import { getExperience } from '@/fireb/db/experience';
import { IHeaderData } from '@/containers/Header';
import { IProjectItem } from '@/components/ProjectItem';

interface IHomePageProps {
  meData: IHeaderData;
  skillsData: SkillItemType[];
  experienceData: IProjectItem[];
}

const Home: NextPage<IHomePageProps> = ({
  meData,
  skillsData,
  experienceData,
}) => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Header data={meData} />
        <Skills data={skillsData} />
        <WorkExperience data={experienceData} />
      </motion.div>
    </div>
  );
};

export async function getServerSideProps() {
  const meData = await getMe();
  const skillsData = await getSkills();
  const experienceData = await getExperience();

  return {
    props: { meData, skillsData, experienceData },
  };
}

export default Home;
