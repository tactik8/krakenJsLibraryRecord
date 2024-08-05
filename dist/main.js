import {v4 as $5OpyM$v4} from "uuid";



class $5e45e66cef237559$export$4a4eb7d10588cc8d {
    /* Contains metadata to qualify a value

    attributes:
    - credibility or c:    
    - observationDate or d: 
    - record:         Returns all metadata in a dict
    - object:         The original source of the data
    - Instrument:     What brought the data over
    - validFrom
    - validThrough


    Methods
    - equal:     Returns true if comes from same object
    - lt:        Worst metadata in order of c and d
    - gt:        Best metadata in order of c and d
    - isValid    Returns true if date between validfrom validthrough
    

    */ constructor(record){
        this._record = {};
        if (!this._record.createdDate || this._record.createdDate == null) this._record.createdDate = new Date();
    }
    get record() {
        return this._record;
    }
    getFullRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    setFullRecord(value) {
        this._record = JSON.parse(JSON.stringify(value));
    }
    getRefRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    getSystemRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    setSystemRecord(value) {
        if (!value || value == null) return;
        this._record = JSON.parse(JSON.stringify(value));
    }
    inheritMetadata(metadataRecord) {
        let currentPosition = this.position;
        this.record = metadataRecord;
        this.position = currentPosition;
    }
    set record(value) {
        if (!value) return;
        let tempCreatedDate = this.createdDate;
        this._record = JSON.parse(JSON.stringify(value));
        if (!this.createdDate || this.createdDate == null) this.createdDate = tempCreatedDate;
    }
    get credibility() {
        return this._record.credibility;
    }
    set credibility(value) {
        this._record.credibility = value;
    }
    get c() {
        return this.credibility;
    }
    set c(value) {
        this.credibility = value;
    }
    get createdDate() {
        let createdDate = this._record?.createdDate;
        if (createdDate instanceof String) createdDate = new Date(createdDate);
        return createdDate;
    }
    set createdDate(value) {
        if (value instanceof Date) this._record.createdDate = value;
        else try {
            this._record.createdDate = new Date(value);
        } catch (error) {
            console.log(error);
        }
    }
    get position() {
        return this._record.position;
    }
    set position(value) {
        this._record.position = value;
    }
    get observationDate() {
        return new Date(JSON.parse(this._record.observationDate || null));
    }
    set observationDate(value) {
        if (value && value instanceof Date) this._record.observationDate = JSON.stringify(value);
    }
    get d() {
        return this.observationDate;
    }
    set d(value) {
        this.observationDate = value;
    }
    get validFrom() {
        return this._record.validFrom;
    }
    set validFrom(value) {
        this._record.validFrom = value;
    }
    get validThrough() {
        return this._record.validThrough;
    }
    set validThrough(value) {
        this._record.validThrough = value;
    }
    get object() {
        return this._record.object;
    }
    set object(value) {
        this._record.object = value;
    }
    equal(other) {
        // returns true if data comes from same object
        if (this.object == other.object) return true;
        return false;
    }
    isValid(comparisonDate = null) {
        // Returns true if value is within velidFrom, validThrough. Uses today's date if not provided
        if (comparisonDate == null) comparisonDate = new Date();
        if (this.validFrom && comparisonDate < this.validFrom) return False;
        if (this.validThrough && comparisonDate >= this.validThrough) return False;
        return True;
    }
    gt(other, comparisonDate) {
        if (!this.credibility && other.credibility) return false;
        if (this.credibility && !other.credibility) return true;
        if (this.credibility > other.credibility) return true;
        if (this.credibility < other.credibility) return false;
        if (!this.observationDate && other.observationDate) return false;
        if (this.observationDate && !other.observationDate) return true;
        if (this.observationDate > other.observationDate) return true;
        if (this.observationDate < other.observationDate) return false;
        if (!this.createdDate && other.createdDate) return false;
        if (this.createdDate && !other.createdDate) return true;
        if (this.createdDate > other.createdDate) return true;
        if (this.createdDate < other.createdDate) return false;
        if (!this.position && other.position) return false;
        if (this.position && !other.position) return true;
        if (this.position > other.position) return true;
        if (this.position < other.position) return false;
        return false;
    }
    lt(other) {
        if (!this.credibility && other.credibility) return true;
        if (this.credibility && !other.credibility) return false;
        if (this.credibility < other.credibility) return true;
        if (this.credibility > other.credibility) return false;
        if (!this.observationDate && other.observationDate) return true;
        if (this.observationDate && !other.observationDate) return false;
        if (this.observationDate < other.observationDate) return true;
        if (this.observationDate > other.observationDate) return false;
        if (!this.createdDate && other.createdDate) return true;
        if (this.createdDate && !other.createdDate) return false;
        if (this.createdDate < other.createdDate) return true;
        if (this.createdDate > other.createdDate) return false;
        if (!this.position && other.position) return true;
        if (this.position && !other.position) return false;
        if (this.position < other.position) return true;
        if (this.position > other.position) return false;
        return false;
    }
}


