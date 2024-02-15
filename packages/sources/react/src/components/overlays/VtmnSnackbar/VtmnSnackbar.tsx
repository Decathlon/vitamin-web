import * as React from 'react';
import '@vtmn/css-snackbar/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

const INFINITE_TIMEOUT_MS = 9999000;

export interface VtmnSnackbarProps
  extends Omit<React.ComponentPropsWithoutRef<'dialog'>, 'onClose'> {
  /**
   * The snackbaOmit<React.ComponentPropsWithoutRef<'dialog'>, 'onClose'>r's content
   */
  content: string;

  /**
   * The label of the action button
   */
  actionLabel?: string;

  /**
   * Whether there is a close button
   */
  withCloseButton?: boolean;

  /**
   * Duration of the snackbar in ms
   */
  timeout?: number;

  /**
   * The alert callback close function
   * @type {function}
   */
  onClose?: (event: React.MouseEvent | undefined) => void;
}

export const VtmnSnackbar = ({
  content = '',
  actionLabel = 'Action',
  withCloseButton = false,
  onClose,
  className,
  timeout = 4500,
}: VtmnSnackbarProps) => {
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
        'vtmn-snackbar',
        timeout > 0 && 'show animate-delay',
        className,
      )}
      onClick={onClose}
    >
      <div className="vtmn-snackbar_content">{content}</div>
      {onClose && actionLabel && (
        <VtmnButton size="small" variant="ghost-reversed" onClick={onClose}>
          {actionLabel}
        </VtmnButton>
      )}
      {onClose && withCloseButton && (
        <VtmnButton
          size="small"
          variant="ghost-reversed"
          iconAlone="close-line"
          aria-label="Close snackbar"
          onClick={onClose}
        ></VtmnButton>
      )}
    </div>
  );
};

const MemoVtmnSnackbar = React.memo(VtmnSnackbar);

MemoVtmnSnackbar.displayName = 'VtmnSnackbar';

export default MemoVtmnSnackbar;
