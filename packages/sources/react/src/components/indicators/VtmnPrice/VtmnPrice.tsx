import * as React from 'react';
import '@vtmn/css-price/dist/index-with-vars.css';
import { VtmnPriceVariant, VtmnPriceSize } from './types';
import clsx from 'clsx';

export interface VtmnPriceProps extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The variant of the price.
   * @defaultValue 'default'
   */
  variant?: VtmnPriceVariant;

  /**
   * The size of the price.
   * @defaultValue 'medium'
   */
  size?: VtmnPriceSize;

  /**
   * No padding on the price.
   * @defaultValue false
   */
  noPadding?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnPrice = React.forwardRef<HTMLButtonElement, VtmnPriceProps>(
  (
    {
      variant = 'default',
      size = 'medium',
      noPadding = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          `vtmn-price vtmn-price_variant--${variant} vtmn-price_size--${size}`,
          noPadding && 'vtmn-price--no-padding',
          className ? className : '',
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

const MemoVtmnPrice = React.memo(VtmnPrice);

MemoVtmnPrice.displayName = 'VtmnPrice';

export default MemoVtmnPrice;
