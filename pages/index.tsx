import type { NextPage } from 'next';
import Header from '@/containers/Header';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
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
        <Header />
      </motion.div>
    </div>
  );
};

export default Home;
