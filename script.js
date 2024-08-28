


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";

import { krakenHelpers as k } from 'krakenhelpers'



//process.env.apiUrl = "https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev/api"
//process.env.apiCollection = '_testRecords'

async function test1(){


    let t = new KrThing()
    t.api.apiUrl = "https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev"
    t.api.apiCollection = '_testRecords'
    t.api.apiBasePath = '/api'

    let action = await t.api.autoComplete('Thin')

    console.log(action.a.actionStatus, action.a.error)

    let things = action.a.result
    console.log(things.l.length)

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
