


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";

import { krakenHelpers as k } from 'krakenhelper'




function getRecord(n){

    n = String(n)
    
    let record = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing" + n,
        "name": "thing" + n,
        "other": {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing" + n + '-' + n,
                "name": "thing" + n + '-' + n,
                "other": {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing" +n + '-' + n + '-' +n,
                    "name": "thing" + n + '-' + n + '-' +n,
                    "other": {
                        "@context": "https://schema.org/",
                        "@type": "Thing",
                        "@id": "thing" + n ,
                        "name": "thing" + n 
                    }
                }
            }
    }

    return record
    
}


function test1(){


    let t = new KrThing('ItemList')


    let timer = new k.Timer()

    let records = []

    for(let i =0; i < 10; i++){
        let t1 = new KrThing(getRecord(i))
        records.push(t1)
    }    
    t.add(records)


    //console.log(JSON.stringify(t.record, null, 4))


    
    timer.break('1')

    let content = t.getSystemRecord()


    //console.log(JSON.stringify(content, null, 4))

    //return
    
    timer.break('2')

    let tt = new KrThing()
    tt.setSystemRecord(content)

    timer.break('3')

    console.log('t length', t.items.length)
    console.log('tt length', tt.items.length)

    //console.log('tt length', tt.things.length)

    timer.end()
    console.log(timer.console())
    console.log(t.things.length)
}


test1()