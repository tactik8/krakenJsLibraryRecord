

import { KrThing } from '../class_thing.js';


// Run the test
test('API init get post delete', async () => {

    let t1 = new KrThing()

    t1.record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }



    let t2 = new KrThing()

    t2.record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    t2.p.add('name', 'thing2')

    t1.merge(t2)

    expect(t1.p.name).toStrictEqual('thing2');

    expect(t1.p.get('name').values).toStrictEqual(['thing2', 'thing1']);
    
})
