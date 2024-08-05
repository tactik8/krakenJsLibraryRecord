




import { KrThing } from '../class_thing.js';




// Run the test
test('KrThings init', function () {


    var t = new KrThing()

    let k0 = new KrThing('Thing', 'id0')
    let k1 = new KrThing('Thing', 'id1')
    let k2 = new KrThing('Thing', 'id2')
    let k3 = new KrThing('Thing', 'id3')
    let k4 = new KrThing('Thing', 'id4')

    var i0 = t.add(k0)
    var i1 = t.add(k1)
    var i2 = t.add(k2)
    var i3 = t.add(k3)
    var i4 = t.add(k4)

    var last = t.lastItem

    expect(last.position).toStrictEqual(4);

    


});