import { KrProperty } from "../../class_property/class_property.js";

import { ClassKrakenCache } from "./ClassKrakenCache.js";

import { krakenHelpers as k } from "krakenhelpers";

import { recordHelpers } from "./recordHelpers.js";

let MAX_DEPTH = 10;

export class ClassKrakenExportHelpers {
    constructor(thing) {
        this.thing = thing;
    }

    get record() {
        return getFullRecord(this.thing);
    }

    getRecord(maxDepth, currentDepth) {
        return getFullRecord(this.thing, maxDepth, currentDepth);
    }

    set record(value) {
        return setFullRecord(this.thing, value);
    }

    setRecord(value) {
        return setFullRecord(this.thing, value);
    }

    get best() {
        return getBestRecord(this.thing);
    }

    getBest(maxDepth, currentDepth) {
        return getBestRecord(maxDepth, currentDepth)
    }

    get system() {
        return getSystemRecord(this.thing);
    }

    get systemFlat() {
        return getSystemRecordFlat(this.thing);
    }

    getSystem(maxDepth, currentDepth) {
        return getSystemRecord(this.thing, maxDepth, currentDepth);
    }

    set system(value) {
        return setSystemRecord(this.thing, value);
    }
}

// -----------------------------------------------------
//  Best record
// -----------------------------------------------------

function getBestRecord(thisThing, maxDepth = MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) {
        maxDepth = MAX_DEPTH;
    }

    if (currentDepth >= maxDepth) {
        if (this.record_type == "QuantitativeValue") {
            // Do nothing
        } else {
            return thisThing.ref;
        }
    }

    let record = {};
    let properties = ensureArray(thisThing.properties);
    for (let p of properties) {
        record[p.propertyID] = p.getBestRecord(maxDepth, currentDepth + 1);
    }
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;

    record = JSON.parse(JSON.stringify(record));
    record = recordHelpers.simplify(record);
    return record;
}

// -----------------------------------------------------
//  Full record
// -----------------------------------------------------

function getFullRecord(thisThing, maxDepth = MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) {
        maxDepth = MAX_DEPTH;
    }

    if (currentDepth >= maxDepth) {
        if (thisThing.record_type == "QuantitativeValue") {
            // Do nothing
        } else {
            return thisThing.ref;
        }
    }

    let record = {};
    let properties = thisThing.properties;
    for (let p of properties) {
        let value = p.getFullRecord(maxDepth, currentDepth + 1);
        if (value && value != null && value != []) {
            record[p.propertyID] = value;
        }
    }
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;

    record = JSON.parse(JSON.stringify(record));
    record = recordHelpers.simplify(record);
    return record;
}

function setFullRecord(thisThing, value) {
    if (!value || value == null) {
        return;
    }

    thisThing._properties = [];
    Object.keys(value).forEach((key) => {
        thisThing.p.replace(key, null, value[key]);
    });
}

// -----------------------------------------------------
//  System record
// -----------------------------------------------------

function getSystemRecordFlat(thing) {
    let records = [];

    for (let t of thing.things) {
        records.push(getSystemRecord(t, 1, 0));
    }
    return records;
}

function getSystemRecord(thing, maxDepth, currentDepth) {
    if ((!maxDepth || maxDepth == null) && maxDepth != 0) {
        maxDepth = MAX_DEPTH;
    }

    if ((!currentDepth || currentDepth == null) && currentDepth != 0) {
        currentDepth = 0;
    }

    if (currentDepth >= maxDepth) {
        return thing.ref;
    }

    // Init record
    let record = {};
    record["_version"] = "2.0";
    record["_dbCollection"] = thing._dbCollection;
    record["_dbId"] = thing._dbId;
    record["_record_type"] = thing.record_type;
    record["_record_id"] = thing.record_id;
    record["_heading1"] = thing.headings.heading1;
    record["_heading2"] = thing.headings.heading2;
    record["_refs"] = [];
    record["_propertyValues"] = [];
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;

    // Add refs

    let childThings = thing.getChildThings();
    for (let ct of childThings) {
        if (!record["_refs"].includes(ct.ref)) {
            record["_refs"].push(ct.ref);
        }
    }

    // Add property Values
    let pvs = [];
    for (let p of thing.properties) {
        pvs = pvs.concat(p.getSystemRecord(maxDepth, currentDepth + 1));
    }
    pvs = pvs.filter((x) => x && x != null && x != []);
    record["_propertyValues"] = pvs;

    // Add values
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;
    let fullRecord = getFullRecord(thing, maxDepth, currentDepth);
    for (let k of Object.keys(fullRecord)) {
        record[k] = fullRecord[k];
    }

    return record;
}

