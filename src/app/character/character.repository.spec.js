const { expect } = require('chai').expect;
const repository = require('./character.repository');

describe('character repository', () => {
  describe('find', () => {
    it('should return a Promise', () => {
      const promise = repository.find();

      expect(promise).to.be.instanceOf(Promise);
    });

    it('should resolve a non empty array', done => {
      repository.find()
        .then(entities => {
          expect(entities).to.be.instanceOf(Array);
          expect(entities).to.not.be.empty;
          done();
        })
        .catch(done);
    });
  });
});

