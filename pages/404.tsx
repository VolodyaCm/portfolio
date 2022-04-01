import React from 'react';
import cn from '@/helpers/classNames';

const NotFountPage = () => {
  return (
    <div
      className={cn([
        'container flex justify-center',
        'items-center bg-gray-200 text-slate-300',
        'h-screen',
      ])}
    >
      <div>
        <div className="text-2xl font-bold">404</div>
        <div className="text-xl">This page could not be found.</div>
      </div>
    </div>
  );
};

export default NotFountPage;
