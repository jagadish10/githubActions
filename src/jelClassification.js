let jsonData = {
    "wrappers": [
        "card"
    ],
    "templateOptions": {
        "label": "JEL Classification"
    },
    "fieldGroup": [
        {
            "type": "classifications",
            "key": "jelClassifications",
            "templateOptions": {
                "minItems": 5,
                "maxItems": 10,
                "properties": {
                    "type": "JEL1"
                },
                "label": "classifications"
            },
            "validators": {
                "validation": [
                    "requiredValidation",
                    "minKeyWordsValidation",
                    'maxKeyWordsValidation'
                ]
            }

        }
    ]
};
exports.getJsonData = (data) => {
    let value = JSON.parse(JSON.stringify(jsonData));
    if (data) {
        if (data["Classification"] === "Hidden") {
            return {};
        }
        let min = (data.Min !== undefined && data.Min !== "" && data.Min != "NA") ? data.Min : 0;
        let max = (data.Max !== undefined && data.Max !== "" && data.Min != "NA") ? data.Max : 0;
        value.fieldGroup[0].templateOptions.minItems = Number(min);
        value.fieldGroup[0].templateOptions.maxItems = Number(max);
    }
    return value;
};
