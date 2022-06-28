import * as React from 'react';
import '@vtmn/css-dropdown/dist/index-with-vars.css';

export interface VtmnDropdownProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The label of the dropdown.
   * @defaultValue undefined
   */
  label?: string;

  /**
   * The summary of the dropdown.
   * @defaultValue undefined
   */
  summary?: string;

  /**
   * Whether the dropdown is disabled.
   * @defaultValue undefined
   */
  disabled?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnDropdown = ({
  label = 'Label',
  summary = 'Dropdown',
  disabled = false,
  className,
  children,
  ...props
}: VtmnDropdownProps) => {
  return (
    <div className={`vtmn-dropdown ${className}`} aria-disabled={disabled}>
      <label htmlFor={props['id']}>{label}</label>
      <details open={disabled ? false : undefined}>
        <summary aria-labelledby={props['id']}>{summary}</summary>
        <div
          className="vtmn-dropdown_items"
          role="group"
          aria-labelledby={props['id']}
        >
          {children}
        </div>
      </details>
    </div>
  );
};

const MemoVtmnDropdown = React.memo(VtmnDropdown);

MemoVtmnDropdown.displayName = 'VtmnDropdown';

export default MemoVtmnDropdown;
