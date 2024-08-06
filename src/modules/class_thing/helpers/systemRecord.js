
import { KrProperty } from "../../class_property/class_property.js";

import { KrCache } from './krakenCache.js'


let MAX_DEPTH = 10;


export const systemRecord = {

    get: getSystemRecord,
    set: setSystemRecord
    
}

function getSystemRecord(thing, maxDepth=MAX_DEPTH, currentDepth=0) {

    if(!maxDepth || maxDepth == null) { maxDepth = MAX_DEPTH }

    if (currentDepth >= maxDepth) {
        return thing.ref;
    }

    let record = {};
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;
    record.propertyValues = []
    record.summary = thing.getFullRecord(1)

    let pvs = []
    for (let p of thing.properties) {
            pvs = pvs.concat(p.getSystemRecord(maxDepth, currentDepth + 1));
    }
    record.propertyValues = pvs

    //record.propertyValues.filter(x => x && x != null)

    return record;
}


function setSystemRecord(thing, value, cache) {
    // Load data into object

    if(!cache || cache == null){
        cache = new KrCache()
        
    }

    
    
    // Convert from string if one
    if(typeof value === 'string' || value instanceof String){

        try{
            value = JSON.parse(value)
        } catch {
            return
        }
    } 

    // Check if valid format
    if (!value || (!value.propertyValues && !value.properties ) ) {
        return;
    }

    // Reset current properties
    thing._properties = [];


    // Convert from old format to new
    if(value.properties && value.properties != null ){
        value.propertyValues = []
        for(let k of Object.keys(value.properties)){
            let pvs = value.properties[k]
            pvs = ensureArray(pvs)
            value.propertyValues = value.propertyValues.concat(pvs)
        }            
        value.propertyValues = value.propertyValues.filter((item) => item && item != null);
    }



    // Set pvRecords

    if(!value.propertyValues || value.propertyValues == null){ return }

    let pvRecords = ensureArray(value.propertyValues)

    if(pvRecords.length == 0 ){ return }

    // convert sub things to KrThing
    let counter = 0
    for(let pvRecord of pvRecords){
        if(!pvRecord || pvRecord == null) { continue }
        let value = pvRecord?.object?.value
        if(!value || value == null) { continue }
        if (value["@type"] && value["@type"] != null) {
            var t = thing.new(value?.["@type"],value?.["@id"]);
            t.setSystemRecord(value, cache);

            // Store and retrieve to cache to avoid duplicate things
            cache.set(t)
            t = cache.get(t.record_type, t.record_id)

            pvRecord.object.value = t;
            counter += 1
        }
    }
    

    // Group pvRecords by propertyID
    let propertyIDs = [...new Set(pvRecords.map((x) => x.object.propertyID ))];

    for(let propertyID of propertyIDs){

        let subPropertyValues = pvRecords.filter((item) => item.object.propertyID == propertyID);            
        var property = new KrProperty(propertyID);
        property.setSystemRecord(subPropertyValues);
        thing._properties.push(property);

    }

    

}




function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}