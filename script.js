


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



    function test(){


        let record = {
            "properties": {
                "@type": [
                    {
                        "@type": "replaceAction",
                        "@id": "86938a9b-a64c-4bd2-a1cc-e368a16aa51a",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "@type",
                            "value": "Occupation"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-29T16:42:24.709Z\"",
                            "position": 1
                        }
                    }
                ],
                "@id": [
                    {
                        "@type": "replaceAction",
                        "@id": "6ae63deb-eb58-4619-b840-b0d01262bb05",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "@id",
                            "value": "occupation_1"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-29T16:42:24.709Z\"",
                            "position": 1
                        }
                    }
                ],
                "name": [
                    {
                        "@type": "replaceAction",
                        "@id": "3d11b72b-d240-4c35-bade-3cecb4725101",
                        "actionStatus": "completedActionStatus",
                        "object": {
                            "@type": "propertyValue",
                            "propertyID": "name",
                            "value": "occupation_1"
                        },
                        "metadata": {
                            "createdDate": "\"2024-06-29T16:42:24.709Z\"",
                            "position": 1
                        }
                    }
                ]
            },
            "summary": {
                "@type": "Occupation",
                "@id": "occupation_1",
                "name": "occupation_1"
            },
            "@type": "Occupation",
            "@id": "occupation_1"
        }

        let thing = new KrThing()
        thing.setSystemRecord(record)
        //let things = new KrThings("ItemList", "Itemlist1")

        //console.log(things.record_id)
        //console.log('a', JSON.stringify(things.getSystemRecord(), null, 4))
        //things.api_post()


        console.log(JSON.stringify(thing.record_id, null, 4))

    
}
function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
