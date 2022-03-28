import * as React from 'react';
import '@vtmn/css-tooltip/dist/index-with-vars.css';
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
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children: React.ReactNode;
}

export const VtmnTooltip = ({
  children,
  position = 'top',
  tooltip,
  className,
  ...props
}: VtmnTooltipProps) => {
  return (
    <div className="vtmn-flex">
      <span
        tabIndex={0}
        role="tooltip"
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
