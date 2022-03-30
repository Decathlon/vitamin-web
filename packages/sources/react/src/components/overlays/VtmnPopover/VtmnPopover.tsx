import * as React from 'react';
import '@vtmn/css-popover/dist/index-with-vars.css';
import { VtmnPopoverPosition } from './types';
import { VtmnLink } from '../../actions/VtmnLink';

export interface VtmnPopoverProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * ID of the popover
   * @type {string}
   */
  identifier: string;

  /**
   * The position of the popover.
   * @defaultValue 'bottom'
   */
  position?: VtmnPopoverPosition;

  /**
   * The placeholder of the popover.
   * @defaultValue 'bottom'
   */
  placeholder?: string;

  /**
   * The title of the popover.
   * @defaultValue 'bottom'
   */
  title?: string;

  /**
   * The text of the popover.
   * @defaultValue 'bottom'
   */
  body?: string;
}

export const VtmnPopover = ({
  identifier,
  position = 'bottom',
  placeholder,
  title,
  body,
  children,
  className,
  ...props
}: VtmnPopoverProps) => {
  return (
    <div
      className="vtmn-popover"
      data-position={position}
      aria-describedby={identifier}
      tabIndex={0}
      {...props}
    >
      <VtmnLink>{placeholder}</VtmnLink>

      <div id={identifier} role="tooltip">
        <p className="vtmn-popover_title">{title}</p>
        <p className="vtmn-popover_text">{body}</p>
      </div>
    </div>
  );
};

const MemoVtmnPopover = React.memo(VtmnPopover);

MemoVtmnPopover.displayName = 'VtmnPopover';

export default MemoVtmnPopover;
