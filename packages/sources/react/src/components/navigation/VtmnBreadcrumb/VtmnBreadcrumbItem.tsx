import * as React from 'react';
import '@vtmn/css-breadcrumb/dist/index-with-vars.css';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface VtmnBreadcrumbItemProps
  extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * The leading icon of the breadcrumb item.
   * @defaultValue null
   */
  icon?: VitamixId;

  /**
   * The href of the breadcrumb item.
   * @defaultValue null
   */
  href?: string;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnBreadcrumbItem = ({
  icon,
  href,
  children,
  className,
  ...props
}: VtmnBreadcrumbItemProps) => {
  return (
    <li {...props}>
      {icon ? (
        <VtmnIcon
          value={icon}
          aria-hidden="true"
          style={{ color: 'inherit', fontSize: 'inherit' }}
        />
      ) : null}
      {href ? <a href={href}>{children}</a> : children}
    </li>
  );
};

const MemoVtmnBreadcrumbItem = React.memo(VtmnBreadcrumbItem);

MemoVtmnBreadcrumbItem.displayName = 'VtmnBreadcrumbItem';

export default MemoVtmnBreadcrumbItem;
