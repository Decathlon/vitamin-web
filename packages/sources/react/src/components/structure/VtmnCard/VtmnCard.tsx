import * as React from 'react';
import clsx from 'clsx';
import '@vtmn/css-card/dist/index-with-vars.css';
import { VtmnCardVariant } from './types';

export interface VtmnCardProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The variant of the card
   * @defaultValue 'top-image'
   */
  variant?: VtmnCardVariant;

  /**
   * The media source
   */
  mediaSource: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * The fullscreen property of the image
   * @defaultValue false
   */
  fullImage?: boolean;

  /**
   * The opaque property of image,
   * only on card variant 'full-image'
   * @defaultValue false
   */
  contentOpaque?: boolean;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const VtmnCard = ({
  variant = 'top-image',
  mediaSource,
  title,
  fullImage = false,
  contentOpaque = false,
  children,
  className,
}: VtmnCardProps) => {
  return (
    <div className="vtmn-card-container">
      <div
        className={clsx(
          'vtmn-card',
          `vtmn-card_variant--${variant}`,
          className,
        )}
      >
        <div
          className={clsx('vtmn-card_image', {
            'vtmn-card_image--full': fullImage && variant === 'top-image',
          })}
        >
          <img alt="" src={mediaSource} />
        </div>
        <div
          className={clsx('vtmn-card_content', {
            'vtmn-card_content--opaque':
              contentOpaque && variant === 'full-image',
          })}
        >
          {title && <h2 className="vtmn-card_content--title">{title}</h2>}
          {children && (
            <span className="vtmn-card_content--body">{children}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const MemoVtmnCard = React.memo(VtmnCard);

MemoVtmnCard.displayName = 'VtmnCard';

export default MemoVtmnCard;
