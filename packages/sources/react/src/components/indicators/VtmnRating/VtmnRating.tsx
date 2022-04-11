import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-chip/dist/index-with-vars.css';
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
   * The comment next to the rating when using compact mode.
   * @type {number}
   * @defaultValue 0
   */
  comment?: number;

  /**
   * The value of the rating.
   * @type {number}
   * @defaultValue 0
   */
  rating?: number;

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
  comment = undefined,
  rating = 0,
  onChange = undefined,
  children,
  className,
  ...props
}: VtmnRatingProps) => {
  const [value, setValue] = React.useState(rating);

  // Update value when rating prop changes
  React.useEffect(() => setValue(rating), [rating]);

  React.useEffect(() => onChange && onChange(value), [value]);

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
          data-rating={rating}
        >
          {Array.from(Array(5).keys()).map((index) => (
            <React.Fragment key={`rating-${index + 1}`}>
              <input
                onChange={(event: React.FormEvent<HTMLInputElement>) =>
                  setValue(parseInt(event.currentTarget.value))
                }
                type="radio"
                name={name}
                id={`rating-${index + 1}`}
                value={index + 1}
                aria-label={`${index + 1} star out of 5`}
                disabled={disabled}
                checked={Math.floor(value) == index + 1}
              />
              <label htmlFor={`${name}-${index + 1}`} />
            </React.Fragment>
          ))}
        </div>
      )}

      {/**
       * Read-Only mode
       */}
      {readonly &&
        !compact &&
        Array.from(Array(5).keys()).map((index) => (
          <span
            key={`rating-readonly-${index + 1}`}
            className={
              index <= rating && rating - index >= 0.5
                ? rating - index < 1 && rating - index >= 0.5
                  ? 'vtmx-star-half-fill'
                  : 'vtmx-star-fill'
                : 'vtmx-star-line'
            }
            role="presentation"
          />
        ))}

      {/**
       * Read-Only and Compact mode
       */}
      {readonly && compact && (
        <>
          <span className="vtmx-star-fill" role="presentation" />
          <span
            className="vtmn-rating_comment--primary"
            aria-label="article rating"
          >
            {rating}/5
          </span>

          {comment && (
            <span
              className="vtmn-rating_comment--secondary"
              aria-label="number of ratings"
            >
              ({comment})
            </span>
          )}
        </>
      )}
    </div>
  );
};

const MemoVtmnRating = React.memo(VtmnRating);

MemoVtmnRating.displayName = 'VtmnRating';

export default MemoVtmnRating;
