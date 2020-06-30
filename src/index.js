console.log('TP-2');

const fs = require('fs').promises;

Promise.all([0, 1]
  .map(index => './src/assets/characters-' + index + '.json')
  .map(filePath => fs.readFile(filePath, 'utf-8')))
  .then(fileContents => {
    fileContents
      .map(fileContent => JSON.parse(fileContent))
      .forEach(data => console.log(data))
  });
