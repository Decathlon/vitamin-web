import '@vtmn/css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';

const cssReq = require.context(
  '!!raw-loader!@vtmn/css-design-tokens/src',
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
