import * as React from 'react';
import '@vtmn/css-price/dist/index-with-vars.css';
import { VtmnPriceVariant, VtmnPriceSize } from './types';
import { objectValuesToString } from '../../../utils/object';

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
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnPrice = React.forwardRef<HTMLButtonElement, VtmnPriceProps>(
  (
    { variant = 'default', size = 'medium', children, className, ...props },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={`vtmn-price vtmn-price_variant--${variant} vtmn-price_size--${size} ${
          className ? className : ''
        }`}
        {...objectValuesToString(props)}
      >
        {children}
      </span>
    );
  },
);

const MemoVtmnPrice = React.memo(VtmnPrice);

MemoVtmnPrice.displayName = 'VtmnPrice';

export default MemoVtmnPrice;
