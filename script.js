


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



    function test1(){

        let recordContent = getRecord2()
        let record = {
                 "@type": "Person",
                 "@id": "person_1",
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
       
        let t = new KrThing()
        t.record = record
        
        let ts = [t.getSystemRecord(1)]
        console.log(JSON.stringify(ts, null, 4))
        

    
}




function test2(){

    let recordContent = getRecord2()

    let t = new KrThing()
    t.setSystemRecord(recordContent)

    console.log(t.record)


    let c1 = JSON.parse(recordContent)

    let c2 = JSON.stringify(c1)

    let t2 = new KrThing()

    t2.setSystemRecord(c2)
    
}



function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test2();



function getRecord(){

    return `{
    "@type": "ItemList",
    "@id": "test001"}`
}
function getRecord2(){
    return `
    {
        "@type": "Person",
        "@id": "person_1",
        "properties": {
            "@type": [
                {
                    "@type": "replaceAction",
                    "@id": "e9901488-306c-40ed-b8e8-c4561a869c3b",
                    "actionStatus": "completedActionStatus",
                    "object": {
                        "@type": "propertyValue",
                        "propertyID": "@type",
                        "value": "Person"
                    },
                    "metadata": {
                        "createdDate": "2024-07-20T15:30:57.658Z",
                        "position": 1
                    }
                }
            ],
            "@id": [
                {
                    "@type": "replaceAction",
                    "@id": "e479b6eb-69b3-48b2-9e4a-8ea08e56ac83",
                    "actionStatus": "completedActionStatus",
                    "object": {
                        "@type": "propertyValue",
                        "propertyID": "@id",
                        "value": "person_1"
                    },
                    "metadata": {
                        "createdDate": "2024-07-20T15:30:57.658Z",
                        "position": 1
                    }
                }
            ],
            "telephone": [
                {
                    "@type": "replaceAction",
                    "@id": "1793687b-b08c-42d5-ba33-055178b667f7",
                    "actionStatus": "completedActionStatus",
                    "object": {
                        "@type": "propertyValue",
                        "propertyID": "telephone",
                        "value": "1-514-111-2222"
                    },
                    "metadata": {
                        "createdDate": "2024-07-20T15:30:57.658Z",
                        "position": 1
                    }
                }
            ],
            "hasOccupation": [
                {
                    "@type": "replaceAction",
                    "@id": "c60b74bd-cd89-410f-935a-2039807b5ebc",
                    "actionStatus": "completedActionStatus",
                    "object": {
                        "@type": "propertyValue",
                        "propertyID": "hasOccupation",
                        "value": {
                            "@type": "Occupation",
                            "@id": "occupation_1"
                        }
                    },
                    "metadata": {
                        "createdDate": "2024-07-20T15:30:57.658Z",
                        "position": 1
                    }
                }
            ],
            "worksfor": [
                {
                    "@type": "replaceAction",
                    "@id": "12c673ba-0f4a-4c90-b33c-a0bc5fbc1c88",
                    "actionStatus": "completedActionStatus",
                    "object": {
                        "@type": "propertyValue",
                        "propertyID": "worksfor",
                        "value": {
                            "@type": "Organization",
                            "@id": "organization_1"
                        }
                    },
                    "metadata": {
                        "createdDate": "2024-07-20T15:30:57.658Z",
                        "position": 1
                    }
                }
            ]
        },
        "summary": {
            "@type": "Person",
            "@id": "person_1",
            "telephone": "1-514-111-2222",
            "hasOccupation": {
                "@type": "Occupation",
                "@id": "occupation_1"
            },
            "worksfor": {
                "@type": "Organization",
                "@id": "organization_1"
            }
        }
    }`
}