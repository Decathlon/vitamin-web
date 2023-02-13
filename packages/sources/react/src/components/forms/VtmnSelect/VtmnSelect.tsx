import '@vtmn/css-select';
import clsx from 'clsx';
import React from 'react';

export interface VtmnSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  error?: boolean;
  errorText?: string;
  id: string;
  labelText?: string;
  options: React.ReactNode[];
  border?: boolean;
  valid?: boolean;
  labelClassName?: string;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

export const VtmnSelect = React.forwardRef<HTMLSelectElement, VtmnSelectProps>(
  (
    {
      className,
      error = false,
      errorText,
      id,
      labelText,
      labelClassName,
      labelProps,
      options = [],
      border = true,
      ...props
    },
    ref,
  ) => {
    const errorTextId = `error-text-${id}`;
    const hasErrorText = error && errorText;

    return (
      <div
        className={clsx('vtmn-select_container', {
          'vtmn-select--no-border': !border,
        })}
      >
        <label className={labelClassName || ''} htmlFor={id} {...labelProps}>
          {labelText}
        </label>
        <select
          id={id}
          className={clsx(className, {
            'vtmn-select--error': error,
          })}
          aria-describedby={hasErrorText ? errorTextId : undefined}
          ref={ref}
          {...props}
        >
          {options.map((option) => option)}
        </select>

        {hasErrorText && (
          <p id={errorTextId} className="vtmn-select_error-text">
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

const MemoVtmnSelect = React.memo(VtmnSelect);

MemoVtmnSelect.displayName = 'VtmnSelect';

export default MemoVtmnSelect;
