
import { KrThing } from './kraken_record/kraken_record.js';



let k = new KrThing()


k.setProperty('child.name', 'bob')


console.log(k.record)
console.log(k.getProperty('child.name').value)

