const fs = require('fs');
const fse = require('fs-extra');

const assetsSrcDir = `${__dirname}/../assets`;
const assetsDestDir = `${__dirname}/../../dist`;

fse.copy(assetsSrcDir, `${assetsDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
