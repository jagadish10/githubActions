const expect = require('chai').expect;
let JELClassification = require('../src/jelClassification');

let data= {
    "Min" : 3,
    "Max" : 5,
}
let hidden= {
    "Classification" : "Hidden"
}
let undefined_data= {
    "Min":"",
    "Max":""
};

describe('JELClassification.js test ' , () => {
    it('should exist getJsonData', () => {
        expect(JELClassification.getJsonData).to.exist;
    });
    it ('should return the data', () => {
        let  res =  JELClassification.getJsonData(data);
        expect(res).to.exist;
        expect(res.fieldGroup[0].templateOptions.minItems).to.exist;
        expect(res.templateOptions.label).to.equal("JEL Classification");
        expect(res.fieldGroup[0].templateOptions.minItems).to.equal(3);
        expect(res.fieldGroup[0].templateOptions.maxItems).to.equal(5);
    });
    it ('should return the default data if we not pass the parameters', () => {
        let  res =  JELClassification.getJsonData();
        expect(res).to.exist;
        expect(res.fieldGroup[0].templateOptions.minItems).to.exist;
        expect(res.templateOptions.label).to.equal("JEL Classification");
    });
    it ('should return the min and max as zero if it is empty', () => {
        let  res =  JELClassification.getJsonData(undefined_data);
        expect(res).to.exist;
        expect(res.fieldGroup[0].templateOptions.minItems).to.exist;
        expect(res.fieldGroup[0].templateOptions.minItems).to.equal(0);
        expect(res.fieldGroup[0].templateOptions.maxItems).to.equal(0);
    });
    it ('should not return the data if it is Hidden', () => {
        let  res =  JELClassification.getJsonData(hidden);
        expect(res).to.empty;
    });
    
});
