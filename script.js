


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


    let thing = new KrThing()
    thing.setSystemRecord('{"properties":{"@type":[{"@type":"replaceAction","@id":"daec7420-3df7-447c-9ca2-fb474b79dd2f","actionStatus":"completedActionStatus","object":{"@type":"propertyValue","propertyID":"@type","value":"Organization"},"metadata":{"createdDate":"2024-07-24T12:29:11.933Z","position":1}}],"@id":[{"@type":"replaceAction","@id":"5886c64e-a861-47f0-a4cf-0ae2726442d9","actionStatus":"completedActionStatus","object":{"@type":"propertyValue","propertyID":"@id","value":"organization_1"},"metadata":{"createdDate":"2024-07-24T12:29:11.933Z","position":1}}],"name":[{"@type":"replaceAction","@id":"c9799e26-ddea-47b5-92ca-5a2b1fb6e113","actionStatus":"completedActionStatus","object":{"@type":"propertyValue","propertyID":"name","value":"test_org_1"},"metadata":{"createdDate":"2024-07-24T12:29:11.933Z","position":1}}],"url":[{"@type":"replaceAction","@id":"0d91e8a5-ea44-449a-b6f2-395c0a54ab72","actionStatus":"completedActionStatus","object":{"@type":"propertyValue","propertyID":"url","value":"https://www.test.com"},"metadata":{"createdDate":"2024-07-24T12:29:11.933Z","position":1}}]},"references":[],"summary":{"@type":"Organization","@id":"organization_1","name":"test_org_1","url":"https://www.test.com"},"@type":"Organization","@id":"organization_1"}')
    //console.log(JSON.stringify(thing.getSystemRecord(), null, 4))


   

    console.log(JSON.stringify(thing.record, null, 4))

    








    
}


test1()