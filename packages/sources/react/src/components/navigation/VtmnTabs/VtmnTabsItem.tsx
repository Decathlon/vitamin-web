import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VtmnBadge } from '../../../components/indicators/VtmnBadge';
export interface VtmnTabsItemProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The index/position of the components among siblings.
   * @defaultValue undefined
   */
  itemIndex?: number;

  /**
   * Is the item currently active.
   * @defaultValue false
   */
  isActive?: boolean;

  /**
   * The action on click
   * @defaultValue undefined
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

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
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnTabsItem = React.forwardRef<
  HTMLButtonElement,
  VtmnTabsItemProps
>(
  (
    { isActive, itemIndex, onClick, icon, badgeValue, children, ...props },
    ref,
  ) => {
    return (
      <li>
        <button
          role="tab"
          aria-selected={isActive}
          ref={ref}
          {...(isActive ? {} : { tabIndex: -1 })}
          onClick={onClick}
          {...props}
        >
          {Boolean(icon) && (
            <VtmnIcon
              value={icon as VitamixId}
              aria-hidden="true"
              style={{ color: 'inherit', fontSize: 'inherit' }}
            />
          )}
          {children}
          {Boolean(badgeValue) && <VtmnBadge value={badgeValue} />}
        </button>
      </li>
    );
  },
);

const MemoVtmnTabsItem = React.memo(VtmnTabsItem);

MemoVtmnTabsItem.displayName = 'VtmnTabsItem';

export default MemoVtmnTabsItem;
