


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    

    let t1 = new KrThing()

    let r = {
            "@type": "DigitalDocument",
            "@id": "dig4",
            "properties": {
                "@type": [
                    {
                        "@type": "addAction",
                        "@id": "c15f245b-7012-405e-adbc-864cf32c107c",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "@type",
                            "value": "DigitalDocument"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    }
                ],
                "@id": [
                    {
                        "@type": "addAction",
                        "@id": "4d230f54-6c36-4565-9cb2-1d4526312e4e",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "@id",
                            "value": "dig4"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    }
                ],
                "name": [
                    {
                        "@type": "addAction",
                        "@id": "ee7d50de-111a-4719-8f01-b41da7fd8c24",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "name",
                            "value": "name4"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    }
                ],
                "headline": [
                    {
                        "@type": "addAction",
                        "@id": "78571f85-bb21-4913-8dbb-990341b501ff",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "headline",
                            "value": "test headline 4"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    }
                ],
                "text": [
                    {
                        "@type": "addAction",
                        "@id": "51171e53-5ee3-43be-a9f2-11889cc52a25",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "text",
                            "value": "text 4"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    },
                    {
                        "@type": "replaceAction",
                        "@id": "5b5ca9a5-6685-4560-9537-abb59d8a2677",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "text",
                            "value": "text 4d"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 2
                        }
                    }
                ],
                "level": [
                    {
                        "@type": "replaceAction",
                        "@id": "2b033780-00a2-455a-9e5a-da2afcd40ccc",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "level",
                            "value": null
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 1
                        }
                    },
                    {
                        "@type": "replaceAction",
                        "@id": "7495a5e2-e9d4-4a6a-a32b-6deca849d004",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "level",
                            "value": {
                                "@type": "DigitalDocument",
                                "@id": "dig4",
                                "properties": {
                                    "@type": [
                                        {
                                            "@type": "addAction",
                                            "@id": "c15f245b-7012-405e-adbc-864cf32c107c",
                                            "actionStatus": "completedActionStatus",
                                            "object": {
                                                "@type": "propertyValue",
                                                "propertyID": "@type",
                                                "value": "DigitalDocument"
                                            },
                                            "metadata": {
                                                "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                                                "position": 1
                                            }
                                        }
                                    ],
                                    "@id": [
                                        {
                                            "@type": "addAction",
                                            "@id": "4d230f54-6c36-4565-9cb2-1d4526312e4e",
                                            "actionStatus": "completedActionStatus",
                                            "object": {
                                                "@type": "propertyValue",
                                                "propertyID": "@id",
                                                "value": "dig4"
                                            },
                                            "metadata": {
                                                "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                                                "position": 1
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-07T13:09:51.971Z\"",
                            "position": 2
                        }
                    }
                ],
                "hasPart": []
            },
            "summary": {
                "@type": "DigitalDocument",
                "@id": "dig4",
                "name": "name4",
                "headline": "test headline 4",
                "text": "text 4d",
                "level": null,
                "hasPart": []
            }
        }
    t1.setSystemRecord(r)


    
   


    let pvs = t1.getProperty('level')?.propertyValuesNet

    pvs = ensureArray(pvs)

    for(let pv of pvs){
        console.log(pv)
        if (pv.record_id == '7495a5e2-e9d4-4a6a-a32b-6deca849d004'){
            console.log(JSON.stringify(pv.getSystemRecord(), null, 4))
            //return pv.getSystemRecord()
            console.log(JSON.stringify(pv.getSystemRecord(), null, 4))
        }
    }
    
    
}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
