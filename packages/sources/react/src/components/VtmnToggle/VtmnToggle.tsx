import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-toggle/dist/index-with-vars.css';
import { VtmnToggleSize } from './types';

export interface VtmnToggleProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * ID of the toggle.
   * @type {string}
   */
  identifier: string;

  /**
   * Label text linked to the toggle.
   * @type {string}
   */
  labelText: string;

  /**
   * The size of the toggle.
   * @default 'medium'
   */
  size?: VtmnToggleSize;

  /**
   * Label text linked to the toggle.
   * @type {boolean}
   * @default false
   */
  checked?: boolean;

  /**
   * Disabled state of the toggle.
   * @type {boolean}
   */
  disabled?: boolean;
}

export const VtmnToggle = ({
  className,
  identifier,
  labelText,
  size = 'medium',
  checked,
  disabled,
  ...props
}: VtmnToggleProps) => {
  return (
    <div
      className={clsx('vtmn-toggle', `vtmn-toggle_size--${size}`, className)}
    >
      <div className="vtmn-toggle_switch">
        <input
          type="checkbox"
          id={identifier}
          defaultChecked={checked}
          disabled={disabled}
          {...props}
        />
        <span aria-hidden="true"></span>
      </div>
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

export default React.memo(VtmnToggle);