class $9ef8378eb9810880$export$90601469cef9e14f {
    /*

    attributes:
    - proeprtyID:
    - value: 
    - c: 
    - d:

    */ constructor(propertyID, value, actionType = "replaceAction", previousValue){
        this._record = {
            "@type": actionType,
            "@id": String((0, $5OpyM$v4)()),
            "object": {
                "@type": "propertyValue",
                propertyID: propertyID,
                value: value
            },
            actionStatus: "completedActionStatus",
            replacee: previousValue,
            replacer: value,
            valid: true
        };
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
    }
    // ----------------------------------------------------
    // Attributes - action
    // ----------------------------------------------------
    get record_type() {
        return this._record["@type"];
    }
    set record_type(value) {
        this._record["@type"] = value;
    }
    get record_id() {
        return this._record["@id"];
    }
    set record_id(value) {
        this._record["@id"] = value;
    }
    get object() {
        return this._record.object;
    }
    set object(value) {
        this._record.object = value;
    }
    get replacer() {
        return this._record.replacer;
    }
    set replacer(value) {
        this._record.object.value = $9ef8378eb9810880$var$ensureNotArray(value);
        this._record.replacer = $9ef8378eb9810880$var$ensureNotArray(value);
    }
    get valid() {
        return this._record.valid;
    }
    set valid(value) {
        this._record.valid = value;
    }
    get record() {
        let record = this._record;
    }
    // ----------------------------------------------------
    // Attributes - object
    // ----------------------------------------------------
    get propertyID() {
        return this._record.object.propertyID;
    }
    set propertyID(value) {
        this._record.object.object.propertyID = value;
    }
    get value() {
        return this._record.object.value;
    }
    set value(value) {
        this._record.object.value = $9ef8378eb9810880$var$ensureNotArray(value);
        this._record.replacer = $9ef8378eb9810880$var$ensureNotArray(value);
    }
    // ----------------------------------------------------
    // Attributes - metadata
    // ----------------------------------------------------
    get t() {
        return this._record.t;
    }
    set t(value) {
        this._record.t = value;
    }
    get value() {
        return this._record.object.value;
    }
    set value(value) {
        this._record.object.value = $9ef8378eb9810880$var$ensureNotArray(value);
        this._record.replacer = $9ef8378eb9810880$var$ensureNotArray(value);
    }
    get agent() {
        return this.metadata.agent;
    }
    set agent(value) {
        this.metadata.agent = value;
    }
    get instrument() {
        return this.metadata.instrument;
    }
    set instrument(value) {
        this.metadata.instrument = value;
    }
    get credibility() {
        this.metadata.credibility;
    }
    set credibility(value) {
        this.metadata.credibility = value;
    }
    get observationDate() {
        return this.metadata.observationDate;
    }
    set observationDate(value) {
        this.metadata.observationDate = value;
    }
    get c() {
        return this.metadata.credibility;
    }
    set c(value) {
        this.metadata.credibility = value;
    }
    get d() {
        return this.metadata.observationDate;
    }
    set d(value) {
        this.metadata.observationDate = value;
    }
    get systemCreatedDate() {
        return this.metadata.createdDate;
    }
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(maxDepth, currentDepth) {
        if (this.value && this.value?.record_type) {
            if ([
                "previousItem",
                "nextItem"
            ].includes(this.propertyID)) return this?.value?.ref;
            else return this.value.getFullRecord(maxDepth, currentDepth);
        }
        return this.value;
    }
    getRefRecord(maxDepth, currentDepth) {
        let record = JSON.parse(JSON.stringify(this._record));
        record.metadata = this.metadata.getRefRecord(maxDepth, currentDepth);
        if (this.value && this.value.record_type) record["value"] = this.value.ref;
        return record;
    }
    getBestRecord(maxDepth, currentDepth) {
        let value = this.value;
        if (this.value && this.value.record_type) value = this.value.getBestRecord(maxDepth, currentDepth);
        return value;
    }
    getDetailRecord(maxDepth, currentDepth) {
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record["actionStatus"] = this._record.actionStatus;
        record["object"] = {};
        record.object["@type"] = this._record.object["@type"];
        record.object["propertyID"] = this._record.object["propertyID"];
        record.object["value"] = null;
        record.metadata = this.metadata.getSystemRecord();
        if ([
            "previousItem",
            "nextItem"
        ].includes(this.propertyID)) return this?.value?.ref || null;
        if (this.value && this.value.record_type) record.object["value"] = this.value.getDetailRecord(maxDepth, currentDepth);
        else record.object["value"] = this.value;
        return record;
    }
    // ----------------------------------------------------
    // Raw records 
    // ----------------------------------------------------
    getSystemRecord(maxDepth, currentDepth) {
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record["actionStatus"] = this._record?.actionStatus;
        record["valid"] = this._record?.valid;
        record["object"] = {};
        record.object["@type"] = this._record?.object?.["@type"];
        record.object["propertyID"] = this._record?.object?.["propertyID"];
        record.object["value"] = null;
        record.metadata = this.metadata.getSystemRecord(maxDepth, currentDepth);
        if ([
            "previousItem",
            "nextItem"
        ].includes(this.propertyID)) record.object["value"] = this?.value?.ref;
        if (this.value && this.value.record_type) record.object["value"] = this.value.getSystemRecord(maxDepth, currentDepth);
        else record.object["value"] = this.value;
        return record;
    }
    setSystemRecord(value) {
        if (!value || value == null) return;
        this.metadata.setSystemRecord(value?.metadata);
        delete value.metadata;
        this._record = JSON.parse(JSON.stringify(value));
        this._record = value;
    }
    // ----------------------------------------------------
    // Methods 
    // ----------------------------------------------------
    setValue(value, metadataRecord) {
        this.value = value;
        this.metadata.inheritMetadata(metadataRecord);
    }
    equal(other) {
        return this.eq(other);
    }
    eq(other) {
        // returns true if equal
        if (this.value == other.value) return true;
        return false;
    }
    gt(other) {
        return this.metadata.gt(other.metadata);
    }
    lt(other) {
        return this.metadata.lt(other.metadata);
    }
    printScreen(suffix = "") {
        var v = this.value;
        if (this.value && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
        var t_string = this.record_type.replace("Action", "").padEnd(10);
        var c_string = String(this.metadata.c || 0).padStart(5);
        var p_string = String(this.metadata.position).padStart(5);
        var d_string = String(this.metadata.createdDate.toLocaleTimeString()).padStart(9);
        console.log(suffix, " - ", c_string, p_string, t_string, d_string, v);
    }
    // -----------------------------------------------------
    //  HTML values 
    // -----------------------------------------------------
    get valueHTML() {
        this.value.record_type;
    }
}
function $9ef8378eb9810880$var$ensureNotArray(value) {
    let new_value = $9ef8378eb9810880$var$ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $9ef8378eb9810880$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



class $0ff73647c93c411e$export$13f164945901aa88 {
    /*

    attributes:
    - propertyID:     string
    - propertyValue:         get best KrPropertyValue object or sets a value
    - propertyValues:        get best KrPropertyValue object for each values
    - propertyValuesAll:     get all KrPropertyValue
    - value:                 return best value
    - values:                return values
    - record:        get value as non Kr object  

    methods:
    - gt: greater than a.gt(b) a is greater than b
    - lt: less than a.lt(b) a is less than b
    - setValues:     Sets several values
    - setValue:      Sets a single value and returns a KrPropertyValue object
    - get_max:       Returns best KrPropertyValue object
    
    */ constructor(propertyID = null){
        this._propertyID = propertyID;
        this._propertyValues = [];
        this._propertyValuesNetCache = null;
        this._propertyValuesNetCacheOld = null;
        this._propertyValuesCache = null;
        this._propertyValuesCacheOld = null;
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
    }
    // Base
    get propertyID() {
        return this._propertyID;
    }
    set propertyID(record) {
        this._propertyID = $0ff73647c93c411e$var$ensureNotArray(value);
    }
    gt(other) {
        if (this.propertyID == other.propertyID) return false;
        if (this.propertyID == "@type") return false;
        if (other.propertyID == "@type") return true;
        if (this.propertyID == "@id") return false;
        if (other.propertyID == "@id") return true;
        if (this.propertyID > other.propertyID) return true;
        return false;
    }
    lt(other) {
        if (this.propertyID == other.propertyID) return false;
        if (this.propertyID == "@type") return true;
        if (other.propertyID == "@type") return false;
        if (this.propertyID == "@id") return true;
        if (other.propertyID == "@id") return false;
        if (this.propertyID < other.propertyID) return true;
        return false;
    }
    eq(other) {
        if (this.propertyID && this.propertyID == other.propertyID) return true;
        return false;
    }
    getPropertyValueById(propertyValueID) {
        if (!propertyValueID || propertyValueID == null) return;
        for (let pv of this._propertyValues){
            if (pv.record_id == propertyValueID) return pv;
        }
        return null;
    }
    merge(other) {
        // merge other property with this property
        if (!other || other == null) return;
        console.log(other.propertyID);
        for (let otherPV of other._propertyValues){
            let thisPV = this.getPropertyValueById(otherPV.record_id);
            if (thisPV == null) {
                console.log("push");
                this._propertyValues.push(otherPV);
            }
        }
        this.compilePropertyValues(true);
    }
    //
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(maxDepth, currentDepth) {
        return this.propertyValuesNet.map((x)=>x.getFullRecord(maxDepth, currentDepth));
    }
    getRefRecord(maxDepth, currentDepth) {
        return this.propertyValuesNet.map((x)=>x.getRefRecord(maxDepth, currentDepth));
    }
    getBestRecord(maxDepth, currentDepth) {
        let p = this.propertyValue;
        if (p && p != null) return [
            p.getBestRecord(maxDepth, currentDepth)
        ];
        return [];
    }
    getDetailRecord(maxDepth, currentDepth) {
        return this.propertyValuesNet.map((x)=>x.getDetailRecord(maxDepth, currentDepth));
    }
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getSystemRecord(maxDepth, currentDepth) {
        return this._propertyValues.map((x)=>x.getSystemRecord(maxDepth, currentDepth));
    }
    setSystemRecord(value1) {
        this._propertyValues = [];
        var values = $0ff73647c93c411e$var$ensureArray(value1);
        for (let value1 of values){
            var propertyValue = new (0, $9ef8378eb9810880$export$90601469cef9e14f)();
            propertyValue.setSystemRecord(value1);
            this._propertyValues.push(propertyValue);
        }
    }
    // -----------------------------------------------------
    //  System attributes 
    // -----------------------------------------------------
    get systemCreatedDate() {
        let resultDate = null;
        for (let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate;
            if (itemDate && (resultDate == null || itemDate < resultDate)) resultDate = itemDate;
        }
        return resultDate;
    }
    get systemUpdatedDate() {
        let resultDate = null;
        for (let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate;
            if (itemDate && (resultDate == null || itemDate > resultDate)) resultDate = itemDate;
        }
        return resultDate;
    }
    // ----------------------------------------------------
    // PropertyValues 
    // ----------------------------------------------------
    get propertyValue() {
        // return best property value object
        if (this.propertyValues && this.propertyValues.length > 0) return this.propertyValues[0];
        return null;
    }
    get propertyValues() {
        // returns best pv for each different value
        // Serve from cache
        let cache = this._propertyValuesCache;
        let cacheOld = this._propertyValuesCacheOld;
        if (cache && cache != null && cache.length > 0) {
            if (cache == cacheOld) return cache;
        }
        var results = [];
        var pvs = this.propertyValuesNet;
        const values = [
            ...new Set(pvs.map((x)=>x.value))
        ];
        values.forEach((value1)=>{
            const filteredPV = pvs.filter((item)=>item.value == value1);
            let maxPV = filteredPV.reduce((maxItem, item)=>maxItem.gt(item) ? maxItem : item);
            results.push(maxPV);
        });
        function compare(a, b) {
            if (a.gt(b)) return -1;
            if (a.lt(b)) return 1;
            return 0;
        }
        results.sort(compare);
        // Refresh cache
        this._propertyValuesCache = results;
        this._propertyValuesCacheOld = results;
        return results;
    }
    get propertyValuesNet() {
        this.compilePropertyValues();
        return this._propertyValuesNetCache;
    }
    compilePropertyValues(force = false) {
        let pv = this._propertyValues;
        let cache = this._propertyValuesNetCache;
        let cacheOld = this._propertyValuesNetCacheOld;
        if (force == false) {
            if (cache && cache != null && cache.length > 0) {
                pv = cache;
                if (cache == cacheOld) return cache;
            }
        }
        let results = [];
        // Process additions        
        results = results.concat(pv.filter((item)=>item.record_type == "addAction"));
        results = results.concat(pv.filter((item)=>item.record_type == "replaceAction"));
        // Process deletions and replacements
        pv.filter((item)=>item.record_type == "replaceAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && (filteredItem.replacee == null || filteredItem.replacee === undefined || filteredItem.replacee == result.value)));
        });
        pv.filter((item)=>item.record_type == "deleteAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && result.value == filteredItem.value));
        });
        function compare(a, b) {
            if (a.gt(b)) return -1;
            if (a.lt(b)) return 1;
            return 0;
        }
        results.sort(compare);
        this._propertyValuesNetCache = [];
        this._propertyValuesNetCache = this._propertyValuesNetCache.concat(results);
        this._propertyValuesNetCacheOld = [];
        this._propertyValuesNetCacheOld = this._propertyValuesNetCacheOld.concat(results);
        this._propertyValuesCache = null;
        // Disable validity
        for (let pv of this._propertyValues)pv.valid = false;
        // Reenable validity 
        for (let pv of this._propertyValuesNetCache)pv.valid = true;
    }
    get propertyValuesAll() {
        // return in reverse order
        return this.propertyValuesNet;
    }
    // ----------------------------------------------------
    // Values 
    // ----------------------------------------------------
    get value() {
        // Return value element of best propertyValue object
        if (this.propertyValue) return this.propertyValue.value;
        return null;
    }
    set value(value1) {
        return this.setValues(value1);
    }
    get values() {
        // Return value elements of all propertyValue object in order
        return this.propertyValues.map((x)=>x.value);
    }
    setValues(value1, metadataRecord, actionType) {
        let results = [];
        let values = $0ff73647c93c411e$var$ensureArray(value1);
        for(let i = 0; i < values.length; i++)results.push(this.setValue(values[i], metadataRecord, actionType));
        return results;
    }
    setValue(value1, metadataRecord, actionType) {
        let newValueObject = value1;
        // Check if date
        let d = $0ff73647c93c411e$var$convertToDate(newValueObject);
        if (d && d != null) newValueObject = d;
        if (!(newValueObject instanceof (0, $9ef8378eb9810880$export$90601469cef9e14f))) newValueObject = new (0, $9ef8378eb9810880$export$90601469cef9e14f)(this.propertyID, value1, actionType);
        newValueObject.metadata.inheritMetadata(metadataRecord);
        this._propertyValues.push(newValueObject);
        newValueObject.metadata.position = this._propertyValues.length;
        // Add to cache
        if (this._propertyValuesNetCache && this._propertyValuesNetCache != null) this._propertyValuesNetCache.push(newValueObject);
        // Reset cache
        this._propertyValuesCache = null;
        this._propertyValuesCacheOld = null;
        return newValueObject;
    }
    printScreen(suffix = "") {
        var v = this.value;
        if (this.value && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
        console.log(suffix, " - ", this.propertyID, ": ", v);
        this.propertyValuesNet.map((propertyValue)=>{
            propertyValue.printScreen(suffix + "    ");
        });
    }
    printScreenAll(suffix = "") {
        var v = this.value;
        if (this.value && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
        console.log(suffix, " - ", this.propertyID, ": ", v);
        console.log(suffix, "       Net");
        this.propertyValuesNet.map((propertyValue)=>{
            propertyValue.printScreen(suffix + "        ");
        });
        console.log(suffix, "       Raw");
        this.propertyValuesAll.map((propertyValue)=>{
            propertyValue.printScreen(suffix + "        ");
        });
    }
    // -----------------------------------------------------
    //  Query 
    // -----------------------------------------------------
    containsValue(value1) {
        // Return true if value is part of values
        if (value1.record_type) value1 = value1.ref;
        if (value1["@type"]) value1 = {
            "@type": value1?.["@type"],
            "@id": value1?.["@id"]
        };
        for (let pv of this.propertyValues){
            let value0 = pv.value;
            if (value0.record_type) value0 = value0.ref;
            if (value0["@type"]) value0 = {
                "@type": value0?.["@type"],
                "@id": value0?.["@id"]
            };
            if (JSON.stringify(value1) == JSON.stringify(value0)) return true;
        }
        return false;
    }
}
function $0ff73647c93c411e$var$ensureNotArray(value1) {
    let new_value = $0ff73647c93c411e$var$ensureArray(value1);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $0ff73647c93c411e$var$ensureArray(value1) {
    if (Array.isArray(value1)) return value1;
    else return [
        value1
    ];
}
function $0ff73647c93c411e$var$convertToDate(value1) {
    if (value1 instanceof Date && !isNaN(value1)) return value1;
    const date = new Date(value1);
    if (!isNaN(date.getTime())) return date;
    return null;
}




const $151dfb829471dec1$export$e91e7af1be86f42e = {
    ensureNotArray: $151dfb829471dec1$var$ensureNotArray,
    ensureArray: $151dfb829471dec1$var$ensureArray,
    simplify: $151dfb829471dec1$var$simplify
};
function $151dfb829471dec1$var$ensureNotArray(value) {
    let new_value = $151dfb829471dec1$var$ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $151dfb829471dec1$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function $151dfb829471dec1$var$simplify(data) {
    // Remove arrays of 1
    //return data
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $151dfb829471dec1$var$simplify(data[0]);
        else // Otherwise, process each element in the array
        return data.map($151dfb829471dec1$var$simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = $151dfb829471dec1$var$simplify(data[key]);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}


let $5023fd7783d7f1f5$var$MAX_DEPTH = 10;
const $5023fd7783d7f1f5$export$36a45895aad18260 = {
    get: $5023fd7783d7f1f5$var$getFullRecord,
    set: $5023fd7783d7f1f5$var$setFullRecord
};
function $5023fd7783d7f1f5$var$getFullRecord(thisThing, maxDepth = $5023fd7783d7f1f5$var$MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) maxDepth = $5023fd7783d7f1f5$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) return thisThing.ref;
    let record = {};
    let properties = thisThing.properties;
    for (let p of properties)record[p.propertyID] = p.getFullRecord(maxDepth, currentDepth + 1);
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;
    record = JSON.parse(JSON.stringify(record));
    record = (0, $151dfb829471dec1$export$e91e7af1be86f42e).simplify(record);
    return record;
}
function $5023fd7783d7f1f5$var$setFullRecord(thisThing, value) {
    if (!value || value == null) return;
    thisThing._properties = [];
    Object.keys(value).forEach((key)=>{
        thisThing.replaceProperty(key, null, value[key]);
    });
}
function $5023fd7783d7f1f5$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



let $abae92a4b70ab60a$var$MAX_DEPTH = 10;
const $abae92a4b70ab60a$export$bb6f43e012b3136d = {
    get: $abae92a4b70ab60a$var$getSystemRecord,
    set: $abae92a4b70ab60a$var$setSystemRecord
};
function $abae92a4b70ab60a$var$getSystemRecord(thing, maxDepth = $abae92a4b70ab60a$var$MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) maxDepth = $abae92a4b70ab60a$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) return thing.ref;
    let record = {};
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;
    record.propertyValues = [];
    record.summary = thing.getFullRecord();
    for (let p of thing.properties)record.propertyValues = record.propertyValues.concat(p.getSystemRecord(maxDepth, currentDepth + 1));
    record.propertyValues.filter((x)=>x && x != null);
    record.references = thing.things.map((x)=>x.ref);
    return record;
}
function $abae92a4b70ab60a$var$setSystemRecord(thing, value) {
    // Load data into object
    // Convert from string if one
    if (typeof value === "string" || value instanceof String) try {
        value = JSON.parse(value);
    } catch  {
        return;
    }
    // Check if valid format
    if (!value || !value.propertyValues && !value.properties) return;
    // Reset current properties
    thing._properties = [];
    // Convert from old format to new
    if (value.properties && value.properties != null) {
        value.propertyValues = [];
        for (let k of Object.keys(value.properties)){
            let pvs = value.properties[k];
            pvs = $abae92a4b70ab60a$var$ensureArray(pvs);
            value.propertyValues = value.propertyValues.concat(pvs);
        }
        value.propertyValues = value.propertyValues.filter((item)=>item && item != null);
    }
    // Set pvRecords
    if (!value.propertyValues || value.propertyValues == null) return;
    let pvRecords = $abae92a4b70ab60a$var$ensureArray(value.propertyValues);
    if (pvRecords.length == 0) return;
    // convert sub things to KrThing
    for (let pvRecord of pvRecords){
        if (!pvRecord || pvRecord == null) continue;
        let value = pvRecord?.object?.value;
        if (!value || value == null) continue;
        if (value["@type"] && value["@type"] != null) {
            var t = thing.new(value?.["@type"], value?.["@id"]);
            t.setSystemRecord(value);
            pvRecord.object.value = t;
        }
    }
    // Group pvRecords by propertyID
    let propertyIDs = [
        ...new Set(pvRecords.map((x)=>x.object.propertyID))
    ];
    for (let propertyID of propertyIDs){
        let subPropertyValues = pvRecords.filter((item)=>item.object.propertyID == propertyID);
        var property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
        property.setSystemRecord(subPropertyValues);
        thing._properties.push(property);
    }
}
function $abae92a4b70ab60a$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


const $68c2e8efd001e0e2$export$181d6fa9c97a9772 = {
    lt: $68c2e8efd001e0e2$var$lt,
    gt: $68c2e8efd001e0e2$var$gt,
    eq: $68c2e8efd001e0e2$var$eq,
    merge: $68c2e8efd001e0e2$var$merge
};
function $68c2e8efd001e0e2$var$lt(thisThing, otherThing) {
    if (thisThing.record_type < otherThing.record_type) return true;
    if (thisThing.record_type > otherThing.record_type) return false;
    if (thisThing.record_id < otherThing.record_id) return true;
    if (thisThing.record_id > otherThing.record_id) return false;
    return false;
}
function $68c2e8efd001e0e2$var$gt(thisThing, otherThing) {
    if (thisThing.record_type > otherThing.record_type) return true;
    if (thisThing.record_type < otherThing.record_type) return false;
    if (thisThing.record_id > otherThing.record_id) return true;
    if (thisThing.record_id < otherThing.record_id) return false;
    return false;
}
function $68c2e8efd001e0e2$var$eq(thisThing, otherThing) {
    if (thisThing.record_type != otherThing.record_type) return false;
    if (thisThing.record_id != otherThing.record_id) return false;
    return true;
}
function $68c2e8efd001e0e2$var$merge(thisThing, otherThing) {
    // Inserts otherThing in thisThing thing
    if (thisThing.eq(otherThing) == false) return;
    for (let otherThingP of otherThing._properties){
        let thisThingP = thisThing.getProperty(otherThingP.propertyID);
        thisThingP.merge(otherThingP);
    }
    return;
}



const $86c66b9faa0c31b0$export$a99cefbafba9661b = {
    get: $86c66b9faa0c31b0$var$getProperty,
    getAll: $86c66b9faa0c31b0$var$getProperties,
    set: $86c66b9faa0c31b0$var$setProperty
};
function $86c66b9faa0c31b0$var$getProperty(thisThing, propertyID) {
    /**
     * Returns property of
     */ if (!propertyID || propertyID == null) return null;
    let propertiesID = propertyID.split(".");
    let pID = propertyID.split(".")[0];
    let otherIDS = propertyID.split(".").slice(1);
    // Find property object
    let property;
    for(let i = 0; i < thisThing._properties.length; i++)if (thisThing._properties[i].propertyID == pID) property = thisThing._properties[i];
    // Create property object if missing
    if (!property || property == null) {
        property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
        thisThing._properties.push(property);
    }
    // Recurse
    if (otherIDS.length > 0) {
        if (!property.value?.record_type) return null;
        else return property.value.getProperty(otherIDS.join("."));
    } else return property;
}
function $86c66b9faa0c31b0$var$getProperties(thisThing) {
    /**
     * Returns list of KrProperty object in alphabetical order
     */ return thisThing._properties.toSorted((a, b)=>{
        return a.lt(b);
    });
}
function $86c66b9faa0c31b0$var$setProperty(thisThing, propertyID, value, credibility, observationDate, actionType, previousValue) {
    // Handle dot notation
    if (propertyID.includes(".")) {
        let pID = propertyID.split(".")[0];
        let otherIDS = propertyID.split(".").slice(1);
        let p = thisThing.getProperty(pID);
        // If not value, create new KrThing
        if (!p.value?.record_type) p.setValues(thisThing.new("Thing"), metadataRecord, actionType, null);
        // Set value
        p.value.setProperty(otherIDS.join("."), value);
        return p;
    }
    // Get old value
    let oldValue = thisThing.getProperty(propertyID)?.values;
    // get or create property object
    let property = thisThing.getProperty(propertyID);
    if (!property) {
        property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
        thisThing._properties.push(property);
    }
    // Iterate through values and convert to KrThing if required
    let values = $86c66b9faa0c31b0$var$ensureArray(value);
    for(let i = 0; i < values.length; i++)if (values[i] && values[i]["@type"]) values[i] = thisThing.new(values[i]);
    // Set metadata
    var metadataRecord = thisThing.metadata.record;
    if (credibility) metadataRecord.credibility = credibility;
    if (observationDate) metadataRecord.observationDate = observationDate;
    // set property value
    var newValues = property.setValues(values, metadataRecord, actionType, previousValue);
    // dispatch event
    let newValue = thisThing.getProperty(propertyID)?.values;
    if (oldValue != newValue) {
        let data = {
            propertyID: propertyID,
            oldValue: oldValue,
            newValue: newValue
        };
        thisThing.dispatchEvent(actionType, data);
    }
    return newValues;
}
function $86c66b9faa0c31b0$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}



