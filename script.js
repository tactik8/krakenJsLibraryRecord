


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test1(){

    let record= {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }


    
    let t = new KrThing()
    t.record = record
    console.log(t.systemUpdatedDate)
    
    
    let p = t.getProperty('name')

    for(let pv of p.propertyValues){
        console.log('a', pv)
    }
        

    
}


test1()