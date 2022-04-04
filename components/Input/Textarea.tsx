import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import cn from '@/helpers/classNames';
import { INPUT_CLASSNAME } from '.';

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextareaComponent = ({ className = '', ...props }: TextareaProps) => {
  return <textarea className={cn([INPUT_CLASSNAME, className])} {...props} />;
};

export default TextareaComponent;