const $34a656a0ca5890da$export$bea52687f148661d = {
    print: $34a656a0ca5890da$var$print,
    printScreen: $34a656a0ca5890da$var$printScreen,
    printScreenAll: $34a656a0ca5890da$var$printScreenAll
};
function $34a656a0ca5890da$var$print() {
    return this.printScreen();
}
function $34a656a0ca5890da$var$printScreen() {
    console.log("----------------------------------");
    console.log(this.properties.length);
    console.log("thing:", this.record_type, this.record_id);
    this.properties.map((property)=>{
        property.printScreen("    ");
    });
}
function $34a656a0ca5890da$var$printScreenAll() {
    console.log("----------------------------------");
    console.log(this.properties.length);
    console.log("thing:", this.record_type, this.record_id);
    this.properties.map((property)=>{
        property.printScreenAll("    ");
    });
}


const $15777fe91204fd32$export$c35ca6a8a122f0b9 = {
    getThings: $15777fe91204fd32$var$getThings,
    getSystemCreatedDate: $15777fe91204fd32$var$getSystemCreatedDate,
    getSystemUpdatedDate: $15777fe91204fd32$var$getSystemUpdatedDate
};
function $15777fe91204fd32$var$getThings(thisThing, db = []) {
    let results = [];
    for (let p of thisThing._properties){
        for (let v of p.values)if (v?.record_type) {
            let id = v?.record_type + "/" + v.record_id;
            if (!db.includes(id)) {
                results.push(v);
                db.push(id);
                results = results.concat(v.getThings(db));
            }
        }
    }
    results = results.filter(function(el) {
        return el != null;
    });
    return results;
}
function $15777fe91204fd32$var$getSystemCreatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties){
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate < resultDate)) resultDate = itemDate;
    }
    return resultDate;
}
function $15777fe91204fd32$var$getSystemUpdatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties){
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate > resultDate)) resultDate = itemDate;
    }
    return resultDate;
}


