import * as React from 'react';
import '@vtmn/css-toast/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

const INFINITE_TIMEOUT_MS = 9999000;

export interface VtmnToastProps
  extends Omit<React.ComponentPropsWithoutRef<'dialog'>, 'onClose'> {
  /**
   * The toast's content
   */
  content: string;

  /**
   * Whether there is an info icon
   */
  withIcon?: boolean;

  /**
   * Whether there is a close button
   */
  withCloseButton?: boolean;

  /**
   * Duration of the toast in ms
   */
  timeout?: number;

  /**
   * The alert callback close function
   * @type {function}
   */
  onClose?: (event: React.MouseEvent | undefined) => void;
}

export const VtmnToast = ({
  content = '',
  withIcon = false,
  withCloseButton = false,
  onClose,
  className,
  timeout = 4500,
}: VtmnToastProps) => {
  const propertyStyle: Record<string, string> = {
    '--vtmn-animation_overlay-duration': `${
      timeout < Infinity ? timeout : INFINITE_TIMEOUT_MS
    }ms`,
  };
  return (
    <div
      role="status"
      style={propertyStyle}
      className={clsx(
        'vtmn-toast',
        timeout > 0 && 'show animate-delay',
        withIcon && 'vtmn-toast--with-icon-info',
        className,
      )}
      onClick={onClose}
    >
      <div className="vtmn-toast_content">{content}</div>
      {onClose && withCloseButton && (
        <VtmnButton
          size="small"
          variant="ghost-reversed"
          iconAlone="close-line"
          aria-label="Close toast"
          onClick={onClose}
        ></VtmnButton>
      )}
    </div>
  );
};

const MemoVtmnToast = React.memo(VtmnToast);

MemoVtmnToast.displayName = 'VtmnToast';

export default MemoVtmnToast;
