


import { KrThing } from "./src/index.js";
//import { KrThing } from "./dist/main.js";



function test1(){


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

    console.log(last.position)

    
    console.log(t.firstItem.position)

    expect(i1.nextItem.ref).toStrictEqual(i2.ref)
    expect(i2.nextItem.ref).toStrictEqual(i3.ref)
    expect(i3.nextItem.ref).toStrictEqual(i4.ref)
    expect(i4.nextItem).toStrictEqual(null)

    expect(i0.previousItem).toStrictEqual(null)
    expect(i2.previousItem.ref).toStrictEqual(i1.ref)
    expect(i3.previousItem.ref).toStrictEqual(i2.ref)
    expect(i4.previousItem.ref).toStrictEqual(i3.ref)

    //
    t.remove(k2.ref)
    expect(i1.nextItem.ref).toStrictEqual(i3.ref)
    expect(i2.nextItem).toStrictEqual(null)
    expect(i3.nextItem.ref).toStrictEqual(i4.ref)
    expect(i4.nextItem).toStrictEqual(null)

    expect(t.items.length).toStrictEqual(4)



    
}


test1()