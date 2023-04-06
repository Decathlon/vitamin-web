import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-skeleton/dist/index-with-vars.css';
import { VtmnSkeletonShape } from './types';

export interface VtmnSkeletonProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Width of the skeleton
   * @defaultValue 100%
   */
  width?: string;

  /**
   * Height of the skeleton
   */
  height?: string;

  /**
   * Define the type of shape.
   * @defaultValue 'line'
   */
  shape?: VtmnSkeletonShape;
}

export const VtmnSkeleton = ({
  width = '100%',
  height,
  shape = 'line',
  className,
  ...props
}: VtmnSkeletonProps) => {
  return (
    <span
      className={clsx('vtmn-skeleton', `vtmn-skeleton_${shape}`, className)}
      style={{ width, height }}
      {...props}
    ></span>
  );
};

const MemoVtmnSkeleton = React.memo(VtmnSkeleton);

MemoVtmnSkeleton.displayName = 'VtmnSkeleton';

export default MemoVtmnSkeleton;
