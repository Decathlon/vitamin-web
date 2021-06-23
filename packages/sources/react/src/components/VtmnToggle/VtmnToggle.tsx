import * as React from 'react';
import clsx from 'clsx';

import '@vtmn/css-toggle';
import { VtmnToggleSize } from './types';

export interface VtmnToggleProps
  extends React.ComponentPropsWithoutRef<'input'> {
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
}

export const VtmnToggle = ({
  className,
  identifier,
  labelText,
  size = 'medium',
  ...props
}: VtmnToggleProps) => {
  return (
    <div
      className={clsx('vtmn-toggle', `vtmn-toggle_size--${size}`, className)}>
      <div className="vtmn-toggle_switch">
        <input type="checkbox" id={identifier} {...props} />
        <span aria-hidden="true"></span>
      </div>
      <label htmlFor={identifier}>{labelText}</label>
    </div>
  );
};

export default React.memo(VtmnToggle);
