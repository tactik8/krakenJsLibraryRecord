import { krakenHelpers as h } from 'krakenhelpers'


export class ClassKrakenTestHelpers {
    constructor(thing){
        this.thing = thing
        
    }

    fill(){

        let record_type = this.thing.record_type || 'Thing'

        this.thing.record = getTestRecord(record_type)
        
    }
    
}





function getTestRecord(record_type){

    if(!record_type || record_type == null || record_type == 'Thing'){
        return {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    }

    if(record_type == 'ItemList'){
        return {
            "@type": "ItemList",
            "@id": "ItemList0",
            "name": "ItemList0",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": "ListItem0",
                    "name": "ListItem0",
                    "position": 0,
                    "previousItem": null,
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem1"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing0",
                        "name": "Thing0",
                        "url": "https://www.test.com/thing0"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem1",
                    "name": "ListItem1",
                    "position": 1,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem0"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem2"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing1",
                        "name": "Thing1",
                        "url": "https://www.test.com/thing1"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem2",
                    "name": "ListItem2",
                    "position": 2,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem1"
                    },
                    "nextItem": {
                        "@type": "ListItem",
                        "@id": "ListItem3"
                    },
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing2",
                        "name": "Thing2",
                        "url": "https://www.test.com/thing2"
                    }
                },
                {
                    "@type": "ListItem",
                    "@id": "ListItem3",
                    "name": "ListItem3",
                    "position": 3,
                    "previousItem":  {
                        "@type": "ListItem",
                        "@id": "ListItem2"
                    },
                    "nextItem": null,
                    "item": {
                        "@type": "Thing",
                        "@id": "Thing3",
                        "name": "Thing3",
                        "url": "https://www.test.com/thing3"
                    }
                }
            ]
        }
    }


    return {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1"
    }

    
    
}






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
