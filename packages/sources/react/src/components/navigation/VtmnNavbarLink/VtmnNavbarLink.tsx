import * as React from 'react';
import '@vtmn/css-navbar/dist/index-with-vars.css';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface VtmnNavbarLinkProps
  extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * Icon of the navbar link.
   * @type {VitamixId}
   * @defaultValue undefined
   */
  icon: VitamixId;

  /**
   * Label of the navbar link. Mandatory even if label is not shown for screen readers.
   */
  label: string;

  /**
   * Displays the label of the navbar link.
   * @defaultValue true
   */
  showLabel?: boolean;
}

export const VtmnNavbarLink = ({
  icon,
  label,
  showLabel = true,
  className,
  ...props
}: VtmnNavbarLinkProps) => {
  return showLabel ? (
    <a className={`vtmn-navbar_link ${className}`} {...props}>
      <VtmnIcon value={icon} aria-hidden={true} />
      {label}
    </a>
  ) : (
    <a
      className={`vtmn-navbar_link vtmn-navbar_link--icon-alone ${className}`}
      {...props}
    >
      <VtmnIcon value={icon} aria-hidden={true} />
      <span className="vtmn-sr-only">{label}</span>
    </a>
  );
};

const MemoVtmnNavbarLink = React.memo(VtmnNavbarLink);

MemoVtmnNavbarLink.displayName = 'VtmnNavbarLink';

export default MemoVtmnNavbarLink;
