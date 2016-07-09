var replace = require('replace-in-file');
var package = require('./package.json');

console.log(package.version);

// replace({
//   files: "bower.json",
//   replace: /("version"\s*:\s*")\d+\.\d+\.\d+("\s*,)/g,
//   with: "$1" + version + "$2"
// });

// replace({
//   files: "README.md",
//   replace: /(\/|@)\d+\.\d+\.\d+/g,
//   with: "$1" + version
// });
