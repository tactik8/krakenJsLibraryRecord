


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    

    let t1 = new KrThing()

    let r = {
            "@type": "ListItem",
            "@id": "ItemList0",
            "name": "ItemList0"
        }

    t1.record = r

    


    
   console.log(JSON.stringify(t1.record, null, 4))

    console.log(t1.getProperty('@id').value)

    t1.replaceProperty('@id', null, 'bob4')
    console.log(t1.getProperty('@id').value)

    let p = t1.getProperty('@id')

    for(let pv of p.propertyValues){

        console.log('value')
        pv.printScreen()
    }

    for(let pv of p.propertyValuesNet){

        console.log('valueNet')
        pv.printScreen()
    }

    


    t1.replaceProperty('@id', null, 'bob5')

    t1.replaceProperty('@id', null, 'bob6')

    t1.replaceProperty('@id', null, 'bob7')

    console.log(t1.getProperty('@id').value)
    

}
function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
