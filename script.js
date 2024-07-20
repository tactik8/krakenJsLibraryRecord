


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



    function test1(){

        let recordContent = getRecord2()
        
        let t = new KrThing()
        t.setSystemRecord(recordContent)
        
        
        console.log(t.record)
        

    
}




function test2(){


    console.log('step 0')
    let t0 = new KrThing()
    t0.record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "itemListElement": [
                {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing2",
                    "name": "thing2"
                }
            ]
        }

    console.log('t0', t0.record)


    console.log('step 1')
    let t1 = new KrThing()
    t1.setSystemRecord(t0.getSystemRecord())
    console.log('t1', t1.record)
    


    console.log('step 2')
    let c1 = t1.getSystemRecord()

   

    let t2 = new KrThing()

    t2.setSystemRecord(c1)

    console.log('t2', t2.record)
    
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
    "properties": {
        "@type": [
            {
                "@type": "replaceAction",
                "@id": "89358f27-0eac-46c5-b8d1-8d75cbc86c17",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "@type",
                    "value": "ItemList"
                },
                "metadata": {
                    "createdDate": "2024-07-20T15:36:40.833Z"
                }
            }
        ],
        "@id": [
            {
                "@type": "replaceAction",
                "@id": "471baa8e-8ec5-49aa-b33b-1046e74a3e2f",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "@id",
                    "value": "test002"
                },
                "metadata": {
                    "createdDate": "2024-07-20T15:36:40.833Z"
                }
            }
        ],
        "name": [
            {
                "@type": "replaceAction",
                "@id": "471baa8e-8ec5-49aa-b33b-1046e74a3e2f",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "name",
                    "value": "testname002"
                },
                "metadata": {
                    "createdDate": "2024-07-20T15:36:40.833Z"
                }
            }
        ],
        "itemListElement": [
            {
                "@type": "replaceAction",
                "@id": "a454314f-fae2-42c3-a4bb-52d2def9e051",
                "actionStatus": "completedActionStatus",
                "object": {
                    "@type": "propertyValue",
                    "propertyID": "itemListElement",
                    "value": {
                        "@type": "ListItem",
                        "@id": "6ee1dd65-3341-4dca-b39b-443a4a97e987"
                    }
                },
                "metadata": {
                    "createdDate": "2024-07-20T15:36:40.833Z"
                }
            }
        ]
    },
    "summary": {
        "@type": "ItemList",
        "@id": "test002",
        "itemListElement": {
            "@type": "ListItem",
            "@id": "6ee1dd65-3341-4dca-b39b-443a4a97e987"
        }
    },
    "@type": "ItemList",
    "@id": "test002"
}`
}