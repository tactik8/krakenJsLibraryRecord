import { krakenHelpers as h } from 'krakenhelpers'


import { ClassKrakenCache } from './ClassKrakenCache.js'

let MAXLEVEL = 5

export const valueManipulation = {

    getThings: getThings,
    getChildThings: getChildThings,
    getSystemCreatedDate: getSystemCreatedDate,
    getSystemUpdatedDate:getSystemUpdatedDate
}



function getChildThings(thisThing) {
    // Gets all things objects used as values of this 

    let things =[]
    for (let p of thisThing._properties) {
        for (let v of p.values) {
            if (v?.record_type) {
                things.push(v)
            }
        }
    }

    let results = things

    return results;
}

function getThings(thisThing, cache, maxLevel=MAXLEVEL, currentLevel=0) {
    // Gets all things objects used as values of this 

    if(h.isNull(cache)){
        cache = new ClassKrakenCache()
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
        if (itemDate && (h.isNull(resultDate) || itemDate < resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}

function getSystemUpdatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties) {
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (h.isNull(resultDate) || itemDate > resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}