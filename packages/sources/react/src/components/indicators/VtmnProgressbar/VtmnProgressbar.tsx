import * as React from 'react';
import '@vtmn/css-progressbar/dist/index-with-vars.css';
import clsx from 'clsx';
import {
  VtmnProgressbarVariant,
  VtmnProgressbarSize,
  VtmnProgressbarStatus,
} from './types';

const VtmnProgressbarMappedSize: { [key in VtmnProgressbarSize]: number } = {
  small: 32,
  medium: 64,
  large: 128,
};

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

  /**
   * Id of the labelId
   * @type {string}
   * @defaultValue 'Loading'
   */
  labelId?: string;
}

export const VtmnProgressbar = ({
  variant = 'linear',
  status = 'determinate',
  size = 'medium',
  value = 0,
  imageSrc = undefined,
  imageAlt = undefined,
  loadingText = 'Loading',
  labelId,
  className,
  ...props
}: VtmnProgressbarProps) => {
  const progress = Math.min(Math.max(value, 0), 100);
  const circlePerimeter = `${Math.round(
    2 * Math.PI * VtmnProgressbarMappedSize[size],
  )}px`;

  // Progressbar states
  const isLinear = variant === 'linear';
  const isCircular = variant === 'circular';
  const isDeterminate = status === 'determinate';
  const isIndeterminate = status === 'indeterminate';
  const isSmall = size === 'small';

  // Progressbar a11y props
  const ariaProps = {
    'aria-labelledby': labelId ?? undefined,
    ...(isDeterminate
      ? {
          'aria-valuenow': progress,
          'aria-valuemin': 0,
          'aria-valuemax': 100,
        }
      : {}),
  };

  return (
    <div
      className={clsx(
        'vtmn-progressbar_container',
        `vtmn-progressbar_variant--${variant}`,
        `vtmn-progressbar--${status}`,
        // Only add size attribute when variant is linear or size is small in circular mode
        (isLinear || isSmall) && `vtmn-progressbar_size--${size}`,
        className,
      )}
      role="progressbar"
      {...ariaProps}
      {...props}
    >
      {/**
       * Linear Progressbar
       */}

      {isLinear && (
        <>
          {isDeterminate && (
            <div className="vtmn-progressbar_label">
              <span id={labelId ?? undefined}>{loadingText}</span>
              <span aria-live="assertive">{progress}%</span>
            </div>
          )}

          {isIndeterminate && (
            <span id={labelId ?? undefined} className="vtmn-sr-only">
              {loadingText}
            </span>
          )}

          <svg>
            <line
              className="vtmn-progressbar_indicator"
              x1="0"
              x2="100%"
              y1="50%"
              y2="50%"
              style={
                isDeterminate
                  ? {
                      transform: `translateX(${progress - 100}%)`,
                    }
                  : {}
              }
            />
          </svg>
        </>
      )}

      {/**
       * Circular Progressbar
       */}

      {isCircular && (
        <>
          {isDeterminate && (
            <span className="vtmn-progressbar_label" aria-live="assertive">
              {progress}%
            </span>
          )}

          {imageSrc !== undefined && (
            <img
              className="vtmn-progressbar_image"
              src={imageSrc}
              alt={imageAlt ?? ''}
            />
          )}

          {isIndeterminate && (
            <span id={labelId ?? undefined} className="vtmn-sr-only">
              {loadingText}
            </span>
          )}

          <svg>
            <circle
              className="vtmn-progressbar_track"
              cx="50%"
              cy="50%"
              r={VtmnProgressbarMappedSize[size]}
            />
            <circle
              className="vtmn-progressbar_indicator"
              strokeDashoffset={`calc(${circlePerimeter} - ${circlePerimeter} * ${progress} / 100)`}
              cx="50%"
              cy="50%"
              r={VtmnProgressbarMappedSize[size]}
            />
          </svg>
        </>
      )}
    </div>
  );
};

const MemoVtmnProgressbar = React.memo(VtmnProgressbar);

MemoVtmnProgressbar.displayName = 'VtmnProgressbar';

export default MemoVtmnProgressbar;
