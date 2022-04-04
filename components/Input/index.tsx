import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from '@/helpers/classNames';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const INPUT_CLASSNAME =
  'rounded py-2 px-4 text-gray-300 font-medium bg-white';

const Input = ({ className = '', ...props }: InputProps) => {
  return <input className={cn([INPUT_CLASSNAME, className])} {...props} />;
};

export default Input;
