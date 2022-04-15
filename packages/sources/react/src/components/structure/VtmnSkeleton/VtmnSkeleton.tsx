import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-skeleton/dist/index-with-vars.css';
import { VtmnSkeletonShape } from './types';

export interface VtmnSkeletonProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Width of the skeleton (in percentage)..
   * @defaultValue 100
   */
  width?: number;

  /**
   * Define the type of shape.
   * @defaultValue 'line'
   */
  shape?: VtmnSkeletonShape;
}

export const VtmnSkeleton = ({
  width = 100,
  shape = 'line',
  className,
  ...props
}: VtmnSkeletonProps) => {
  return (
    <span
      className={clsx('vtmn-skeleton', `vtmn-skeleton_${shape}`, className)}
      style={{ width: `${width}%` }}
      {...props}
    ></span>
  );
};

const MemoVtmnSkeleton = React.memo(VtmnSkeleton);

MemoVtmnSkeleton.displayName = 'VtmnSkeleton';

export default MemoVtmnSkeleton;
