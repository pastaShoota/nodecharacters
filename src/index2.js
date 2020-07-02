
const expect = require('chai');

const sum = (a,b) => a+b;

const result = sum(1,2);

expect(result).to.be.equal(3);
