import type { NextPage } from 'next';
import Header from '@/containers/Header';
import Skills from '@/containers/Skills';
import { motion } from 'framer-motion';
import { getMe } from '@/fireb/db/me';
import { getSkills } from '@/fireb/db/skills';
import { IHeaderData } from '@/containers/Header';
import { ITechItem } from '@/components/TechItem';

interface IHomePageProps {
  meData: IHeaderData;
  skillsData: ITechItem[];
}

const Home: NextPage<IHomePageProps> = ({ meData, skillsData }) => {
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
      </motion.div>
    </div>
  );
};

export async function getServerSideProps() {
  const meData = await getMe();
  const skillsData = await getSkills();

  return {
    props: { meData, skillsData },
  };
}

export default Home;
