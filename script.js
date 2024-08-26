


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";

import { krakenHelpers as k } from 'krakenhelpers'






async function test1(){

    let things1 = getThings(1, 'Thing')


    console.log(things1[0].export.system)

}

test1()















function getThings(n, t="Thing"){

    let things = []
    for(let i=0; i< n; i++){
        things.push(getThing(i, t))
    }

    return things

}

function getThing(n=0, t="Thing"){

    let r = getRecord(n, t)
    let thing = new KrThing()

    thing.metadata.credibility = 0.2
    thing.metadata._record.instrument = {
        "@type": "Thing", "@id": "Instrument1"
    }

    thing.record = r
    return thing

}

function getRef(record){


    return {"@type": record['@type'], '@id': record['@id']}

}


function getRecords(n, t="Thing"){

    let records = []
    for(let i=0; i< n; i++){
        records.push(getRecord(i, t))
    }
    return records
}

function getRecord(n, t="Thing"){

    let record = {
        "@type": t,
        "@id": t + String(n),
        "name": t + String(n),
        "value": n,
        "child": {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": 'child_' + t + String(n),
                "name": 'child_' + t + String(n),
                "child":{
                        "@context": "https://schema.org/",
                        "@type": "Thing",
                        "@id": 'child_child_' + t + String(n),
                        "name": 'child_child_' + t + String(n)
                }

            }


    }
    return record
}
