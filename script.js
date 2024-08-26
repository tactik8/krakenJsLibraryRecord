


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";

import { krakenHelpers as k } from 'krakenhelpers'




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

    //let record = getRecord(1)


    let t = new KrThing(record)

    console.log(JSON.stringify(t.export.system, null, 4))

    
}

test1()
