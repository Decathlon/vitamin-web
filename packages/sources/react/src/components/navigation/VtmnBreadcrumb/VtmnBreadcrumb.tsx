import * as React from 'react';
import '@vtmn/css-breadcrumb/dist/index-with-vars.css';
import clsx from 'clsx';

export interface VtmnBreadcrumbProps
  extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnBreadcrumb = ({
  className,
  children,
  ...props
}: VtmnBreadcrumbProps) => {
  return (
    <nav className={clsx('vtmn-breadcrumb', className)} {...props}>
      <ol>{children}</ol>
    </nav>
  );
};

const MemoVtmnBreadcrumb = React.memo(VtmnBreadcrumb);

MemoVtmnBreadcrumb.displayName = 'VtmnBreadcrumb';

export default MemoVtmnBreadcrumb;
