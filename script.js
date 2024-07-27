


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test1(){

    let record= {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "other": {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing2",
                    "name": "thing2"
                }
        }

    let record2 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing2",
        "name": "thing2"
    }



    let record3 = JSON.parse(` {
                                "propertyValues": [
                                    {
                                        "@type": "replaceAction",
                                        "@id": "dbc6dcb0-b6f3-43ce-b33a-246b9f269014",
                                        "actionStatus": "completedActionStatus",
                                        "valid": true,
                                        "object": {
                                            "@type": "propertyValue",
                                            "propertyID": "@type",
                                            "value": "Thing"
                                        },
                                        "metadata": {
                                            "createdDate": "2024-07-27T19:38:29.888Z",
                                            "position": 1
                                        }
                                    },
                                    {
                                        "@type": "replaceAction",
                                        "@id": "561c3d32-49bf-4de6-ba02-95b83f8fd74c",
                                        "actionStatus": "completedActionStatus",
                                        "valid": true,
                                        "object": {
                                            "@type": "propertyValue",
                                            "propertyID": "@id",
                                            "value": "thing90"
                                        },
                                        "metadata": {
                                            "createdDate": "2024-07-27T19:38:29.888Z",
                                            "position": 1
                                        }
                                    },
                                    {
                                        "@type": "replaceAction",
                                        "@id": "61d27fa0-3ac5-4270-9931-a247758653f9",
                                        "actionStatus": "completedActionStatus",
                                        "valid": true,
                                        "object": {
                                            "@type": "propertyValue",
                                            "propertyID": "name",
                                            "value": "thing90"
                                        },
                                        "metadata": {
                                            "createdDate": "2024-07-27T19:38:29.888Z",
                                            "position": 1
                                        }
                                    },
                                    {
                                        "@type": "replaceAction",
                                        "@id": "7fbdf0ea-30f2-40f9-914e-a84aec6e3774",
                                        "actionStatus": "completedActionStatus",
                                        "valid": true,
                                        "object": {
                                            "@type": "propertyValue",
                                            "propertyID": "other",
                                            "value": "other90"
                                        },
                                        "metadata": {
                                            "createdDate": "2024-07-27T19:38:29.888Z",
                                            "position": 1
                                        }
                                    },
                                    {
                                        "@type": "replaceAction",
                                        "@id": "72d90320-6c5e-49b0-90c9-663480f4d9e4",
                                        "actionStatus": "completedActionStatus",
                                        "valid": true,
                                        "object": {
                                            "@type": "propertyValue",
                                            "propertyID": "other2",
                                            "value": {
                                                "@type": "Thing",
                                                "@id": "thing91"
                                            }
                                        },
                                        "metadata": {
                                            "createdDate": "2024-07-27T19:38:29.888Z",
                                            "position": 1
                                        }
                                    }
                                ],
                                "references": [
                                    {
                                        "@type": "Thing",
                                        "@id": "thing91"
                                    }
                                ],
                                "summary": {
                                    "@type": "Thing",
                                    "@id": "thing90",
                                    "name": "thing90",
                                    "other": "other90",
                                    "other2": {
                                        "@type": "Thing",
                                        "@id": "thing91",
                                        "name": "thing91",
                                        "other": "other91"
                                    }
                                },
                                "@type": "Thing",
                                "@id": "thing90"
                            }`)


    
    let thing = new KrThing()

    thing.setSystemRecord(record3)

    
    console.log('ff', thing.record)
    //console.log(JSON.stringify(thing2.record, null, 4))

    








    
}


test1()