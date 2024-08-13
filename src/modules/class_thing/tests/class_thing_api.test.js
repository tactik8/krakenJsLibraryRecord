import { KrThing } from '../class_thing.js';





test('API clear values', async () => {


   let  apiUrl = 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev/api'
   let  apiCollection = 'unitTest1'

    
    // Get records
    let t2 = new KrThing()
    t2.api.apiUrl = apiUrl
    t2.api.apiCollection = apiCollection

    
    t2.api.query ={'@type':'Thing'}

    let r2 = await t2.api.search()


    for(let item of t2.list.items){

        await item.api.delete()
 
    }


    let t3 = new KrThing()
    t3.api.query ={'@type':'Thing'}

    let r3 = await t3.api.search()

    
    expect(t3.list.length).toStrictEqual(0);

    
    
})


// Run the test
test('API init get post delete', async () => {

   let  apiUrl = 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev/api'
   let  apiCollection = 'unitTest2'


    // Post
    var t1 = new KrThing()
    t1.api.apiUrl = apiUrl
    t1.api.apiCollection = apiCollection

    t1.record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    
    let r1 = await t1.api.post()
    expect(r1.a.actionStatus).toStrictEqual('CompletedActionStatus');
    

    // Get
    let t2 = new KrThing("Thing", "thing1")
    t2.api.apiUrl = apiUrl
    t2.api.apiCollection = apiCollection
    
    let r2 = await t2.api.get()
    expect(r2.a.actionStatus).toStrictEqual('CompletedActionStatus');
    expect(t2.p.name).toStrictEqual('thing1');



    // Delete
    let t3 = new KrThing("Thing", "thing1")
    t3.api.apiUrl = apiUrl
    t3.api.apiCollection = apiCollection
    let r3 = await t3.api.delete()
    expect(r3.a.actionStatus).toStrictEqual('CompletedActionStatus');

    // Get again
    let t4 = new KrThing("Thing", "thing1")
    t4.api.apiUrl = apiUrl
    t4.api.apiCollection = apiCollection

    
    let r4 = await t4.api.get()
    expect(r4.a.actionStatus).toStrictEqual('CompletedActionStatus');

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

    

   let  apiUrl = 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev/api'
   let  apiCollection = 'unitTest3'


    
    // Post records
    var t1 = new KrThing('ItemList')
    t1.api.apiUrl = apiUrl
    t1.api.apiCollection = apiCollection

    let records = []
    for(let i=0; i< 10; i++){
        records.push(getRecord(i))
    }
    
    let r1 = await t1.api.post()
    expect(r1.a.actionStatus).toStrictEqual('CompletedActionStatus');

    
    // Get records
    let t2 = new KrThing()
    t2.api.apiUrl = apiUrl
    t2.api.apiCollection = apiCollection
    t2.api.query = {'@type':'Thing'}
    
    let r2 = await t2.api.search()

    expect(r2.a.actionStatus).toStrictEqual('CompletedActionStatus');
    expect(t2.list.length).toStrictEqual(10);

   

});