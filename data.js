// writing content to a text file (data.txt)
var fs = require('fs');

fs.writeFile('data.txt', 'dude, what am I doing?', function(e) {
    if (e)
    console.log(e);
    else
    console.log('done writing, baby.');
});

// after running the first one (using node data.js in the command prompt), adding new content to the same text file.

// fs.writeFile('data.txt', 'idk, mate.', function(e) {
//     if (e)
//     console.log(e);
//     else
//     console.log('done writing baby.');
// });

// second content wrote over the first one lol

fs.appendFile('data.txt', ' idk, mate.', function(e) {
    if (e)
    console.log(e);
    else
    console.log('done appending, baby.');
});

// the append will only add to the file if it is the only thing running, so the initial write file must be commented out or be on a different js file.