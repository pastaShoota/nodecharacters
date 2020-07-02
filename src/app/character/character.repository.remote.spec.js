const expect = require('chai').expect;
const repository = require('./character.repository.remote');

// npm test

describe('remote repository', () => {
    describe('test get', () => {
        it('should be an instance of Promise', () => {
            const promise = repository.get('0123');

            expect(promise).to.be.instanceOf(Promise);
        });
        it('should return 404 on not found', (done) => {
            repository.get('0123').then((char, err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(char);
                }
                done();
            });
        });
    })
})



