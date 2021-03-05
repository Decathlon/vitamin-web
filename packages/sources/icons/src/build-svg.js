const fs = require('fs');
const fse = require('fs-extra');

const vitamixSrcDir = `${__dirname}/vitamix`;
const vitamixDestDir = `${__dirname}/../dist/vitamix`;

fse.copy(vitamixSrcDir, `${vitamixDestDir}/svg`, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
