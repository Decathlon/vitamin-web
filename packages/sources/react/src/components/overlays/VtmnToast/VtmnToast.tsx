import * as React from 'react';
import '@vtmn/css-alert/dist/index-with-vars.css';
import clsx from 'clsx';

export interface VtmnToastProps
  extends React.ComponentPropsWithoutRef<'dialog'> {
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
}: VtmnToastProps) => {
  return (
    <div
      role="status"
      className={clsx(
        'vtmn-toast',
        'show',
        withIcon && 'vtmn-toast--with-icon-info',
        className,
      )}
      onClick={onClose}
    >
      <div className="vtmn-toast_content">{content}</div>
      {onClose && withCloseButton && (
        <button
          className={clsx(
            'vtmn-btn',
            'vtmn-btn_variant--ghost-reversed',
            'vtmn-btn_size--small',
            'vtmn-btn--icon-alone',
            className,
          )}
          aria-label="Close toast"
          onClick={onClose}
        >
          <span className="vtmx-close-line" role="presentation"></span>
        </button>
      )}
    </div>
  );
};

const MemoVtmnToast = React.memo(VtmnToast);

MemoVtmnToast.displayName = 'VtmnToast';

export default MemoVtmnToast;
