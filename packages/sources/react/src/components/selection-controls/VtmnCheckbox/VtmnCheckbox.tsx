import * as React from 'react';
import '@vtmn/css-checkbox/dist/index-with-vars.css';

export interface VtmnCheckboxProps
  extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * The id of the checkbox.
   * @type {string}
   */
  identifier: string;

  /**
   * The label of the checkbox.
   * @type {string}
   * @defaultValue undefined
   */
  labelText?: string;

  /**
   * The checked state of the checkbox.
   * @type {boolean}
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * The disabled state of the checkbox.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;
}

export const VtmnCheckbox = ({
  identifier,
  labelText,
  checked = false,
  disabled = false,
  ...props
}: VtmnCheckboxProps) => {
  return (
    <div>
      <input
        className="vtmn-checkbox"
        type="checkbox"
        id={identifier}
        checked={checked}
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
