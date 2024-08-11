




import { KrThing } from '../class_thing.js';




// Run the test
test('KrThings init', function () {


    var t = new KrThing()

    let k0 = new KrThing('Thing', 'id0')
    let k1 = new KrThing('Thing', 'id1')
    let k2 = new KrThing('Thing', 'id2')
    let k3 = new KrThing('Thing', 'id3')
    let k4 = new KrThing('Thing', 'id4')

    var i0 = t.list.add(k0)
    var i1 = t.list.add(k1)
    var i2 = t.list.add(k2)
    var i3 = t.list.add(k3)
    var i4 = t.list.add(k4)

    var last = t.list.lastItem

    expect(last.p.position).toStrictEqual(4);


    let items = t.list.items
    expect(items.length).toStrictEqual(5);

    


});




// Run the test
test('KrThings filter', function () {


    var t = new KrThing()

    let k0 = new KrThing('Thing', 'id0')
    let k1 = new KrThing('Thing', 'id1')
    let k2 = new KrThing('Thing', 'id2')
    let k3 = new KrThing('Thing', 'id3')
    let k4 = new KrThing('Thing', 'id4')

    var i0 = t.list.add(k0)
    var i1 = t.list.add(k1)
    var i2 = t.list.add(k2)
    var i3 = t.list.add(k3)
    var i4 = t.list.add(k4)


    let t2 = t.list.filter('@id', 'id0')

    

    
    expect(t2.list.length).toStrictEqual(1);


});





// Run the test
test('List export import', function () {


    var t = new KrThing()

    let k0 = new KrThing('Thing', 'id0')
    let k1 = new KrThing('Thing', 'id1')
    let k2 = new KrThing('Thing', 'id2')
    let k3 = new KrThing('Thing', 'id3')
    let k4 = new KrThing('Thing', 'id4')

    var i0 = t.list.add(k0)
    var i1 = t.list.add(k1)
    var i2 = t.list.add(k2)
    var i3 = t.list.add(k3)
    var i4 = t.list.add(k4)


    let t2 = new KrThing('ItemList')


    t2.export.system = t.export.system

    
    expect(t2.list.length).toStrictEqual(5);
    



    
});
