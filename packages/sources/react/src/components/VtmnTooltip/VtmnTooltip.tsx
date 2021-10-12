import * as React from 'react';
import { VtmnTooltipPosition } from './types';

export interface VtmnTooltipProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The position of tooltip from original element.
   * @default 'top'
   */
  position?: VtmnTooltipPosition;

  /**
   * The tooltip text of the span.
   * @default ''
   */
  tooltip: string;

  /**
   * The tooltip children
   * @default ''
   */
  children: JSX.Element;
}

export const VtmnTooltip = ({
  children,
  position = VtmnTooltipPosition.TOP,
  tooltip = '',
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
        {...props}>
        {children}
      </span>
    </div>
  );
};

export default React.memo(VtmnTooltip);
