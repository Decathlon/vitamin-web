import * as React from 'react';
import '@vtmn/css-alert/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

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
