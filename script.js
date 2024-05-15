
import { KrThing } from './kraken_record/kraken_record.js';


function test(){

    
    let p = {
         "@type": "person",
         "@id": "person_1",
         "givenName": "givenName_1",
         "familyName": "familyName_1",
         "email": "test@test.com",
         "telephone": "1-514-111-2222",
         "hasOccupation": {
             "@type": "Occupation",
             "name": "occupation_1"
             },
         "worksFor": {
             "@type": "organization",
             "name": "test_org_1",
             "url": "https://www.test.com"
             }
     }
    
    let k = new KrThing('Thing', 'bob')
    k.record = p

    console.log('p', k.record)

    
    console.log('vv', k.getSystemRecord())
    //k.api_post()
    
    
    let k2 =  new KrThing('Thing', 'bob')
    k2.setSystemRecord(k.getSystemRecord())
    console.log('ww', k2.record)

    console.log(k2.getProperty('worksFor').value.record)

}

//test()