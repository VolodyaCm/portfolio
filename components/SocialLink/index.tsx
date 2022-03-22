import { HTMLAttributes } from 'react';
import Link from 'next/link';
import cn from '@/helpers/classNames';

interface ISocialLinkComponentProps extends HTMLAttributes<HTMLDivElement> {
  iconName?: string;
  className?: string;
  href: string;
  text?: string;
  width?: string;
  height?: string;
}

const SocialLinkComponent = ({
  iconName,
  className = '',
  href,
  text = '',
  width = '24',
  height = '24',
  ...props
}: ISocialLinkComponentProps) => {
  return (
    <div
      className={cn([
        className,
        'bg-gray-200 w-min rounded-full',
        'border-4 border-gray-100',
        iconName ? 'p-3 md:p-4' : 'px-10 py-4',
      ])}
      {...props}
    >
      <Link href={href}>
        <a>
          {iconName ? (
            <object
              data={`/icons/${iconName}.svg`}
              width={width}
              height={height}
            ></object>
          ) : (
            <span className="text-lg text-slate-50 leading-none">{text}</span>
          )}
        </a>
      </Link>
    </div>
  );
};

export default SocialLinkComponent;
