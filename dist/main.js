import {v4 as $5OpyM$v4} from "uuid";
import {krakenHelpers as $5OpyM$krakenHelpers} from "krakenhelpers";
import {krakenHtml as $5OpyM$krakenHtml} from "krakenhtml";
import {KrakenSchemas as $5OpyM$KrakenSchemas} from "krakenschema";





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
        if ((0, $5OpyM$krakenHelpers).isNull(this?._record.createdDate)) this._record.createdDate = new Date();
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
        if ((0, $5OpyM$krakenHelpers).isNull(value)) return;
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
        if ((0, $5OpyM$krakenHelpers).isNull(this.createdDate)) this.createdDate = tempCreatedDate;
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
        if ((0, $5OpyM$krakenHelpers).isNull(this._record.observationDate)) return null;
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
    get instrument() {
        return this._record.instrument;
    }
    set instrument(value) {
        this._record.instrument = value;
    }
    get agent() {
        return this._record.agent;
    }
    set agent(value) {
        this._record.agent = value;
    }
    eq(other) {
        return this.equal(other);
    }
    equal(other) {
        // returns true if data comes from same object
        let c1 = this.object == other.object;
        let c2a = this.instrument == other.instrument;
        let c2b = this.agent == other.agent;
        let c2c = this.result == other.result;
        let c3 = this.credibility == other.credibility;
        let c4 = this.observationDate == other.observationDate;
        let c = [
            c1,
            c2a,
            c2b,
            c2c,
            c3,
            c4
        ];
        if (!c.every((x)=>x == true)) return false;
        return true;
    }
    isValid(comparisonDate = null) {
        // Returns true if value is within velidFrom, validThrough. Uses today's date if not provided
        if ((0, $5OpyM$krakenHelpers).isNull(comparisonDate)) comparisonDate = new Date();
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
        return record;
    }
    get json() {
        return JSON.stringify(this.record, null, 4);
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
            else return this.value.export.getRecord(maxDepth, currentDepth);
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
        if (this.value && this.value.record_type) value = this.value.export.getBest(maxDepth, currentDepth);
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
        else if ((0, $5OpyM$krakenHelpers).isNotNull(this?.value?.record_type)) record.object["value"] = this.value.export.getSystem(maxDepth, currentDepth);
        else record.object["value"] = this.value;
        return record;
    }
    setSystemRecord(value) {
        if ((0, $5OpyM$krakenHelpers).isNull(value)) return;
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
        if (this.record_id == other.record_id) return true;
        if (this.value != other.value) return false;
        if (this.metadata.eq(other.metadata) == false) return false;
        return true;
    }
    gt(other) {
        if (this.value?.record_type == "ListItem") {
            let thisPosition = this.value?.p?.position || null;
            if ((0, $5OpyM$krakenHelpers).isNull(thisPosition)) thisPosition = 0;
            let otherPosition = other.value?.p?.position || null;
            if ((0, $5OpyM$krakenHelpers).isNull(otherPosition)) thisPosition = 0;
            if ((0, $5OpyM$krakenHelpers).isNotNull(thisPosition) && (0, $5OpyM$krakenHelpers).isNull(otherPosition)) return false;
            if ((0, $5OpyM$krakenHelpers).isNull(thisPosition) && (0, $5OpyM$krakenHelpers).isNotNull(otherPosition)) return true;
            if ((0, $5OpyM$krakenHelpers).isNotNull(thisPosition) && (0, $5OpyM$krakenHelpers).isNotNull(otherPosition)) try {
                if (thisPosition < otherPosition) return true;
                else if (thisPosition > otherPosition) return false;
            } catch  {}
        }
        return this.metadata.gt(other.metadata);
    }
    lt(other) {
        if (this.value?.record_type == "ListItem") {
            let thisPosition = this.value?.p?.position || null;
            //if(h.isNull(thisPosition)){ thisPosition = 0 }
            let otherPosition = other.value?.p?.position || null;
            //if(h.isNull(otherPosition)){ thisPosition = 0 }
            if ((0, $5OpyM$krakenHelpers).isNotNull(thisPosition) && (0, $5OpyM$krakenHelpers).isNull(otherPosition)) return true;
            if ((0, $5OpyM$krakenHelpers).isNull(thisPosition) && (0, $5OpyM$krakenHelpers).isNotNull(otherPosition)) return false;
            try {
                if (thisPosition > otherPosition) return true;
                else if (thisPosition < otherPosition) return false;
            } catch (error) {}
        }
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
    if (Array.isArray(value)) {
        if ((0, $5OpyM$krakenHelpers).isNotNull(value)) return value[0];
        return null;
    } else return value;
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
    get record() {
        return this.toJSON();
    }
    get json() {
        return JSON.stringify(this.record, null, 4);
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
        if ((0, $5OpyM$krakenHelpers).isNotNull(this.propertyID) && this.propertyID == other.propertyID) return true;
        return false;
    }
    getPropertyValueById(propertyValueID) {
        if ((0, $5OpyM$krakenHelpers).isNull(propertyValueID)) return;
        for (let pv of this._propertyValues){
            if (pv.record_id == propertyValueID) return pv;
        }
        return null;
    }
    contains(newPV) {
        // Return true if already contains same propertyValue
        if ((0, $5OpyM$krakenHelpers).isNull(newPV)) return;
        for (let pv of this._propertyValues){
            if (pv.eq(newPV)) return true;
        }
        return false;
    }
    merge(other) {
        // merge other property with this property
        let needCompileFlag = false;
        if ((0, $5OpyM$krakenHelpers).isNull(other)) return;
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
        if ((0, $5OpyM$krakenHelpers).isNotNull(p)) return [
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
    setSystemRecord(value1, wipeBefore = true) {
        if (wipeBefore == true) this._propertyValues = [];
        var values = $0ff73647c93c411e$var$ensureArray(value1);
        for (let value1 of values){
            var propertyValue = new (0, $9ef8378eb9810880$export$90601469cef9e14f)();
            propertyValue.setSystemRecord(value1);
            this.addPropertyValue(value1);
        }
    }
    // -----------------------------------------------------
    //  System attributes
    // -----------------------------------------------------
    get systemCreatedDate() {
        let resultDate = null;
        for (let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate;
            if (itemDate && ((0, $5OpyM$krakenHelpers).isNull(resultDate) || itemDate < resultDate)) resultDate = itemDate;
        }
        return resultDate;
    }
    get systemUpdatedDate() {
        let resultDate = null;
        for (let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate;
            if (itemDate && ((0, $5OpyM$krakenHelpers).isNull(resultDate) || itemDate > resultDate)) resultDate = itemDate;
        }
        return resultDate;
    }
    // ----------------------------------------------------
    // PropertyValues
    // ----------------------------------------------------
    getPropertyValueById(pvId) {
        // return best property value object
        for (let pv of this._propertyValues){
            if (pv.record_type == pvId) return pv;
        }
        return null;
    }
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
        if ((0, $5OpyM$krakenHelpers).isNotNull(cache) && cache.length > 0) {
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
            if ((0, $5OpyM$krakenHelpers).isNotNull(cache) && cache.length > 0) {
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
            results = results.filter((result)=>!(result.metadata.lt(filteredItem.metadata) && ((0, $5OpyM$krakenHelpers).isNull(filteredItem.replacee) || filteredItem.replacee == result.value)));
        });
        pv.filter((item)=>item.record_type == "deleteAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.metadata.lt(filteredItem.metadata) && (0, $5OpyM$krakenHelpers).isEqual(result?.object?.value, filteredItem?.object?.value)));
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
    set propertyValue(value1) {
        return this.addPropertyValue(value1);
    }
    set propertyValues(value1) {
        return this.addPropertyValue(value1);
    }
    // ----------------------------------------------------
    // Values
    // ----------------------------------------------------
    get value() {
        // Return value element of best propertyValue object
        if ((0, $5OpyM$krakenHelpers).isNotNull(this?.propertyValue)) return this.propertyValue.value;
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
        // First value
        results.push(this.setValue(values[0], metadataRecord, actionType));
        // Next values as add
        for(let i = 1; i < values.length; i++)results.push(this.setValue(values[i], metadataRecord, "addAction"));
        return results;
    }
    setValue(value1, metadataRecord, actionType) {
        let newValueObject = value1;
        // Check if date
        if (newValueObject instanceof String) {
            let d = $0ff73647c93c411e$var$convertToDate(newValueObject);
            if ((0, $5OpyM$krakenHelpers).isNotNull(d)) newValueObject = d;
        }
        if (!(newValueObject instanceof (0, $9ef8378eb9810880$export$90601469cef9e14f))) newValueObject = new (0, $9ef8378eb9810880$export$90601469cef9e14f)(this.propertyID, value1, actionType);
        newValueObject.metadata.inheritMetadata(metadataRecord);
        // Returns if already contains value
        if (this.containsValue(newValueObject) == true) return this.getValue(newValueObject);
        this._propertyValues.push(newValueObject);
        newValueObject.metadata.position = this._propertyValues.length;
        // Add to cache
        if ((0, $5OpyM$krakenHelpers).isNotNull(this._propertyValuesNetCache)) this._propertyValuesNetCache.push(newValueObject);
        // Reset cache
        this._propertyValuesCache = null;
        this._propertyValuesCacheOld = null;
        return newValueObject;
    }
    printScreen(suffix = "") {
        var v = this.value;
        if (isNotNull(this.value) && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
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
    //  Comment 
    // -----------------------------------------------------
    addPropertyValue(propertyValue) {
        //
        if (propertyValue instanceof (0, $9ef8378eb9810880$export$90601469cef9e14f) == false) {
            let temp = new (0, $9ef8378eb9810880$export$90601469cef9e14f)();
            temp.setSystemRecord(propertyValue);
            propertyValue = temp;
        }
        // 
        for (let pv of this._propertyValues){
            if (propertyValue.eq(pv) == true) // Value already exists
            return false;
        }
        this._propertyValues.push(propertyValue);
        return true;
    }
    deDupe() {
        // Dedupe propertyValues
        let propertyValues = this._propertyValues;
        for (let pv of propertyValues)this.addPropertyValue(pv);
        return;
    }
    // -----------------------------------------------------
    //  Query
    // -----------------------------------------------------
    getValue(value1) {
        // Returns equivalent valueObject if present
        if ((0, $5OpyM$krakenHelpers).isNull(value1)) return null;
        if ((0, $5OpyM$krakenHelpers).isNotNull(value1?.record_type)) value1 = value1.ref;
        if ((0, $5OpyM$krakenHelpers).isNotNull(value1?.["@type"])) value1 = {
            "@type": value1?.["@type"],
            "@id": value1?.["@id"]
        };
        for (let pv of this.propertyValues){
            let value0 = pv.value;
            if ((0, $5OpyM$krakenHelpers).isNotNull(value0?.record_type)) value0 = value0.ref;
            if ((0, $5OpyM$krakenHelpers).isNotNull(value0?.["@type"])) value0 = {
                "@type": value0?.["@type"],
                "@id": value0?.["@id"]
            };
            // ??
            if (JSON.stringify(value1) == JSON.stringify(value0)) return pv;
        }
        return null;
    }
    containsValue(value1) {
        // Return true if value is part of values
        let v = this.getValue(value1);
        if ((0, $5OpyM$krakenHelpers).isNotNull(v)) return true;
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
    // Merge db proeprties
    if (!thisThing._dbCollection || thisThing._dbCollection == null) thisThing._dbCollection = otherThing._dbCollection;
    if (!thisThing._dbId || thisThing._dbId == null) thisThing._dbId = otherThing._dbId;
    if (!thisThing._dbRecord || thisThing._dbRecord == null) thisThing._dbRecord = otherThing._dbRecord;
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
        if (data.length == 0) return null;
        else if (data.length === 1) {
            if (data == [
                {}
            ]) return null;
            else return $151dfb829471dec1$var$simplify(data[0]);
        } else {
            // Otherwise, process each element in the array
            let newData = [];
            for (let d of data){
                let value = $151dfb829471dec1$var$simplify(d);
                if ((0, $5OpyM$krakenHelpers).isNotNull(d)) newData.push(value);
            }
            return newData;
        }
    } else if ((0, $5OpyM$krakenHelpers).isNotNull(data) && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) {
            let value = $151dfb829471dec1$var$simplify(data[key]);
            if ((0, $5OpyM$krakenHelpers).isNotNull(value)) newData[key] = $151dfb829471dec1$var$simplify(data[key]);
        }
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
    getChildThings: $15777fe91204fd32$var$getChildThings,
    getSystemCreatedDate: $15777fe91204fd32$var$getSystemCreatedDate,
    getSystemUpdatedDate: $15777fe91204fd32$var$getSystemUpdatedDate
};
function $15777fe91204fd32$var$getChildThings(thisThing) {
    // Gets all things objects used as values of this 
    let things = [];
    for (let p of thisThing._properties){
        for (let v of p.values)if (v?.record_type) things.push(v);
    }
    let results = things;
    return results;
}
function $15777fe91204fd32$var$getThings(thisThing, cache, maxLevel = $15777fe91204fd32$var$MAXLEVEL, currentLevel = 0) {
    // Gets all things objects used as values of this 
    if ((0, $5OpyM$krakenHelpers).isNull(cache)) {
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
        if (itemDate && ((0, $5OpyM$krakenHelpers).isNull(resultDate) || itemDate < resultDate)) resultDate = itemDate;
    }
    return resultDate;
}
function $15777fe91204fd32$var$getSystemUpdatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties){
        let itemDate = pv.systemCreatedDate;
        if (itemDate && ((0, $5OpyM$krakenHelpers).isNull(resultDate) || itemDate > resultDate)) resultDate = itemDate;
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
        if ((0, $5OpyM$krakenHelpers).isNull(value)) return;
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
    replace(propertyID, oldValue1, newValue, credibility, observationDate) {
        return $669430fe45e0fd45$var$setProperty(this.thing, propertyID, newValue, credibility, observationDate, "replaceAction", oldValue1);
    }
    delete(propertyID, value, credibility, observationDate) {
        return $669430fe45e0fd45$var$setProperty(this.thing, propertyID, value, credibility, observationDate, "deleteAction", null);
    }
    // -----------------------------------------------------
    //  Attributes
    // -----------------------------------------------------
    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value;
    }
    set actionStatus(value) {
        let oldValue1 = this.thing.getProperty("actionStatus")?.value;
        return this.thing.replaceProperty("actionStatus", oldValue1, value);
    }
    get endTime() {
        return this.thing.getProperty("endTime")?.value;
    }
    set endTime(value) {
        let oldValue1 = this.thing.getProperty("endTime")?.value;
        return this.thing.replaceProperty("endTime", oldValue1, value);
    }
    get error() {
        return this.thing.getProperty("error")?.value;
    }
    set error(value) {
        let oldValue1 = this.thing.getProperty("error")?.value;
        return this.thing.replaceProperty("error", oldValue1, value);
    }
    get familyName() {
        return this.thing.getProperty("familyName")?.value;
    }
    set familyName(value) {
        let oldValue1 = this.thing.getProperty("familyName")?.value;
        return this.thing.replaceProperty("familyName", oldValue1, value);
    }
    get givenName() {
        return this.thing.getProperty("givenName")?.value;
    }
    set givenName(value) {
        let oldValue1 = this.thing.getProperty("givenName")?.value;
        return this.thing.replaceProperty("givenName", oldValue1, value);
    }
    get name() {
        return this.thing.getProperty("name")?.value;
    }
    set name(value) {
        let oldValue1 = this.thing.getProperty("name")?.value;
        return this.thing.replaceProperty("name", oldValue1, value);
    }
    get startTime() {
        return this.thing.getProperty("startTime")?.value;
    }
    set startTime(value) {
        let oldValue1 = this.thing.getProperty("startTime")?.value;
        return this.thing.replaceProperty("startTime", oldValue1, value);
    }
    get position() {
        return this.thing.getProperty("position")?.value;
    }
    set position(value) {
        let oldValue1 = this.thing.getProperty("position")?.value;
        return this.thing.replaceProperty("position", oldValue1, value);
    }
    get url() {
        return this.thing.getProperty("url")?.value;
    }
    set url(value) {
        let oldValue1 = this.thing.getProperty("url")?.value;
        return this.thing.replaceProperty("url", oldValue1, value);
    }
    get contentUrl() {
        return this.thing.getProperty("contentUrl")?.value;
    }
    set contentUrl(value) {
        let oldValue1 = this.thing.getProperty("contentUrl")?.value;
        return this.thing.replaceProperty("contentUrl", oldValue1, value);
    }
    get agent() {
        return this.thing.getProperty("agent")?.value;
    }
    set agent(value) {
        let oldValue1 = this.thing.getProperty("agent")?.value;
        return this.thing.replaceProperty("agent", oldValue1, value);
    }
    get instrument() {
        return this.thing.getProperty("instrument")?.value;
    }
    set instrument(value) {
        let oldValue1 = this.thing.getProperty("instrument")?.value;
        return this.thing.replaceProperty("instrument", oldValue1, value);
    }
    get object() {
        return this.thing.getProperty("object")?.value;
    }
    set object(value) {
        let oldValue1 = this.thing.getProperty("object")?.value;
        return this.thing.replaceProperty("object", oldValue1, value);
    }
    get result() {
        return this.thing.getProperty("result")?.value;
    }
    set result(value) {
        let oldValue1 = this.thing.getProperty("result")?.value;
        return this.thing.replaceProperty("result", oldValue1, value);
    }
    get startTime() {
        return this.thing.getProperty("startTime")?.value;
    }
    set startTime(value) {
        let oldValue1 = this.thing.getProperty("startTime")?.value;
        return this.thing.replaceProperty("startTime", oldValue1, value);
    }
    get endTime() {
        return this.thing.getProperty("endTime")?.value;
    }
    set endTime(value) {
        let oldValue1 = this.thing.getProperty("endTime")?.value;
        return this.thing.replaceProperty("endTime", oldValue1, value);
    }
    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value;
    }
    set actionStatus(value) {
        let oldValue1 = this.thing.getProperty("actionStatus")?.value;
        return this.thing.replaceProperty("actionStatus", oldValue1, value);
    }
    get instrument() {
        return this.thing.getProperty("instrument")?.value;
    }
    set instrument(value) {
        let oldValue1 = this.thing.getProperty("instrument")?.value;
        return this.thing.replaceProperty("instrument", oldValue1, value);
    }
    get error() {
        return this.thing.getProperty("error")?.value;
    }
    set error(value) {
        let oldValue1 = this.thing.getProperty("error")?.value;
        return this.thing.replaceProperty("error", oldValue1, value);
    }
    get itemListElement() {
        return this.thing.getProperty("itemListElement")?.values;
    }
    set itemListElement(values) {
        return this.thing.replaceProperty("itemListElement", oldValue, values);
    }
    get item() {
        return this.thing.getProperty("item")?.value;
    }
    set item(value) {
        let oldValue1 = this.thing.getProperty("item")?.value;
        return this.thing.replaceProperty("item", oldValue1, value);
    }
    get previousItem() {
        return this.thing.getProperty("previousItem")?.value;
    }
    set previousItem(value) {
        let oldValue1 = this.thing.getProperty("previousItem")?.value;
        return this.thing.replaceProperty("previousItem", oldValue1, value);
    }
    get nextItem() {
        return this.thing.getProperty("nextItem")?.value;
    }
    set nextItem(value) {
        let oldValue1 = this.thing.getProperty("nextItem")?.value;
        return this.thing.replaceProperty("nextItem", oldValue1, value);
    }
    get position() {
        return this.thing.getProperty("position")?.value;
    }
    set position(value) {
        let oldValue1 = this.thing.getProperty("position")?.value;
        return this.thing.replaceProperty("position", oldValue1, value);
    }
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
    // Recurse when dot notation
    if (otherIDS.length > 0) {
        if (!property.value?.record_type) return null;
        else return property.value.getProperty(otherIDS.join("."));
    } else return property;
}
function $669430fe45e0fd45$var$getProperties(thisThing) {
    /**
     * Returns list of KrProperty object in alphabetical order
     */ let properties = $669430fe45e0fd45$var$ensureArray(thisThing._properties);
    properties = properties.filter((x)=>(0, $5OpyM$krakenHelpers).isNotNull(x));
    properties = properties.toSorted((a, b)=>{
        return a.lt(b);
    });
    properties = $669430fe45e0fd45$var$ensureArray(properties);
    return properties;
}
function $669430fe45e0fd45$var$setProperty(thisThing, propertyID, value, credibility, observationDate, actionType, previousValue) {
    // Handle dot notation
    if (propertyID.includes(".")) {
        let pID = propertyID.split(".")[0];
        let otherIDS = propertyID.split(".").slice(1);
        let p = thisThing.getProperty(pID);
        // If not value, create new KrThing
        if ((0, $5OpyM$krakenHelpers).isNull(p.value?.record_type)) p.setValues(thisThing.new("Thing"), metadataRecord, actionType, null);
        // Set value
        p.value.setProperty(otherIDS.join("."), value);
        return p;
    }
    // Get old value
    let oldValue1 = thisThing.getProperty(propertyID)?.values;
    // get or create property object
    let property = thisThing.getProperty(propertyID);
    if ((0, $5OpyM$krakenHelpers).isNull(property)) {
        property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
        thisThing._properties.push(property);
    }
    // Iterate through values and convert to KrThing if required
    let values = $669430fe45e0fd45$var$ensureArray(value);
    for(let i = 0; i < values.length; i++)if ((0, $5OpyM$krakenHelpers).isNotNull(values?.[i]?.["@type"])) values[i] = thisThing.new(values[i]);
    // Set metadata
    var metadataRecord = thisThing.metadata.record;
    if ((0, $5OpyM$krakenHelpers).isNotNull(credibility)) metadataRecord.credibility = credibility;
    if ((0, $5OpyM$krakenHelpers).isNotNull(observationDate)) metadataRecord.observationDate = observationDate;
    // set property value
    var newValues = property.setValues(values, metadataRecord, actionType, previousValue);
    // dispatch event
    let newValue = thisThing.getProperty(propertyID)?.values;
    if (oldValue1 != newValue) {
        let data = {
            propertyID: propertyID,
            oldValue: oldValue1,
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
    setRecord(value) {
        return $986206abb55bdef7$var$setFullRecord(this.thing, value);
    }
    get best() {
        return $986206abb55bdef7$var$getBestRecord(this.thing);
    }
    getBest(maxDepth, currentDepth) {
        return $986206abb55bdef7$var$getBestRecord(maxDepth, currentDepth);
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
    if ((0, $5OpyM$krakenHelpers).isNull(maxDepth)) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) {
        if (this.record_type == "QuantitativeValue") ;
        else return thisThing.ref;
    }
    let record = {};
    let properties = $986206abb55bdef7$var$ensureArray(thisThing.properties);
    properties = properties.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
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
    if ((0, $5OpyM$krakenHelpers).isNull(maxDepth)) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if (currentDepth >= maxDepth) {
        if (thisThing.record_type == "QuantitativeValue") ;
        else return thisThing.ref;
    }
    let record = {};
    let properties = thisThing.properties;
    for (let p of properties){
        let value = p.getFullRecord(maxDepth, currentDepth + 1);
        if (!(0, $5OpyM$krakenHelpers).isNull(value)) record[p.propertyID] = value;
    }
    record["@type"] = thisThing.record_type;
    record["@id"] = thisThing.record_id;
    record = JSON.parse(JSON.stringify(record));
    record = (0, $151dfb829471dec1$export$e91e7af1be86f42e).simplify(record);
    return record;
}
function $986206abb55bdef7$var$setFullRecord(thisThing, value) {
    if ((0, $5OpyM$krakenHelpers).isNull(value)) return;
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
    if ((0, $5OpyM$krakenHelpers).isNull(maxDepth) && maxDepth != 0) maxDepth = $986206abb55bdef7$var$MAX_DEPTH;
    if ((0, $5OpyM$krakenHelpers).isNull(currentDepth) && currentDepth != 0) currentDepth = 0;
    if (currentDepth >= maxDepth) return thing.ref;
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
    for (let ct of childThings)if (!record["_refs"].includes(ct.ref)) record["_refs"].push(ct.ref);
    // Add property Values
    let pvs = [];
    for (let p of thing.properties)pvs = pvs.concat(p.getSystemRecord(maxDepth, currentDepth + 1));
    pvs = pvs.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
    record["_propertyValues"] = pvs;
    // Add values
    record["@type"] = thing.record_type;
    record["@id"] = thing.record_id;
    let fullRecord = $986206abb55bdef7$var$getFullRecord(thing, maxDepth, currentDepth);
    for (let k of Object.keys(fullRecord))record[k] = fullRecord[k];
    return record;
}
function $986206abb55bdef7$var$setSystemRecord(thing, value, cache) {
    let version = value?.["_version"];
    if (!version || version == null || version == "1.0") return $986206abb55bdef7$var$setSystemRecordV1_0(thing, value, cache);
    if (version == "2.0") return $986206abb55bdef7$var$setSystemRecordV2_0(thing, value, cache);
    return;
}
function $986206abb55bdef7$var$setSystemRecordV2_0(thing, value, wipeBefore = true) {
    // Load data into object
    // Convert from string if one
    if (typeof value === "string" || value instanceof String) try {
        value = JSON.parse(value);
    } catch  {
        return;
    }
    // Check if valid format
    if ((0, $5OpyM$krakenHelpers).isNull(value) || (0, $5OpyM$krakenHelpers).isNull(value?._propertyValues)) return;
    // Reset current properties
    if (wipeBefore == true) thing._properties = [];
    // Retrieve db info
    thing._dbCollection = value?.["_dbCollection"];
    thing._dbId = value?.["_dbId"];
    thing._dbRecord = value;
    //
    let pvRecords = $986206abb55bdef7$var$ensureArray(value._propertyValues);
    pvRecords = pvRecords.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
    if (pvRecords.length == 0) return;
    // Group pvRecords by propertyID
    let propertyIDs = [
        ...new Set(pvRecords.map((x)=>x.object.propertyID))
    ];
    propertyIDs = propertyIDs.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
    for (let propertyID of propertyIDs){
        let subPropertyValues = pvRecords.filter((item)=>item.object.propertyID == propertyID);
        var property = thing.getProperty(propertyID);
        for (let pv of subPropertyValues){
            pv = $986206abb55bdef7$var$convertPV(thing, pv);
            property.setSystemRecord(pv, false);
        }
    }
}
function $986206abb55bdef7$var$convertPV(thing, pvRecord) {
    // Convert propertyValue value to thing if @type present
    if ((0, $5OpyM$krakenHelpers).isNull(pvRecord)) return pvRecord;
    let value = pvRecord?.object?.value;
    if ((0, $5OpyM$krakenHelpers).isNull(value)) return pvRecord;
    if (!(0, $5OpyM$krakenHelpers).isNull(value?.["@type"])) {
        // Get from cache
        let t = thing._things.get(value?.["@type"], value?.["@id"]);
        if ((0, $5OpyM$krakenHelpers).isNull(t)) {
            t = thing.new(value?.["@type"], value?.["@id"]);
            t._things = thing._things;
            thing._things.set(t);
            t = thing._things.get(value?.["@type"], value?.["@id"]);
        }
        $986206abb55bdef7$var$setSystemRecordV2_0(t, value, false);
        // Store and retrieve to cache to avoid duplicate things
        pvRecord.object.value = t;
    }
    return pvRecord;
}
function $986206abb55bdef7$var$setSystemRecordV1_0(thing, value, cache) {
    // Load data into object
    if ((0, $5OpyM$krakenHelpers).isNull(cache)) cache = new (0, $b07a281446d81d05$export$320d46383f3d0ef0)();
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
    if ((0, $5OpyM$krakenHelpers).isNull(value.propertyValues)) return;
    let pvRecords = $986206abb55bdef7$var$ensureArray(value.propertyValues);
    pvRecords = pvRecords.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
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
        if ((0, $5OpyM$krakenHelpers).isNull(pvRecord)) continue;
        let value = pvRecord?.object?.value;
        if ((0, $5OpyM$krakenHelpers).isNull(value)) continue;
        if (!(0, $5OpyM$krakenHelpers).isNull(value?.["@type"])) {
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
    for (let propertyID of propertyIDs)if (!(0, $5OpyM$krakenHelpers).isNull(propertyID)) {
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
    get listItems() {
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
        return reCalculatePosition(this.thing);
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
        return getByListItem(this.thing, listItem);
    }
    getByItem(item) {
        return getByItem(this.thing, item);
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
function $681e59e95589c3c8$var$getListItem(thisThing, record_type, record_id) {
    // Retrieve list item by giving either, record, thing or record or thing of its item
    record_id = record_id || record_type?.record_id || record_type?.["@id"];
    record_type = record_type?.record_type || record_type?.["@type"] || record_type;
    if ((0, $5OpyM$krakenHelpers).isNull(record_type)) return null;
    for (let l of thisThing.p.get("itemListElement")?.values || []){
        if (l?.record_type == record_type && l?.record_id == record_id) return l;
        let item = l.p.item;
        if (item?.record_type == record_type && item?.record_id == record_id) return l;
    }
    return null;
}
function $681e59e95589c3c8$var$getListItems(thisThing) {
    let listItems = thisThing.p.get("itemListElement").values;
    function sortListItems(item1, item2) {
        let item1Position = item1.p.position || null;
        let item2Position = item2.p.position || null;
        if ((0, $5OpyM$krakenHelpers).isNull(item1Position) && (0, $5OpyM$krakenHelpers).isNull(item2Position)) return 0;
        if ((0, $5OpyM$krakenHelpers).isNull(item1Position) && (0, $5OpyM$krakenHelpers).isNotNull(item2Position)) return -1;
        if ((0, $5OpyM$krakenHelpers).isNotNull(item1Position) && (0, $5OpyM$krakenHelpers).isNull(item2Position)) return 1;
        if (item1.p.position < item2.p.position) return -1;
        if (item1.p.position > item2.p.position) return 1;
        return 0;
    }
    // sort by position
    //listItems.sort(getListItems)
    return listItems;
}
function $681e59e95589c3c8$var$getFirstItem(thisThing) {
    let listItems = $681e59e95589c3c8$var$getListItems(thisThing);
    if ((0, $5OpyM$krakenHelpers).isNull(listItems)) return null;
    // Get item 1st position 0
    for (let l of listItems){
        if ((0, $5OpyM$krakenHelpers).isNotNull(l.p.position) && l.p.position === 0) return l;
    }
    // Get item no previousItem if only one
    let filteredItems = listItems.filter((x)=>(0, $5OpyM$krakenHelpers).isNull(x?.p?.previousItem));
    if (filteredItems.length == 1) return filteredItems[0];
    // Else 
    let firstItem = listItems[0];
    return firstItem;
}
function $681e59e95589c3c8$var$getLastItem(thisThing) {
    let listItems = $681e59e95589c3c8$var$getListItems(thisThing);
    if ((0, $5OpyM$krakenHelpers).isNull(listItems)) return null;
    if (listItems.length == 1) return listItems[0];
    let filteredItems = listItems.filter((x)=>(0, $5OpyM$krakenHelpers).isNotNull(x?.p?.position));
    if (filteredItems.length == 1) return filteredItems[0];
    else return filteredItems[filteredItems.length - 1];
    // Else 
    let lastItem = listItems[listItems.length - 1];
    return lastItem;
}
function $681e59e95589c3c8$var$getItems(thing) {
    let listItems = $681e59e95589c3c8$var$getListItems(thing);
    listItems = $681e59e95589c3c8$var$ensureArray(listItems);
    let items = listItems.map((x)=>x?.p.get("item").value);
    items = items.filter((x)=>!(0, $5OpyM$krakenHelpers).isNull(x));
    items = $681e59e95589c3c8$var$ensureArray(items);
    return items;
}
function $681e59e95589c3c8$var$pushItem(thisThing, listItems) {
    listItems = $681e59e95589c3c8$var$ensureArray(listItems);
    // Prepare listItems
    let newListItems = [];
    let lastItem = $681e59e95589c3c8$var$getLastItem(thisThing);
    for (let listItem of listItems){
        listItem = $681e59e95589c3c8$var$createListItem(thisThing, listItem);
        if ((0, $5OpyM$krakenHelpers).isNull(lastItem)) {
            listItem.p.position = 0;
            thisThing.p.add("itemListElement", listItem);
        } else {
            listItem.p.position = lastItem.p.position + 1;
            $681e59e95589c3c8$var$insertAfter(thisThing, lastItem, listItem);
        }
        lastItem = listItem;
    }
    $681e59e95589c3c8$var$recalculatePosition(thisThing);
    return;
}
function $681e59e95589c3c8$var$recalculatePosition(thisThing) {
    let position = 0;
    let item = $681e59e95589c3c8$var$getFirstItem(thisThing);
    while((0, $5OpyM$krakenHelpers).isNotNull(item)){
        if (item.p.get("position")?.value != position) item.p.set("position", position);
        let nextItem = item.p.get("nextItem")?.value;
        item = $681e59e95589c3c8$var$getListItem(thisThing, nextItem);
        position += 1;
    }
    return;
}
// -----------------------------------------------------
//  CRUD for items
// -----------------------------------------------------
function $681e59e95589c3c8$var$remove(thisThing, itemRef) {
    var item = $681e59e95589c3c8$var$getListItem(thisThing, itemRef);
    if (!item) {
        console.log("not item remove");
        return null;
    }
    var p = item.p.previousItem;
    var n = item.p.nextItem;
    // Ressign before and after links to one another
    if ((0, $5OpyM$krakenHelpers).isNotNull(p)) p.p.nextItem = n;
    if ((0, $5OpyM$krakenHelpers).isNotNull(n)) n.p.previousItem = p;
    // Remove from list
    console.log("iii");
    console.log(thisThing.p.itemListElement.length);
    thisThing.p.delete("itemListElement", item);
    console.log("jjj");
    let p1 = thisThing.p.get("itemListElement");
    for (let pv of p1.propertyValues)console.log(pv.object.value.record_id);
    console.log(thisThing.p.itemListElement.length);
    // Sets position
    $681e59e95589c3c8$var$recalculatePosition(thisThing);
    // Remove links
    item.p.previousItem = null;
    item.p.nextItem = null;
    return;
}
function $681e59e95589c3c8$var$createListItem(thisThing, listItem) {
    // Create a list item given a listitem, thing, record or item
    // Convert to thing
    if (!listItem?.record_type) listItem = thisThing.new(listItem);
    // Add lsitItem if not one
    if (listItem.record_type != "ListItem") {
        let newListItem = thisThing.new();
        newListItem.record_type = "ListItem";
        newListItem.p.add("item", listItem);
        listItem = newListItem;
    }
    return listItem;
}
function $681e59e95589c3c8$var$insertBefore(thisThing, referenceItem, itemToInsert) {
    console.log(referenceItem, itemToInsert);
    // Get inputItem (create if not in listitemelement)
    let item = $681e59e95589c3c8$var$getListItem(thisThing, itemToInsert);
    if ((0, $5OpyM$krakenHelpers).isNull(item)) item = $681e59e95589c3c8$var$createListItem(thisThing, itemToInsert);
    // Get referenceItem
    let n = $681e59e95589c3c8$var$getListItem(thisThing, referenceItem);
    if ((0, $5OpyM$krakenHelpers).isNull(n)) throw "Error, invalid reference item";
    // Get referenceitem previous item
    let p = n.p.get("previousItem")?.value || null;
    p = $681e59e95589c3c8$var$getListItem(thisThing, p);
    // Stop events
    thisThing.blockEvents();
    if (item) item.blockEvents();
    if (p) p.blockEvents();
    if (n) n.blockEvents();
    // Remove previous links of items
    $681e59e95589c3c8$var$remove(thisThing, item);
    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;
    if (p) p.p.nextItem = item;
    if (n) n.p.previousItem = item;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Add item
    thisThing.p.add("itemListElement", item);
    $681e59e95589c3c8$var$recalculatePosition(thisThing);
    return item;
}
function $681e59e95589c3c8$var$insertAfter(thisThing, referenceItem, itemToInsert) {
    /**
     *
     */ // Get inputItem (create if not in listitemelement)
    let item = $681e59e95589c3c8$var$getListItem(thisThing, itemToInsert);
    if ((0, $5OpyM$krakenHelpers).isNull(item)) item = $681e59e95589c3c8$var$createListItem(thisThing, itemToInsert);
    // Get referenceItem
    let p = $681e59e95589c3c8$var$getListItem(thisThing, referenceItem);
    if ((0, $5OpyM$krakenHelpers).isNull(p)) throw "Error, invalid reference item";
    // Get referenceitem previous item
    let n = p.p.nextItem || null;
    n = $681e59e95589c3c8$var$getListItem(thisThing, n);
    // Stop events
    thisThing.blockEvents();
    if (item) item.blockEvents();
    if (p) p.blockEvents();
    if (n) n.blockEvents();
    // Remove previous links of items
    $681e59e95589c3c8$var$remove(thisThing, item);
    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;
    if (p) p.p.nextItem = item;
    if (n) n.p.previousItem = item;
    // Start events
    thisThing.allowEvents();
    if (item) item.allowEvents();
    if (p) p.allowEvents();
    if (n) n.allowEvents();
    // Add item
    thisThing.p.add("itemListElement", item);
    $681e59e95589c3c8$var$recalculatePosition(thisThing);
    return item;
}
function $681e59e95589c3c8$var$getItem(thisThing, ref) {
    return $681e59e95589c3c8$var$getListItem(thisThing, ref);
}
function $681e59e95589c3c8$var$getByListItemOLD(thisThing, ref) {
    let items = thisThing.p.get("itemListElement").values;
    for (let item of items){
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) return item;
    }
    return null;
}
function $681e59e95589c3c8$var$getByItemOLD(thisThing, ref) {
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
    if ((0, $5OpyM$krakenHelpers).isNull(thisThing._params)) return {};
    else params = thisThing._params;
    let keys = [
        "limit",
        "offset",
        "orderBy",
        "orderDirection"
    ];
    for (let k of keys){
        let v = this[k];
        if (!(0, $5OpyM$krakenHelpers).isNull(v)) params[k] = v;
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
    get results() {
        return this.thing.p.get("result").values;
    }
    set results(value) {
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
    /**
     * Attributes:
     * - apiUrl: The base url to call the api
     * - apiBasePath: The base path of the api (api)
     * - apiCollection: The base collection to use (test1)
     */ constructor(thing){
        this.thing = thing;
        this._apiConfig = {};
        this._params = {};
        this._req = null;
        this.instrument = {
            "@type": "WebAPI",
            "@id": "ClassKrakenApiHelpers",
            "name": "ClassKrakenApiHelpers"
        };
    // Load from system 
    //this.apiUrl = process.env.apiUrl || null
    //this.apiBasePath = process.env.apiBasePath || null
    //this.apiCollection = process.env.apiCollection || null
    }
    // -----------------------------------------------------
    //  I/O 
    // -----------------------------------------------------
    async getThing() {
        return await this.get();
    }
    async get() {
        let action = this.thing.action.new();
        action.a.name = `Get record ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.path, this.thing.ref);
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
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.path, this.params);
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
        action.a.name = `Get thing related ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let things = this.thing.list.new();
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.path + "/related", this.thing.ref);
            things.export.system = results;
            action.a.setCompleted();
            action.a.result = things;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async autoComplete(textQuery) {
        let action = this.thing.action.new();
        action.a.name = `Get thing related ${this.thing.refID}`;
        action.a.object = this.thing.ref;
        action.a.instrument = this.instrument;
        try {
            let things = this.thing.list.new();
            let q = this.params;
            q.propertyID = "_heading1";
            q.textQuery = textQuery;
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, this.path + "/autoComplete", q);
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
            let results = await (0, $5OpyM$krakenHelpers).api.post(this.apiUrl, this.path, this.thing.export.system);
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
            let results = await (0, $5OpyM$krakenHelpers).api.delete(this.apiUrl, this.path, this.thing.ref);
            action.a.setCompleted();
            action.a.result = this.thing;
        } catch (error) {
            action.a.setFailed(String(error));
        }
        return action;
    }
    async getCollections() {
        let action = this.thing.action.new();
        action.a.name = `Get collections`;
        action.a.instrument = this.instrument;
        let path = "";
        if (this.apiBasePath && this.apiBasePath != null) path = this.apiBasePath + "/collection";
        else path = "collection";
        try {
            let results = await (0, $5OpyM$krakenHelpers).api.get(this.apiUrl, path);
            this.thing.export.system = results;
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
    get path() {
        return [
            this.apiBasePath,
            this.apiCollection
        ].join("/");
    }
    get apiConfig() {
        return this._apiConfig;
    }
    set apiConfig(value) {
        this._apiConfig = value;
    }
    get apiUrl() {
        return this.apiConfig.apiUrl;
    }
    set apiUrl(value) {
        if (!value || value == null) return;
        if (!value.startsWith("http")) value = "https://" + value;
        let url = new URL(value);
        this.apiConfig.apiUrl = "https://" + url.hostname;
        this.apiConfig.apiBasePath = url.pathname;
    }
    get apiCollection() {
        return this.apiConfig.apiCollection;
    }
    set apiCollection(value) {
        if (!value || value == null) return;
        this.apiConfig.apiCollection = value;
    }
    get apiBasePath() {
        return this.apiConfig.apiBasePath;
    }
    set apiBasePath(value) {
        if (!value || value == null) return;
        this.apiConfig.apiBasePath = value;
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
        if (!q || q == null) this._params.query = {};
        return this._params.query;
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
        this.apiCollection = value.params["collection"];
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
        this.actionName = value.params["actionName"];
        if (!this.apiUrl || this.apiUrl == null) this.apiUrl = value.hostname + "/api";
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get actionsLog() {
        let logs = this.thing.a.getLogs("instrument", this.instrument);
        return logs;
    }
}



class $af443bc86ad85e59$export$2ce0982a5613aa77 {
    constructor(thing){
        this.thing = thing;
    }
    fill() {
        let record_type = this.thing.record_type || "Thing";
        this.thing.record = $af443bc86ad85e59$var$getTestRecord(record_type);
    }
}
function $af443bc86ad85e59$var$getTestRecord(record_type) {
    if (!record_type || record_type == null || record_type == "Thing") return {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1"
    };
    if (record_type == "ItemList") return {
        "@type": "ItemList",
        "@id": "ItemList0",
        "name": "ItemList0",
        "itemListElement": [
            {
                "@type": "ListItem",
                "@id": "ListItem0",
                "name": "ListItem0",
                "position": 0,
                "previousItem": null,
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem1"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing0",
                    "name": "Thing0",
                    "url": "https://www.test.com/thing0"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem1",
                "name": "ListItem1",
                "position": 1,
                "previousItem": {
                    "@type": "ListItem",
                    "@id": "ListItem0"
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem2"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing1",
                    "name": "Thing1",
                    "url": "https://www.test.com/thing1"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem2",
                "name": "ListItem2",
                "position": 2,
                "previousItem": {
                    "@type": "ListItem",
                    "@id": "ListItem1"
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem3"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing2",
                    "name": "Thing2",
                    "url": "https://www.test.com/thing2"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem3",
                "name": "ListItem3",
                "position": 3,
                "previousItem": {
                    "@type": "ListItem",
                    "@id": "ListItem2"
                },
                "nextItem": null,
                "item": {
                    "@type": "Thing",
                    "@id": "Thing3",
                    "name": "Thing3",
                    "url": "https://www.test.com/thing3"
                }
            }
        ]
    };
    return {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1"
    };
}
function $af443bc86ad85e59$var$getThings(n, t = "Thing") {
    let things = [];
    for(let i = 0; i < n; i++)things.push($af443bc86ad85e59$var$getThing(i, t));
    return things;
}
function $af443bc86ad85e59$var$getThing(n = 0, t = "Thing") {
    let r = $af443bc86ad85e59$var$getRecord(n, t);
    let thing = new KrThing();
    thing.metadata.credibility = 0.2;
    thing.metadata._record.instrument = {
        "@type": "Thing",
        "@id": "Instrument1"
    };
    thing.record = r;
    return thing;
}
function $af443bc86ad85e59$var$getRef(record) {
    return {
        "@type": record["@type"],
        "@id": record["@id"]
    };
}
function $af443bc86ad85e59$var$getRecords(n, t = "Thing") {
    let records = [];
    for(let i = 0; i < n; i++)records.push($af443bc86ad85e59$var$getRecord(i, t));
    return records;
}
function $af443bc86ad85e59$var$getRecord(n, t = "Thing") {
    let record = {
        "@type": t,
        "@id": t + String(n),
        "name": t + String(n),
        "value": n,
        "child": {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "child_" + t + String(n),
            "name": "child_" + t + String(n),
            "child": {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "child_child_" + t + String(n),
                "name": "child_child_" + t + String(n)
            }
        }
    };
    return record;
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



class $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c {
    constructor(element){
        this.element = element;
    }
    initObject() {}
    // Data attributes
    get elementType() {
        if (this.element.classList.contains("krThing")) return "thing";
        if (this.element.classList.contains("krProperty")) return "property";
        if (this.element.classList.contains("krValue")) return "value";
        return null;
    }
    get record_type() {
        let element = this.element.closest(".krThing");
        if (element) return element.getAttribute("data-record-type");
        return null;
    }
    set record_type(value) {
        let element = this.element.closest(".krThing");
        if (element) return element.setAttribute("data-record-type", value);
        return null;
    }
    get record_id() {
        let element = this.element.closest(".krThing");
        if (element) return element.getAttribute("data-record-id");
        return null;
    }
    set record_id(value) {
        let element = this.element.closest(".krThing");
        if (element) return element.setAttribute("data-record-id", value);
        return null;
    }
    get propertyID() {
        let value = null;
        let element = this.element.closest(".krProperty");
        if (element) {
            value = element.getAttribute("data-propertyID");
            if (value && value.includes(".")) value = value.split(".")[-1];
        }
        return value;
    }
    get propertyPath() {
        let element = this.element.closest(".krProperty");
        if (element) return element.getAttribute("data-propertyID");
        return null;
    }
    set propertyID(value) {
        let element = this.element.closest(".krProperty");
        if (element) return element.setAttribute("data-propertyID", value);
        return null;
    }
    get valueID() {
        let element = this.element.closest(".krValue");
        if (element) return element.getAttribute("data-valueID");
        return null;
    }
    set valueID(value) {
        let element = this.element.closest(".krValue");
        if (element) return element.setAttribute("data-valueID", value);
        return null;
    }
    // Object Class Attributes
    getThingObjects() {
        let classNameToGet = "krThing";
        let classNameToStopDepth = "krProperty";
        let propertyElements = $a2421c6bde17fe2f$var$getDirectChilds(this.element, classNameToGet, classNameToStopDepth);
        let classObjects = propertyElements.map((x)=>this.elementToBaseElements(x));
        return classObjects;
    }
    getThingObject(record_type, record_id) {
        for (let t of this.getThingObjects){
            if (t.record_type == record_type && t.record_id == record_id) return t;
        }
        return null;
    }
    getParentThingObject() {
        let element = this.element.closest(".krThing");
        let result = null;
        if (element) result = new $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c(element);
        return result;
    }
    getPropertyObjects() {
        let classNameToGet = "krProperty";
        let classNameToStopDepth = "krThing";
        let propertyElements = $a2421c6bde17fe2f$var$getDirectChilds(this.element, classNameToGet, classNameToStopDepth);
        let classObjects = propertyElements.map((x)=>this.elementToBaseElements(x));
        return classObjects;
    }
    getPropertyObject(propertyID) {
        for (let t of this.getPropertyObjects){
            if (t.propertyID == propertyID) return t;
        }
        return null;
    }
    getParentPropertyObject() {
        let element = this.element.closest(".krProperty");
        let result = null;
        if (element) result = new $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c(element);
        return result;
    }
    getValueObjects() {
        let classNameToGet = "krValue";
        let classNameToStopDepth = "krThing";
        let propertyElements = $a2421c6bde17fe2f$var$getDirectChilds(this.element, classNameToGet, classNameToStopDepth);
        let classObjects = propertyElements.map((x)=>this.elementToBaseElements(x));
        return classObjects;
    }
    getValueObject(valueID) {
        for (let t of this.getPropertyObjects){
            if (t.valueID == valueID) return t;
        }
        return null;
    }
    getParentValueObject() {
        let element = this.element.closest(".krValue");
        let result = null;
        if (element) result = new $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c(element);
        return result;
    }
    // Get element
    get thingHeaderElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krThingHeader", "krProperty");
    }
    get thingBodyElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krThingBody", "krProperty");
    }
    get thingFooterElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krThingFooter", "krProperty");
    }
    get thingActionElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krThingAction", "krProperty");
    }
    get propertyHeaderElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krPropertyHeader", "krThing");
    }
    get propertyBodyElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krPropertyBody", "krThing");
    }
    get propertyFooterElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krPropertyFooter", "krThing");
    }
    get propertyActionElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krPropertyAction", "krThing");
    }
    get valueHeaderElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krValueHeader", "krThing");
    }
    get valueBodyElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krValueBody", "krThing");
    }
    get valueFooterElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krValueFooter", "krThing");
    }
    get valueActionElement() {
        return $a2421c6bde17fe2f$var$getDirectChild(this.element, "krValueAction", "krThing");
    }
    // 
    elementToBaseElements(element) {
        // Converts a an element to a class object
        let newObject = new $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c(element);
        return newObject;
    }
}
function $a2421c6bde17fe2f$var$getDirectChild(element, classNameToGet, classNameToStopDepth) {
    let results = $a2421c6bde17fe2f$var$getDirectChilds(element, classNameToGet, classNameToStopDepth);
    if (results.length == 0) return null;
    if (results.length >= 1) return results[0];
}
function $a2421c6bde17fe2f$var$getDirectChilds(element, classNameToGet, classNameToStopDepth) {
    let childs = [];
    for (let e of element.children){
        if (e.classList.contains(classNameToGet)) childs.push(e);
        if (!e.classList.contains(classNameToStopDepth)) {
            let recursiveChilds = $a2421c6bde17fe2f$var$getDirectChilds(e, classNameToGet, classNameToStopDepth);
            if (recursiveChilds.length > 0) childs = childs.concat(recursiveChilds);
        }
    }
    return childs;
}





let $ea24aad78428563b$var$initializedDb = {};
class $ea24aad78428563b$export$7139bcca0e2cefa4 {
    constructor(thing, url){
        this._thing = thing;
        this._url = url;
        this._elementObject = null;
        this.initObject();
    }
    initObject() {
        this.initObjectContent();
        this.initMutationObserver();
        this.initElements();
    }
    initObjectContent() {
        let content = (0, $5OpyM$krakenHtml).form.generic(this._url, this._thing.record_type, this._thing.record);
        let temp = document.createElement("div");
        temp.innerHTML = content;
        let element = temp.firstElementChild;
        this._elementObject = new (0, $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c)(element);
        //Temp - correct inputs lacking key data
        let inputs = element.querySelectorAll("input");
        for (let i of inputs){
            i.setAttribute("name", i.getAttribute("id"));
            let propertyElement = i.closest("krProperty");
            if (propertyElement) propertyElement.setAttribute("name", i.getAttribute("id"));
        }
    }
    initMutationObserver() {
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        };
        const callback = (mutationList, observer)=>{
            for (const mutation of mutationList){
                if (mutation.type === "childList") for (let n of mutation.addedNodes)this.initElement(n);
                else mutation.type;
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer.observe(this._elementObject.element, config);
    }
    initElements() {
        // Add id to all objects
        let classes = [
            "krThing",
            "krProperty",
            "krValue"
        ];
        for (let c of classes){
            let q = "." + c;
            let elements = this._elementObject.element.querySelectorAll(q);
            for (let e of elements)this.initElement(e);
        }
    }
    initElement(element) {
        // Check if already initialized
        if (element.id && element.id != null && element.id != "") {
            if ($ea24aad78428563b$var$initializedDb?.[element.id] == true) return;
        }
        // Init ID
        this.initElementId(element);
        // Init krTing
        if (element.classList.contains("krThing")) this.initPropertyDrag(element);
        // Init krProperty
        if (element.classList.contains("krProperty")) {
            this.initPropertyActionElement(element);
            this.initPropertyDragDrop(element);
            this.initPropertyDrag(element);
        }
        // Init krValue
        if (element.classList.contains("krValue")) {
            this.initValueActionElement(element);
            this.initPropertyDragDrop(element);
            this.initPropertyDrag(element);
        }
        // Set as initizlized
        $ea24aad78428563b$var$initializedDb[element.id] = true;
    }
    initElementId(element) {
        if (!element.id || element.id == null || element.id == "") element.id = String(crypto.randomUUID());
    }
    initPropertyActionElement(element) {
        if ($ea24aad78428563b$var$initializedDb?.[element.id] == true) return;
        let thisObject = this;
        let p = new (0, $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c)(element);
        p.propertyActionElement.addEventListener("click", (event)=>{
            thisObject.addValue(p);
        });
    }
    initValueActionElement(element) {
        if ($ea24aad78428563b$var$initializedDb?.[element.id] == true) return;
        let thisObject = this;
        let v = new (0, $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c)(element);
        v.valueActionElement.addEventListener("click", (event)=>{
            thisObject.removeValue(v);
        });
    }
    initPropertyDragDrop(element) {
        if ($ea24aad78428563b$var$initializedDb?.[element.id] == true) return;
        let thisObject = this;
        let p = new (0, $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c)(element);
        p.element.addEventListener("dragover", (event)=>{
            event.preventDefault();
        });
        p.element.addEventListener("drop", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            let itemNo = 0;
            for (const item of event.dataTransfer.items)if (item.kind === "string") {
                itemNo += 1;
                if (item.type == "text/plain") item.getAsString((value)=>{
                    console.log("v", value);
                    try {
                        value = JSON.parse(value);
                    } catch  {
                        let tmp = document.createElement("div");
                        tmp.innerHTML = value;
                        value = tmp.textContent;
                    }
                    if (p.elementType == "value") {
                        let parentP = p.getParentPropertyObject();
                        thisObject.removeValue(p);
                        thisObject.addValue(parentP, value);
                    } else thisObject.addValue(p, value);
                });
            }
        });
    }
    initPropertyDrag(element) {
        if ($ea24aad78428563b$var$initializedDb?.[element.id] == true) return;
        let thisObject = this;
        let p = new (0, $a2421c6bde17fe2f$export$f4fc9bc3702e5f8c)(element);
        element.draggable = true;
        p.element.addEventListener("dragstart", (event)=>{
            //event.preventDefault();
            event.stopPropagation();
            console.log("drag", thisObject.getRecord(p));
            event.dataTransfer.setData("text/plain", JSON.stringify(thisObject.getRecord(p)));
        });
        p.element.addEventListener("drag", (event)=>{
            event.preventDefault();
        });
    }
    // Attributes
    get element() {
        return this._elementObject.element;
    }
    //
    get record() {
        return this.getRecord(this._elementObject);
    }
    getRecord(elementObject) {
        if (elementObject.elementType == "thing") {
            let record = {};
            for (let p of elementObject.getPropertyObjects()){
                let newRecord = this.getRecord(p);
                record = {
                    ...record,
                    ...this.getRecord(p)
                };
            }
            return record;
        } else if (elementObject.elementType == "property") {
            let record = {};
            record[elementObject.propertyID] = [];
            for (let v of elementObject.getValueObjects())record[elementObject.propertyID].push(this.getRecord(v));
            return record;
        } else if (elementObject.elementType == "value") {
            let values = [];
            let things = elementObject.getThingObjects();
            if (things && things.length != 0) for (let t of things)values = values.concat(this.getRecord(t));
            else {
                let inputs;
                inputs = elementObject.element.querySelectorAll("input");
                for (let i of inputs)values.push(i.value);
                inputs = elementObject.element.querySelectorAll("select");
                for (let i of inputs)values.push(i.value);
            }
            return values;
        } else {
            let results = [];
            for (let t of elementObject.getThingObjects())results.push(this.getRecord(t));
            return results;
        }
    }
    //
    addValue(propertyObject, value) {
        if (!propertyObject || propertyObject == null) return;
        if (propertyObject.elementType != "property") return this.addValue(propertyObject.getParentPropertyObject(), value);
        let s0 = (0, $5OpyM$KrakenSchemas).get(propertyObject.propertyID);
        let s = s0.expectedType;
        let noOfValues = propertyObject.propertyBodyElement.children.length;
        let propertyPath = propertyObject.propertyID.split(".");
        propertyPath[propertyPath.length - 1] = propertyPath[propertyPath.length - 1] + "[" + String(noOfValues) + "]";
        let content = (0, $5OpyM$krakenHtml).form.json(s.jsonSchemaLight, value, propertyObject.propertyID, propertyPath);
        let temp = document.createElement("div");
        temp.innerHTML = content;
        let newValueElement = temp.firstElementChild;
        let propertyBody = propertyObject.propertyBodyElement;
        propertyBody.appendChild(newValueElement);
    }
    removeValue(valueObject) {
        valueObject.element.remove();
    }
}


class $88b41f2b161a575e$export$8440cd96791437b2 {
    constructor(thing){
        this.thing = thing;
    }
    form(url) {
        return new (0, $ea24aad78428563b$export$7139bcca0e2cefa4)(this.thing, url);
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
        this._element = new (0, $88b41f2b161a575e$export$8440cd96791437b2)(this);
        this._test = new (0, $af443bc86ad85e59$export$2ce0982a5613aa77)(this);
        // db references
        this._dbCollection = null // The collection / table of database
        ;
        this._dbId = null // The _id from database
        ;
        this._dbRecord = null // The record as is from database
        ;
        // metadata
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
        // Local cache of things
        this._things = new (0, $b07a281446d81d05$export$320d46383f3d0ef0)();
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"]) this.setFullRecord(record_type);
        //
        if (record_type && !record_type["@type"]) this.p.set("@type", record_type);
        if (record_id) this.p.set("@id", record_id);
        if ((0, $5OpyM$krakenHelpers).isNull(this.record_id)) record_id = String((0, $5OpyM$v4)());
    }
    toJSON() {
        return this.record;
    }
    get json() {
        return JSON.stringify(this.record, null, 4);
    }
    toString() {
        let content = this.heading.getTextSummary;
        return content;
    //return JSON.stringify(this.record, null, 4);
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
    // HTML elements
    get element() {
        return this._element;
    }
    // Tests
    get test() {
        return this._test;
    }
    // -----------------------------------------------------
    //  events
    // -----------------------------------------------------
    addEventListener(eventType, callback) {
        if (typeof callback !== "function") return;
        if ((0, $5OpyM$krakenHelpers).isNull(eventType)) eventType;
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
        if ((0, $5OpyM$krakenHelpers).isNull(record_id)) this.record_id = String((0, $5OpyM$v4)());
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
    get childThings() {
        return this.getChildThings();
    }
    getChildThings() {
        // Returns itself and all things references in values
        return (0, $15777fe91204fd32$export$c35ca6a8a122f0b9).getChildThings(this);
    }
    get pvs() {
        return this.getPvs();
    }
    getPvs() {
        let pvs = [];
        for (let p of this._properties)for (let pv of p._propertyValues)pvs.push(pv);
        return pvs;
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
