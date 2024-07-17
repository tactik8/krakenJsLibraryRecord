


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



    function test(){


        let record = {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing1",
                "name": "thing1"
            }



        let thing = new KrThing()
        thing.record = record 
       


        console.log(JSON.stringify(thing, null, 4))

    
}
function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
