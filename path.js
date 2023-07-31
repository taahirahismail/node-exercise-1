var path = require('path');

console.log('Basename: ' + path.basename('./path.js'));
console.log('Directories: ' + path.dirname('./path.js'));
console.log('Extension: ' + path.extname('./path.js'));
// console.log('Format Path: ' + path.format('./path.js')); //formats path object into a path string -- probably already an object
console.log('Absolute: ' + path.isAbsolute('./path.js'));
console.log('Join with Data ig: ' + path.join('./path.js', './data.txt'));
console.log('Normalize: ' + path.normalize('./path.js'));
console.log('Parse: ' + path.parse('./path.js'));
// console.log('Relative: ' + relative('./path.js', './data.txt')); //returns the relative path from one path to another -- there are no relative paths between those I think
console.log('Resolve: ' + path.resolve('./path.js'));

// idk why the other stuff weren't working but I don't feel like dealing with it rn sorry