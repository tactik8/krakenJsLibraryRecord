


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



    function test(){


        let record = {
                 "@type": "Person",
                 "@id": "person_1",
                 "givenName": "givenName_1",
                 "familyName": "familyName_1",
                 "email": "test@test.com",
                 "telephone": "1-514-111-2222",
                 "hasOccupation": {
                     "@type": "Occupation",
                     "@id": "occupation_1",
                     "name": "occupation_1"
                     },
                 "worksfor": {
                     "@type": "Organization",
                     "@id": "organization_1",
                     "name": "test_org_1",
                     "url": "https://www.test.com"
                     }
             }
        //r = r.replaceAll('"\"', '"')
        //r = r.replaceAll('\""', '"')

        //console.log(r.slice(3, 10))
        //let record = JSON.parse(r)


        let t = new KrThing()
        t.record = record
        
        let ts = [t.getSystemRecord()]
        for(let t0 of t.things){
            ts.push(t0.getSystemRecord())
        }        
        console.log(ts.length)


        for(let ts0 of ts){
            let t0 = new KrThing()
            t0.setSystemRecord(ts0)
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



function getRecord(){

    return `{
    "@type": "ItemList",
    "@id": "test001"}`
}
function getRecord2(){
    return `{
    "@type": "ItemList",
    "@id": "test001",
    "properties": {
        "@type": [
            {
                "@type": "replaceAction",
                "@id": "61403c71-7535-46e2-a356-797f3933103a",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "@type",
                    "value": "ItemList"
                },
                "metadata": {
                    "createdDate": "2024-07-19T16:22:26.429Z",
                    "position": 1
                }
            }
        ],
        "@id": [
            {
                "@type": "replaceAction",
                "@id": "579ab843-07af-4d8b-8142-6b498333aa03",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "@id",
                    "value": "test001"
                },
                "metadata": {
                    "createdDate": "\"2024-07-19T16:22:26.429Z\"",
                    "position": 1
                }
            }
        ],
        "itemListElement": [
            {
                "@type": "replaceAction",
                "@id": "5b6d745b-2344-4dfd-bd64-4de3725df67f",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "itemListElement",
                    "value": {
                        "@type": "ListItem",
                        "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                        "properties": {
                            "@type": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "57bb4dfb-bccb-481d-93cc-1ff467174a9d",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@type",
                                        "value": "ListItem"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "@id": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "7f31ad93-3b67-4731-a2c4-5b856eeabb90",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@id",
                                        "value": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "item": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "cfe36808-8181-46ba-9839-ea1bb4ae9836",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "item",
                                        "value": {
                                            "@type": "DigitalDocument",
                                            "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                                            "properties": {
                                                "@type": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "e6eef8a0-3f08-4e2e-a50d-3afe5e30a081",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@type",
                                                            "value": "DigitalDocument"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "@id": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "98854313-79c6-447e-a114-910d0cc90b8f",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@id",
                                                            "value": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "hasPart": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "0f225d04-a7e3-4023-af87-7946ebd13e66",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "hasPart",
                                                            "value": {
                                                                "@type": "ItemList",
                                                                "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                                                                "properties": {
                                                                    "@type": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "4ce6c61a-759f-4835-9144-36db94c61001",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@type",
                                                                                "value": "ItemList"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ],
                                                                    "@id": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "94d1f9b4-3149-4534-b9f8-70ecc27ff61f",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@id",
                                                                                "value": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                "summary": {
                                                                    "@type": "ItemList",
                                                                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                                                }
                                                            }
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ]
                                            },
                                            "summary": {
                                                "@type": "DigitalDocument",
                                                "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                                                "hasPart": {
                                                    "@type": "ItemList",
                                                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                                }
                                            }
                                        }
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "nextItem": [
                                {
                                    "@type": "ListItem",
                                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                }
                            ],
                            "text": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "ab155710-f1f5-4369-b299-f5f45d1fd4c3",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "text",
                                        "value": "bob"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.430Z\"",
                                        "position": 1
                                    }
                                }
                            ]
                        },
                        "summary": {
                            "@type": "ListItem",
                            "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                            "item": {
                                "@type": "DigitalDocument",
                                "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                                "hasPart": {
                                    "@type": "ItemList",
                                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                }
                            },
                            "nextItem": {
                                "@type": "ListItem",
                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                            },
                            "text": "bob"
                        }
                    }
                },
                "metadata": {
                    "createdDate": "\"2024-07-19T16:22:26.429Z\"",
                    "position": 1
                }
            },
            {
                "@type": "addAction",
                "@id": "675f3e6f-6637-4b40-8cbf-4a117bd2edf3",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "itemListElement",
                    "value": {
                        "@type": "ListItem",
                        "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                        "properties": {
                            "@type": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "83f466a4-fce2-4236-bde2-2ca8eb62f00b",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@type",
                                        "value": "ListItem"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "@id": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "55bc03e7-9af9-45cd-ae4b-96817d8bf150",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@id",
                                        "value": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "item": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "92b2ba16-0fee-406b-be17-2d674789d249",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "item",
                                        "value": {
                                            "@type": "DigitalDocument",
                                            "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                            "properties": {
                                                "@type": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "389d9863-48ad-47a3-a978-78e77f9785a8",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@type",
                                                            "value": "DigitalDocument"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "@id": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "d9c9af96-ea01-4e43-aaf9-628d995ac313",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@id",
                                                            "value": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "hasPart": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "c407a2ec-3f40-415e-8330-647439a948d1",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "hasPart",
                                                            "value": {
                                                                "@type": "ItemList",
                                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                                                "properties": {
                                                                    "@type": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "815c2e6b-b0bb-496f-9149-02e3fc81cbc6",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@type",
                                                                                "value": "ItemList"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ],
                                                                    "@id": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "35ceb694-3f09-4b42-87d9-740a7723d241",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@id",
                                                                                "value": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ],
                                                                    "numberOfItems": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "00c2eec7-3a85-42bc-87d9-51eb24e6dba9",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "numberOfItems",
                                                                                "value": 2
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ],
                                                                    "itemListElement": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "5b6664ed-f313-4274-bee7-4b1a9d3ed481",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "itemListElement",
                                                                                "value": {
                                                                                    "@type": "ListItem",
                                                                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                    "properties": {
                                                                                        "@type": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "0b830464-e076-4c02-ab1a-4954af301056",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "@type",
                                                                                                    "value": "ListItem"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "@id": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "22bebe02-e072-45d3-a5c8-ad4e642acf99",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "@id",
                                                                                                    "value": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "item": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "ff17ae34-d03b-48eb-bed5-308c9ba6d28e",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "item",
                                                                                                    "value": {
                                                                                                        "@type": "DigitalDocument",
                                                                                                        "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                                        "properties": {
                                                                                                            "@type": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "2f978b36-0ccc-4544-b0e6-56dd84eb644e",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "@type",
                                                                                                                        "value": "DigitalDocument"
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ],
                                                                                                            "@id": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "037cc8db-022d-4ce0-869f-3f9a5398312a",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "@id",
                                                                                                                        "value": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ],
                                                                                                            "hasPart": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "2dc19c9b-dfa0-4caf-bcfb-c850904a7f12",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "hasPart",
                                                                                                                        "value": {
                                                                                                                            "@type": "ItemList",
                                                                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "summary": {
                                                                                                            "@type": "DigitalDocument",
                                                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                                            "hasPart": {
                                                                                                                "@type": "ItemList",
                                                                                                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                                                "numberOfItems": 1,
                                                                                                                "itemListElement": {
                                                                                                                    "@type": "ListItem",
                                                                                                                    "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                                                    "item": {
                                                                                                                        "@type": "DigitalDocument",
                                                                                                                        "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                                                        "hasPart": {
                                                                                                                            "@type": "ItemList",
                                                                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "previousItem": {
                                                                                                                        "@type": "ListItem",
                                                                                                                        "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                                                    },
                                                                                                                    "nextItem": {
                                                                                                                        "@type": "ListItem",
                                                                                                                        "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                                    },
                                                                                                                    "text": "        bob4"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "previousItem": [
                                                                                            {
                                                                                                "@type": "ListItem",
                                                                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                                                            }
                                                                                        ],
                                                                                        "nextItem": [
                                                                                            {
                                                                                                "@type": "ListItem",
                                                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                            }
                                                                                        ],
                                                                                        "text": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "4944def8-c2ef-447d-9cd5-2034029d7304",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "text",
                                                                                                    "value": "    bob3"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    "summary": {
                                                                                        "@type": "ListItem",
                                                                                        "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                        "item": {
                                                                                            "@type": "DigitalDocument",
                                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                            "hasPart": {
                                                                                                "@type": "ItemList",
                                                                                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                                "numberOfItems": 1,
                                                                                                "itemListElement": {
                                                                                                    "@type": "ListItem",
                                                                                                    "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                                    "item": {
                                                                                                        "@type": "DigitalDocument",
                                                                                                        "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                                        "hasPart": {
                                                                                                            "@type": "ItemList",
                                                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                                        }
                                                                                                    },
                                                                                                    "previousItem": {
                                                                                                        "@type": "ListItem",
                                                                                                        "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                                    },
                                                                                                    "nextItem": {
                                                                                                        "@type": "ListItem",
                                                                                                        "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                    },
                                                                                                    "text": "        bob4"
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        "previousItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                                                        },
                                                                                        "nextItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                        },
                                                                                        "text": "    bob3"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                "position": 1
                                                                            }
                                                                        },
                                                                        {
                                                                            "@type": "addAction",
                                                                            "@id": "9af8652e-2cc0-41cc-a790-a53074aacc81",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "itemListElement",
                                                                                "value": {
                                                                                    "@type": "ListItem",
                                                                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                    "properties": {
                                                                                        "@type": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "502a9e1a-5865-4e9c-9b4f-10e217f60fd5",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "@type",
                                                                                                    "value": "ListItem"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "@id": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "afa022ca-42c4-474b-a879-21c07d28b98a",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "@id",
                                                                                                    "value": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "item": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "33e41a35-70ae-48f2-a2c8-d7222e8ebe2b",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "item",
                                                                                                    "value": {
                                                                                                        "@type": "DigitalDocument",
                                                                                                        "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                                        "properties": {
                                                                                                            "@type": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "429e58a6-975b-4cce-96a3-d5d2effd1d41",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "@type",
                                                                                                                        "value": "DigitalDocument"
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ],
                                                                                                            "@id": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "9fc4f45b-c406-431b-8858-a61e4aa2b91c",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "@id",
                                                                                                                        "value": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ],
                                                                                                            "hasPart": [
                                                                                                                {
                                                                                                                    "@type": "replaceAction",
                                                                                                                    "@id": "63edc753-d165-4535-9c7d-a2836e3380fd",
                                                                                                                    "actionStatus": "completedActionStatus",
                                                                                                                    "object": {
                                                                                                                        "@type": "propertyValue",
                                                                                                                        "propertyID": "hasPart",
                                                                                                                        "value": {
                                                                                                                            "@type": "ItemList",
                                                                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "metadata": {
                                                                                                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                                        "position": 1
                                                                                                                    }
                                                                                                                }
                                                                                                            ]
                                                                                                        },
                                                                                                        "summary": {
                                                                                                            "@type": "DigitalDocument",
                                                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                                            "hasPart": {
                                                                                                                "@type": "ItemList",
                                                                                                                "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "previousItem": [
                                                                                            {
                                                                                                "@type": "ListItem",
                                                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                            }
                                                                                        ],
                                                                                        "nextItem": [
                                                                                            {
                                                                                                "@type": "ListItem",
                                                                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                                                            }
                                                                                        ],
                                                                                        "position": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "fa40f361-8110-49a4-aa8f-7a9cd60c59c5",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "position",
                                                                                                    "value": 1
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "text": [
                                                                                            {
                                                                                                "@type": "replaceAction",
                                                                                                "@id": "00b8e16e-f6b0-44ac-8be8-845b7e9abc24",
                                                                                                "actionStatus": "completedActionStatus",
                                                                                                "object": {
                                                                                                    "@type": "propertyValue",
                                                                                                    "propertyID": "text",
                                                                                                    "value": "  bob5"
                                                                                                },
                                                                                                "metadata": {
                                                                                                    "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                                    "position": 1
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    "summary": {
                                                                                        "@type": "ListItem",
                                                                                        "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                        "item": {
                                                                                            "@type": "DigitalDocument",
                                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                            "hasPart": {
                                                                                                "@type": "ItemList",
                                                                                                "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                            }
                                                                                        },
                                                                                        "previousItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                        },
                                                                                        "nextItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                                                        },
                                                                                        "position": 1,
                                                                                        "text": "  bob5"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                                                "position": 2
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                "summary": {
                                                                    "@type": "ItemList",
                                                                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                                                    "numberOfItems": 2,
                                                                    "itemListElement": [
                                                                        {
                                                                            "@type": "ListItem",
                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                            "item": {
                                                                                "@type": "DigitalDocument",
                                                                                "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                                "hasPart": {
                                                                                    "@type": "ItemList",
                                                                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                }
                                                                            },
                                                                            "previousItem": {
                                                                                "@type": "ListItem",
                                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                            },
                                                                            "nextItem": {
                                                                                "@type": "ListItem",
                                                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                                            },
                                                                            "position": 1,
                                                                            "text": "  bob5"
                                                                        },
                                                                        {
                                                                            "@type": "ListItem",
                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                            "item": {
                                                                                "@type": "DigitalDocument",
                                                                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                "hasPart": {
                                                                                    "@type": "ItemList",
                                                                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                                    "numberOfItems": 1,
                                                                                    "itemListElement": {
                                                                                        "@type": "ListItem",
                                                                                        "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                        "item": {
                                                                                            "@type": "DigitalDocument",
                                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                                            "hasPart": {
                                                                                                "@type": "ItemList",
                                                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                                            }
                                                                                        },
                                                                                        "previousItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                                        },
                                                                                        "nextItem": {
                                                                                            "@type": "ListItem",
                                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                                        },
                                                                                        "text": "        bob4"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "previousItem": {
                                                                                "@type": "ListItem",
                                                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                                            },
                                                                            "nextItem": {
                                                                                "@type": "ListItem",
                                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                            },
                                                                            "text": "    bob3"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ]
                                            },
                                            "summary": {
                                                "@type": "DigitalDocument",
                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                                "hasPart": {
                                                    "@type": "ItemList",
                                                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                                    "numberOfItems": 2,
                                                    "itemListElement": [
                                                        {
                                                            "@type": "ListItem",
                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                            "item": {
                                                                "@type": "DigitalDocument",
                                                                "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                                "hasPart": {
                                                                    "@type": "ItemList",
                                                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                }
                                                            },
                                                            "previousItem": {
                                                                "@type": "ListItem",
                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                            },
                                                            "nextItem": {
                                                                "@type": "ListItem",
                                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                            },
                                                            "position": 1,
                                                            "text": "  bob5"
                                                        },
                                                        {
                                                            "@type": "ListItem",
                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                            "item": {
                                                                "@type": "DigitalDocument",
                                                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                "hasPart": {
                                                                    "@type": "ItemList",
                                                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                                    "numberOfItems": 1,
                                                                    "itemListElement": {
                                                                        "@type": "ListItem",
                                                                        "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76",
                                                                        "item": {
                                                                            "@type": "DigitalDocument",
                                                                            "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                                        },
                                                                        "previousItem": {
                                                                            "@type": "ListItem",
                                                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                                                        },
                                                                        "nextItem": {
                                                                            "@type": "ListItem",
                                                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                                        },
                                                                        "text": "        bob4"
                                                                    }
                                                                }
                                                            },
                                                            "previousItem": {
                                                                "@type": "ListItem",
                                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                                            },
                                                            "nextItem": {
                                                                "@type": "ListItem",
                                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                            },
                                                            "text": "    bob3"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "previousItem": [
                                {
                                    "@type": "ListItem",
                                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                                }
                            ],
                            "nextItem": [
                                {
                                    "@type": "ListItem",
                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                }
                            ],
                            "position": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "f48dfc23-55a5-42d0-ae10-f50d4a49cd7b",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "position",
                                        "value": 1
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "text": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "fb4dde99-3187-4bec-834c-8b4d0759d133",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "text",
                                        "value": "bob2"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.431Z\"",
                                        "position": 1
                                    }
                                }
                            ]
                        },
                        "summary": {
                            "@type": "ListItem",
                            "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                            "item": {
                                "@type": "DigitalDocument",
                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                "hasPart": {
                                    "@type": "ItemList",
                                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                                    "numberOfItems": 2,
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                            "item": {
                                                "@type": "DigitalDocument",
                                                "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                                "hasPart": {
                                                    "@type": "ItemList",
                                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                                }
                                            },
                                            "previousItem": {
                                                "@type": "ListItem",
                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                            },
                                            "nextItem": {
                                                "@type": "ListItem",
                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                            },
                                            "position": 1,
                                            "text": "  bob5"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                            "item": {
                                                "@type": "DigitalDocument",
                                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                "hasPart": {
                                                    "@type": "ItemList",
                                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                                    "numberOfItems": 1,
                                                    "itemListElement": {
                                                        "@type": "ListItem",
                                                        "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                                    }
                                                }
                                            },
                                            "previousItem": {
                                                "@type": "ListItem",
                                                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                            },
                                            "nextItem": {
                                                "@type": "ListItem",
                                                "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                            },
                                            "text": "    bob3"
                                        }
                                    ]
                                }
                            },
                            "previousItem": {
                                "@type": "ListItem",
                                "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                            },
                            "nextItem": {
                                "@type": "ListItem",
                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                            },
                            "position": 1,
                            "text": "bob2"
                        }
                    }
                },
                "metadata": {
                    "createdDate": "\"2024-07-19T16:22:26.429Z\"",
                    "position": 2
                }
            },
            {
                "@type": "addAction",
                "@id": "442d6322-4b1f-48aa-8f8e-b372bdee0967",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "itemListElement",
                    "value": {
                        "@type": "ListItem",
                        "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                        "properties": {
                            "@type": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "e7bfef29-a043-4f43-9c27-d2eb7e6ac3bf",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@type",
                                        "value": "ListItem"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "@id": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "4df4090d-f4e1-46be-9626-54c5f0a78736",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "@id",
                                        "value": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "item": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "a1adf79c-74bb-4a1b-87c7-c8cd87eab5e3",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "item",
                                        "value": {
                                            "@type": "DigitalDocument",
                                            "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                                            "properties": {
                                                "@type": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "898f9c5c-3a8e-4c41-8402-39c086be5d4b",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@type",
                                                            "value": "DigitalDocument"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "@id": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "08dd9fac-30fc-4bbf-8282-5be1608e5591",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "@id",
                                                            "value": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ],
                                                "hasPart": [
                                                    {
                                                        "@type": "replaceAction",
                                                        "@id": "7ace9301-fe9f-471d-9538-391df1a0e79e",
                                                        "actionStatus": "completedActionStatus",
                                                        "object": {
                                                            "@type": "propertyValue",
                                                            "propertyID": "hasPart",
                                                            "value": {
                                                                "@type": "ItemList",
                                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                                                                "properties": {
                                                                    "@type": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "a25f1c95-4dff-4ca7-823e-2e6e04ab3a1b",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@type",
                                                                                "value": "ItemList"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ],
                                                                    "@id": [
                                                                        {
                                                                            "@type": "replaceAction",
                                                                            "@id": "f34967d9-e8d5-4eed-b38f-76b60dd0452a",
                                                                            "actionStatus": "completedActionStatus",
                                                                            "object": {
                                                                                "@type": "propertyValue",
                                                                                "propertyID": "@id",
                                                                                "value": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                                            },
                                                                            "metadata": {
                                                                                "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                                                "position": 1
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                "summary": {
                                                                    "@type": "ItemList",
                                                                    "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                                }
                                                            }
                                                        },
                                                        "metadata": {
                                                            "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                                            "position": 1
                                                        }
                                                    }
                                                ]
                                            },
                                            "summary": {
                                                "@type": "DigitalDocument",
                                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                                                "hasPart": {
                                                    "@type": "ItemList",
                                                    "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                                }
                                            }
                                        }
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "previousItem": [
                                {
                                    "@type": "ListItem",
                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                }
                            ],
                            "position": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "2049872e-8503-4257-befc-9049cafe0779",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "position",
                                        "value": 2
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                        "position": 1
                                    }
                                }
                            ],
                            "text": [
                                {
                                    "@type": "replaceAction",
                                    "@id": "b6ac7ea0-4fda-48e5-bdcc-bd8d548bc215",
                                    "actionStatus": "completedActionStatus",
                                    "object": {
                                        "@type": "propertyValue",
                                        "propertyID": "text",
                                        "value": "bob6"
                                    },
                                    "metadata": {
                                        "createdDate": "\"2024-07-19T16:22:26.432Z\"",
                                        "position": 1
                                    }
                                }
                            ]
                        },
                        "summary": {
                            "@type": "ListItem",
                            "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                            "item": {
                                "@type": "DigitalDocument",
                                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                                "hasPart": {
                                    "@type": "ItemList",
                                    "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                }
                            },
                            "previousItem": {
                                "@type": "ListItem",
                                "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                            },
                            "position": 2,
                            "text": "bob6"
                        }
                    }
                },
                "metadata": {
                    "createdDate": "\"2024-07-19T16:22:26.429Z\"",
                    "position": 3
                }
            }
        ]
    },
    "summary": {
        "@type": "ItemList",
        "@id": "test001",
        "itemListElement": [
            {
                "@type": "ListItem",
                "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                "item": {
                    "@type": "DigitalDocument",
                    "@id": "5ce8f851-7d33-4280-890e-307ba7797b63",
                    "hasPart": {
                        "@type": "ItemList",
                        "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                    }
                },
                "previousItem": {
                    "@type": "ListItem",
                    "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                },
                "position": 2,
                "text": "bob6"
            },
            {
                "@type": "ListItem",
                "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                "item": {
                    "@type": "DigitalDocument",
                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                    "hasPart": {
                        "@type": "ItemList",
                        "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b",
                        "numberOfItems": 2,
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                "item": {
                                    "@type": "DigitalDocument",
                                    "@id": "5e2c46af-4686-473c-9786-cac16167a772",
                                    "hasPart": {
                                        "@type": "ItemList",
                                        "@id": "5e2c46af-4686-473c-9786-cac16167a772"
                                    }
                                },
                                "previousItem": {
                                    "@type": "ListItem",
                                    "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                },
                                "nextItem": {
                                    "@type": "ListItem",
                                    "@id": "5ce8f851-7d33-4280-890e-307ba7797b63"
                                },
                                "position": 1,
                                "text": "  bob5"
                            },
                            {
                                "@type": "ListItem",
                                "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                "item": {
                                    "@type": "DigitalDocument",
                                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10",
                                    "hasPart": {
                                        "@type": "ItemList",
                                        "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                                    }
                                },
                                "previousItem": {
                                    "@type": "ListItem",
                                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                                },
                                "nextItem": {
                                    "@type": "ListItem",
                                    "@id": "ef6b08dd-c657-480e-859b-2fcbfae3cc76"
                                },
                                "text": "    bob3"
                            }
                        ]
                    }
                },
                "previousItem": {
                    "@type": "ListItem",
                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "c48e453d-1123-4fff-b924-539fd2077b10"
                },
                "position": 1,
                "text": "bob2"
            },
            {
                "@type": "ListItem",
                "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                "item": {
                    "@type": "DigitalDocument",
                    "@id": "933d189a-be0d-480a-98be-2dd627ce21c3",
                    "hasPart": {
                        "@type": "ItemList",
                        "@id": "933d189a-be0d-480a-98be-2dd627ce21c3"
                    }
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "0bc8df32-3aa9-478e-9fbd-a54a16d4839b"
                },
                "text": "bob"
            }
        ]
    }
}`
}