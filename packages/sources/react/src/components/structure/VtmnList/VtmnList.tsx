import * as React from 'react';
import '@vtmn/css-list';
import clsx from 'clsx';
import { VtmnListSize } from './types';
import { computeRel } from '@/utils/link';

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

/**
 * Custom component to inject elements under the link
 * NB: Outside the link must be only the VtmnListItemEndAction because it can be a action button
 * @param children
 * @param className
 * @param rel
 * @param target
 * @param tabIndex
 * @param props
 * @constructor
 */
export const VtmnListItemLink = ({
  children,
  className,
  rel,
  target,
  tabIndex,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => (
  <>
    <a
      className={clsx('vtmn-list__link', className)}
      rel={target && computeRel(target, rel)}
      {...props}
    >
      {React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) && child.type !== VtmnListItemEndAction,
      )}
    </a>
    {React.Children.toArray(children).filter(
      (child) =>
        React.isValidElement(child) && child.type === VtmnListItemEndAction,
    )}
  </>
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

  /**
   * Redirection link
   * @type {string}
   */
  href?: string;

  /**
   * Target of the link
   * @type {string}
   */
  target?: string;

  /**
   * Rel of the link
   * @type {string}
   */
  rel?: string;
}

export const VtmnListItem = ({
  disabled = false,
  divider = true,
  size = 'medium',
  href,
  target,
  rel,
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
    {href ? (
      <VtmnListItemLink
        href={href}
        rel={rel}
        tabindex={disabled && -1}
        target={target}
        aria-label={props['aria-label']}
        aria-disabled={disabled}
      >
        {children}
      </VtmnListItemLink>
    ) : (
      React.Children.map(children, (child) => child)
    )}
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
