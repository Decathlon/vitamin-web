import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-divider/dist/index-with-vars.css';
import { VtmnDividerOrientation, VtmnDividerTextPosition } from './types';

export interface VtmnDividerProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The orientation of the divider.
   * @defaultValue 'horizontal'
   */
  orientation?: VtmnDividerOrientation;

  /**
   * The position of the text inside the divider.
   * @defaultValue 'start'
   */
  textPosition?: VtmnDividerTextPosition;

  /**
   * The position of the text inside the divider.
   * @defaultValue undefined
   */
  ariaLabelId?: string;
}

export const VtmnDivider = ({
  orientation = 'horizontal',
  textPosition = 'start',
  ariaLabelId = undefined,
  children,
  className,
  ...props
}: VtmnDividerProps) => {
  return (
    <div
      className={clsx(
        'vtmn-divider',
        `vtmn-divider_orientation--${orientation}`,
        children && `vtmn-divider_text-position--${textPosition}`,
        className,
      )}
      {...props}
      role="separator"
      aria-orientation={orientation}
      aria-labelledby={ariaLabelId}
    >
      <span id={ariaLabelId}>{children}</span>
    </div>
  );
};

const MemoVtmnDivider = React.memo(VtmnDivider);

MemoVtmnDivider.displayName = 'VtmnDivider';

export default MemoVtmnDivider;
