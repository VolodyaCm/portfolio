import Link from 'next/link';
import cn from '@/helpers/classNames';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes } from 'react';

interface INavLinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
}

const NavLinkComponent = ({ path, children }: INavLinkComponentProps) => {
  const { pathname } = useRouter();

  const activeLinkClass = (name: string) => {
    return pathname === name ? 'border-b-4' : '';
  };

  return (
    <Link href="/">
      <a className="px-2 md:px-5 lg:px-7 xl:px-9">
        <span
          className={cn([
            'hover:border-b-4 border-green divide-x-4',
            activeLinkClass(path),
          ])}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};

export default NavLinkComponent;
