import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VtmnBadge } from '../../../components/indicators/VtmnBadge';

export interface VtmnTabsItemProps
  extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * The href of the tab item.
   * @defaultValue null
   */
  href?: string;

  /**
   * The leading icon of the tab item.
   * @defaultValue null
   */
  icon?: VitamixId;

  /**
   * The value of the ending tab item badge.
   * @defaultValue null
   */
  badgeValue?: number;

  /**
   * Check whether the tabs item is currently selected or not.
   * @defaultValue null
   */
  selected?: boolean;

  onClick?: React.MouseEventHandler;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnTabsItem = ({
  icon,
  href = '#',
  badgeValue,
  selected = false,
  children,
  onClick,
  ...props
}: VtmnTabsItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <li role="tab">
      <a
        href={href}
        className={selected ? 'selected' : ''}
        onClick={handleClick}
        {...props}
      >
        {icon ? (
          <VtmnIcon
            value={icon}
            aria-hidden="true"
            style={{ color: 'inherit', fontSize: 'inherit' }}
          />
        ) : null}
        {children}
        {badgeValue ? <VtmnBadge value={badgeValue} /> : null}
      </a>
    </li>
  );
};

const MemoVtmnTabsItem = React.memo(VtmnTabsItem);

MemoVtmnTabsItem.displayName = 'VtmnTabsItem';

export default MemoVtmnTabsItem;
