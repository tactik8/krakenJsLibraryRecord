
import { KrThing } from './kraken_record/kraken_record.js';


function test(){

    
    
    let k = new KrThing('Thing', 'bob')
    k.setProperty('name', 'bob2')
    console.log('vv', k.getSystemRecord())
    k.api_post()
    
    
    let k2 =  new KrThing('Thing', 'bob')
    k2.api_get()
    console.log('ww', k2.record)

}