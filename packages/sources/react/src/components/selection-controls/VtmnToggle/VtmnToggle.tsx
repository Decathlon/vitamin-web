import * as React from 'react';
import '@vtmn/css-toggle';
import clsx from 'clsx';
import { VtmnToggleSize } from './types';

export interface VtmnToggleProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * The id of the toggle.
   * @type {string}
   */
  identifier: string;

  /**
   * The label of the toggle.
   * @type {string}
   * @defaultValue undefined
   */
  labelText?: string;

  /**
   * The size of the toggle.
   * @defaultValue 'medium'
   */
  size?: VtmnToggleSize;

  /**
   * The checked state of the toggle.
   * @type {boolean}
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * The disabled state of the toggle.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;
}

export const VtmnToggle = React.forwardRef<HTMLInputElement, VtmnToggleProps>(
  (
    {
      className,
      identifier,
      labelText,
      size = 'medium',
      checked = false,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={clsx('vtmn-toggle', `vtmn-toggle_size--${size}`, className)}
      >
        <div className="vtmn-toggle_switch">
          <input
            type="checkbox"
            id={identifier}
            checked={checked}
            disabled={disabled}
            ref={ref}
            {...props}
          />
          <span aria-hidden="true"></span>
        </div>
        <label htmlFor={identifier}>{labelText}</label>
      </div>
    );
  },
);

const MemoVtmnToggle = React.memo(VtmnToggle);

MemoVtmnToggle.displayName = 'VtmnToggle';

export default MemoVtmnToggle;
