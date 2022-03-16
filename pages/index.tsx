import type { NextPage } from 'next';
import Htag from '@components/Htag';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Hello</h1>
      <Htag size={2}>Hello</Htag>
      <Htag size={3}>Hello</Htag>
      <Htag size={4}>Hello</Htag>
    </div>
  );
};

export default Home;
