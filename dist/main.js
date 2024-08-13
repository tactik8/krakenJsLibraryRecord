import {v4 as $5OpyM$v4} from "uuid";
import {krakenHelpers as $5OpyM$krakenHelpers} from "krakenhelpers";



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
        if (!this._record.observationDate || this._record.observationDate == null) return null;
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
    eq(other) {
        return this.equal(other);
    }
    equal(other) {
        // returns true if data comes from same object
        let c1 = this.object == other.object;
        let c2 = this.instrument == other.instrument;
        let c3 = this.credibility == other.credibility;
        let c4 = this.observationDate == other.observationDate;
        if (this.object != other.object) return false;
        if (this.instrument != other.instrument) return false;
        if (this.credibility != other.credibility) return false;
        if (this.observationDate != other.observationDate) return false;
        return true;
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
        this.schema = null;
    }
    toString() {
        if (this.value.record_type) return `${this.value.record_type}/${this.value.record_id}`;
        else return String(this.value);
    }
    toJSON() {
        return this.value;
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
        //console.log('Get system value', this.propertyID)
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
        ].includes(this.propertyID)) //console.log('x')
        record.object["value"] = this?.value?.ref;
        else if (this.value && this.value.record_type) //console.log('s')
        record.object["value"] = this.value.export.getSystem(maxDepth, currentDepth);
        else //console.log('v')
        record.object["value"] = this.value;
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
        if (this.value != other.value) return false;
        if (this.metadata.eq(other.metadata) == false) return false;
        return true;
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
        this.schema = null;
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
    }
    toString() {
        return `Property: ${this._propertyID}`;
    }
    toJSON() {
        let record = {};
        record[this._propertyID] = this.propertyValues.map((x)=>x.toJSON());
        return record;
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
    contains(newPV) {
        // Return true if already contains same propertyValue
        if (!newPV || newPV == null) return;
        for (let pv of this._propertyValues){
            if (pv.eq(newPV)) return true;
        }
        return false;
    }
    merge(other) {
        // merge other property with this property
        let needCompileFlag = false;
        if (!other || other == null) return;
        for (let pv of other._propertyValues)if (this.contains(pv) == false) {
            this._propertyValues.push(pv);
            needCompileFlag = true;
        }
        if (needCompileFlag == true) this.compilePropertyValues(true);
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
        let results = this._propertyValues.map((x)=>x.getSystemRecord(maxDepth, currentDepth));
        return results;
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
        // Returns if already contains value
        if (this.containsValue(newValueObject) == true) return this.getValue(newValueObject);
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
    getValue(value1) {
        // Returns equivalent valueObject if present
        if (!value1 || value1 == null) return;
        if (value1.record_type) value1 = value1.ref;
        if (value1?.["@type"]) value1 = {
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
            if (JSON.stringify(value1) == JSON.stringify(value0)) return pv;
        }
        return null;
    }
    containsValue(value1) {
        // Return true if value is part of values
        let v = this.getValue(value1);
        if (v && v != null) return true;
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
    if (thisThing.id == otherThing.id) return;
    // Merge properties
    for (let otherThingP of otherThing._properties){
        let thisThingP = thisThing.getProperty(otherThingP.propertyID);
        thisThingP.merge(otherThingP);
    }
    // Merge callbacks and reset other
    for(let k in otherThing._callbacks)for (let c of otherThing._callbacks[k])thisThing.addEventListener(k, c);
    otherThing._callbacks = {};
    return;
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


class $b07a281446d81d05$export$320d46383f3d0ef0 {
    /**
     * Cache to store things
     */ constructor(maxTime = null){
        this._db = {};
        this._maxTime = maxTime;
    }
    get(record_type, record_id) {
        if (!record_type || record_type == null) return null;
        if (!record_id || record_id == null) return null;
        return this._db?.[record_type]?.[record_id]?.["item"] || null;
    }
    add(thing) {
        return this.set(thing);
    }
    push(thing) {
        return this.set(thing);
    }
    set(thing) {
        if (Array.isArray(thing)) thing.map((x)=>set(x));
        let record_type = thing.record_type;
        let record_id = thing.record_id;
        if (!record_type || record_type == null) return null;
        if (!record_id || record_id == null) return null;
        this._db[record_type] = this._db[record_type] || {};
        this._db[record_type][record_id] = this._db[record_type][record_id] || {};
        // Merge with current item if exists
        let currentElement = this._db[record_type][record_id]?.item;
        if (currentElement && currentElement.record_type) currentElement.merge(thing);
        else this._db[record_type][record_id].item = thing;
        this._db[record_type][record_id].date = Date();
        return this.get(record_type, record_id);
    }
    post(thing) {
        return this.set(thing);
    }
    get things() {
        let things = [];
        for (let record_type of Object.keys(this._db))for (let record_id of Object.keys(this._db[record_type])){
            if (record_type && record_type != null) {
                if (record_id && record_id != null) {
                    let thing = this.get(record_type, record_id);
                    things.push(thing);
                }
            }
        }
        return things;
    }
}


let $15777fe91204fd32$var$MAXLEVEL = 5;
const $15777fe91204fd32$export$c35ca6a8a122f0b9 = {
    getThings: $15777fe91204fd32$var$getThings,
    getSystemCreatedDate: $15777fe91204fd32$var$getSystemCreatedDate,
    getSystemUpdatedDate: $15777fe91204fd32$var$getSystemUpdatedDate
};
function $15777fe91204fd32$var$getThings(thisThing, cache, maxLevel = $15777fe91204fd32$var$MAXLEVEL, currentLevel = 0) {
    // Gets all things objects used as values of this 
    if (!cache || cache == null) {
        cache = new (0, $b07a281446d81d05$export$320d46383f3d0ef0)();
        cache.add(thisThing);
    }
    for (let p of thisThing._properties){
        for (let v of p.values)if (v?.record_type) {
            cache.push(v);
            if (currentLevel < maxLevel) $15777fe91204fd32$var$getThings(v, cache, maxLevel, currentLevel + 1);
        }
    }
    let results = cache.things;
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



class $669430fe45e0fd45$export$73a9d89cdfbecb0a {
    constructor(thing){
        this.thing = thing;
    }
    // -----------------------------------------------------
    //  Methods 
    // -----------------------------------------------------
    get(propertyID) {
        return $669430fe45e0fd45$var$getProperty(this.thing, propertyID);
    }
    getAll(propertyID) {
        return $669430fe45e0fd45$var$getProperties(this.thing);
    }
    set(propertyID, value, credibility, observationDate) {
        if ($669430fe45e0fd45$var$isNull(value)) return;
        value = $669430fe45e0fd45$var$ensureArray(value);
        if (value.length == 0) return;
        $669430fe45e0fd45$var$setProperty(this.thing, propertyID, value[0], credibility, observationDate, "replaceAction", null);
        if (value.length == 1) return;
        for(let i = 1; i < value.length; i++){
            let v = value[i];
            $669430fe45e0fd45$var$setProperty(this.thing, propertyID, value, credibility, observationDate, "addAction", null);
        }
    }
    add(propertyID, value, credibility, observationDate) {
        return $669430fe45e0fd45$var$setProperty(this.thing, propertyID, value, credibility, observationDate, "addAction", null);
    }
    push(propertyID, value, credibility, observationDate) {
        return this.add(propertyID, value, credibility, observationDate);
    }
    replace(propertyID, oldValue, newValue, credibility, observationDate) {
        return $669430fe45e0fd45$var$setProperty(this.thing, propertyID, newValue, credibility, observationDate, "replaceAction", oldValue);
    }
    delete(propertyID, value, credibility, observationDate) {
        return $669430fe45e0fd45$var$setProperty(this.thing, propertyID, value, credibility, observationDate, "deleteAction", null);
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value || null;
    }
    set actionStatus(value) {
        let oldValue = this.thing.getProperty("actionStatus")?.value || null;
        return this.thing.replaceProperty("actionStatus", oldValue, value);
    }
    get endTime() {
        return this.thing.getProperty("endTime")?.value || null;
    }
    set endTime(value) {
        let oldValue = this.thing.getProperty("endTime")?.value || null;
        return this.thing.replaceProperty("endTime", oldValue, value);
    }
    get error() {
        return this.thing.getProperty("error")?.value || null;
    }
    set error(value) {
        let oldValue = this.thing.getProperty("error")?.value || null;
        return this.thing.replaceProperty("error", oldValue, value);
    }
    get familyName() {
        return this.thing.getProperty("familyName")?.value || null;
    }
    set familyName(value) {
        let oldValue = this.thing.getProperty("familyName")?.value || null;
        return this.thing.replaceProperty("familyName", oldValue, value);
    }
    get givenName() {
        return this.thing.getProperty("givenName")?.value || null;
    }
    set givenName(value) {
        let oldValue = this.thing.getProperty("givenName")?.value || null;
        return this.thing.replaceProperty("givenName", oldValue, value);
    }
    get name() {
        return this.thing.getProperty("name")?.value || null;
    }
    set name(value) {
        let oldValue = this.thing.getProperty("name")?.value || null;
        return this.thing.replaceProperty("name", oldValue, value);
    }
    get startTime() {
        return this.thing.getProperty("startTime")?.value || null;
    }
    set startTime(value) {
        let oldValue = this.thing.getProperty("startTime")?.value || null;
        return this.thing.replaceProperty("startTime", oldValue, value);
    }
    get position() {
        return this.thing.getProperty("position")?.value || null;
    }
    set position(value) {
        let oldValue = this.thing.getProperty("position")?.value || null;
        return this.thing.replaceProperty("position", oldValue, value);
    }
    get url() {
        return this.thing.getProperty("url")?.value || null;
    }
    set url(value) {
        let oldValue = this.thing.getProperty("url")?.value || null;
        return this.thing.replaceProperty("url", oldValue, value);
    }
    get contentUrl() {
        return this.thing.getProperty("contentUrl")?.value || null;
    }
    set contentUrl(value) {
        let oldValue = this.thing.getProperty("contentUrl")?.value || null;
        return this.thing.replaceProperty("contentUrl", oldValue, value);
    }
    get agent() {
        return this.thing.getProperty("agent")?.value || null;
    }
    set agent(value) {
        let oldValue = this.thing.getProperty("agent")?.value || null;
        return this.thing.replaceProperty("agent", oldValue, value);
    }
    get instrument() {
        return this.thing.getProperty("instrument")?.value || null;
    }
    set instrument(value) {
        let oldValue = this.thing.getProperty("instrument")?.value || null;
        return this.thing.replaceProperty("instrument", oldValue, value);
    }
    get object() {
        return this.thing.getProperty("object")?.value || null;
    }
    set object(value) {
        let oldValue = this.thing.getProperty("object")?.value || null;
        return this.thing.replaceProperty("object", oldValue, value);
    }
    get result() {
        return this.thing.getProperty("result")?.value || null;
    }
    set result(value) {
        let oldValue = this.thing.getProperty("result")?.value || null;
        return this.thing.replaceProperty("result", oldValue, value);
    }
    get startTime() {
        return this.thing.getProperty("startTime")?.value || null;
    }
    set startTime(value) {
        let oldValue = this.thing.getProperty("startTime")?.value || null;
        return this.thing.replaceProperty("startTime", oldValue, value);
    }
    get endTime() {
        return this.thing.getProperty("endTime")?.value || null;
    }
    set endTime(value) {
        let oldValue = this.thing.getProperty("endTime")?.value || null;
        return this.thing.replaceProperty("endTime", oldValue, value);
    }
    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value || null;
    }
    set actionStatus(value) {
        let oldValue = this.thing.getProperty("actionStatus")?.value || null;
        return this.thing.replaceProperty("actionStatus", oldValue, value);
    }
    get instrument() {
        return this.thing.getProperty("instrument")?.value || null;
    }
    set instrument(value) {
        let oldValue = this.thing.getProperty("instrument")?.value || null;
        return this.thing.replaceProperty("instrument", oldValue, value);
    }
    get error() {
        return this.thing.getProperty("error")?.value || null;
    }
    set error(value) {
        let oldValue = this.thing.getProperty("error")?.value || null;
        return this.thing.replaceProperty("error", oldValue, value);
    }
    get item() {
        return this.thing.getProperty("item")?.value || null;
    }
    set item(value) {
        let oldValue = this.thing.getProperty("item")?.value || null;
        return this.thing.replaceProperty("item", oldValue, value);
    }
    get previousItem() {
        return this.thing.getProperty("previousItem")?.value || null;
    }
    set previousItem(value) {
        let oldValue = this.thing.getProperty("previousItem")?.value || null;
        return this.thing.replaceProperty("previousItem", oldValue, value);
    }
    get nextItem() {
        return this.thing.getProperty("nextItem")?.value || null;
    }
    set nextItem(value) {
        let oldValue = this.thing.getProperty("nextItem")?.value || null;
        return this.thing.replaceProperty("nextItem", oldValue, value);
    }
    get position() {
        return this.thing.getProperty("position")?.value || null;
    }
    set position(value) {
        let oldValue = this.thing.getProperty("position")?.value || null;
        return this.thing.replaceProperty("position", oldValue, value);
    }
}
function $669430fe45e0fd45$var$isNull(value) {
    if (value === undefined || value == null && value != 0 || value == [] || value == "") return true;
    return false;
}
function $669430fe45e0fd45$var$getProperty(thisThing, propertyID) {
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
function $669430fe45e0fd45$var$getProperties(thisThing) {
    /**
     * Returns list of KrProperty object in alphabetical order
     */ return thisThing._properties.toSorted((a, b)=>{
        return a.lt(b);
    });
}
function $669430fe45e0fd45$var$setProperty(thisThing, propertyID, value, credibility, observationDate, actionType, previousValue) {
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
    let values = $669430fe45e0fd45$var$ensureArray(value);
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
function $669430fe45e0fd45$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}





let $986206abb55bdef7$var$MAX_DEPTH = 10;
class $986206abb55bdef7$export$89929189f1e51a0b {
    constructor(thing){
        this.thing = thing;
    }
    get record() {
        return $986206abb55bdef7$var$getFullRecord(this.thing);
    }
    getRecord(maxDepth, currentDepth) {
        return $986206abb55bdef7$var$getFullRecord(this.thing, maxDepth, currentDepth);
    }
    set record(value) {
        return $986206abb55bdef7$var$setFullRecord(this.thing, value);
    }
    get best() {
        return $986206abb55bdef7$var$getBestRecord(this.thing);
    }
    get system() {
        return $986206abb55bdef7$var$getSystemRecord(this.thing);
    }
    get systemFlat() {
        return $986206abb55bdef7$var$getSystemRecordFlat(this.thing);
    }
    getSystem(maxDepth, currentDepth) {
        return $986206abb55bdef7$var$getSystemRecord(this.thing, maxDepth, currentDepth);
    }
    set system(value) {
        return $986206abb55bdef7$var$setSystemRecord(this.thing, value);
    }
}
// -----------------------------------------------------
//  Best record 
// -----------------------------------------------------
function $986206abb55bdef7$var$getBestRecord(thisThing, maxDepth = $986206abb55bdef7$var$MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) {
        if (this.record_type == "QuantitativeValue") ;
        else return thisThing.ref;
    }
    let record = {};
    let properties = thisThing.properties;
    for (let p of properties)record[p.propertyID] = p.getBestRecord(maxDepth, currentDepth + 1);
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;
    record = JSON.parse(JSON.stringify(record));
    record = (0, $151dfb829471dec1$export$e91e7af1be86f42e).simplify(record);
    return record;
}
// -----------------------------------------------------
//  Full record 
// -----------------------------------------------------
function $986206abb55bdef7$var$getFullRecord(thisThing, maxDepth = $986206abb55bdef7$var$MAX_DEPTH, currentDepth = 0) {
    if (!maxDepth || maxDepth == null) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) {
        if (this.record_type == "QuantitativeValue") ;
        else return thisThing.ref;
    }
    let record = {};
    let properties = thisThing.properties;
    for (let p of properties)record[p.propertyID] = p.getFullRecord(maxDepth, currentDepth + 1);
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;
    record = JSON.parse(JSON.stringify(record));
    record = (0, $151dfb829471dec1$export$e91e7af1be86f42e).simplify(record);
    return record;
}
function $986206abb55bdef7$var$setFullRecord(thisThing, value) {
    if (!value || value == null) return;
    thisThing._properties = [];
    Object.keys(value).forEach((key)=>{
        thisThing.p.replace(key, null, value[key]);
    });
}
// -----------------------------------------------------
//  System record 
// -----------------------------------------------------
function $986206abb55bdef7$var$getSystemRecordFlat(thing) {
    let records = [];
    for (let t of thing.things)records.push($986206abb55bdef7$var$getSystemRecord(t, 1, 0));
    return records;
}
function $986206abb55bdef7$var$getSystemRecord(thing, maxDepth, currentDepth) {
    if ((!maxDepth || maxDepth == null) && maxDepth != 0) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if ((!currentDepth || currentDepth == null) && currentDepth != 0) currentDepth = 0;
    if (currentDepth >= maxDepth) return thing.ref;
    let record = {};
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;
    record.propertyValues = [];
    record.summary = $986206abb55bdef7$var$getFullRecord(thing, maxDepth, currentDepth);
    let pvs = [];
    let count = 0;
    for (let p of thing.properties){
        count += 1;
        pvs = pvs.concat(p.getSystemRecord(maxDepth, currentDepth + 1));
    }
    record.propertyValues = pvs;
    return record;
}
function $986206abb55bdef7$var$setSystemRecord(thing, value, cache) {
    // Load data into object
    if (!cache || cache == null) cache = new (0, $b07a281446d81d05$export$320d46383f3d0ef0)();
    // Convert from string if one
    if (typeof value === "string" || value instanceof String) try {
        value = JSON.parse(value);
    } catch  {
        return;
    }
    // Check if valid format
    if (!value || !value.propertyValues) return;
    // Reset current properties
    thing._properties = [];
    // Set pvRecords
    if (!value.propertyValues || value.propertyValues == null) return;
    let pvRecords = $986206abb55bdef7$var$ensureArray(value.propertyValues);
    pvRecords = pvRecords.filter((x)=>x !== undefined && x != null);
    {
        let newPvRecords = [];
        for (let p of pvRecords){
            if (Array.isArray(p) && p.length == 1) {
                p = p[0];
                newPvRecords.push(p);
            } else if (Array.isArray(p) && p.length == 0) ;
            else newPvRecords.push(p);
        }
        pvRecords = newPvRecords;
    }
    //
    if (pvRecords.length == 0) return;
    // convert sub things to KrThing
    let counter = 0;
    for (let pvRecord of pvRecords){
        if (!pvRecord || pvRecord == null) continue;
        let value = pvRecord?.object?.value;
        if (!value || value == null) continue;
        if (value["@type"] && value["@type"] != null) {
            var t = thing.new(value?.["@type"], value?.["@id"]);
            $986206abb55bdef7$var$setSystemRecord(t, value, cache);
            // Store and retrieve to cache to avoid duplicate things
            cache.set(t);
            t = cache.get(value?.["@type"], value?.["@id"]);
            pvRecord.object.value = t;
            counter += 1;
        }
    }
    // Group pvRecords by propertyID
    let propertyIDs = [
        ...new Set(pvRecords.map((x)=>x.object.propertyID))
    ];
    for (let propertyID of propertyIDs)if (propertyID && propertyID != null) {
        let subPropertyValues = pvRecords.filter((item)=>item.object.propertyID == propertyID);
        var property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
        property.setSystemRecord(subPropertyValues);
        thing._properties.push(property);
    }
}
function $986206abb55bdef7$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


class $681e59e95589c3c8$export$bcd69048a889a452 {
    constructor(thing){
        this.thing = thing;
    }
    new() {
        let newItemList = this.thing.new("ItemList");
        return newItemList;
    }
    getFirstItem() {
        return $681e59e95589c3c8$var$getFirstItem(this.thing);
    }
    get firstItem() {
        return $681e59e95589c3c8$var$getFirstItem(this.thing);
    }
    get first() {
        return $681e59e95589c3c8$var$getFirstItem(this.thing);
    }
    getLastItem() {
        return $681e59e95589c3c8$var$getLastItem(this.thing);
    }
    get lastItem() {
        return $681e59e95589c3c8$var$getLastItem(this.thing);
    }
    get last() {
        return $681e59e95589c3c8$var$getLastItem(this.thing);
    }
    // Items
    get items() {
        return $681e59e95589c3c8$var$getItems(this.thing);
    }
    // Items
    getItems() {
        return $681e59e95589c3c8$var$getItems(this.thing);
    }
    // ListItems
    get getListItems() {
        return $681e59e95589c3c8$var$getListItems(this.thing);
    }
    set items(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    getListItems() {
        return $681e59e95589c3c8$var$getListItems(this.thing);
    }
    addItems(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    setItems(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    push(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    add(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    getItem(ref) {
        return $681e59e95589c3c8$var$getItem(this.thing);
    }
    pushItem(value) {
        return $681e59e95589c3c8$var$pushItem(this.thing, value);
    }
    // ListItem
    get item() {
        return this.thing.p.item;
    }
    set item(value) {
        return this.thing.p.item = value;
    }
    setItem(value) {
        return this.thing.p.item = value;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    reCalculatePosition() {
        return $681e59e95589c3c8$var$reCalculatePosition(this.thing);
    }
    remove(value) {
        return $681e59e95589c3c8$var$remove(this.thing, value);
    }
    insertBefore(refItem, itemToInsert) {
        return $681e59e95589c3c8$var$insertBefore(this.thing, refItem, itemToInsert);
    }
    insertAfter(refItem, itemToInsert) {
        return $681e59e95589c3c8$var$insertAfter(this.thing, refItem, itemToInsert);
    }
    getItem(ref) {
        return $681e59e95589c3c8$var$getItem(this.thing, ref);
    }
    getByListItem(listItem) {
        return $681e59e95589c3c8$var$getByListItem(this.thing, listItem);
    }
    getByItem(item) {
        return $681e59e95589c3c8$var$getByItem(this.thing, item);
    }
    get length() {
        return $681e59e95589c3c8$var$getListItems(this.thing).length;
    }
    // -----------------------------------------------------
    //  filters 
    // -----------------------------------------------------
    filter(propertyID, value) {
        // Basic filter, returns new ItemList
        return $681e59e95589c3c8$var$filter(this.thing, propertyID, value);
    }
}
function $681e59e95589c3c8$var$getFirstItem(thisThing) {
    let items = thisThing.p.get("itemListElement").values;
    if (items.length == 0) return null;
    for (let item of items){
        if (!item.p.previousItem || item.p.previousItem == null) return item;
    }
    for (let item of items){
        if (item.p.position == 0) return item;
    }
    return null;
}
function $681e59e95589c3c8$var$getLastItem(thisThing) {
    let items = thisThing.p.get("itemListElement").values;
    if (items.length == 0) return null;
    for (let item of items){
        if (item.p.nextItem === undefined || item.p.nextItem == null) return item;
    }
    return null;
}
function $681e59e95589c3c8$var$getListItems(thisThing) {
    let results = [];
    let t = thisThing.list.first;
    while(t && t != null){
        results.push(t);
        t = t.p.nextItem;
    }
    return results;
}
function $681e59e95589c3c8$var$getItems(thing) {
    let listItems = $681e59e95589c3c8$var$getListItems(thing);
    let items = listItems.map((x)=>x?.p.get("item").value);
    items = items.filter((x)=>x !== undefined && x != null);
    return items;
}
function $681e59e95589c3c8$var$pushItem(thisThing, listItems) {
    listItems = $681e59e95589c3c8$var$ensureArray(listItems);
    // Prepare listItems
    let newListItems = [];
    for (let listItem of listItems){
        // Check if thing, else convert to one
        if (!listItem.record_type) {
            let newListItem = thisThing.new();
            newListItem.export.record = listItem;
            listItem = newListItem;
        }
        // Check if ListItem, else convert to one
        if (listItem.record_type != "ListItem") {
            let newListItem = thisThing.new("ListItem");
            newListItem.p.item = listItem;
            listItem = newListItem;
        }
        newListItems.push(listItem);
    }
    // Set previous, next and position
    let lastListItem = $681e59e95589c3c8$var$getLastItem(thisThing);
    let newListItemsLength = newListItems.length;
    for(let i = 0; i < newListItemsLength; i++){
        let listItem = newListItems[i];
        if (lastListItem && lastListItem != null) {
            listItem.p.position = lastListItem.p.position + 1;
            listItem.p.previousItem = lastListItem;
            lastListItem.p.nextItem = listItem;
        } else listItem.p.position = 0;
        lastListItem = listItem;
    }
    // Add to property
    thisThing.p.add("itemListElement", newListItems);
    return; //listItem
}
function $681e59e95589c3c8$var$reCalculatePosition(thisThing) {
    var position;
    return;
}
// -----------------------------------------------------
//  CRUD for items
// -----------------------------------------------------
function $681e59e95589c3c8$var$remove(thisThing, itemRef) {
    var item = thisThing.getItem(itemRef);
    if (!item) return null;
    var p = item.p.previousItem;
    var n = item.p.nextItem;
    // Ressign before and after links to one another
    if (p) p.p.nextItem = n;
    if (n) n.p.previousItem = p;
    // Remove from list
    thisThing.deleteProperty("itemListElement", item);
    // Sets position
    item.p.position = null;
    // Sets position
    let position = 0;
    if (n) {
        position = n.p.position - 1;
        n.p.position = position;
    }
    let nextItem = n?.nextItem;
    while(nextItem){
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }
    //thisThing.reCalculatePosition()
    // Remove links
    item.p.previousItem = null;
    item.p.nextItem = null;
    return;
}
function $681e59e95589c3c8$var$insertBefore(thisThing, referenceItem, refItemtoInsert) {
    let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else item = thisThing.list.getItem(refItemtoInsert.ref);
    // Retrieve latest ListItem record
    var n = thisThing.list.getItem(referenceItem);
    var p = p.p.previousItem;
    // Stop events
    thisThing.blockEvents();
    if (item) item.blockEvents();
    if (p) p.blockEvents();
    if (n) n.blockEvents();
    // Remove previous links of items
    if (item.p.previousItem && item.p.previousItem != null || item.p.nextItem && item.p.nextItem != null) thisThing.remove(item.ref);
    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;
    if (p) p.p.nextItem = item;
    else p.p.nextItem = null;
    if (n) n.p.previousItem = item;
    else n.p.previousItem = null;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Sets position
    let position = 0;
    if (p) position = p.p.position + 1;
    item.position = position;
    let nextItem = item.p.nextItem;
    while(nextItem){
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }
    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) thisThing.p.add("itemListElement", refItemtoInsert);
    return item;
}
function $681e59e95589c3c8$var$insertAfter(thisThing, referenceItem, refItemtoInsert) {
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
    if (item.p.previousItem && item.p.previousItem != null || item.p.nextItem && item.p.nextItem != null) thisThing.remove(item.ref);
    var p = thisThing.list.getItem(referenceItem);
    var n = p.p.nextItem;
    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;
    if (p) p.p.nextItem = item;
    else p.p.nextItem = null;
    if (n) n.p.previousItem = item;
    else n.p.previousItem = null;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Change position
    let position = 0;
    if (p) position = p.p.position + 1;
    item.p.position = position;
    let nextItem = item.p.nextItem;
    while(nextItem){
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }
    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) thisThing.p.add("itemListElement", refItemtoInsert);
    return item;
}
function $681e59e95589c3c8$var$getItem(thisThing, ref) {
    if (!ref) return null;
    if (ref && ref.ref) ref = ref.ref;
    if (!ref || !ref["@type"] || ref["@type"] == null) return null;
    if (ref["@type"] == "ListItem") return $681e59e95589c3c8$var$getByListItem(thisThing, ref);
    else return $681e59e95589c3c8$var$getByItem(thisThing, ref);
}
function $681e59e95589c3c8$var$getByListItem(thisThing, ref) {
    let items = thisThing.p.get("itemListElement").values;
    for (let item of items){
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) return item;
    }
    return null;
}
function $681e59e95589c3c8$var$getByItem(thisThing, ref) {
    let items = thisThing.p.get("itemListElement").values;
    for (let item of items){
        if (item.item.record_type == ref["@type"] && item.item.record_id == ref["@id"]) return item;
    }
    return null;
}
// -----------------------------------------------------
//  Query attributes
// -----------------------------------------------------
function $681e59e95589c3c8$var$getParams(thisThing) {
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
function $681e59e95589c3c8$var$setParams(thisThing, value) {
    thisThing._params = value;
}
// -----------------------------------------------------
//  Filters
// -----------------------------------------------------
function $681e59e95589c3c8$var$filter(thing, propertyID, value) {
    //
    // Convert to thing if one
    if (value["@type"]) value = thing.new(value);
    // Init new list
    let newList = thing.list.new();
    // Iterate through values
    for (let item of thing.list.items){
        let values = item.p.get(propertyID)?.values;
        for (let v of values){
            if (v.record_type) {
                if (v.eq(value)) {
                    newList.list.add(item);
                    continue;
                }
            } else if (v == value) {
                newList.list.add(item);
                continue;
            }
        }
    }
    return newList;
}
function $681e59e95589c3c8$var$filterAdvanced(thisThing, propertyValueSpecifications) {
    /**
     * Returns new Things with filtered items
     */ let newThings = new KrThings();
    for (let item of $681e59e95589c3c8$var$getItems(thisThing)){
        let result = propertyValueSpecifications.map((pvs)=>pvs.test(item.item));
        if (result.every(Boolean) == true) newThings.list.add(item.item);
    }
    return newThings;
}
function $681e59e95589c3c8$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}


let $48f3d71cef923a10$var$ACTIONS_LOG = [];
class $48f3d71cef923a10$export$370403b83c36af9f {
    constructor(thing){
        this.thing = thing;
    }
    // -----------------------------------------------------
    //  Logs 
    // -----------------------------------------------------
    get logs() {
        return this.getLogs();
    }
    getLogs(propertyID, value) {
        // Returns ListItem with all actions
        let actionsLogThing = this.thing.list.new();
        actionsLogThing.list.add($48f3d71cef923a10$var$ACTIONS_LOG);
        if (propertyID && propertyID != null) actionsLogThing = actionsLogThing.list.filter(propertyID, value);
        return actionsLogThing;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    new() {
        let action = this.thing.new("Action");
        action.a.startTimer();
        $48f3d71cef923a10$var$ACTIONS_LOG.push(action);
        return action;
    }
    get name() {
        return this.thing.p.get("name").value;
    }
    set name(value) {
        this.thing.p.set("name", value);
    }
    get object() {
        let object = this.thing.p.get("object").value;
        if (!object) this.setProperty("object", this.thing.new("Thing"));
        return this.thing.p.get("object").value;
    }
    set object(value) {
        this.thing.p.set("object", value);
    }
    get instrument() {
        return this.thing.p.get("instrument").value;
    }
    set instrument(value) {
        this.thing.p.set("instrument", value);
    }
    get result() {
        return this.thing.p.get("result").value;
    }
    set result(value) {
        this.thing.p.set("result", value);
        this.setCompleted();
    }
    get startTime() {
        return this.thing.p.get("startTime").value;
    }
    set startTime(value) {
        this.thing.p.replace("startTime", null, value);
    }
    get endTime() {
        return this.thing.p.get("endTime").value;
    }
    set endTime(value) {
        this.thing.p.set("endTime", value);
    }
    get actionStatus() {
        return this.thing.p.get("actionStatus").value;
    }
    set actionStatus(value) {
        this.thing.p.replace("actionStatus", null, value);
    }
    get error() {
        return this.thing.p.get("error").value;
    }
    set error(value) {
        this.thing.p.set("error", value);
    }
    // time shortcuts
    start() {
        this.startTimer();
    }
    startTimer() {
        let date = new Date();
        this.startTime = date;
        this.actionStatus = "ActiveActionStatus";
    }
    stop() {
        this.stopTimer();
    }
    stopTimer() {
        this.endTime = new Date();
    }
    duration() {
        let startTime = this.startTime;
        let endTime = this.endTime || new Date();
        if (startTime) return endTime - startTime;
        return undefined;
    }
    // Action Status shortcuts
    isSuccess() {
        return this.actionStatus == "CompletedActionStatus";
    }
    setCompleted() {
        this.actionStatus = "CompletedActionStatus";
        if (!this.startTime) this.startTimer();
        if (!this.endTime) this.stopTimer();
        this.error = undefined;
    }
    setFailed(errorMessage) {
        this.actionStatus = "FailedActionStatus";
        this.error = errorMessage;
    }
    // HTML shortcuts
    get htmlStatus() {
        if (this.isSuccess == true) return 200;
        else return 400;
    }
    get htmlContent() {
        if (!this.result || this.result == null) return null;
        if (Array.isArray(this.result)) return this.result.map((x)=>x.getSystemRecord(10));
        else if (this.result.record_type) return this.result.getSystemRecord(10);
        else return this.result;
    }
    // Text output
    get textContent() {
        let date = $48f3d71cef923a10$var$convertToDate(this.startTime);
        if (date && date != null) date = date.toISOString().split("T")[0];
        let time = $48f3d71cef923a10$var$convertToDate(this.startTime);
        if (time && time != null) time = time.toLocaleTimeString();
        let status = this.actionStatus;
        if (status && status != null) status = status.replace("ActionStatus", "").toUpperCase();
        let name = this.name;
        if (!name || name == null) name = "";
        let error = this.error;
        if (!error || error == null) error = "";
        let record_type = this.record_type;
        if (record_type && record_type != null) record_type = record_type.replace("Action", "");
        let content = `${date}, ${time} - ${status || ""} - ${record_type || ""} ${name || ""} ${error || ""}`;
        return content;
    }
}
function $48f3d71cef923a10$var$convertToDate(value) {
    if (value instanceof Date && !isNaN(value)) return value;
    const date = new Date(value);
    if (!isNaN(date.getTime())) return date;
    return null;
}



let $a0c51871cc1d3395$var$API_ACTIONS_LOG = [];
class $a0c51871cc1d3395$export$dc35bac29e2a8cfc {
    constructor(thing1){
        this.thing = thing1;
        this._apiConfig = {};
        this._params = {};
        this._req = null;
        this.instrument = {
            "@type": "WebAPI",
            "@id": "ClassKrakenApiHelpers",
            "name": "ClassKrakenApiHelpers"
        };
    }
    // -----------------------------------------------------
    //  I/O 
    // -----------------------------------------------------
    async get() {
        if (!this.record_id || this.record_id == null) return this.getThings();
        let action = this.thing.action.new();
        action.a.name = `Get record ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.apiCollection, this.thing.ref);
            this.thing.export.system = results;
            action.a.setCompleted();
            action.a.result = this.thing;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async search() {
        return await this.getThings();
    }
    async getThings() {
        let action = this.thing.action.new();
        action.a.name = `Get records `;
        action.a.instrument = this.instrument;
        try {
            console.log(this.params);
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.apiCollection, this.params);
            this.thing.export.system = results;
            action.a.setCompleted();
            action.a.result = this.thing;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async getThingRelated() {
        let action = this.thing.action.new();
        action.a.name = `Get record ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let things = this.thing.list.new();
            let additionalPath = `/${this.apiCollection}/${thing.record_type}/${thing.record_id}/related`;
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, additionalPath);
            things.export.system = results;
            action.a.setCompleted();
            action.a.result = things;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async post() {
        let action = this.thing.action.new();
        action.a.name = `Get record ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let results = await (0, $5OpyM$krakenHelpers).api.post(this.apiUrl, this.apiCollection, this.thing.export.system);
            action.a.setCompleted();
            action.a.result = this.thing;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async delete() {
        let action = this.thing.action.new();
        action.a.name = `Delete record ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let results = await (0, $5OpyM$krakenHelpers).api.delete(this.apiUrl, this.apiCollection, this.thing.ref);
            action.a.setCompleted();
            action.a.result = this.thing;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    // -----------------------------------------------------
    //  Custom attributes 
    // -----------------------------------------------------
    get apiConfig() {
        return this._apiConfig;
    }
    set apiConfig(value) {
        this._apiConfig = value;
    }
    get apiUrl() {
        return this._apiConfig.apiUrl;
    }
    set apiUrl(value) {
        if (!value || value == null) return;
        this.apiConfig.apiUrl = value;
    }
    get apiCollection() {
        return this._apiConfig.apiCollection;
    }
    set apiCollection(value) {
        if (!value || value == null) return;
        this.apiConfig.apiCollection = value;
    }
    get record_type() {
        return this._params.record_type;
    }
    set record_type(value) {
        if (!value || value == null) return;
        this._params.record_type = value;
    }
    get record_id() {
        return this._params.record_id;
    }
    set record_id(value) {
        if (!value || value == null) return;
        this._params.record_id = value;
    }
    get query() {
        let q = this._params.query;
        return q;
    }
    set query(value) {
        if (!value || value == null) return;
        this._params.query = value;
    }
    get limit() {
        return this._params.limit;
    }
    set limit(value) {
        this._params.limit = value;
    }
    get offset() {
        return this._params.offset;
    }
    set offset(value) {
        this._params.offset = value;
    }
    get orderBy() {
        return this._params.orderBy;
    }
    set orderBy(value) {
        this._params.orderBy = value;
    }
    get orderDirection() {
        return this._params.orderDirection;
    }
    set orderDirection(value) {
        this._params.orderDirection = value;
    }
    get params() {
        const params = {};
        if (this.query && this.query != null) params["query"] = JSON.stringify(this.query);
        if (this.offset && this.offset != null) params["offset"] = this.offset;
        if (this.limit && this.limit != null) params["limit"] = this.limit;
        if (this.orderBy && this.orderBy != null) params["orderBy"] = this.orderBy;
        if (this.orderDirection && this.orderDirection != null) params["orderDirection"] = this.orderDirection;
        if (this.record_type && this.record_type != null) params["record_type"] = this.record_type;
        if (this.record_id && this.record_id != null) params["record_id"] = this.record_id;
        return params;
    }
    get req() {
        return this._req;
    }
    set req(value) {
        this._req = value;
        this.query = value.query["query"] || value.query["q"];
        this.offset = value.query["offset"] || value.query["o"];
        this.limit = value.query["limit"] || value.query["l"];
        this.orderBy = value.query["orderBy"];
        this.orderDirection = value.query["orderDirection"];
        this.record_type = value.query["record_type"];
        this.record_type = value.query["@type"];
        this.record_type = value.params["record_type"];
        this.record_type = value.params["@type"];
        this.record_id = value.query["record_id"];
        this.record_id = value.query["@id"];
        this.record_id = value.params["record_id"];
        this.record_id = value.params["@id"];
        this.apiCollection = value.params["collection"];
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get actionsLog() {
        let logs = this.thing.a.getLogs("instrument", this.instrument);
        return logs;
    }
}


class $8c53f3ac7d8ee3d4$export$d62a579734015d66 {
    constructor(thing){
        this.thing = thing;
    }
    get heading1() {
        return this.getHeading1();
    }
    getHeading1(thing) {
        thing = thing ?? this.thing;
        switch(thing.record_type){
            case "Action":
                return thing.p.name || thing.refID;
            default:
                return thing.p.name || thing.refID;
        }
    }
    get heading2() {
        return this.getHeading2();
    }
    getHeading2(thing) {
        thing = thing ?? this.thing;
        switch(thing.record_type){
            case "Action":
                return thing.p.name || thing.refID;
            default:
                return thing.p.name || thing.refID;
        }
    }
    get textSummary() {
        return this.getTextSummary();
    }
    getTextSummary(thing) {
        thing = thing ?? this.thing;
        switch(thing.record_type){
            case "Action":
                let action_name = this.getHeading1(thing);
                let action_status = thing.p.actionStatus.replace("ActionStatus", "");
                let action_content = `* ${action_name} - ${action_status}`;
                return action_content;
            case "ItemList":
                let ItemList_name = this.getHeading1(thing);
                let ItemList_length = String(thing.list.length);
                let ItemList_content = `${ItemList_name} (${ItemList_length})`;
                return ItemList_content;
            case "ListItem":
                let ListItem_name = this.getHeading1(thing);
                let ListItem_position = String(thing.list.length);
                let ListItem_content = `[${ListItem_position}] ${ListItem_name}`;
                return ListItem_content;
            default:
                return thing.p.name || thing.refID;
        }
    }
    get textDetails() {
        return this.getTextDetails();
    }
    getTextDetails(thing) {
        thing = thing ?? this.thing;
        switch(thing.record_type){
            case "ItemList":
                let contentItems = [];
                contentItems.push(this.getTextSummary(thing));
                thing.list.items.map((x)=>contentItems.push("- " + String(this.getTextSummary(x))));
                let content = contentItems.join("\n");
                return content;
            default:
                return thing.p.name || thing.refID;
        }
    }
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
        this.id = String(crypto.randomUUID());
        this._properties = [];
        this._callbacks = {};
        this._blockEvents = false;
        // Load libraries
        // Property helpers
        this._p = new (0, $669430fe45e0fd45$export$73a9d89cdfbecb0a)(this);
        this._export = new (0, $986206abb55bdef7$export$89929189f1e51a0b)(this);
        this._itemList = new (0, $681e59e95589c3c8$export$bcd69048a889a452)(this);
        this._action = new (0, $48f3d71cef923a10$export$370403b83c36af9f)(this);
        this._api = new (0, $a0c51871cc1d3395$export$dc35bac29e2a8cfc)(this);
        this._headings = new (0, $8c53f3ac7d8ee3d4$export$d62a579734015d66)(this);
        // metadata
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"]) this.setFullRecord(record_type);
        //
        if (record_type && !record_type["@type"]) this.p.set("@type", record_type);
        if (record_id) this.p.set("@id", record_id);
        if (!this.record_id || this.record_id == null) record_id = String((0, $5OpyM$v4)());
    }
    toJSON() {
        return this.record;
    }
    toString() {
        return JSON.stringify(this.record, null, 4);
    }
    // -----------------------------------------------------
    //  Libraries 
    // -----------------------------------------------------
    // Properties
    get p() {
        return this._p;
    }
    get property() {
        return this._p;
    }
    // Record export
    get export() {
        return this._export;
    }
    // ItemList
    get itemList() {
        return this._itemList;
    }
    get list() {
        return this._itemList;
    }
    get l() {
        return this._itemList;
    }
    // Action
    get action() {
        return this._action;
    }
    get a() {
        return this._action;
    }
    // API
    get api() {
        return this._api;
    }
    // Headings
    get headings() {
        return this._headings;
    }
    get heading() {
        return this._headings;
    }
    get h() {
        return this._headings;
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
        return this.p.get("@type").value;
    }
    set record_type(value) {
        if (!value) return;
        return this.p.set("@type", value);
    }
    get record_id() {
        let record_id = this.getProperty("@id").value;
        if (!record_id || record_id == null) this.record_id = String((0, $5OpyM$v4)());
        return this.p.get("@id").value;
    }
    set record_id(value) {
        if (!value) return;
        return this.p.set("@id", value);
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
        return `${this.record_type}/${this.record_id}`;
    }
    get things() {
        return this.getThings();
    }
    getThings() {
        // Returns itself and all things references in values
        return (0, $15777fe91204fd32$export$c35ca6a8a122f0b9).getThings(this);
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
    // -----------------------------------------------------
    //  Records - Legacy shortcuts 
    // -----------------------------------------------------
    get record() {
        return this._export.record;
    }
    set record(value) {
        return this._export.record = value;
    }
    get systemRecord() {
        return this._export.system;
    }
    set systemRecord(value) {
        return this._export.system = value;
    }
    get bestRecord() {
        return this._export.best;
    }
    getFullRecord() {
        return this._export.record;
    }
    setFullRecord(value) {
        return this._export.record = value;
    }
    getSystemRecord() {
        return this._export.system;
    }
    setSystemRecord(value) {
        return this._export.system = value;
    }
    getBestRecord() {
        return this._export.best;
    }
    // ----------------------------------------------------
    // Properties - Legacy shortcuts
    // ----------------------------------------------------
    getProperty(propertyID) {
        return this.p.get(propertyID);
    }
    addProperty(propertyID, value, credibility, observationDate) {
        return this.p.add(propertyID, value, credibility, observationDate);
    }
    deleteProperty(propertyID, value, credibility, observationDate) {
        return this.p.delete(propertyID, value, credibility, observationDate);
    }
    replaceProperty(propertyID, oldValue, newValue, credibility, observationDate) {
        return this.p.replace(propertyID, oldValue, newValue, credibility, observationDate);
    }
    setProperty(propertyID, value, credibility, observationDate) {
        return this.p.set(propertyID, value, credibility, observationDate);
    }
    get properties() {
        return this.p.getAll();
    }
    get(propertyID) {
        return this.p.get(propertyID);
    }
    set(propertyID, value) {
        return this.p.set(propertyID, value);
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
    //  ItemList specific attributes and methods  
    // -----------------------------------------------------
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
