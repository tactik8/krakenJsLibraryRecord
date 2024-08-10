


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


async function test1(){



    function getRecord(n){

        let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing" + String(n),
            "name": "thing" + String(n)
        }
        return record
    }

    let apiConfig = {
        apiUrl: 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev',
        apiCollection: 'unitTest2'
    }


    // Post records
    var t1 = new KrThing('ItemList')
    t1.api.apiConfig = apiConfig

    let records = []
    for(let i =0; i< 10; i++){
        records.push(getRecord(i))
    }
    t1.list.add(records)


    let r1 = await t1.api.post()


    // Get records
    let t2 = new KrThing()
    t2.api.apiConfig = apiConfig
    t2.api.record_type = 'Thing'
    t2.api.limit = 20

    let r2 = await t2.api.search()

    console.log(t1.list.length, t2.list.length)
    //expect(t2.list.length).toStrictEqual(10);
    console.log(t1.heading.textDetails)
    console.log(t2.heading.textDetails)



    
}


async function test2(){



    function getRecord(n){

        let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing" + String(n),
            "name": "thing" + String(n)
        }
        return record
    }

    let apiConfig = {
        apiUrl: 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev',
        apiCollection: 'unitTest'
    }

    var t1 = new KrThing('ItemList')
    t1.api.apiConfig = apiConfig

    let records = []
    for(let i =0; i< 10; i++){
        records.push(getRecord(i))
    }
    t1.list.add(records)

    console.log(JSON.stringify(t1.export.systemFlat, null, 4))
    console.log(t1.things.length)

    let p = []
    for(let tx of t1.things){
       // p.push(tx.export.getSystem(0))
    }

    console.log()



}

function test3(){

    let record = {
         "@type": "Person",
         "@id": "person_1",
         "givenName": "givenName_1",
         "familyName": "familyName_1",
         "email": "test@test.com",
         "telephone": "1-514-111-2222",
         "hasOccupation": {
             "@type": "Occupation",
             "@id": "occupation_1",
             "name": "occupation_1"
             },
         "worksfor": {
             "@type": "Organization",
             "@id": "test_org_1",
             "name": "test_org_1",
             "url": "https://www.test.com",
             "test": {
                      "@type": "Person",
                      "@id": "person_1",
                      "givenName": "givenName_1",
                      "familyName": "familyName_1",
                      "email": "test@test.com",
                      "telephone": "1-514-111-2222",
                      "hasOccupation": {
                          "@type": "Occupation",
                          "@id": "occupation_1",
                          "name": "occupation_1"
                          },
                      "worksfor": {
                          "@type": "Organization",
                          "@id": "organization_1",
                          "name": "test_org_1",
                          "url": "https://www.test.com"
                          }
             }

             }
     }


    let t1 = new KrThing()
    t1.record = record

    let t2 = new KrThing()

    console.log(t1.export.system)
    
    t2.export.system = t1.export.system

    console.log(t2.record)
    
}


//test3()
test1()


//test2()

