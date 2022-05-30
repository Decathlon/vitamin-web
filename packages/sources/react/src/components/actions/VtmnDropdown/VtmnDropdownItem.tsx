import '@vtmn/css-dropdown/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnDivider } from '../../structure/VtmnDivider/VtmnDivider';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';

export interface VtmnDropdownItemProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Whether the dropdown item is selected.
   * @defaultValue false
   */
  selected?: boolean;

  /**
   * Whether there is a divider at the end of the dropdown item.
   * @defaultValue false
   */
  divider?: boolean;

  /**
   * The leading icon of the dropdown item.
   * @defaultValue undefined
   */
  icon?: VitamixId;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnDropdownItem = ({
  selected = false,
  divider = false,
  icon,
  children,
  ...props
}: VtmnDropdownItemProps) => {
  return (
    <React.Fragment>
      <input type="checkbox" {...props} />
      <label htmlFor={props['id'] ?? undefined}>
        {icon ? <VtmnIcon value={icon} /> : null}
        {children}
      </label>
      {divider ? (
        <VtmnDivider orientation="horizontal" role="separator" />
      ) : null}
    </React.Fragment>
  );
};

const MemoVtmnDropdownItem = React.memo(VtmnDropdownItem);

MemoVtmnDropdownItem.displayName = 'VtmnDropdownItem';

export default MemoVtmnDropdownItem;
