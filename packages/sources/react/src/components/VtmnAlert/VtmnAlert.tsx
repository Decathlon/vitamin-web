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
   * The presence or not of the icon that allow a premature closing
   * @type {boolean}
   * @defaultValue 'false'
   */
  closable?: boolean;

  /**
   * The alert visibility
   * @type {boolean}
   * @defaultValue 'false'
   */
  showAlert: boolean;
}

export const VtmnAlert = ({
  type,
  title,
  message,
  closable = false,
  showAlert = false,
  className,
  ...props
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
            {closable && <span className="vtmx-close-line"></span>}
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
