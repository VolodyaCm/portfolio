import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from '@/helpers/classNames';

interface ButtonComponentProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  hey?: string;
  primary?: boolean;
  loading?: boolean;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  className = '',
  children,
  primary,
  disabled,
  loading,
  ...props
}) => {
  const styles = ['px-6 py-4 rounded text-xl', className];

  if (disabled || loading) {
    styles.push('bg-[#8c8c8c]');
  } else if (primary) {
    styles.push('bg-green');
  } else {
    styles.push('bg-gray-400');
  }

  return (
    <button disabled={disabled || loading} className={cn(styles)} {...props}>
      {loading ? 'Loading' : children}
    </button>
  );
};

export default ButtonComponent;
