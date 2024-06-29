

import { exportAllDeclaration } from '@babel/types';
import { KrThing } from '../class_thing.js';



// Run the test
test('KrThing init', function () {


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
    
    t2.setSystemRecord(t1.getSystemRecord())


    // Test properties
    expect(t2.record).toStrictEqual(t1.record);


    
})