import * as React from 'react';
import '@vtmn/css-dropdown/dist/index-with-vars.css';
import { VtmnDropdownItem } from '.';

export interface VtmnDropdownProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
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

  /**
   * Called when an item in the list has changed
   * @type {void}
   * @defaultValue undefined
   */
  onChange?: (value: string) => void;
}

export const VtmnDropdown = ({
  label = 'Label',
  summary = 'Dropdown',
  disabled = false,
  className,
  children,
  onChange,
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
          {/**
           * Renders every child and inject onChange in VtmnDropdownItem
           */}
          {React.Children.map(children, (child: React.ReactNode) =>
            React.isValidElement(child) && child.type === VtmnDropdownItem
              ? React.cloneElement(child, {
                  ...child.props,
                  onChange: (ev: React.ChangeEvent<HTMLDivElement>) => {
                    onChange && onChange(child.props.value);
                    child.props.onChange && child.props.onChange(ev);
                  },
                })
              : child,
          )}
        </div>
      </details>
    </div>
  );
};

const MemoVtmnDropdown = React.memo(VtmnDropdown);

MemoVtmnDropdown.displayName = 'VtmnDropdown';

export default MemoVtmnDropdown;
