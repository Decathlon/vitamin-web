import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-chip/dist/index-with-vars.css';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import { VtmnChipSize, VtmnChipVariant } from './types';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon/VtmnIcon';
import { VtmnButton } from '../../actions/VtmnButton/VtmnButton';
import { VtmnBadge } from '../../indicators/VtmnBadge/VtmnBadge';

export interface VtmnChipProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Called when clicking the chip
   * @type {React.MouseEventHandler}
   * @defaultValue undefined
   */
  onClick?: React.MouseEventHandler;

  /**
   * Called when the cross is clicked when using input variant
   * @type {React.MouseEventHandler}
   * @defaultValue undefined
   */
  onCancel?: React.MouseEventHandler;

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

  /**
   * Number to display in chip's badge
   * @type number
   * @defaultValue 0
   */
  badgeValue?: number;
}

export const VtmnChip = ({
  variant = 'single-choice',
  size = 'medium',
  disabled = false,
  selected = false,
  icon = undefined,
  badgeValue = 0,
  onClick,
  onCancel,
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
      onClick={onClick}
      {...props}
    >
      {icon && (
        <VtmnIcon variant={selected ? 'reversed' : 'default'} value={icon} />
      )}

      {children}

      {badgeValue != 0 && <VtmnBadge variant="default" value={badgeValue} />}

      {variant == 'input' && selected && (
        <VtmnButton
          variant="ghost-reversed"
          iconAlone="close-fill"
          onClick={onCancel}
        />
      )}
    </div>
  );
};

const MemoVtmnChip = React.memo(VtmnChip);

MemoVtmnChip.displayName = 'VtmnChip';

export default MemoVtmnChip;
