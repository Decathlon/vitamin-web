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
}

export const VtmnAlert = ({
  type,
  title,
  message,
  closable = false,
  className,
  ...props
}: VtmnAlertProps) => {
  return (
    <dialog
      className={clsx('vtmn-alert', `vtmn-alert_variant--${type}`, className)}
    >
      <div className="vtmn-alert_content">
        <div className="vtmn-alert_content-title">
          {title}
          {closable && <span className="vtmx-close-line"></span>}
        </div>
        {message && (
          <span className="vtmn-alert_content-description">{message}</span>
        )}
      </div>
    </dialog>
  );
};

const MemoVtmnAlert = React.memo(VtmnAlert);

MemoVtmnAlert.displayName = 'VtmnAlert';

export default MemoVtmnAlert;
