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
   * The target attribute of the link.
   * @type {string}
   * @defaultValue undefined
   * @requires
   */
  target: string;

  /**
   * The rel attribute of the link.
   * @type {string}
   * @defaultValue undefined
   */
  rel?: string;

  /**
   * Whether link is reversed or not.
   * @type {boolean}
   * @defaultValue false
   */
  reversed?: boolean;

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
  reversed = false,
  target,
  rel = '',
  size = 'medium',
  children,
  className,
  ...props
}: VtmnLinkProps) => {
  return (
    <a
      target={target}
      rel={
        target === '_blank'
          ? Array.from(
              new Set(rel.split(' ')).add('noopener').add('noreferrer'),
            )
              .join(' ')
              .trim()
          : rel
      }
      className={clsx(
        'vtmn-link',
        `vtmn-link_size--${size}`,
        { 'vtmn-link--standalone': standalone },
        { 'vtmn-link--reversed': reversed },
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
