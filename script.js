import { KrThing, KrProperty, KrPropertyValue } from "./src/index.js";
import { krakenHelpers as k } from 'krakenhelpers'





let thing = new KrThing('ItemList')
thing.test.fill()

for(let i of thing.l.listItems){
   // console.log(i.json)
}

let newRecord = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing20",
        "name": "thing20"
    }
let newRecord3 = {
    "@context": "https://schema.org/",
    "@type": "Thing",
    "@id": "thing30",
    "name": "thing30"
}

//thing.l.insertAfter({"@type": "ListItem", "@id": "ListItem1"}, newRecord)


//thing.l.push(newRecord3)

//thing.l.remove(newRecord)

let items = thing.p.get('itemListElement').values


for(let item of thing.p.get('itemListElement').values){
    
    console.log(item.p.position, item.p.item.record_type, item.record_id, item.p.item.record_type, item.p.item.record_id)
}


