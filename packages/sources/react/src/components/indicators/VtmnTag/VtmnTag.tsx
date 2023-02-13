import '@vtmn/css-tag';
import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';
import * as React from 'react';
import { VtmnIcon } from '../../../guidelines/iconography/VtmnIcon';
import { VtmnTagSize, VtmnTagVariant } from './types';

type VtmnTagAdditionalProps = {
  /**
   * The variant of the tag.
   * @defaultValue 'accent'
   */
  variant?: VtmnTagVariant;

  /**
   * The icon to display at the start  of the tag.
   * Only for 'input' variant
   */
  icon?: VitamixId;

  /**
   * The href that makes the tag interactive.
   * @type {string}
   */
  href?: string;

  /**
   * The size of the tag.
   * @defaultValue 'medium'
   */
  size?: VtmnTagSize;
};

export type VtmnTagProps = React.ComponentPropsWithoutRef<'span'> &
  React.ComponentPropsWithoutRef<'a'> &
  VtmnTagAdditionalProps;

export const VtmnTag = ({
  variant = 'accent',
  size = 'medium',
  icon,
  href,
  className,
  children,
  ...props
}: VtmnTagProps) => {
  return href ? (
    <a
      className={`vtmn-tag vtmn-tag_variant--${variant} vtmn-tag_size--${size} ${
        className ? className : ''
      }`}
      href={href}
      {...props}
    >
      {icon && (
        <VtmnIcon
          value={icon}
          aria-hidden="true"
          style={{ fontSize: 'inherit' }}
        />
      )}
      {children}
    </a>
  ) : (
    <span
      className={`vtmn-tag vtmn-tag_variant--${variant} vtmn-tag_size--${size} ${
        className ? className : ''
      }`}
      {...props}
    >
      {icon && (
        <VtmnIcon
          value={icon}
          aria-hidden="true"
          style={{ fontSize: 'inherit' }}
        />
      )}
      {children}
    </span>
  );
};

const MemoVtmnTag = React.memo(VtmnTag);

MemoVtmnTag.displayName = 'VtmnTag';

export default MemoVtmnTag;
