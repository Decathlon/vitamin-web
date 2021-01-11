import '@decathlon/vitamin-css';
import { withDesign } from 'storybook-addon-designs';
import viewports from './addons/viewports.json';
import backgrounds from './addons/backgrounds.json';

const cssReq = require.context(
  '!!raw-loader!@decathlon/vitamin-css-design-tokens/src',
  true,
  /.\.css$/,
);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds,
  designToken: {
    files: {
      css: cssTokenFiles,
    },
    options: {
      hideMatchingHardCodedValues: false,
    },
  },
};
