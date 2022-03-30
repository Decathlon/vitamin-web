import * as React from 'react';
import clsx from 'clsx';
import { VtmnButton } from '../../actions/VtmnButton/VtmnButton';

export interface VtmnQuantityProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The id of the quantity.
   * @type {string}
   */
  id: string;

  /**
   * The label attached to the quantity.
   * @type {string}
   * @defaultValue undefined
   */
  label?: string;

  /**
   * The value of the quantity.
   * @type {number}
   * @defaultValue 0
   */
  value?: number;

  /**
   * The step applied to the value of the quantity.
   * @type {number}
   * @defaultValue 1
   */
  step?: number;

  /**
   * Disabled state of the quantity.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * The minimum value of the quantity.
   * @type {number}
   * @defaultValue 0
   */
  min?: number;

  /**
   * The minimum value of the quantity.
   * @type {number}
   * @defaultValue Infinity
   */
  max?: number;

  /**
   * The error to display when value is out of bounds.
   * @type {string}
   * @defaultValue undefined
   */
  error?: string;

  /**
   * Called when quantity's value has changed
   * @type {void}
   * @defaultValue undefined
   */
  onQuantityChange?: (newQuantity: number) => void;
}

export const VtmnQuantity = ({
  id,
  value = 0,
  step = 1,
  label = undefined,
  disabled = false,
  min = 0,
  max = Infinity,
  error = undefined,
  onQuantityChange = undefined,
  className,
  ...props
}: VtmnQuantityProps) => {
  const [quantity, setQuantity] = React.useState(value);

  React.useEffect(() => {
    onQuantityChange && onQuantityChange(quantity);
  }, [quantity]);
  return (
    <div className={clsx('vtmn-quantity', className)} {...props}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="vtmn-quantity_content">
        <VtmnButton
          variant="secondary"
          disabled={disabled || quantity <= min}
          iconAlone={'subtract-fill'}
          onClick={() =>
            setQuantity((quantity) => Math.max(min, quantity - step))
          }
          aria-label="subtract"
        />
        <input
          type="number"
          disabled={disabled}
          id={id}
          min={min}
          max={max}
          step={step}
          value={quantity}
          aria-describedby={`quantity-helper-${id}`}
          onChange={(event) =>
            setQuantity(
              isNaN(event.target.valueAsNumber)
                ? min
                : event.target.valueAsNumber,
            )
          }
          aria-invalid={error ? true : undefined}
        />
        <VtmnButton
          variant="secondary"
          disabled={disabled || quantity >= max}
          iconAlone={'add-fill'}
          onClick={() =>
            setQuantity((quantity) => Math.min(max, quantity + step))
          }
          aria-label="add"
        />
      </div>

      {error && (
        <p id={`quantity-helper-${id}`} className="vtmn-quantity_error-text">
          {error}
        </p>
      )}
    </div>
  );
};

const MemoVtmnQuantity = React.memo(VtmnQuantity);

MemoVtmnQuantity.displayName = 'VtmnQuantity';

export default MemoVtmnQuantity;
