const fs = require('fs');


// // Synchronous
// console.log('A');
// let result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

// Asynchronous
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');

