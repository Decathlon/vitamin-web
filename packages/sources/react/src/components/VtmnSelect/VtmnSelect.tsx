import React from 'react';

export interface VtmnSelectProps extends React.ComponentPropsWithRef<'select'> {
  error?: boolean;
  helperText?: string;
  id: string;
  labelText?: string;
  valid?: boolean;
}

export const VtmnSelect = ({
  className,
  disabled = false,
  error = false,
  helperText,
  id,
  labelText,
  placeholder,
  valid = false,
  ref,
  ...props
}: VtmnSelectProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select id={id} {...props}>
        <option></option>
      </select>
    </>
  );
};

const MemoVtmnBadge = React.memo(VtmnSelect);

MemoVtmnBadge.displayName = 'VtmnSelect';

export default MemoVtmnBadge;
