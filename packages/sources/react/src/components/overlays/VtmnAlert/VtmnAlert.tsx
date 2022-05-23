import * as React from 'react';
import '@vtmn/css-alert/dist/index-with-vars.css';
import { VtmnAlertVariant } from './types';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

export interface VtmnAlertProps
  extends Omit<React.ComponentPropsWithoutRef<'dialog'>, 'onClose'> {
  /**
   * The alert's title
   */
  title: string;

  /**
   * The alert's message
   */
  message?: string;

  /**
   * The alert's variant
   */
  variant: VtmnAlertVariant;

  /**
   * The alert callback close function
   * @type {function}
   */
  onClose?: (event: React.MouseEvent | undefined) => void;
}

export const VtmnAlert = ({
  variant = 'info',
  title,
  message,
  onClose,
  className,
}: VtmnAlertProps) => {
  return (
    <div
      role="dialog"
      className={clsx(
        'vtmn-alert',
        `vtmn-alert_variant--${variant}`,
        'show',
        className,
      )}
    >
      <article className="vtmn-alert_content">
        <div className="vtmn-alert_content-title">
          {title}
          {onClose && (
            <VtmnButton
              size="small"
              variant="ghost-reversed"
              iconAlone="close-line"
              aria-label="Close toast"
              onClick={onClose}
            ></VtmnButton>
          )}
        </div>
        {message && (
          <span className="vtmn-alert_content-description">{message}</span>
        )}
      </article>
    </div>
  );
};

const MemoVtmnAlert = React.memo(VtmnAlert);

MemoVtmnAlert.displayName = 'VtmnAlert';

export default MemoVtmnAlert;
