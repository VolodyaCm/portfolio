import React from 'react';
import cn from '@/helpers/classNames';

export interface ITechItem {
  name: string;
  list: string;
  type: string;
  exp: number;
}

interface ITechItemProps {
  item: ITechItem;
  small?: boolean;
}

const TechItemComponent = ({ item, small }: ITechItemProps) => {
  return (
    <div className={small ? 'flex items-center' : ''}>
      {small && (
        <div
          className={cn([
            'h-5 w-5 rounded-full',
            'bg-gradient-to-r',
            'from-[#819368] to-[#fdbb2d]',
          ])}
        ></div>
      )}
      <h1 className={`text-xl text-slate-50 ${!small && 'pb-4'}`}>
        {item.name}
      </h1>
      {!small && (
        <div className="w-100 bg-gray-100 rounded h-5">
          <div
            style={{ width: `${item.exp}%` }}
            className={cn([
              'rounded h-5',
              'bg-gradient-to-r',
              'from-[#819368]',
              'to-[#fdbb2d]',
            ])}
          ></div>
        </div>
      )}
    </div>
  );
};

export default TechItemComponent;
