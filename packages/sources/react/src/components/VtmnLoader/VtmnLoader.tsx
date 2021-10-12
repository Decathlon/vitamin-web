import * as React from 'react';

import '@vtmn/css-loader/dist/index-with-vars.css';
import { VtmnLoaderSize } from './types';

export interface VtmnLoaderProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The size of the loader.
   * @defaultValue 'medium'
   */
  size?: VtmnLoaderSize;
}

export const VtmnLoader = ({
  size = 'medium',
  className,
  ...props
}: VtmnLoaderProps) => {
  return (
    <div
      className={`vtmn-loader vtmn-loader_size--${size} ${className}`}
      {...props}
    ></div>
  );
};

export default React.memo(VtmnLoader);
