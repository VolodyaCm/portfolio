import { FC } from 'react';
import { useAuth } from '@/fireb/db/me';
import Loader from './Loader';

const Preloader: FC = ({ children }) => {
  const { loading } = useAuth();

  return (
    <>
      {loading ? (
        <div>
          <div className="container flex justify-center items-center h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export const withPreloader = <T extends object>(Component: FC) => {
  const PreloaderContainer = (props: T) => {
    return (
      <Preloader>
        <Component {...props} />
      </Preloader>
    );
  };
  return PreloaderContainer;
};

export default Preloader;
