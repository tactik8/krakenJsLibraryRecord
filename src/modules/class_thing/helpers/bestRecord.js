
import { KrProperty } from "../../class_property/class_property.js";

import { recordHelpers } from './recordHelpers.js'

let MAX_DEPTH = 10;


export const bestRecord = {

    get: getBestRecord,
    
}

function getBestRecord(thisThing, maxDepth=MAX_DEPTH, currentDepth=0) {

    if (!maxDepth || maxDepth == null) {
        maxDepth = MAX_DEPTH;
    }

    if (currentDepth >= maxDepth) {
        if(this.record_type == "QuantitativeValue"){
            // Do nothing
        } else {
            return thisThing.ref;
        }
        
    }

    let record = {};
    let properties = thisThing.properties;
    for (let p of properties) {
        record[p.propertyID] = p.getBestRecord(maxDepth, currentDepth + 1);
    }
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;

    record = JSON.parse(JSON.stringify(record));
    record = recordHelpers.simplify(record);
    return record;
}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}