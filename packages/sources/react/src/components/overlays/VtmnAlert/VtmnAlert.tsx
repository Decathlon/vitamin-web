import * as React from 'react';
import '@vtmn/css-alert/dist/index-with-vars.css';
import { VtmnAlertVariant } from './types';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton';

const INFINITE_TIMEOUT_MS = 9999000;

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
   * Aria label applied on the close button
   */
  ariaLabelCloseButton: string;

  /**
   * time (ms) before the alert disappears
   * Set to 0 to keep the alert visible
   */
  timeout: number;

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
  ariaLabelCloseButton = 'Close alert',
  timeout = 8000,
  className,
}: VtmnAlertProps) => {
  const propertyStyle: Record<string, string> = {
    '--vtmn-animation_alert-duration': `${
      timeout < Infinity ? timeout : INFINITE_TIMEOUT_MS
    }ms`,
  };
  return (
    <div
      aria-label={title}
      role="dialog"
      style={propertyStyle}
      className={clsx(
        'vtmn-alert',
        `vtmn-alert_variant--${variant}`,
        timeout > 0 && 'show animate-delay',
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
              aria-label={ariaLabelCloseButton}
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
