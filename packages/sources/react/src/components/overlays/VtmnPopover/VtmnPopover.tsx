import '@vtmn/css-popover';
import * as React from 'react';
import { VtmnPopoverPosition } from './types';

export interface VtmnPopoverProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * ID of the popover
   * @type {string}
   */
  identifier: string;

  /**
   * The position of the popover.
   * @defaultValue 'top'
   */
  position?: VtmnPopoverPosition;

  /**
   * The title of the popover.
   */
  title?: string;

  /**
   * The text of the popover.
   */
  body?: string;
}

export const VtmnPopover = ({
  identifier,
  position = 'top',
  title,
  body,
  children,
  ...props
}: VtmnPopoverProps) => {
  return (
    <div
      className="vtmn-popover"
      data-position={position}
      aria-describedby={identifier}
      aria-labelledby={`${identifier}-title`}
      tabIndex={0}
      {...props}
    >
      {children}

      <div id={identifier} role="dialog">
        <p
          className="vtmn-popover_title"
          id={`${identifier}-title`}
          role="heading"
        >
          {title}
        </p>
        <p className="vtmn-popover_text">{body}</p>
      </div>
    </div>
  );
};

const MemoVtmnPopover = React.memo(VtmnPopover);

MemoVtmnPopover.displayName = 'VtmnPopover';

export default MemoVtmnPopover;