const $1e5076492b5590f0$export$a2adb632404a3e74 = {
    getFirstItem: $1e5076492b5590f0$var$getFirstItem,
    getLastItem: $1e5076492b5590f0$var$getLastItem,
    setItems: $1e5076492b5590f0$var$setItems,
    pushItem: $1e5076492b5590f0$var$pushItem,
    reCalculatePosition: $1e5076492b5590f0$var$reCalculatePosition,
    remove: $1e5076492b5590f0$var$remove,
    insertBefore: $1e5076492b5590f0$var$insertBefore,
    insertAfter: $1e5076492b5590f0$var$insertAfter,
    getItem: $1e5076492b5590f0$var$getItem,
    getByListItem: $1e5076492b5590f0$var$getByListItem,
    getByItem: $1e5076492b5590f0$var$getByItem
};
function $1e5076492b5590f0$var$getFirstItem(thisThing) {
    let items = thisThing.getProperty("itemListElement").values;
    if (items.length == 0) return null;
    for (let item of items){
        if (!item.previousItem || item.previousItem == null) return item;
    }
    for (let item of items){
        if (item.position == 0) return item;
    }
    return null;
}
function $1e5076492b5590f0$var$getLastItem(thisThing) {
    let items = thisThing.getProperty("itemListElement").values;
    if (items.length == 0) return null;
    for (let item of items){
        if (item.nextItem === undefined || item.nextItem == null) return item;
    }
    return null;
}
function $1e5076492b5590f0$var$getItems(thisThing) {
    let results = [];
    let t = thisThing.firstItem;
    while(t && t != null){
        results.push(t);
        t = t.nextItem;
    }
    return results;
}
function $1e5076492b5590f0$var$setItems(thisThing, values) {
    values = $1e5076492b5590f0$var$ensureArray(values);
    // Sort values
    function compare(a, b) {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
    }
    values.sort(compare);
    for (let value of values)thisThing.add(value);
    return;
}
function $1e5076492b5590f0$var$pushItem(thisThing, listItems) {
    let lastItem = $1e5076492b5590f0$var$getLastItem(thisThing);
    listItems = $1e5076492b5590f0$var$ensureArray(listItems);
    for (let listItem of listItems){
        if (!listItem.record_type) {
            let newListItem = thisThing.new();
            newListItem.record = listItem;
            listItem = newListItem;
        }
        if (listItem.record_type != "ListItem") {
            let newListItem = thisThing.new("ListItem");
            newListItem.item = listItem;
            listItem = newListItem;
        }
        if (lastItem && lastItem != null) {
            listItem.position = lastItem.position + 1;
            listItem.previousItem = lastItem;
            listItem.nextItem = null;
            lastItem.nextItem = listItem;
        } else {
            listItem.position = 0;
            listItem.previousItem = null;
            listItem.nextItem = null;
        }
        thisThing.addProperty("itemListElement", listItem);
        lastItem = listItem;
    }
    return; //listItem
}
function $1e5076492b5590f0$var$reCalculatePosition(thisThing) {
    var position;
    return;
}
// -----------------------------------------------------
//  CRUD for items
// -----------------------------------------------------
function $1e5076492b5590f0$var$remove(thisThing, itemRef) {
    var item = thisThing.getItem(itemRef);
    if (!item) return null;
    var p = item.previousItem;
    var n = item.nextItem;
    // Ressign before and after links to one another
    if (p) p.nextItem = n;
    if (n) n.previousItem = p;
    // Remove from list
    thisThing.deleteProperty("itemListElement", item);
    // Sets position
    item.position = null;
    // Sets position
    let position = 0;
    if (n) {
        position = n.position - 1;
        n.position = position;
    }
    let nextItem = n?.nextItem;
    while(nextItem){
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }
    //thisThing.reCalculatePosition()
    // Remove links
    item.previousItem = null;
    item.nextItem = null;
    return;
}
function $1e5076492b5590f0$var$insertBefore(thisThing, referenceItem, refItemtoInsert) {
    let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else item = thisThing.getItem(refItemtoInsert.ref);
    // Retrieve latest ListItem record
    var n = thisThing.getItem(referenceItem);
    var p = p.previousItem;
    // Stop events
    thisThing.blockEvents();
    if (item) item.blockEvents();
    if (p) p.blockEvents();
    if (n) n.blockEvents();
    // Remove previous links of items
    if (item.previousItem && item.previousItem != null || item.nextItem && item.nextItem != null) thisThing.remove(item.ref);
    // Change allocation
    item.previousItem = p;
    item.nextItem = n;
    if (p) p.nextItem = item;
    else p.nextItem = null;
    if (n) n.previousItem = item;
    else n.previousItem = null;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Sets position
    let position = 0;
    if (p) position = p.position + 1;
    item.position = position;
    let nextItem = item.nextItem;
    while(nextItem){
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }
    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) thisThing.addProperty("itemListElement", refItemtoInsert);
    return item;
}
function $1e5076492b5590f0$var$insertAfter(thisThing, referenceItem, refItemtoInsert) {
    /**
     *
     */ let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else item = thisThing.getItem(refItemtoInsert.ref);
    // Stop events
    thisThing.blockEvents();
    if (item) item.blockEvents();
    if (p) p.blockEvents();
    if (n) n.blockEvents();
    // Remove previous links of items
    if (item.previousItem && item.previousItem != null || item.nextItem && item.nextItem != null) thisThing.remove(item.ref);
    var p = thisThing.getItem(referenceItem);
    var n = p.nextItem;
    // Change allocation
    item.previousItem = p;
    item.nextItem = n;
    if (p) p.nextItem = item;
    else p.nextItem = null;
    if (n) n.previousItem = item;
    else n.previousItem = null;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Change position
    let position = 0;
    if (p) position = p.position + 1;
    item.position = position;
    let nextItem = item.nextItem;
    while(nextItem){
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }
    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) thisThing.addProperty("itemListElement", refItemtoInsert);
    return item;
}
function $1e5076492b5590f0$var$getItem(thisThing, ref) {
    if (!ref) return null;
    if (ref && ref.ref) ref = ref.ref;
    if (!ref || !ref["@type"] || ref["@type"] == null) return null;
    if (ref["@type"] == "ListItem") return $1e5076492b5590f0$var$getByListItem(thisThing, ref);
    else return $1e5076492b5590f0$var$getByItem(thisThing, ref);
}
function $1e5076492b5590f0$var$getByListItem(thisThing, ref) {
    let items = thisThing.getProperty("itemListElement").values;
    for (let item of items){
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) return item;
    }
    return null;
}
function $1e5076492b5590f0$var$getByItem(thisThing, ref) {
    let items = thisThing.getProperty("itemListElement").values;
    for (let item of items){
        if (item.item.record_type == ref["@type"] && item.item.record_id == ref["@id"]) return item;
    }
    return null;
}
// -----------------------------------------------------
//  Query attributes
// -----------------------------------------------------
function $1e5076492b5590f0$var$getParams(thisThing) {
    let params = {};
    if (!thisThing._params || thisThing._params == null) return {};
    else params = thisThing._params;
    let keys = [
        "limit",
        "offset",
        "orderBy",
        "orderDirection"
    ];
    for (let k of keys){
        let v = this[k];
        if (v && v != null) params[k] = v;
    }
    return params;
}
function $1e5076492b5590f0$var$setParams(thisThing, value) {
    thisThing._params = value;
}
// -----------------------------------------------------
//  Filters
// -----------------------------------------------------
function $1e5076492b5590f0$var$filter(thisThing, propertyValueSpecifications) {
    /**
     * Returns new Things with filtered items
     */ let newThings = new KrThings();
    for (let item of $1e5076492b5590f0$var$getItems(thisThing)){
        let result = propertyValueSpecifications.map((pvs)=>pvs.test(item.item));
        if (result.every(Boolean) == true) newThings.add(item.item);
    }
    return newThings;
}
function $1e5076492b5590f0$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


