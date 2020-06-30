console.log('TP-1');

const fs = require('fs');

console.time();
[0, 1, 2]
  .map(index => './characters-' + index + '.json')
  .map(filePath => fs.readFileSync(filePath, 'utf-8'))
  .map(fileContent => JSON.parse(fileContent))
  .forEach(data => console.log(data));
console.timeEnd();
