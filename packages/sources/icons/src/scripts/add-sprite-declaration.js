const fs = require('fs');

fs.writeFileSync(
  `${process.cwd()}/dist/vitamix/sprite/vitamix.svg.d.ts`,
  'export default SVGElement;',
);
