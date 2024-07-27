


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
    //console.log(JSON.stringify(thing.getSystemRecord(), null, 4))


   

    
     thing.name = 'thing4'

    let sr = thing.getSystemRecord()

    console.log(JSON.stringify(sr, null, 4))

    








    
}


test1()