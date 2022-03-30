import React from 'react';
import cn from '@/helpers/classNames';
import ProjectItem, { IProjectItem } from '@/components/ProjectItem';

interface IWorkExpContainerProps {
  data: IProjectItem[];
}

const cellCn = cn([
  'rounded bg-[rgba(80,80,87,40%)] p-7 text-slate-50 text-xl',
  'font-bold',
]);

const WorkExperienceContainer = ({ data }: IWorkExpContainerProps) => {
  return (
    <div
      className={cn([
        'bg-gradient-to-r',
        'from-[rgba(116,66,120,2%)] to-[rgba(0,212,255,3%)]',
      ])}
    >
      <div className={cn(['container py-24'])}>
        <div>
          <div
            className={cn([
              'flex justify-between items-center',
              'mb-4 sm:mb-7',
            ])}
          >
            <h1 className="text-slate-50 text-3xl sm:text-5xl">
              <span className="text-green">{'<'}</span>
              Work Experience
              <span className="text-green">{' />'}</span>
            </h1>
          </div>
        </div>
        <div className="grid gap-6 mt-16">
          <div className="w-100 gap-6 grid grid-cols-[1fr_2fr]">
            <div className={cellCn}>Project</div>
            <div className={cellCn}>Description</div>
          </div>
          {data.map((p) => (
            <ProjectItem key={p.id} item={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceContainer;
