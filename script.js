


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

    thing.record = record

    let thing2 = new KrThing()
    thing2.setSystemRecord(thing.getSystemRecord())
    

    console.log('ff', thing2.things[0].record)
    //console.log(JSON.stringify(thing2.record, null, 4))

    








    
}


test1()