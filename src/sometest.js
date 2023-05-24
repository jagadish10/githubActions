let jsonData = {
    "wrappers": [
        "card"
    ],
    "templateOptions": {
        "label": "Classifications"
    },
    "fieldGroup": [
        {
            "type": "classifications",
            "key": "classifications",
            "templateOptions": {
                "minItems": 1,
                "maxItems": 3,
                "properties": {
                    "type": "classifications"
                },
                "label": "classifications"
            },
            "validators": {
                "validation": [
                    "minKeyWordsValidation",
                    'maxKeyWordsValidation',
                    "requiredValidation",
                ]
            }

        }
    ]
};

exports.getJsonData = (data) => {
    let value = JSON.parse(JSON.stringify(jsonData));
    if (data) {
        if (data["Classification"] !== 'Hidden') {
            let min = (data.Min !== undefined && data.Min !== "" && data.Min != "NA") ? data.Min : 0;
            let max = (data.Max !== undefined && data.Max !== "" && data.Min != "NA") ? data.Max : 0;
            value.fieldGroup[0].templateOptions.minItems = Number(min);
            value.fieldGroup[0].templateOptions.maxItems = Number(max);
            if (data["Classification"] === 'Optional') {
                value.fieldGroup[0].validators.validation = value.fieldGroup[0].validators.validation.filter(item=>item!=="requiredValidation");
            }
        } else {
            return {};
        }
    }
    return value;
};
