


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



    
    let t = new KrThing()
    t.record = record
    console.log(t.systemUpdatedDate)
    
    
    let p = t.getProperty('name')

    for(let pv of p.propertyValues){
        console.log('a', pv)
    }
        

    let r = t.findValue(record2)
    console.log('r', r)
}


test1()