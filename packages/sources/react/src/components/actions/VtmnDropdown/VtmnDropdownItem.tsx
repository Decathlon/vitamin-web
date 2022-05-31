import '@vtmn/css-dropdown/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnDivider } from '../../structure/VtmnDivider/VtmnDivider';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';

export interface VtmnDropdownItemProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
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

  /**
   * Called when item has changed
   * @type {void}
   * @defaultValue undefined
   */
  onChange?: () => void;
}

export const VtmnDropdownItem = React.forwardRef<
  HTMLInputElement,
  VtmnDropdownItemProps
>(
  (
    {
      divider = false,
      icon,
      children,
      onChange = undefined,
      ...props
    }: VtmnDropdownItemProps,
    ref,
  ) => {
    const [checked, setChecked] = React.useState(false);

    return (
      <React.Fragment>
        <input
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={() =>
            setChecked(() => {
              return !checked;
            })
          }
          {...props}
        />
        <label htmlFor={props['id'] ?? undefined}>
          {icon ? <VtmnIcon value={icon} /> : null}
          {children}
        </label>
        {divider ? (
          <VtmnDivider orientation="horizontal" role="separator" />
        ) : null}
      </React.Fragment>
    );
  },
);

const MemoVtmnDropdownItem = React.memo(VtmnDropdownItem);

MemoVtmnDropdownItem.displayName = 'VtmnDropdownItem';

export default MemoVtmnDropdownItem;