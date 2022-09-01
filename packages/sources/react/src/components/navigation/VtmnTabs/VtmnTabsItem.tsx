import '@vtmn/css-tabs/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VtmnBadge } from '../../../components/indicators/VtmnBadge';

export interface VtmnTabsItemProps
  extends React.ComponentPropsWithoutRef<'button'> {
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
>(({ icon, badgeValue, children, ...props }, ref) => {
  return (
    <li role="tab">
      <button
        ref={ref}
        {...props}
        onFocus={(e) => {
          e.currentTarget.setAttribute('aria-selected', 'true');
        }}
        onBlur={(e) => {
          e.currentTarget.setAttribute('aria-selected', 'false');
        }}
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
      </button>
    </li>
  );
});

const MemoVtmnTabsItem = React.memo(VtmnTabsItem);

MemoVtmnTabsItem.displayName = 'VtmnTabsItem';

export default MemoVtmnTabsItem;
