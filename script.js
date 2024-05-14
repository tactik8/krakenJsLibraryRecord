
import { KrThing } from './kraken_record/kraken_record.js';



let k = new KrThing()


k.setProperty('child.name', 'bob')


console.log(JSON.stringify(k.bestRecord, null, 4))
console.log(k.getProperty('child.name').value)

