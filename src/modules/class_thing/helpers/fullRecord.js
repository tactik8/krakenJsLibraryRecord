
import { KrProperty } from "../../class_property/class_property.js";

import { recordHelpers } from './recordHelpers.js'

let MAX_DEPTH = 10;


export const fullRecord = {

    get: getFullRecord,
    set: setFullRecord
    
}

function getFullRecord(thisThing, maxDepth=MAX_DEPTH, currentDepth=0) {

    if (!maxDepth || maxDepth == null) {
        maxDepth = MAX_DEPTH;
    }

    if (currentDepth >= maxDepth) {
        return thisThing.ref;
    }

    let record = {};
    let properties = thisThing.properties;
    for (let p of properties) {
        record[p.propertyID] = p.getFullRecord(maxDepth, currentDepth + 1);
    }
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;

    record = JSON.parse(JSON.stringify(record));
    record = recordHelpers.simplify(record);
    return record;
}

function setFullRecord(thisThing, value) {

    if(!value || value == null){ return }
    
    thisThing._properties = [];
    Object.keys(value).forEach((key) => {
            thisThing.replaceProperty(key, null, value[key]);
    });
}


function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}