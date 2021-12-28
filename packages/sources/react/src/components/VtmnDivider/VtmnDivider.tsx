import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-divider/dist/index-with-vars.css';
import { VtmnDividerOrientation, VtmnDividerText } from './types';

export interface VtmnDividerProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The orientation of the divider
   * @defaultValue 'horizontal'
   */
  orientation?: VtmnDividerOrientation;

  /**
   * The position of the text inside the divider
   * @defaultValue null
   */
  text?: VtmnDividerText;
}

export const VtmnDivider = ({
  orientation = 'horizontal',
  text = null,
  children,
  className,
  ...props
}: VtmnDividerProps) => {
  return (
    <div
      className={clsx(
        'vtmn-divider',
        `vtmn-divider_text--${text == null ? 'center' : text}`,
        `vtmn-divider_orientation--${orientation}`,
        className,
      )}
      {...props}
      role="separator"
      aria-orientation={orientation}
    >
      {children}
    </div>
  );
};

const MemoVtmnDivider = React.memo(VtmnDivider);

MemoVtmnDivider.displayName = 'VtmnDivider';

export default MemoVtmnDivider;
