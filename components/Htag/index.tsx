import React, { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Htag.module.scss';

interface HtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size: 1 | 2 | 3 | 4;
  children: ReactNode;
}

const Htag = ({ size, children, className, ...props }: HtagProps) => {
  return (
    <>
      {size === 1 && (
        <h1 className={`${styles.htag} ${styles.h1} ${className}`} {...props}>
          {children}
        </h1>
      )}
      {size === 2 && (
        <h2 className={`${styles.htag} ${styles.h2} ${className}`} {...props}>
          {children}
        </h2>
      )}
      {size === 3 && (
        <h3 className={`${styles.htag} ${styles.h3} ${className}`} {...props}>
          {children}
        </h3>
      )}
      {size === 4 && (
        <h4 className={`${styles.htag} ${styles.h4}, ${className}`} {...props}>
          {children}
        </h4>
      )}
    </>
  );
};

export default Htag;
