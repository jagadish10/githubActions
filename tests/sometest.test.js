const expect = require('chai').expect;
let classificationPreference = require('../src/sometest');

let data= {
    "Min" : 2,
    "Max" : 4,
}
let hidden= {
    "Classification" : "Hidden"
}
let optional= {
    "Classification" : "Optional"
}

describe('classificationPreference.js test ' , () => {
    it('should exist getJsonData', () => {
        expect(classificationPreference.getJsonData).to.exist;
    });
    it ('should return the data', () => {
        let  res =  classificationPreference.getJsonData(data);
        expect(res).to.exist;
        expect(res.fieldGroup[0].templateOptions.minItems).to.exist;
        expect(res.templateOptions.label).to.equal("Classifications");
        expect(res.fieldGroup[0].templateOptions.minItems).to.equal(2);
        expect(res.fieldGroup[0].templateOptions.maxItems).to.equal(4);
    });
    it ('should not include requiredValidation if data is optional', () => {
        let  res =  classificationPreference.getJsonData(optional);
        expect(res).to.exist;
        expect(res.fieldGroup[0].validators.validation).to.not.include('requiredValidation');
    })
    it ('should not return the data', () => {
        let  res =  classificationPreference.getJsonData(hidden);
        expect(res).to.empty;
    });
    
});
