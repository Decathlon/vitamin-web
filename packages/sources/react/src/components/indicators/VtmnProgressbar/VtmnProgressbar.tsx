import * as React from 'react';
import '@vtmn/css-button/dist/index-with-vars.css';
import clsx from 'clsx';
import {
  VtmnProgressbarVariant,
  VtmnProgressbarSize,
  VtmnProgressbarStatus,
} from './types';

export interface VtmnProgressbarProps
  extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The variant of the progress bar.
   * @type {VtmnProgressbarVariant}
   * @defaultValue 'linear'
   */
  variant?: VtmnProgressbarVariant;

  /**
   * The size of the progress bar.
   * @type {VtmnProgressbarSize}
   * @defaultValue 'medium'
   */
  size?: VtmnProgressbarSize;

  /**
   * The status of the progress bar.
   * @type {VtmnProgressbarStatus}
   * @defaultValue 'determinate'
   */
  status?: VtmnProgressbarStatus;

  /**
   * The current value of the progress bar.
   * @type {number}
   * @defaultValue 0
   */
  value?: number;

  /**
   * The image src of the progress bar.
   * @type {string}
   * @defaultValue undefined
   */
  imageSrc?: string;

  /**
   * The image alt of the progress bar.
   * @type {string}
   * @defaultValue undefined
   */
  imageAlt?: string;

  /**
   * The loading text appearing when using the linear progress bar.
   * @type {string}
   * @defaultValue 'Loading'
   */
  loadingText?: string;
}

export const VtmnProgressbar = ({
  variant = 'linear',
  status = 'determinate',
  size = 'medium',
  value = 0,
  imageSrc = undefined,
  imageAlt = undefined,
  loadingText = 'Loading',
  className,
  ...props
}: VtmnProgressbarProps) => {
  return (
    <div
      className={clsx(
        'vtmn-progressbar_container',
        `vtmn-progressbar_variant--${variant}`,
        `vtmn-progressbar--${status}`,
        // Only add size attribute when variant is linear or size is small in circular mode
        (variant == 'linear' || size == 'small') &&
          `vtmn-progressbar_size--${size}`,
        className,
      )}
      role="progressbar"
      aria-label="progress bar"
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      {/**
       * Linear Progress Bar
       */}

      {variant == 'linear' && status == 'determinate' && (
        <span
          className="vtmn-progressbar_label"
          // Clamp the value between minValue and maxValue

          data-value={Math.min(Math.max(value, 0), 100)}
        >
          {loadingText}
        </span>
      )}

      {variant == 'linear' && (
        <svg>
          <line
            className="vtmn-progressbar_indicator"
            x1={0}
            x2={
              status == 'determinate'
                ? `${Math.min(Math.max(value, 0), 100)}%`
                : '100%'
            }
            y1="50%"
            y2="50%"
          />
        </svg>
      )}

      {/**
       * Circular Progress Bar
       */}

      {variant == 'circular' && status == 'determinate' && (
        <span
          className="vtmn-progressbar_label"
          data-value={Math.min(Math.max(value, 0), 100)}
        />
      )}

      {variant == 'circular' && imageSrc !== undefined && (
        <img className="vtmn-progressbar_image" src={imageSrc} alt={imageAlt} />
      )}

      {variant == 'circular' && (
        <svg>
          <circle
            className="vtmn-progressbar_track"
            cx="50%"
            cy="50%"
            r={size == 'small' ? 32 : 64}
          />
          <circle
            className="vtmn-progressbar_indicator"
            strokeDashoffset={
              size == 'small'
                ? `calc(200px - (200px * ${Math.min(
                    Math.max(value, 0),
                    100,
                  )} / 100)`
                : `calc(400px - (400px * ${Math.min(
                    Math.max(value, 0),
                    100,
                  )} ) / 100)`
            }
            cx="50%"
            cy="50%"
            r={size == 'small' ? 32 : 64}
          />
        </svg>
      )}
    </div>
  );
};

const MemoVtmnProgressbar = React.memo(VtmnProgressbar);

MemoVtmnProgressbar.displayName = 'VtmnProgressbar';

export default MemoVtmnProgressbar;
