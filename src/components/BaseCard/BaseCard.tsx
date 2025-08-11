import type { ReactNode } from 'react';
import { classNames } from '../../utils/cn';

export interface BaseCardProps {
  border?: boolean;
  shadow?: boolean;
  children: ReactNode;
  className?: string;
}

const BaseCard = ({ border, shadow, children, className }: BaseCardProps) => {
  return (
    <div
      className={classNames(
        'bg-neutral-N0 rounded-xl p-6',
        shadow && 'shadow-md',
        border && 'border-neutral-N200 border',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BaseCard;
