import React from 'react';
import Navigation from '@/containers/Navigation';
import Image from 'next/image';
import cn from '@/helpers/classNames';
import SocialLinks from '@/containers/SocialLinks';

export interface IHeaderData {
  title: string;
  description: string;
}

const Header = ({ data }: { data: IHeaderData }) => {
  return (
    <div className="w-100 h-screen bg-gray-200">
      <header className="container">
        <Navigation />
        <div
          className={cn([
            'mt-5 md:mt-14',
            'grid-cols-[minmax(100px,2fr)_1fr]',
            'sm:grid-cols-[minmax(100px,max-content)_1fr]',
            'grid gap-7 md:gap-16',
          ])}
        >
          <div
            className={cn([
              'rounded-3xl p-5 sm-480:p-7 max-w-xs max-h-xs',
              'sm:w-64 sm:h-64 md:w-80 md:h-80',
              'relative',
            ])}
          >
            <div
              className={cn([
                'absolute bg-gray-300 shadow-xl',
                'rounded-3xl p-8 max-w-xs max-h-xs',
                'inset-0 rotate-[-2deg]',
              ])}
            ></div>
            <Image
              className="rounded-3xl"
              alt="profile"
              src="/profile.jpg"
              height={100}
              width={100}
              layout="responsive"
            />

            <SocialLinks className="hidden sm:flex md:hidden w-100 mt-16" />
          </div>

          <SocialLinks
            className={cn([
              'sm:hidden flex flex-col',
              'h-100 justify-around sm:w-52',
            ])}
          />
          <div className="col-span-2 sm:col-span-1">
            <SocialLinks horisontal className="hidden md:flex w-100" />
            <h1
              className={cn([
                'text-slate-50 text-3xl sm:text-5xl',
                'mb-4 sm:mb-7 md:my-7',
              ])}
            >
              {data.title}
            </h1>
            <p className="text-slate-50 text-sm sm:text-lg max-w-4xl">
              {data.description}
            </p>
            <button
              className={cn([
                'bg-green text-lg text-slate-50',
                'w-80 h-20 rounded mt-5 sm:mt-14 uppercase shadow-xl',
              ])}
            >
              My Portfolio
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
