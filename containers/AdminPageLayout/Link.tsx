import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from '@/helpers/classNames';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface AdminMenuLinkProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  pathName: string;
}

const AdminMenuLink: FC<AdminMenuLinkProps> = ({
  children,
  pathName,
  ...props
}) => {
  const { asPath } = useRouter();

  return (
    <Link passHref href={pathName}>
      <a
        className={cn([
          'p-2 hover:bg-gray-200 rounded-tl rounded-bl block',
          asPath === pathName ? 'bg-gray-200' : '',
        ])}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default AdminMenuLink;
