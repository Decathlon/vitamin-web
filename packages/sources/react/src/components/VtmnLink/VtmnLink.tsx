import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-link';
import { VtmnLinkSize } from './types';

export interface VtmnLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * The size of the link.
   * @default 'medium'
   */
  size?: VtmnLinkSize;

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @default false
   */
  isStandalone?: boolean;
}

export const VtmnLink = ({
  isStandalone = false,
  size = 'medium',
  children,
  className,
  ...props
}: VtmnLinkProps) => {
  return (
    <a
      className={clsx(
        'vtmn-link',
        `vtmn-link_size--${size}`,
        { 'vtmn-link--standalone': isStandalone },
        className,
      )}
      {...props}>
      {children}
    </a>
  );
};

export default React.memo(VtmnLink);
