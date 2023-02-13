import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-chip';
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
        selected && variant !== 'action' && 'vtmn-chip--selected',
        className,
      )}
      role="button"
      aria-disabled={disabled}
      aria-pressed={selected && variant !== 'action'}
      onClick={onClick}
      {...props}
    >
      {icon && (variant === 'input' || variant === 'action') && (
        <VtmnIcon
          variant={selected && variant !== 'action' ? 'reversed' : 'default'}
          value={icon}
          aria-hidden="true"
        />
      )}

      {children}

      {variant == 'filter' && badgeValue != 0 && (
        <VtmnBadge variant="default" value={badgeValue} />
      )}

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
