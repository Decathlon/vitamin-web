import * as React from 'react';
import '@vtmn/css-modal';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton/VtmnButton';

export interface VtmnModalProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Whether to open the modal or not
   * @type {boolean}
   * @default false
   */
  open?: boolean;

  /**
   * Called when user action should close the modal
   * @type {void}
   * @default undefined
   */
  onClose?: () => void;
}
export const VtmnModal = ({
  open = false,
  onClose = undefined,
  children,
  className,
  ...props
}: VtmnModalProps) =>
  open ? (
    <div
      className={clsx('vtmn-modal', className)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="vtmn-modal-title"
      aria-describedby="vtmn-modal-description"
      {...props}
    >
      <div className="vtmn-modal_background-overlay" onClick={onClose} />

      <div className="vtmn-modal_content">
        {/**
         * Renders every child and inject onClose in VtmnModalTitle
         */}
        {React.Children.map(children, (child: React.ReactNode) =>
          React.isValidElement(child) && child.type === VtmnModalTitle
            ? React.cloneElement(child, { ...child.props, onClose })
            : child,
        )}
      </div>
    </div>
  ) : null;

export interface VtmnModalTitleProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Called when user action should close the modal
   * @type {void}
   * @default undefined
   */
  onClose?: () => void;
}
export const VtmnModalTitle = ({
  onClose = undefined,
  children,
  className,
  ...props
}: VtmnModalTitleProps) => (
  <div className={clsx('vtmn-modal_content_title', className)} {...props}>
    <p className="vtmn-modal_content_title--text">{children}</p>
    <VtmnButton variant="ghost" iconAlone="close-fill" onClick={onClose} />
  </div>
);

export const VtmnModalDescription = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('vtmn-modal_content_body', className)} {...props}>
    <p className="vtmn-modal_content_body--text">{children}</p>
  </div>
);

export const VtmnModalActions = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('vtmn-modal_content_actions', className)} {...props}>
    {children}
  </div>
);

const MemoVtmnModal = React.memo(VtmnModal);

MemoVtmnModal.displayName = 'VtmnModal';

export default MemoVtmnModal;
