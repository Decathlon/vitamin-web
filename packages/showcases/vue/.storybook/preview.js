import '@vtmn/css';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@vtmn/showcase-core/addons/backgrounds.json';
import viewports from '@vtmn/showcase-core/addons/viewports.json';
import dedent from "ts-dedent";
import { paramCase } from "param-case";

const templateSourceCode = (
  templateSource,
  args,
  argTypes,
  replacing = ' v-bind="args"',
) => {
  const componentArgs = {};
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k];
    if (typeof val !== 'undefined') {
      componentArgs[k] = val;
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val;
    switch (type) {
      case "boolean":
        return val ? key : "";
      case "string":
        return `${key}="${val}"`;
      default:
        return `:${key}="${val}"`;
    }
  };

  return templateSource.replace(
    replacing,
    Object.keys(componentArgs)
      .map((key) => " " + propToSource(paramCase(key), args[key]))
      .join(""),
  );
};

export const decorators = [withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  controls: { expanded: true },
  viewport: {
    viewports,
  },
  docs: {
    transformSource(src, ctx) {
      const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src);
      if (match) {
        return templateSourceCode(dedent(match[2]), ctx.args, ctx.argTypes);
      }
      return src;
    },
  }
};
