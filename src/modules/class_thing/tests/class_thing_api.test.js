import { KrThing } from '../class_thing.js';



// Run the test
test('API init get post delete', async () => {


    let apiConfig = {
        apiUrl: 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev',
        apiCollection: 'unitTest'
    }
    
    var t1 = new KrThing()
    t1.api.apiConfig = apiConfig

    t1.record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }

    let t2 = new KrThing("Thing", "thing1")
    t2.api.apiConfig = apiConfig

    
    let r1 = await t1.api.post()
    let r2 = await t2.api.get()
        
    expect(t1.p.name).toStrictEqual(t2.p.name);

    let t3 = new KrThing("Thing", "thing1")
    t3.api.apiConfig = apiConfig


    let t4 = new KrThing("Thing", "thing1")
    t4.api.apiConfig = apiConfig


    let r3 = await t3.api.delete()
    let r4 = await t4.api.get()

    expect(t4.p.name).toStrictEqual(null);

});




// Run the test
test('API things', async () => {


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

    
    // Post records
    var t1 = new KrThing('ItemList')
    t1.api.apiConfig = apiConfig

    let records = []
    for(let i =0; i< 10; i++){
        records.push(getRecord(i))
    }
    
    
    let r1 = await t1.api.post()


    // Get records
    let t2 = new KrThing()
    t2.api.query ={'@type':'Thing'}
    
    let r2 = await t2.api.search()

    expect(t2.list.length).toStrictEqual(10);

   

});