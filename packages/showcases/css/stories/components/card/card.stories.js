import overview from './examples/overview.html';
import { default as topImage } from './examples/top-image.html';
import { default as sideImage } from './examples/side-image.html';
import { default as fullImage } from './examples/full-image.html';

export default {
  title: 'Components / Card ',
  argTypes: { onchange: { action: 'write' } },
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const TopImage = () => topImage;
TopImage.parameters = {
  docs: {
    source: {
      code: topImage,
    },
  },
};

export const SideImage = () => sideImage;
SideImage.parameters = {
  docs: {
    source: {
      code: sideImage,
    },
  },
};

export const FullImage = () => fullImage;
FullImage.parameters = {
  docs: {
    source: {
      code: fullImage,
    },
  },
};
