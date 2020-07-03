const { expect, spy } = require('chai');
const axios = require('axios');

const repository = require('./character.repository');

describe('character repository', () => {

  describe('find', () => {
    beforeEach(() => {
      spy.on(axios.default, 'get', () => Promise.resolve({ data: [{}, {}, {}] }));
    });

    afterEach(() => {
      spy.restore(axios.default, 'get');
    })

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

    it('should call one axios.get', done => {
      repository.find()
        .then(() => {
          expect(axios.default.get).to.have.been.called.once;
          done();
        })
        .catch(done);
    });
  });

  describe('get', () => {
    beforeEach(() => {
      spy.on(axios.default, 'get', () => Promise.resolve({ data: {} }));
    });

    afterEach(() => {
      spy.restore(axios.default, 'get');
    })

    it('should return a Promise', () => {
      const promise = repository.get();

      expect(promise).to.be.instanceOf(Promise);
    });

    it('should resolve an object', done => {
      repository.get()
        .then(entities => {
          expect(entities).to.be.instanceOf(Object);
          done();
        })
        .catch(done);
    });

    it('should call one axios.get', done => {
      repository.get()
        .then(() => {
          expect(axios.default.get).to.have.been.called.once;
          done();
        })
        .catch(done);
    });
  });
});

