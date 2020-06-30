console.log('TP-1');

const fs = require('fs').promises;

console.time();
Promise.all([0, 1, 2]
  .map(index => './characters-' + index + '.json')
  .map(filePath => fs.readFile(filePath, 'utf-8')))
  .then(fileContents => {
    fileContents
      .map(fileContent => JSON.parse(fileContent))
      .forEach(data => console.log(data))
    console.timeEnd();
  });
