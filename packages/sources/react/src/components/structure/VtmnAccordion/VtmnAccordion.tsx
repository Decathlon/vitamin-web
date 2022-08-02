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

  /**
   * @type {function} The accordion callback open function
   */
  onOpen?: (event: React.MouseEvent | undefined) => void;

  /**
   * @type {function} The accordion callback close function
   */
  onClose?: (event: React.MouseEvent | undefined) => void;
}

export const VtmnAccordion = ({
  summary,
  withIconLeft,
  disabled,
  open,
  children,
  className,
  onOpen,
  onClose,
  ...props
}: VtmnAccordionProps) => {
  const ref = React.useRef<HTMLDetailsElement>(null);
  const toggleAccordion = React.useCallback(
    (e: React.MouseEvent): void => {
      const element = ref.current;
      if (element) {
        if (element.open && onClose) onClose(e);
        if (!element.open && onOpen) onOpen(e);
      }
    },
    [onOpen, onClose],
  );

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
      ref={ref}
      {...props}
    >
      <summary onClick={toggleAccordion}>{summary}</summary>
      <div className="vtmn-accordion_content">{children}</div>
    </details>
  );
};

const MemoVtmnAccordion = React.memo(VtmnAccordion);

MemoVtmnAccordion.displayName = 'VtmnAccordion';

export default MemoVtmnAccordion;
