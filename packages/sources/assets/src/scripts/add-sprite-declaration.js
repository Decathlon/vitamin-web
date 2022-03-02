const fs = require('fs');

fs.writeFileSync(
  `${process.cwd()}/dist/assets/sprite/assets.svg.d.ts`,
  'export default SVGElement;',
);
