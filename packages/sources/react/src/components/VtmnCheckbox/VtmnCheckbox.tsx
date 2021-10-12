import * as React from 'react';

import '@vtmn/css-checkbox/dist/index-with-vars.css';

export interface VtmnCheckboxProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * ID of the checkbox.
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the checkbox.
   * @type {string}
   * @defaultValue undefined
   */
  labelText?: string;

  /**
   * Label text linked to the checkbox.
   * @type {boolean}
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * Label text linked to the checkbox.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;
}

export const VtmnCheckbox = ({
  identifier,
  labelText,
  checked,
  disabled,
  ...props
}: VtmnCheckboxProps) => {
  return (
    <div>
      <input
        className="vtmn-checkbox"
        type="checkbox"
        id={identifier}
        defaultChecked={checked}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

const MemoVtmnCheckbox = React.memo(VtmnCheckbox);

MemoVtmnCheckbox.displayName = 'VtmnCheckbox';

export default MemoVtmnCheckbox;