function setSystemRecord(thing, value, cache) {
    let version = value?.["_version"];
    if (!version || version == null || version == "1.0") {
        return setSystemRecordV1_0(thing, value, cache);
    }

    if (version == "2.0") {
        return setSystemRecordV2_0(thing, value, cache);
    }
    return;
}

function setSystemRecordV2_0(thing, value, wipeBefore = true) {
    // Load data into object

    // Convert from string if one
    if (typeof value === "string" || value instanceof String) {
        try {
            value = JSON.parse(value);
        } catch {
            return;
        }
    }

    // Check if valid format
    if (!value || !value._propertyValues) {
        return;
    }

    // Reset current properties
    if (wipeBefore == true) {
        thing._properties = [];
    }

    // Retrieve db info
    thing._dbCollection = value?.["_dbCollection"];
    thing._dbId = value?.["_dbId"];
    thing._dbRecord = value;

    //
    let pvRecords = ensureArray(value._propertyValues);
    pvRecords = pvRecords.filter((x) => x !== undefined && x != null);
    if (pvRecords.length == 0) {
        return;
    }

    // Group pvRecords by propertyID
    let propertyIDs = [...new Set(pvRecords.map((x) => x.object.propertyID))];
    propertyIDs = propertyIDs.filter((x) => x && x != null);

    for (let propertyID of propertyIDs) {
        let subPropertyValues = pvRecords.filter(
            (item) => item.object.propertyID == propertyID,
        );
        var property = thing.getProperty(propertyID);

        for (let pv of subPropertyValues) {
            pv = convertPV(thing, pv);
            property.setSystemRecord(pv, false);
        }
    }
}

function convertPV(thing, pvRecord) {
    // Convert propertyValue value to thing if @type present

    if (!pvRecord || pvRecord == null) {
        return pvRecord;
    }

    let value = pvRecord?.object?.value;

    if (!value || value == null) {
        return pvRecord;
    }

    if (value["@type"] && value["@type"] != null) {
        
        // Get from cache
        let t = thing._things.get(value?.["@type"], value?.["@id"]);

        if (!t || t == null) {
            t = thing.new(value?.["@type"], value?.["@id"]);
            t._things = thing._things;
            thing._things.set(t);
            t = thing._things.get(value?.["@type"], value?.["@id"]);
        }

        setSystemRecordV2_0(t, value, false);

        // Store and retrieve to cache to avoid duplicate things
        pvRecord.object.value = t;
    }

    return pvRecord;
}

function setSystemRecordV1_0(thing, value, cache) {
    // Load data into object

    if (!cache || cache == null) {
        cache = new ClassKrakenCache();
    }

    // Convert from string if one
    if (typeof value === "string" || value instanceof String) {
        try {
            value = JSON.parse(value);
        } catch {
            return;
        }
    }

    // Check if valid format
    if (!value || !value.propertyValues) {
        return;
    }

    // Reset current properties
    thing._properties = [];

    // Set pvRecords
    if (!value.propertyValues || value.propertyValues == null) {
        return;
    }

    let pvRecords = ensureArray(value.propertyValues);
    pvRecords = pvRecords.filter((x) => x !== undefined && x != null);

    // Remove arrays of 1
    //todo: figure out why this happens

    if (1 == 1) {
        let newPvRecords = [];
        for (let p of pvRecords) {
            if (Array.isArray(p) && p.length == 1) {
                p = p[0];
                newPvRecords.push(p);
            } else if (Array.isArray(p) && p.length == 0) {
            } else {
                newPvRecords.push(p);
            }
        }
        pvRecords = newPvRecords;
    }
    //

    if (pvRecords.length == 0) {
        return;
    }

    // convert sub things to KrThing
    let counter = 0;
    for (let pvRecord of pvRecords) {
        if (!pvRecord || pvRecord == null) {
            continue;
        }

        let value = pvRecord?.object?.value;

        if (!value || value == null) {
            continue;
        }

        if (value["@type"] && value["@type"] != null) {
            var t = thing.new(value?.["@type"], value?.["@id"]);
            setSystemRecord(t, value, cache);

            // Store and retrieve to cache to avoid duplicate things
            cache.set(t);
            t = cache.get(value?.["@type"], value?.["@id"]);

            pvRecord.object.value = t;
            counter += 1;
        }
    }

    // Group pvRecords by propertyID
    let propertyIDs = [...new Set(pvRecords.map((x) => x.object.propertyID))];

    for (let propertyID of propertyIDs) {
        if (propertyID && propertyID != null) {
            let subPropertyValues = pvRecords.filter(
                (item) => item.object.propertyID == propertyID,
            );
            var property = new KrProperty(propertyID);
            property.setSystemRecord(subPropertyValues);
            thing._properties.push(property);
        }
    }
}

function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
