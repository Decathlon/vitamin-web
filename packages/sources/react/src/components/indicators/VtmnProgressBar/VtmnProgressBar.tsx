import * as React from 'react';
import '@vtmn/css-button/dist/index-with-vars.css';
import clsx from 'clsx';
import {
  VtmnProgressBarVariant,
  VtmnProgressBarSize,
  VtmnProgressBarStatus,
} from './types';

export interface VtmnProgressBarProps {
  /**
   * The variant of the progress bar.
   * @type {VtmnProgressBarVariant}
   * @defaultValue 'linear'
   */
  variant?: VtmnProgressBarVariant;

  /**
   * The size of the progress bar.
   * @type {VtmnProgressBarSize}
   * @defaultValue 'medium'
   */
  size?: VtmnProgressBarSize;

  /**
   * The status of the progress bar.
   * @type {VtmnProgressBarStatus}
   * @defaultValue 'determinate'
   */
  status?: VtmnProgressBarStatus;

  /**
   * The current value of the progress bar.
   * @type {number}
   * @defaultValue 0
   */
  value?: number;

  /**
   * The minimum value of the progress bar.
   * @type {number}
   * @defaultValue 0
   */
  minValue?: number;

  /**
   * The maximum value of the progress bar.
   * @type {number}
   * @defaultValue 100
   */
  maxValue?: number;

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

export const VtmnProgressBar = ({
  variant = 'linear',
  status = 'determinate',
  size = 'medium',
  value = 0,
  minValue = 0,
  maxValue = 100,
  imageSrc = undefined,
  imageAlt = undefined,
  loadingText = 'Loading',
}: VtmnProgressBarProps) => {
  return (
    <div
      className={clsx(
        'vtmn-progressbar_container',
        `vtmn-progressbar_variant--${variant}`,
        `vtmn-progressbar--${status}`,
        // Only add size attribute when variant is linear or size is small in circular mode
        (variant == 'linear' || size == 'small') &&
          `vtmn-progressbar_size--${size}`,
      )}
      role="progressbar"
      aria-label="progress bar"
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
    >
      {/**
       * Linear Progress Bar
       */}

      {variant == 'linear' && status == 'determinate' && (
        <span
          className="vtmn-progressbar_label"
          // Clamp the value between minValue and maxValue

          data-value={Math.min(Math.max(value, minValue), maxValue)}
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
                ? `${Math.min(Math.max(value, minValue), maxValue)}%`
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
          data-value={Math.min(Math.max(value, minValue), maxValue)}
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
            stroke-dashoffset={
              size == 'small'
                ? `calc(200px - (200px * ${Math.min(
                    Math.max(value, minValue),
                    maxValue,
                  )} / 100)`
                : `calc(400px - (400px * ${Math.min(
                    Math.max(value, minValue),
                    maxValue,
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

const MemoVtmnProgressBar = React.memo(VtmnProgressBar);

MemoVtmnProgressBar.displayName = 'VtmnProgressBar';

export default MemoVtmnProgressBar;
