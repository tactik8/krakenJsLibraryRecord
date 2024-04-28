
import { KrThing } from './kraken_record/kraken_record.js';



function test(event){
    console.log('ok', event)
}

let k = new KrThing()
console.log('z', k)

k.addEventListener('all', test)

k.setProperty('name', 'bob')


