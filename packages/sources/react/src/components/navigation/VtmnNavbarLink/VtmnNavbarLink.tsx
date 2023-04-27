import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-navbar/dist/index-with-vars.css';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { computeRel } from '@/utils/link';
import { VtmnBadge } from '@/components/indicators/VtmnBadge';

export interface VtmnNavbarLinkProps
  extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * Icon of the navbar link.
   * @type {VitamixId}
   * @defaultValue undefined
   */
  icon: VitamixId;

  /**
   * The badge to render on top of the navbar link.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnNavbarLink = ({
  icon,
  className,
  children,
  ...props
}: VtmnNavbarLinkProps) => {
  const relAttrValues = props?.target && computeRel(props.target, props.rel);
  const childrenArray = React.Children.toArray(children);
  return (
    <a
      className={clsx('vtmn-navbar_link', className)}
      {...props}
      {...(relAttrValues && { rel: relAttrValues })}
    >
      {childrenArray.find((child: ReactElement) => {
        console.log(child);
        return child.type === VtmnBadge;
      })}
      <VtmnIcon value={icon} aria-hidden={true} />
      {childrenArray.find((child: ReactElement) => child.type === 'span')}
    </a>
  );
};

const MemoVtmnNavbarLink = React.memo(VtmnNavbarLink);

MemoVtmnNavbarLink.displayName = 'VtmnNavbarLink';

export default MemoVtmnNavbarLink;
