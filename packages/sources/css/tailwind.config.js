module.exports = {
  presets: [require('./presets/tailwind')],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      minHeight: {
        48: '12rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
};
