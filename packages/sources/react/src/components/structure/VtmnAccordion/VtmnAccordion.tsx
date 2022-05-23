import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-accordion/dist/index-with-vars.css';

export interface VtmnAccordionProps
  extends React.ComponentPropsWithoutRef<'details'> {
  /**
   * @type {string} Summary of the accordion.
   * @requires
   */
  summary?: string;

  /**
   * @type {boolean} Display left icon on summary.
   * @default false
   */
  withIconLeft?: boolean;

  /**
   * @type {boolean} Disable the accordion.
   * @default false
   */
  disabled?: boolean;

  /**
   * @type {boolean} Open the accordion.
   * @default false
   */
  open?: boolean;
}

export const VtmnAccordion = ({
  summary,
  withIconLeft,
  disabled,
  open,
  children,
  className,
  ...props
}: VtmnAccordionProps) => {
  return (
    <details
      className={clsx(
        'vtmn-accordion',
        withIconLeft && 'vtmn-accordion--with-icon-left',
        className,
      )}
      aria-disabled={disabled}
      aria-expanded={open}
      open={open}
      {...props}
    >
      <summary>{summary}</summary>
      <div className="vtmn-accordion_content">{children}</div>
    </details>
  );
};

const MemoVtmnAccordion = React.memo(VtmnAccordion);

MemoVtmnAccordion.displayName = 'VtmnAccordion';

export default MemoVtmnAccordion;
