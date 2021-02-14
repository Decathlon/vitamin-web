const fs = require('fs');
const path = require('path');

const colors = [
  'brand-digital-light-1',
  'brand-digital',
  'brand-digital-dark-1',
  'brand-digital-dark-2',
];

const generateRow = (package, index) => `
  <a href="${package.name}">
    <span class="vtmn-text-${colors[index % colors.length]}">
      ${package.name}
    </span>
    <span class="description">${package.description}</span>
  </a>
`;

const generateHTML = (packages) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Decathlon Design System - Vitamin web libraries showcases</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/@vtmn/css">
  </head>
  <body>
    <img class="vtmn-text-center" src="https://user-images.githubusercontent.com/9600228/102414461-e3b92b00-3ff6-11eb-9c96-5f37c4d5e02c.png" alt="Decathlon Design System - Vitamin"/>
    <div class="content">
      ${packages.map(generateRow).join('')}
    </div>
  </body>
  </html>
`;

module.exports = function buildMonorepoIndex(
  packages,
  customHTMLGenerate,
  outputDir,
) {
  let index;

  console.log('=> Building index.html for monorepo');

  if (customHTMLGenerate) {
    const fn = require(path.join(process.cwd(), customHTMLGenerate));

    if (typeof fn === 'function') {
      index = fn(packages, outputDir);
    }
  } else {
    index = generateHTML(packages);
  }

  fs.writeFileSync(path.join(outputDir, 'index.html'), index);
};
