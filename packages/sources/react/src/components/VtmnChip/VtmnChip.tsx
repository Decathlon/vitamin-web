import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-chip/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnChipSize, VtmnChipVariant } from './types';
import { VtmnIcon } from '../VtmnIcon/VtmnIcon';

export interface VtmnChipProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The variant of the chip.
   * @defaultValue 'single-choice'
   */
  variant?: VtmnChipVariant;

  /**
   * The size of the chip.
   * @defaultValue 'medium'
   */
  size?: VtmnChipSize;

  /**
   * Disabled state of the chip.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Selected state of the chip.
   * @type {boolean}
   * @defaultValue false
   */
  selected?: boolean;

  /**
   * Icon to display on the chip
   * @type {VitamixId}
   * @defaultValue undefined
   */
  icon?: VitamixId;
}

export const VtmnChip = ({
  variant = 'single-choice',
  size = 'medium',
  disabled = false,
  selected = false,
  icon = undefined,
  children,
  className,
  ...props
}: VtmnChipProps) => {
  return (
    <div
      className={clsx(
        'vtmn-chip',
        `vtmn-chip_size--${size}`,
        `vtmn-chip_variant--${variant}`,
        disabled && 'vtmn-chip--disabled',
        selected && 'vtmn-chip--selected',
        className,
      )}
      {...props}
    >
      {icon && <VtmnIcon value={icon} variant="reversed" />}
      {children}
    </div>
  );
};

const MemoVtmnChip = React.memo(VtmnChip);

MemoVtmnChip.displayName = 'VtmnChip';

export default MemoVtmnChip;
