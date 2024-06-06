


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    

    let t1 = new KrThing()

    t1.record = {
            "@type": "ListItem",
            "@id": "62bd229b-00c3-410b-bdf0-0ed285ca9d40",
            "item": "0",
            "position": 0
        }


    t1.addEventListener('all', event=>{

        console.log('t', event)
        
    })

    t1.setProperty('name', 'name2')

    
}

test();
