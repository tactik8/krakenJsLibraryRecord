


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    

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

    t2.setSystemRecord(t1.getSystemRecord(5))

    console.log(t2.record)

    console.log(t2.record_type, t2.refID)
    console.log('ll', JSON.stringify(t2.record, null, 4))
    
}
function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
