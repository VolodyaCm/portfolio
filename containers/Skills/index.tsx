import React from 'react';
import cn from '@/helpers/classNames';
import TechItem from '@/components/TechItem';
import Image from 'next/image';
import { ITechItem } from '@/components/TechItem';

interface ISkillsContainerProps {
  data: ITechItem[];
}

const SkillsContainer = ({ data }: ISkillsContainerProps) => {
  return (
    <div
      className={cn([
        'bg-gradient-to-r',
        'from-[rgba(116,66,120,2%)] to-[rgba(0,212,255,3%)]',
      ])}
    >
      <div className="container py-24">
        <div>
          <div
            className={cn([
              'flex justify-between items-center',
              'mb-4 sm:mb-7',
            ])}
          >
            <h1 className="text-slate-50 text-3xl sm:text-5xl">
              <span className="text-green">{'<'}</span>
              Skills
              <span className="text-green">{' />'}</span>
            </h1>
            <div>
              <Image alt="code" src="/icons/code.png" width={48} height={38} />
            </div>
          </div>
          <p className="text-slate-50">
            During my career I have got experience with the following
            technologies and tools:{' '}
          </p>
        </div>
        <div
          className={cn([
            'w-100 mt-16 grid gap-y-16 justify-between',
            'grid-cols-[repeat(auto-fill,minmax(100px,300px))]',
          ])}
        >
          {data.map((item) =>
            item.list === 'main' ? (
              <TechItem key={item.name} item={item} />
            ) : null
          )}
        </div>
        <div className="flex w-100 mt-16 gap-y-10 gap-x-16 flex-wrap">
          {data.map((item) =>
            item.list === 'other' ? (
              <TechItem key={item.name} item={item} small />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
