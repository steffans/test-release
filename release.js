var replace = require('replace-in-file');
var package = require('./package.json');

replace({
  files: "README.md",
  replace: /(\/|@)\d+\.\d+\.\d+/g,
  with: "$1" + package.version
});
