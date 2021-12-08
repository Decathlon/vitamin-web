import * as React from 'react';
import { VtmnAlertType } from './types';
import clsx from 'clsx';

export interface VtmnAlertProps
  extends React.ComponentPropsWithoutRef<'dialog'> {
  /**
   * The alert's title
   */
  title: string;

  /**
   * The alert's message
   */
  message?: string;

  /**
   * The alert's type
   */
  type: VtmnAlertType;

  /**
   * The alert's visibility
   */
  showAlert: boolean;

  /**
   * The alert callback close function
   * @type {function}
   */
  onClose: () => void;
}

export const VtmnAlert = ({
  type,
  title,
  message,
  onClose,
  showAlert,
  className,
}: VtmnAlertProps) => {
  return (
    showAlert && (
      <div
        role="dialog"
        className={clsx(
          'vtmn-alert',
          `vtmn-alert_variant--${type}`,
          { show: showAlert },
          className,
        )}
      >
        <article className="vtmn-alert_content">
          <div className="vtmn-alert_content-title">
            {title}
            {onClose && (
              <span className="vtmx-close-line" onClick={() => onClose} />
            )}
          </div>
          {message && (
            <span className="vtmn-alert_content-description">{message}</span>
          )}
        </article>
      </div>
    )
  );
};

const MemoVtmnAlert = React.memo(VtmnAlert);

MemoVtmnAlert.displayName = 'VtmnAlert';

export default MemoVtmnAlert;
