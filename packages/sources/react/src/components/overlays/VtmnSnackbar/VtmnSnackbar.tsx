import * as React from 'react';
import '@vtmn/css-snackbar/dist/index-with-vars.css';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

export interface VtmnSnackbarProps
  extends React.ComponentPropsWithoutRef<'dialog'> {
  /**
   * The snackbar's content
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
}: VtmnSnackbarProps) => {
  return (
    <div
      role="status"
      className={clsx('vtmn-snackbar', 'show', className)}
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
