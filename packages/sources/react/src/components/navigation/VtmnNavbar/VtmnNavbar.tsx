import * as React from 'react';
import '@vtmn/css-button/dist/index-with-vars.css';

export interface VtmnNavbarProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * The logo anchor of the navbar.
   * @type {string}
   * @defaultValue 'default'
   */
  logoHref?: string;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnNavbar = ({
  logoHref = '#',
  children,
  ...props
}: VtmnNavbarProps) => {
  return (
    <nav className="vtmn-navbar" aria-label="navbar" {...props}>
      {children}
    </nav>
  );
};

const MemoVtmnNavbar = React.memo(VtmnNavbar);

MemoVtmnNavbar.displayName = 'VtmnNavbar';

export default MemoVtmnNavbar;
