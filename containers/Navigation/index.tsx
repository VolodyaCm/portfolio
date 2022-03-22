import React from 'react';
import Link from 'next/link';
import cn from '@/helpers/classNames';
import { useRouter } from 'next/router';

const Navigation = () => {
  const { pathname } = useRouter();

  const activeLinkClass = (name: string) => {
    return pathname === name ? 'border-b-4' : '';
  };

  return (
    <div className="w-100 h-24 md:h-28 flex items-center">
      <div
        className={cn([
          'container bg-gray-300 h-16 flex',
          'justify-between items-center rounded',
          'px-7 shadow-2xl',
        ])}
      >
        <div className="font-bold text-2xl">
          <span className="text-slate-50">am</span>
          <span className="text-green bold">here.</span>
        </div>
        <object
          className="md:hidden"
          data="/icons/menu.svg"
          width="40"
          height="40"
        ></object>
        <nav className="hidden md:block text-slate-50 text-lg">
          <Link href="/">
            <a className="px-2 md:px-5 lg:px-7 xl:px-9">
              <span
                className={cn([
                  'hover:border-b-4 border-green divide-x-4',
                  activeLinkClass('/'),
                ])}
              >
                Home
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="px-2 md:px-5 lg:px-7 xl:px-9">
              <span
                className={cn([
                  'hover:border-b-4 border-green divide-x-4',
                  activeLinkClass('/about'),
                ])}
              >
                About
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="px-2 md:px-5 lg:px-7 xl:px-9">
              <span
                className={cn([
                  'hover:border-b-4 border-green divide-x-4',
                  activeLinkClass('/skills'),
                ])}
              >
                Skills
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="px-2 md:px-5 lg:px-7 xl:px-9">
              <span
                className={cn([
                  'hover:border-b-4 border-green divide-x-4',
                  activeLinkClass('/portfolio'),
                ])}
              >
                Portfolio
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="px-2 md:px-5 lg:px-7 xl:px-9">
              <span
                className={cn([
                  'hover:border-b-4 border-green divide-x-4',
                  activeLinkClass('/contacts'),
                ])}
              >
                Contacts
              </span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
