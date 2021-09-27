const { exec } = require('child_process');

const build = () =>
  exec(`sh ${__dirname}/build.sh`, (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

module.exports = build;
