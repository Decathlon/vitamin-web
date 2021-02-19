const fs = require('fs');
const path = require('path');

const colors = [
  'brand-digital',
  'brand-digital-dark-1',
  'brand-digital-dark-2',
];

const generateRow = (package, index) => `
  <a href="${
    package.name
  }" target="_blank" class="vtmn-flex vtmn-justify-center vtmn-bg-${
  colors[index % colors.length]
} vtmn-text-white hover:vtmn-bg-brand-digital-light-1 vtmn-rounded-lg vtmn-p-5 vtmn-mb-4" style="width: 400px">
    ${package.name}
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
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@vtmn/css">
  </head>
  <body>
    <div class="vtmn-flex vtmn-flex-col vtmn-justify-center vtmn-items-center">
      <img width="400" class="vtmn-m-8" src="https://user-images.githubusercontent.com/9600228/102414461-e3b92b00-3ff6-11eb-9c96-5f37c4d5e02c.png" alt="Decathlon Design System - Vitamin"/>
      ${packages.map(generateRow).join('')}
  </body>
  </html>
`;

module.exports = function buildMonorepoIndex(packages, outputDir) {
  return generateHTML(packages);
};
