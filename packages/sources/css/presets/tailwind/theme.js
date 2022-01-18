module.exports = {
  screens: {
    mobile: { max: '599px' },
    tablet: { min: '600px', max: '899px' },
    'gt-tablet': { min: '600px' },
    'lt-small-desktop': { max: '899px' },
    'small-desktop': { min: '900px', max: '1199px' },
    'gt-small-desktop': { min: '900px' },
    'lt-medium-desktop': { max: '1199px' },
    'medium-desktop': { min: '1200px', max: '1799px' },
    'gt-medium-desktop': { min: '1200px' },
    'lt-large-desktop': { max: '1799px' },
    'large-desktop': { min: '1800px' },
  },
  colors: {
    transparent: 'transparent',
    'background-primary': 'var(--vtmn-semantic-color_background-primary)',
    'background-secondary': 'var(--vtmn-semantic-color_background-secondary)',
    'background-tertiary': 'var(--vtmn-semantic-color_background-tertiary)',
    'background-brand-primary':
      'var(--vtmn-semantic-color_background-brand-primary)',
    'background-brand-secondary':
      'var(--vtmn-semantic-color_background-brand-secondary)',
    'background-accent': 'var(--vtmn-semantic-color_background-accent)',
    'background-discount': 'var(--vtmn-semantic-color_background-discount)',
    'background-primary-reversed':
      'var(--vtmn-semantic-color_background-primary-reversed)',
    'background-brand-primary-reversed':
      'var(--vtmn-semantic-color_background-brand-primary-reversed)',
    'content-primary': 'var(--vtmn-semantic-color_content-primary)',
    'content-secondary': 'var(--vtmn-semantic-color_content-secondary)',
    'content-action': 'var(--vtmn-semantic-color_content-action)',
    'content-active': 'var(--vtmn-semantic-color_content-active)',
    'content-inactive': 'var(--vtmn-semantic-color_content-inactive)',
    'content-negative': 'var(--vtmn-semantic-color_content-negative)',
    'content-warning': 'var(--vtmn-semantic-color_content-warning)',
    'content-positive': 'var(--vtmn-semantic-color_content-positive)',
    'content-information': 'var(--vtmn-semantic-color_content-information)',
    'content-primary-reversed':
      'var(--vtmn-semantic-color_content-primary-reversed)',
    'content-action-reversed':
      'var(--vtmn-semantic-color_content-action-reversed)',
    'border-primary': 'var(--vtmn-semantic-color_border-primary)',
    'border-secondary': 'var(--vtmn-semantic-color_border-secondary)',
    'border-active': 'var(--vtmn-semantic-color_border-active)',
    'border-inactive': 'var(--vtmn-semantic-color_border-inactive)',
    'border-negative': 'var(--vtmn-semantic-color_border-negative)',
    'border-warning': 'var(--vtmn-semantic-color_border-warning)',
    'border-positive': 'var(--vtmn-semantic-color_border-positive)',
    'border-information': 'var(--vtmn-semantic-color_border-information)',
    'border-primary-reversed':
      'var(--vtmn-semantic-color_border-primary-reversed)',
    'hover-primary': 'var(--vtmn-semantic-color_hover-primary)',
    'hover-primary-transparent':
      'var(--vtmn-semantic-color_hover-primary-transparent)',
    'hover-secondary-transparent':
      'var(--vtmn-semantic-color_hover-secondary-transparent)',
    'hover-tertiary-transparent':
      'var(--vtmn-semantic-color_hover-tertiary-transparent)',
    'hover-tertiary': 'var(--vtmn-semantic-color_hover-tertiary)',
    'hover-brand': 'var(--vtmn-semantic-color_hover-brand)',
    'hover-accent': 'var(--vtmn-semantic-color_hover-accent)',
    'hover-primary-reversed-transparent':
      'var(--vtmn-semantic-color_hover-primary-reversed-transparent)',
    'hover-secondary-reversed-transparent':
      'var(--vtmn-semantic-color_hover-secondary-reversed-transparent)',
    'hover-brand-reversed-transparent':
      'var(--vtmn-semantic-color_hover-brand-reversed-transparent)',
    'active-primary': 'var(--vtmn-semantic-color_active-primary)',
    'active-primary-transparent':
      'var(--vtmn-semantic-color_active-primary-transparent)',
    'active-secondary-transparent':
      'var(--vtmn-semantic-color_active-secondary-transparent)',
    'active-tertiary': 'var(--vtmn-semantic-color_active-tertiary)',
    'active-tertiary-transparent':
      'var(--vtmn-semantic-color_active-tertiary-transparent)',
    'active-brand': 'var(--vtmn-semantic-color_active-brand)',
    'active-accent': 'var(--vtmn-semantic-color_active-accent)',
    'active-primary-reversed-transparent':
      'var(--vtmn-semantic-color_active-primary-reversed-transparent)',
    'active-secondary-reversed-transparent':
      'var(--vtmn-semantic-color_active-secondary-reversed-transparent)',
    'active-brand-reversed-transparent':
      'var(--vtmn-semantic-color_active-brand-reversed-transparent)',
    /* DEPRECATED legacy colors below (no longer maintained) */
    brand: { DEFAULT: 'var(--vtmn-color_brand)' },
    'brand-pro': { DEFAULT: 'var(--vtmn-color_brand-pro)' },
    'brand-digital': {
      'light-1': 'var(--vtmn-color_brand-digital-light-1)',
      'light-2': 'var(--vtmn-color_brand-digital-light-2)',
      'light-3': 'var(--vtmn-color_brand-digital-light-3)',
      DEFAULT: 'var(--vtmn-color_brand-digital)',
      'dark-1': 'var(--vtmn-color_brand-digital-dark-1)',
      'dark-2': 'var(--vtmn-color_brand-digital-dark-2)',
    },
    green: {
      'light-1': 'var(--vtmn-color_green-light-1)',
      'light-2': 'var(--vtmn-color_green-light-2)',
      'light-3': 'var(--vtmn-color_green-light-3)',
      DEFAULT: 'var(--vtmn-color_green)',
      'dark-1': 'var(--vtmn-color_green-dark-1)',
      'dark-2': 'var(--vtmn-color_green-dark-2)',
    },
    white: { DEFAULT: 'var(--vtmn-color_white)' },
    grey: {
      'light-1': 'var(--vtmn-color_grey-light-1)',
      'light-2': 'var(--vtmn-color_grey-light-2)',
      'light-3': 'var(--vtmn-color_grey-light-3)',
      'light-4': 'var(--vtmn-color_grey-light-4)',
      DEFAULT: 'var(--vtmn-color_grey)',
      'dark-1': 'var(--vtmn-color_grey-dark-1)',
      'dark-2': 'var(--vtmn-color_grey-dark-2)',
      'dark-3': 'var(--vtmn-color_grey-dark-3)',
    },
    black: { DEFAULT: 'var(--vtmn-color_black)' },
    success: { DEFAULT: 'var(--vtmn-color_success)' },
    info: { DEFAULT: 'var(--vtmn-color_info)' },
    warning: { DEFAULT: 'var(--vtmn-color_warning)' },
    danger: { DEFAULT: 'var(--vtmn-color_danger)' },
    yellow: {
      'light-1': 'var(--vtmn-color_yellow-light-1)',
      'light-2': 'var(--vtmn-color_yellow-light-2)',
      DEFAULT: 'var(--vtmn-color_yellow)',
    },
    orange: {
      'light-1': 'var(--vtmn-color_orange-light-1)',
      'light-2': 'var(--vtmn-color_orange-light-2)',
      DEFAULT: 'var(--vtmn-color_orange)',
    },
    red: {
      'light-1': 'var(--vtmn-color_red-light-1)',
      'light-2': 'var(--vtmn-color_red-light-2)',
      DEFAULT: 'var(--vtmn-color_red)',
    },
  },
  spacing: {
    0: 'var(--vtmn-spacing_0)',
    1: 'var(--vtmn-spacing_1)',
    2: 'var(--vtmn-spacing_2)',
    3: 'var(--vtmn-spacing_3)',
    4: 'var(--vtmn-spacing_4)',
    5: 'var(--vtmn-spacing_5)',
    6: 'var(--vtmn-spacing_6)',
    7: 'var(--vtmn-spacing_7)',
    8: 'var(--vtmn-spacing_8)',
    9: 'var(--vtmn-spacing_9)',
    10: 'var(--vtmn-spacing_10)',
  },
  fontFamily: {
    regular: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
    condensed: ['Roboto Condensed', 'system-ui', '-apple-system', 'sans-serif'],
    display: ['Roboto Condensed', 'system-ui', '-apple-system', 'sans-serif'],
    body: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
  },
  extend: {},
};
