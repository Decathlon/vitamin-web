import * as React from 'react';
import { VtmnAlertType } from './types';
import clsx from 'clsx';
import { useEffect } from 'react';

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
   * The alert visibility
   * @type {boolean}
   * @defaultValue 'false'
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
  className,
  showAlert = false,
}: VtmnAlertProps) => {
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        onClose();
      }, 8000);
    }
  });
  return (
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
  );
};

const MemoVtmnAlert = React.memo(VtmnAlert);

MemoVtmnAlert.displayName = 'VtmnAlert';

export default MemoVtmnAlert;