let $8b9cc78875f648b9$var$MAX_DEPTH = 10;
class $8b9cc78875f648b9$export$3138a16edeb45799 {
    /*

    attributes:
    - record_type:
    - record_id: 
    - record: 
    - ref:            returns dict with @type and @id
    - refID:          returns string type___id
    - fullRecord:     returns native records from class objects (nested)
    - refRecord:      returns record with only 
    - properties:     returns list of KrProperties
    - json:           returns this.record as json
    - _blockEvents:     prevents dispatch of events if true

    Methods
    - getProperty: 
    - setProperty:
    - get (same as getProperty):
    - set (same as setProperty):
    - blockEvents:
    - allowEvents: 

    */ constructor(record_type = null, record_id = null){
        this._properties = [];
        this._callbacks = {};
        this._blockEvents = false;
        // metadata
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"]) this.setFullRecord(record_type);
        //
        if (record_type && !record_type["@type"]) this.setProperty("@type", record_type);
        if (record_id) this.setProperty("@id", record_id);
        if (!this.record_id || this.record_id == null) record_id = String((0, $5OpyM$v4)());
    }
    toJSON() {
        return this.record;
    }
    toString() {
        return JSON.stringify(this.record, null, 4);
    }
    // -----------------------------------------------------
    //  events
    // -----------------------------------------------------
    addEventListener(eventType, callback) {
        if (typeof callback !== "function") return;
        if (!eventType || eventType == null) eventType;
        if (this._callbacks[eventType] === undefined) this._callbacks[eventType] = [];
        this._callbacks[eventType].push(callback);
    }
    blockEvents() {
        this._blockEvents = true;
    }
    allowEvents() {
        this._blockEvents = false;
    }
    dispatchEvent(eventType, data) {
        //if (this._callbacks[eventType] === undefined) return;
        if (this._blockEvents == true) return;
        const event = {
            type: eventType,
            target: this,
            data: data
        };
        if (this._callbacks[eventType] === undefined) this._callbacks[eventType] = [];
        if (this._callbacks["all"] === undefined) this._callbacks["all"] = [];
        this._callbacks[eventType].forEach((callback)=>{
            callback(event);
        });
        this._callbacks["all"].forEach((callback)=>{
            callback(event);
        });
    }
    // ----------------------------------------------------
    // Attributes
    // ----------------------------------------------------
    get record_type() {
        return this.getProperty("@type").value;
    }
    set record_type(value) {
        if (!value) return;
        return this.setProperty("@type", value);
    }
    get record_id() {
        let record_id = this.getProperty("@id").value;
        if (!record_id || record_id == null) this.record_id = String((0, $5OpyM$v4)());
        return this.getProperty("@id").value;
    }
    set record_id(value) {
        if (!value) return;
        return this.setProperty("@id", value);
    }
    get ref() {
        return {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    set ref(value) {
        this.record_type = value["@type"];
        this.record_id = value["@id"];
    }
    get recordRef() {
        return this.ref;
    }
    set recordRef(value) {
        this.ref = value;
    }
    get refID() {
        return `${this.record_type}___${this.record_id}`;
    }
    get properties() {
        return (0, $86c66b9faa0c31b0$export$a99cefbafba9661b).getAll(this);
    }
    get things() {
        return this.getThings([
            this.record_type + "/" + this.record_id
        ]);
    }
    getThings(db = []) {
        return (0, $15777fe91204fd32$export$c35ca6a8a122f0b9).getThings(this, db);
    }
    // -----------------------------------------------------
    //  System attributes
    // -----------------------------------------------------
    get systemCreatedDate() {
        return (0, $15777fe91204fd32$export$c35ca6a8a122f0b9).getSystemCreatedDate(this);
    }
    get systemUpdatedDate() {
        return (0, $15777fe91204fd32$export$c35ca6a8a122f0b9).getSystemUpdatedDate(this);
    }
    // ----------------------------------------------------
    // Records
    // ----------------------------------------------------
    get record() {
        return this.getFullRecord();
    }
    set record(value) {
        this.setFullRecord(value);
    }
    get fullRecord() {
        return this.getFullRecord();
    }
    set fullRecord(value) {
        this.setFullRecord(value);
    }
    getFullRecord(maxDepth = $8b9cc78875f648b9$var$MAX_DEPTH, currentDepth = 0) {
        return (0, $5023fd7783d7f1f5$export$36a45895aad18260).get(this, maxDepth, currentDepth);
    }
    setFullRecord(value) {
        return (0, $5023fd7783d7f1f5$export$36a45895aad18260).set(this, value);
    }
    // ----------------------------------------------------
    // System records
    // ----------------------------------------------------
    get systemRecord() {
        return this.getSystemRecord();
    }
    set systemRecord(value) {
        this.setSystemRecord(value);
    }
    get rawRecord() {
        return this.getSystemRecord(0);
    }
    set rawRecord(value) {
        this.setSystemRecord(value);
    }
    getSystemRecord(maxDepth = $8b9cc78875f648b9$var$MAX_DEPTH, currentDepth = 0) {
        return (0, $abae92a4b70ab60a$export$bb6f43e012b3136d).get(this, maxDepth, currentDepth);
    }
    setSystemRecord(value) {
        return (0, $abae92a4b70ab60a$export$bb6f43e012b3136d).set(this, value);
    }
    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------
    getProperty(propertyID) {
        return (0, $86c66b9faa0c31b0$export$a99cefbafba9661b).get(this, propertyID);
    }
    addProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "addAction");
    }
    deleteProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "deleteAction");
    }
    replaceProperty(propertyID, previousValue, newValue, credibility, observationDate) {
        if (!newValue && newValue !== 0) {
            newValue = previousValue;
            previousValue = null;
        }
        if (newValue && newValue != null && Array.isArray(newValue) && newValue.length > 0) {
            this._updateProperty(propertyID, newValue[0], credibility, observationDate, "replaceAction", previousValue);
            this._updateProperty(propertyID, newValue.slice(1), credibility, observationDate, "addAction", previousValue);
            return;
        }
        return this._updateProperty(propertyID, newValue, credibility, observationDate, "replaceAction", previousValue);
    }
    setProperty(propertyID, value, credibility, observationDate) {
        return this.replaceProperty(propertyID, undefined, value, credibility, observationDate);
    }
    _updateProperty(propertyID, value, credibility, observationDate, actionType, previousValue) {
        return (0, $86c66b9faa0c31b0$export$a99cefbafba9661b).set(this, propertyID, value, credibility, observationDate, actionType, previousValue);
    }
    get(propertyID) {
        return this.getProperty(propertyID);
    }
    set(propertyID, value) {
        return this.setProperty(propertyID, value);
    }
    new(record_type, record_id) {
        return new $8b9cc78875f648b9$export$3138a16edeb45799(record_type, record_id);
    }
    // -----------------------------------------------------
    //  Query
    // -----------------------------------------------------
    findValue(value) {
        // Returns the properties with given value
        let properties = [];
        for (let p of this._properties)if (p.containsValue(value)) properties.push(p.propertyID);
        return properties;
    }
    // ----------------------------------------------------
    // Dot notation
    // ----------------------------------------------------
    dotGet(path) {}
    dotSet(path, value) {}
    // ----------------------------------------------------
    // Comparisons
    // ----------------------------------------------------
    lt(other) {
        return (0, $68c2e8efd001e0e2$export$181d6fa9c97a9772).lt(this, other);
    }
    gt(other) {
        return (0, $68c2e8efd001e0e2$export$181d6fa9c97a9772).gt(this, other);
    }
    eq(other) {
        return (0, $68c2e8efd001e0e2$export$181d6fa9c97a9772).eq(this, other);
    }
    merge(other) {
        return (0, $68c2e8efd001e0e2$export$181d6fa9c97a9772).merge(this, other);
    }
    // -----------------------------------------------------
    //  ListItem specific attributes and methods   
    // -----------------------------------------------------
    get item() {
        return this.getProperty("item").value;
    }
    set item(value) {
        return this.setProperty("item", value);
    }
    get previousItem() {
        return this.getProperty("previousItem").value;
    }
    set previousItem(value) {
        return this.setProperty("previousItem", value);
    }
    get nextItem() {
        return this.getProperty("nextItem").value;
    }
    set nextItem(value) {
        return this.setProperty("nextItem", value);
    }
    // -----------------------------------------------------
    //  ItemList specific attributes and methods  
    // -----------------------------------------------------
    get items() {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).getItems(this);
    }
    set items(value) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).setItems(this, value);
    }
    get firstItem() {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).getFirstItem(this);
    }
    get lastItem() {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).getLastItem(this);
    }
    setItems(items) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).setItems(this, items);
    }
    add(item) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).pushItem(this, item);
    }
    pushItem(item) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).pushItem(this, item);
    }
    reCalculatePosition() {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).reCalculatePosition(this);
    }
    remove(item) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).remove(this, item);
    }
    insertBefore(referenceItem, refItemtoInsert) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).insertBefore(this, referenceItem, refItemtoInsert);
    }
    insertAfter(referenceItem, refItemtoInsert) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).insertAfter(this, referenceItem, refItemtoInsert);
    }
    getItem(ref) {
        return (0, $1e5076492b5590f0$export$a2adb632404a3e74).getItem(this, ref);
    }
    // -----------------------------------------------------
    //  Query specific attributes and methods 
    // -----------------------------------------------------
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
    }
    get offset() {
        return this._offset;
    }
    set offset(value) {
        this._offset = value;
    }
    get orderBy() {
        return this._orderBy;
    }
    set orderBy(value) {
        this._orderBy = value;
    }
    get orderDirection() {
        return this._orderDirection;
    }
    set orderDirection(value) {
        this._orderDirection = value;
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
    }
    item;
    get basePath() {
        return this._basePath;
    }
    set basePath(value) {
        this._basePath = value;
    }
    get params() {
        let params = {};
        if (!this._params || this._params == null) return {};
        else params = this._params;
        let keys = [
            "limit",
            "offset",
            "orderBy",
            "orderDirection"
        ];
        for (let k of keys){
            let v = this[k];
            if (v && v != null) params[k] = v;
        }
        return params;
    }
    set params(value) {
        this._params = value;
    }
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
    print() {
        return (0, $34a656a0ca5890da$export$bea52687f148661d).print();
    }
    printScreen() {
        return (0, $34a656a0ca5890da$export$bea52687f148661d).printScreen();
    }
    printScreenAll() {
        return (0, $34a656a0ca5890da$export$bea52687f148661d).printScreenAll();
    }
}




var $cf838c15c8b009ba$export$3138a16edeb45799 = (0, $8b9cc78875f648b9$export$3138a16edeb45799);
var $cf838c15c8b009ba$export$13f164945901aa88 = (0, $0ff73647c93c411e$export$13f164945901aa88);
var $cf838c15c8b009ba$export$90601469cef9e14f = (0, $9ef8378eb9810880$export$90601469cef9e14f);


export {$cf838c15c8b009ba$export$3138a16edeb45799 as KrThing, $cf838c15c8b009ba$export$13f164945901aa88 as KrProperty, $cf838c15c8b009ba$export$90601469cef9e14f as KrPropertyValue};
//# sourceMappingURL=main.js.map
