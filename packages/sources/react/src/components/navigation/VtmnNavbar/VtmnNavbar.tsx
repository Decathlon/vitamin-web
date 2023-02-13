import * as React from 'react';
import '@vtmn/css-navbar';

export interface VtmnNavbarProps extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * The left navigation of the navbar.
   * @defaultValue undefined
   */
  leftNav?: React.ReactNode;

  /**
   * The logo of the navbar.
   * @defaultValue undefined
   */
  logo?: React.ReactNode;

  /**
   * The logo anchor of the navbar.
   * @type {string}
   * @defaultValue 'default'
   */
  logoHref?: string;

  /**
   * The middle area of the navbar.
   * @defaultValue undefined
   */
  middleArea?: React.ReactNode;

  /**
   * The right navigation of the navbar.
   * @defaultValue undefined
   */
  rightNav?: React.ReactNode;
}

export const VtmnNavbar = ({
  leftNav,
  logo,
  logoHref = '#',
  middleArea,
  rightNav,
}: VtmnNavbarProps) => {
  return (
    <nav className="vtmn-navbar" aria-label="navbar">
      {leftNav && <div className="navbar_left-navigation">{leftNav}</div>}
      {logo && (
        <div className="navbar_logo">
          <a href={logoHref}>{logo}</a>
        </div>
      )}
      {middleArea && <div className="navbar_middle-area">{middleArea}</div>}
      {rightNav && <div className="navbar_right-navigation">{rightNav}</div>}
    </nav>
  );
};

const MemoVtmnNavbar = React.memo(VtmnNavbar);

MemoVtmnNavbar.displayName = 'VtmnNavbar';

export default MemoVtmnNavbar;
