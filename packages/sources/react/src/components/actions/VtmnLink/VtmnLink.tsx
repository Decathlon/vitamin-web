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
  size = 'medium',
  children,
  className,
  ...props
}: VtmnLinkProps) => {
  const relAttrValues = Array.from(
    new Set([
      // If component has a given "rel" attribute, keep values
      ...(props?.rel?.split(' ') ?? []),
      // If comp has "target" set to "blank", add some values
      ...(props?.target === '_blank' ? ['noopener', 'noreferrer'] : []),
    ]),
  )
    .join(' ')
    .trim();

  return (
    <a
      className={clsx(
        'vtmn-link',
        `vtmn-link_size--${size}`,
        { 'vtmn-link--standalone': standalone },
        { 'vtmn-link--reversed': reversed },
        { 'vtmn-link--icon-along': standalone && iconAlong },
        className,
      )}
      {...(relAttrValues && { rel: relAttrValues })}
      {...props}
    >
      {children}
    </a>
  );
};

const MemoVtmnLink = React.memo(VtmnLink);

MemoVtmnLink.displayName = 'VtmnLink';

export default MemoVtmnLink;
