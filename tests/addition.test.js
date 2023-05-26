const expect = require('chai').expect;
let addition = require('../src/addition');

describe('addition.js test ' , () => {
    it('should exist getJsonData', () => {
        expect(addition.sum).to.exist;
    });
    it('should return 5', () => {
        let res = addition.sum(2,3);
        expect(res).to.exist;
        expect(res).to.equal(5);
    });
    it('number should be greater than 0', () => {
        let res = addition.sum(0,0);
        expect(res).to.exist;
        expect(res).to.equal("numbers should not be zero");
    });
})