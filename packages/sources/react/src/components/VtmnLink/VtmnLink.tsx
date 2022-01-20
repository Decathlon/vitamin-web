import * as React from 'react';
import '@vtmn/css-link/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnLinkSize } from './types';

export interface VtmnLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * The size of the link.
   * @defaultValue 'medium'
   */
  size?: VtmnLinkSize;

  /**
   * Whether link is standalone or not.
   * @type {boolean}
   * @defaultValue false
   */
  standalone?: boolean;

  /**
   * Whether link has an icon or not.
   * @type {boolean}
   * @defaultValue false
   */
  iconAlong?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
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

const MemoVtmnLink = React.memo(VtmnLink);

MemoVtmnLink.displayName = 'VtmnLink';

export default MemoVtmnLink;
