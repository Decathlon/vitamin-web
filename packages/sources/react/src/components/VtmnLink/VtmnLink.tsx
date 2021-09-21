import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-link/dist/index-with-vars.css';
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
  standalone?: boolean;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @default false
   */
  iconAlong?: boolean;
}

export const VtmnLink = ({
  iconAlong = false,
  standalone = false,
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
        { 'vtmn-link--standalone': standalone },
        { 'vtmn-link--icon-along': standalone && iconAlong },
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default React.memo(VtmnLink);
