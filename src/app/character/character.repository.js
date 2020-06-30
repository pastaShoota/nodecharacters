const fs = require('fs').promises;

module.exports = {
  find: () => Promise.all([0, 1]
    .map(index => './src/assets/characters-' + index + '.json')
    .map(filePath => fs.readFile(filePath, 'utf-8')))
    .then(fileContents => fileContents
      .map(fileContent => JSON.parse(fileContent))
      .reduce((acc, characters) => acc.concat(characters), []))
};
