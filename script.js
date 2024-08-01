


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test1(){



    let record1 = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    let record2 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1",
        "test": "test1"
    }


    let t1 = new KrThing()
    t1.record = record1

    for(let p of t1._properties){
        console.log('a', p.propertyID)
    }


    
    let t2 = new KrThing()
    t2.record = record2

    for(let p of t2._properties){
        console.log('b', p.propertyID)
    }

    console.log(t1._properties.length)
    console.log(t2._properties.length)

    t1.merge(t2)
    
    console.log(t1._properties.length)
    console.log(t1.record)




    
}


test1()