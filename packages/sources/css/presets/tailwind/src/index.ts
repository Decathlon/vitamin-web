import theme from './theme';

export default {
  prefix: 'vtmn-',
  corePlugins: {
    preflight:
      process.env.PREFLIGHT === 'true' || process.env.PREFLIGHT === undefined,
  },
  theme: theme,
  variants: {
    extend: {
      cursor: ['disabled', 'hover'],
      opacity: ['disabled', 'hover', 'active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
