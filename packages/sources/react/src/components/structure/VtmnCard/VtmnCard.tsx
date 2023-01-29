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
   * The title of the card
   */
  title: string;

  /**
   * The fullscreen property of the image
   * @defaultValue false
   */
  img?: React.ReactNode;

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
   * Heading level of the title
   * @defaultValue 2
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
  /**
   * The content to render top right the component.
   * @defaultValue undefined
   */
  topActions?: React.ReactNode;
}

export const VtmnCard = ({
  variant = 'top-image',
  title,
  img,
  fullImage = false,
  contentOpaque = false,
  headingLevel = 2,
  children,
  className,
  topActions,
}: VtmnCardProps) => {
  const Heading =
    headingLevel >= 0 && headingLevel <= 6
      ? (`h${headingLevel}` as keyof JSX.IntrinsicElements)
      : 'h2';

  return (
    <div className="vtmn-card">
      {(variant == 'side-image' || variant == 'without-image') &&
        topActions && (
          <div className={clsx('vtmn-card_top-action')}>
            <span className="vtmn-card_top-action--body">{topActions}</span>
          </div>
        )}
      <div className={clsx(`vtmn-card_variant--${variant}`, className)}>
        {variant != 'without-image' && (
          <div
            className={clsx('vtmn-card_image', {
              'vtmn-card_image--full': fullImage && variant === 'top-image',
            })}
          >
            {img && img}
          </div>
        )}
        <div
          className={clsx('vtmn-card_content', {
            'vtmn-card_content--opaque':
              contentOpaque && variant === 'full-image',
          })}
        >
          {title && (
            <Heading className="vtmn-card_content--title">{title}</Heading>
          )}
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
