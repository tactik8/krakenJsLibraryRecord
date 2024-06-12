


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test() {
    

    let t1 = new KrThing()

    let r = {
             "@type": "person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222"
                    
         }


    let records = [
        {
             "@type": "person",
             "@id": "person_11",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222"

         },
        {
             "@type": "person",
             "@id": "person_12",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222"

         },
        {
             "@type": "person",
             "@id": "person_13",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222"

         }
        
    ]
    
    t1.replaceProperty('hasPart', null, records)

    t1.replaceProperty('hasPart', null, records)
    
   console.log(JSON.stringify(t1.getDetailRecord(), null, 4))
    
}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}




test();
