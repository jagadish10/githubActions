const expect = require('chai').expect;
let multiplication = require('../src/multiplication');

describe('multiplication.js test ' , () => {
    it('should exist getJsonData', () => {
        expect(multiplication.mul).to.exist;
    });
    it('should return 6', () => {
        let res = multiplication.mul(3,2);
        expect(res).to.exist;
        expect(res).to.equal(6);
    });
    it('number should be greater than 0', () => {
        let res = multiplication.mul(0,0);
        expect(res).to.exist;
        expect(res).to.equal("numbers should not be zero");
    });
})