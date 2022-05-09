import clsx from 'clsx';
import * as React from 'react';
import { VtmnRatingSize } from './types';

export interface VtmnRatingProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /**
   * The name of the input.
   * @type {string}
   * @defaultValue rating
   */
  name?: string;

  /**
   * The emphasis of the rating.
   * @type {boolean}
   * @defaultValue false
   */
  emphasis?: boolean;

  /**
   * The size of the rating.
   * @type {VtmnRatingSize}
   * @defaultValue medium
   */
  size?: VtmnRatingSize;

  /**
   * The disabled state of the rating.
   * @type {boolean}
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Is the rating read only.
   * @type {boolean}
   * @defaultValue false
   */
  readonly?: boolean;

  /**
   * Is the rating should be displayed as compact.
   * @type {boolean}
   * @defaultValue false
   */
  compact?: boolean;

  /**
   * Comments next to the rating when using compact mode.
   * @type {number}
   * @defaultValue 0
   */
  comments?: number;

  /**
   * The value of the rating.
   * @type {number}
   * @defaultValue 0
   */
  value?: number;

  /**
   * Whether the value is shown next to the rating (requires readonly to be true)
   */
  showValue?: boolean;

  /**
   * Called when the rating value changes
   * @type {void}
   * @defaultValue undefined
   */
  onChange?: (newRating: number) => void;
}

export const VtmnRating = ({
  name = 'rating',
  emphasis = undefined,
  size = 'medium',
  disabled = false,
  readonly = false,
  compact = false,
  comments = undefined,
  value = 0,
  showValue = false,
  onChange = undefined,
  className,
  ...props
}: VtmnRatingProps) => {
  const [position, setPosition] = React.useState(value);

  // Update rating when value prop changes
  React.useEffect(() => setPosition(value), [value]);

  React.useEffect(() => onChange && onChange(position), [position]);

  return (
    <div
      className={clsx(
        'vtmn-rating',
        emphasis && 'vtmn-rating_variant--brand',
        `vtmn-rating_size--${size}`,
        className,
      )}
      aria-disabled={disabled}
      {...props}
    >
      {/**
       * Interactive mode
       */}
      {!readonly && (
        <div
          className="vtmn-rating--interactive"
          aria-label="Rate the article"
          role="radiogroup"
          data-rating={position}
        >
          {Array.from(Array(5).keys()).map((index) => (
            <React.Fragment key={`rating-${index + 1}`}>
              <input
                onChange={(event: React.FormEvent<HTMLInputElement>) =>
                  setPosition(parseInt(event.currentTarget.value))
                }
                type="radio"
                name={name}
                id={`${name}-${index + 1}`}
                value={index + 1}
                aria-label={`${index + 1} star out of 5`}
                disabled={disabled}
                checked={Math.floor(position) == index + 1}
              />
              <label htmlFor={`${name}-${index + 1}`} />
            </React.Fragment>
          ))}
        </div>
      )}

      {/**
       * Read-Only mode
       */}
      {readonly && (
        <React.Fragment>
          {/**
           * Compact rendering
           */}

          {compact ? (
            <span
              className={`vtmx-star-${!position ? 'line' : 'fill'}`}
              role="presentation"
            />
          ) : (
            Array.from(Array(5).keys()).map((index) => (
              <span
                key={`rating-readonly-${index + 1}`}
                className={
                  index <= position && position - index >= 0.5
                    ? position - index < 1 && position - index >= 0.5
                      ? 'vtmx-star-half-fill'
                      : 'vtmx-star-fill'
                    : 'vtmx-star-line'
                }
                role="presentation"
              />
            ))
          )}

          {/**
           * Value rendering
           */}
          {showValue && (
            <span
              className="vtmn-rating_comment--primary"
              aria-label="article rating"
            >
              {position}/5
            </span>
          )}

          {/**
           * Comments rendering
           */}
          {comments && (
            <span
              className="vtmn-rating_comment--secondary"
              aria-label="number of ratings"
            >
              {comments}
            </span>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

const MemoVtmnRating = React.memo(VtmnRating);

MemoVtmnRating.displayName = 'VtmnRating';

export default MemoVtmnRating;
