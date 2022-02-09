import * as React from 'react';
import '@vtmn/css-alert/dist/index-with-vars.css';
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
}: VtmnAlertProps) => {
  return (
    <div
      role="dialog"
      className={clsx(
        'vtmn-alert',
        `vtmn-alert_variant--${type}`,
        'show',
        className,
      )}
      onClick={onClose}
    >
      <article className="vtmn-alert_content">
        <div className="vtmn-alert_content-title">
          {title}
          <span className="vtmx-close-line" />
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
