import * as React from 'react';
import '@vtmn/css-badge';
import { VtmnBadgeVariant } from './types';

export interface VtmnBadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The variant of the badge.
   * @defaultValue 'default'
   */
  variant?: VtmnBadgeVariant;

  /**
   * The value of the badge.
   * @defaultValue undefined
   */
  value?: number;
}

export const VtmnBadge = ({
  variant = 'default',
  value,
  className,
  ...props
}: VtmnBadgeProps) => {
  return (
    <span
      className={`vtmn-badge vtmn-badge_variant--${variant} ${
        className ? className : ''
      }`}
      {...props}
    >
      {value && value > 99 ? '99+' : value || ''}
    </span>
  );
};

const MemoVtmnBadge = React.memo(VtmnBadge);

MemoVtmnBadge.displayName = 'VtmnBadge';

export default MemoVtmnBadge;
