/*
*** Sorting the medicine datafile in ascending alphabetic order ***
*/

const fs = require('fs');
const data = fs.readFileSync('datafile.txt', 'utf8');

const dataArray = data.split('\n');

const filteredData = dataArray.filter(line => line.trim() !== '');

// Sort the array alphabetically
filteredData.sort();

// Print the sorted data
console.log(filteredData.join('\n'));


module.exports = filderedData;

