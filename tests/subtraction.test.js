const expect = require('chai').expect;
let subtraction = require('../src/subtraction');

describe('subtraction.js test ' , () => {
    it('should exist getJsonData', () => {
        expect(subtraction.sub).to.exist;
    });
    it('should return 1', () => {
        let res = subtraction.sub(3,2);
        expect(res).to.exist;
        expect(res).to.equal(1);
    });
    it('number should be greater than 0', () => {
        let res = subtraction.sub(0,0);
        expect(res).to.exist;
        expect(res).to.equal("numbers should not be zero");
    });
})