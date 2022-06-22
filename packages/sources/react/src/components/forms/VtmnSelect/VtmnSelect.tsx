import '@vtmn/css-select/dist/index-with-vars.css';
import clsx from 'clsx';
import React from 'react';

export interface VtmnSelectProps extends React.ComponentPropsWithRef<'select'> {
  error?: boolean;
  errorText?: string;
  id: string;
  labelText?: string;
  options: React.ReactNode[];
  valid?: boolean;
  labelClassName?: string;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

export const VtmnSelect = ({
  className,
  error = false,
  errorText,
  id,
  labelText,
  labelClassName,
  labelProps,
  options = [],
  ...props
}: VtmnSelectProps) => {
  const errorTextId = `error-text-${id}`;
  const hasErrorText = error && errorText;

  return (
    <div className="vtmn-select_container">
      <label className={labelClassName || ''} htmlFor={id} {...labelProps}>
        {labelText}
      </label>
      <select
        id={id}
        className={clsx('vtmn-select', className, {
          'vtmn-select--error': error,
        })}
        aria-describedby={hasErrorText ? errorTextId : undefined}
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
};

const MemoVtmnSelect = React.memo(VtmnSelect);

MemoVtmnSelect.displayName = 'VtmnSelect';

export default MemoVtmnSelect;
