import * as React from 'react';
import { VtmnTooltipPosition } from './types';

export interface VtmnTooltipProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The position of tooltip from original element.
   * @defaultValue 'top'
   */
  position?: VtmnTooltipPosition;

  /**
   * The tooltip text of the span.
   * @defaultValue undefined
   */
  tooltip: string;

  /**
   * The tooltip children
   * @defaultValue undefined
   */
  children: JSX.Element;
}

export const VtmnTooltip = ({
  children,
  position = VtmnTooltipPosition.TOP,
  tooltip,
  className,
  ...props
}: VtmnTooltipProps) => {
  return (
    <div className="vtmn-flex">
      <span
        tabIndex={0}
        className={`vtmn-tooltip ${className ?? className}`}
        data-tooltip={tooltip}
        data-position={position}
        {...props}
      >
        {children}
      </span>
    </div>
  );
};

const MemoVtmnTooltip = React.memo(VtmnTooltip);

MemoVtmnTooltip.displayName = 'VtmnTooltip';

export default MemoVtmnTooltip;
