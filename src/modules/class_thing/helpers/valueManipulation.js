
import { KrCache } from './krakenCache.js'

let MAXLEVEL = 5

export const valueManipulation = {

    getThings: getThings,
    getSystemCreatedDate: getSystemCreatedDate,
    getSystemUpdatedDate:getSystemUpdatedDate
}


function getThings(thisThing, cache, maxLevel=MAXLEVEL, currentLevel=0) {
    // Gets all things objects used as values of this 

    if(!cache || cache == null){
        cache = new KrCache()
        cache.add(thisThing)
    }
    
    for (let p of thisThing._properties) {
        for (let v of p.values) {
            if (v?.record_type) {
                cache.push(v)

                if(currentLevel < maxLevel){
                    getThings(v, cache, maxLevel, currentLevel + 1)
                }
                
            }
        }
    }
    
    let results = cache.things

    return results;
}



function  getSystemCreatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties) {
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate < resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}

function getSystemUpdatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties) {
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate > resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}