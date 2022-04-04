import { FC } from 'react';
import cn from '@/helpers/classNames';
import AdminMenuLinkProps from '@/containers/AdminPageLayout/Link';
import { useAuth } from '@/fireb/db/me';

const AdminPageLayoutContainer: FC = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div
      className={cn([
        'w-full',
        'bg-gradient-to-r',
        'from-[rgba(116,66,120,4%)] to-[rgba(0,212,255,3%)]',
      ])}
    >
      <div
        className={cn([
          'sm:container grid sm:grid-cols-[1fr_3fr]',
          'h-screen md:gap-10 text-slate-100',
        ])}
      >
        <div className="w-30 text-md bg-gray-300 pl-2 py-2 sm:py-10 sm:pl-10">
          <AdminMenuLinkProps pathName="/admin/main-info">
            Main Info
          </AdminMenuLinkProps>
          <AdminMenuLinkProps pathName="/admin/skills">
            Skills
          </AdminMenuLinkProps>
          <AdminMenuLinkProps pathName="/admin/experience">
            Experience
          </AdminMenuLinkProps>
          <AdminMenuLinkProps pathName="/" onClick={logout}>
            Logout
          </AdminMenuLinkProps>
        </div>
        <div className="mt-5 px-4 md:p-10">{children}</div>
      </div>
    </div>
  );
};

export default AdminPageLayoutContainer;
