import * as React from 'react';
import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VtmnTabsAlign, VtmnTabsSize } from './types';
import { VtmnDivider } from '../../../components/structure/VtmnDivider';
import clsx from 'clsx';

export interface VtmnTabsProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * The alignment of the tabs.
   * @type {VtmnTabsAlign}
   * @defaultValue 'start'
   */
  align?: VtmnTabsAlign;

  /**
   * The size of the tabs.
   * @type {VtmnTabsSize}
   * @defaultValue 'medium'
   */
  size?: VtmnTabsSize;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnTabs = ({ className, children, ...props }: VtmnTabsProps) => {
  return (
    <nav>
      <ul
        className={clsx(
          'vtmn-tabs',
          `vtmn-tabs_align--${props.align}`,
          `vtmn-tabs_size--${props.size}`,
          className,
        )}
        role="tablist"
        {...props}
      >
        {children}
      </ul>
      <VtmnDivider />
    </nav>
  );
};

const MemoVtmnTabs = React.memo(VtmnTabs);

MemoVtmnTabs.displayName = 'VtmnTabs';

export default MemoVtmnTabs;
