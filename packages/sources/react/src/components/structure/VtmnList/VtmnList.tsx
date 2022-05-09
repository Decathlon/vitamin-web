import * as React from 'react';
import clsx from 'clsx';
import { VtmnListSize } from './types';

export const VtmnListItemStartVisual = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('vtmn-list_start-visual', className)} {...props}>
    {children}
  </div>
);

export const VtmnListItemText = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('vtmn-list_text', className)} {...props}>
    {children}
  </div>
);

export const VtmnListItemEndAction = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('vtmn-list_end-action', className)} {...props}>
    {children}
  </div>
);

export interface VtmnListItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  /**
   * Disabled state of the item
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Whether to show the divider under the item
   * @type {boolean}
   * @defaultValue false
   */
  divider?: boolean;

  /**
   * Size of the item
   * @type {VtmnListSize}
   * @defaultValue 'medium'
   */
  size?: VtmnListSize;

  /**
   * Tab index of the item
   * @type {number}
   */
  tabIndex?: number;
}

export const VtmnListItem = ({
  disabled = false,
  divider = true,
  size = 'medium',
  tabIndex,
  children,
  className,
  ...props
}: VtmnListItemProps) => (
  <li
    aria-disabled={disabled}
    className={clsx(
      !divider && 'vtmn-list_item--without-divider',
      `vtmn-list_item-size--${size}`,
      className,
    )}
    tabIndex={tabIndex}
    {...props}
  >
    {children}
  </li>
);

export interface VtmnListProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * Whether to add divider or not between the items in the list
   * @type boolean
   * @defaultValue true
   */
  divider?: boolean;

  /**
   * Whether to disable every items in the list
   * @type boolean
   * @defaultValue true
   */
  disabled?: boolean;
}

export const VtmnList = ({
  divider = true,
  disabled = false,
  children,
  className,
  ...props
}: VtmnListProps) => {
  return (
    <ul className={clsx('vtmn-list', className)} {...props}>
      {React.Children.map(
        children,
        (child, index) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            index,
            divider,
            disabled,
            ...child.props,
          }),
      )}
    </ul>
  );
};

const MemoVtmnList = React.memo(VtmnList);

MemoVtmnList.displayName = 'VtmnList';

export default MemoVtmnList;
