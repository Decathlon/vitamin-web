const fs = require('fs');

fs.writeFileSync(
  `${process.cwd()}/dist/sprite/assets.svg.d.ts`,
  'export default SVGElement;',
);
