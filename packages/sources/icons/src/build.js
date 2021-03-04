const fse = require('fs-extra');

const srcDir = `${__dirname}/vitamix`;
const destDir = `${__dirname}/../dist/vitamix`;

fse.copy(srcDir, destDir, { overwrite: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Build success!');
  }
});
