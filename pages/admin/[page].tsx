import AdminPageLayout from '@/containers/AdminPageLayout';
import MainInfor from '@/containers/Admin/MainInfo';
import Skills from '@/containers/Admin/Skills';
import Login from '@/containers/Admin/Login';
import { withPreloader } from '@/containers/Preloader';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuth } from '@/fireb/db/me';
import { GetServerSideProps } from 'next';

enum PAGES {
  MAIN = 'main-info',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  LOGIN = 'login',
}

const AdminPage: FC = () => {
  const router = useRouter();
  const { page = '' } = router.query;
  const { currentUser } = useAuth();

  if (!currentUser && page !== 'login') {
    router.push('/admin/login');
    return null;
  }

  return page === PAGES.LOGIN ? (
    <Login />
  ) : (
    <AdminPageLayout>
      {page === PAGES.MAIN && <MainInfor />}
      {page === PAGES.SKILLS && <Skills />}
    </AdminPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;
  const pages = Object.values(PAGES) as Array<string>;

  if (!pages.includes(page as string)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default withPreloader(AdminPage);
