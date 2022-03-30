import { FC, HTMLAttributes } from 'react';
import cn from '@/helpers/classNames';

interface ITagComponentProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const TagComponent: FC<ITagComponentProps> = ({
  text,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn([
        'py-1 px-3 rounded text-sm bg-gray-200 text-slate-300',
        className,
      ])}
    >
      {children || text}
    </div>
  );
};

export default TagComponent;
