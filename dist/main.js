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
        this.createdDate = new Date();
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
        this._record = JSON.parse(JSON.stringify(value));
    }
    inheritMetadata(metadataRecord) {
        let currentPosition = this.position;
        this.record = metadataRecord;
        this.position = currentPosition;
    }
    set record(value) {
        if (!value) return;
        this._record = JSON.parse(JSON.stringify(value));
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
        return new Date(JSON.parse(this._record.createdDate || null));
    }
    set createdDate(value) {
        if (value && value instanceof Date) this._record.createdDate = JSON.stringify(value);
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
            replacer: value
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
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
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
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
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
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
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
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(depth = 0) {
        if (this.value && this.value?.record_type) {
            if ([
                "previousItem",
                "nextItem"
            ].includes(this.propertyID)) return this.value.ref;
            else return this.value.getFullRecord(depth);
        }
        return this.value;
    }
    getRefRecord(depth = 0) {
        let record = JSON.parse(JSON.stringify(this._record));
        record.metadata = this.metadata.getRefRecord(depth);
        if (this.value && this.value.record_type) record["value"] = this.value.ref;
        return record;
    }
    getBestRecord(depth = 0) {
        let value = this.value;
        if (this.value && this.value.record_type) value = this.value.getBestRecord(depth);
        return value;
    }
    // ----------------------------------------------------
    // Raw records 
    // ----------------------------------------------------
    getSystemRecord(depth = 0) {
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record["actionStatus"] = this._record.actionStatus;
        record["object"] = {};
        record.object["@type"] = this._record.object["@type"];
        record.object["propertyID"] = this._record.object["propertyID"];
        record.object["value"] = null;
        record.metadata = this.metadata.getSystemRecord();
        if (this.value && this.value.constructor.name == "KrThing") record.object["value"] = this.value.getSystemRecord(depth);
        else record.object["value"] = this.value;
        return record;
    }
    setSystemRecord(value) {
        this.metadata.setSystemRecord(value.metadata);
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
        console.log(suffix, " - ", c_string, p_string, t_string, v);
    }
    // -----------------------------------------------------
    //  HTML values 
    // -----------------------------------------------------
    get valueHTML() {
        this.value.record_type;
    }
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
    //
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getFullRecord(depth));
    }
    getRefRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getRefRecord(depth));
    }
    getBestRecord(depth = 0) {
        let p = this.propertyValue;
        if (p && p != null && p != []) return [
            p.getBestRecord(depth)
        ];
        return [];
    }
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getSystemRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getSystemRecord(depth));
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
    // ----------------------------------------------------
    // PropertyValues 
    // ----------------------------------------------------
    get propertyValue() {
        // return best property value object
        if (this.propertyValues && this.propertyValues.length > 0) return this.propertyValues[0];
        return [];
    }
    get propertyValues() {
        // returns best pv for each different value
        var results = [];
        const values = [
            ...new Set(this.propertyValuesAll.map((x)=>x.value))
        ];
        values.forEach((value1)=>{
            const filteredPV = this.propertyValuesAll.filter((item)=>item.value == value1);
            let maxPV = filteredPV.reduce((maxItem, item)=>maxItem.gt(item) ? maxItem : item);
            results.push(maxPV);
        });
        return results;
    }
    get propertyValuesNet() {
        let results = [];
        // process additions
        // Process additions        
        results = results.concat(this.propertyValues.filter((item)=>item.record_type == "addAction"));
        results = results.concat(this.propertyValues.filter((item)=>item.record_type == "replaceAction"));
        // Process deletions and replacements
        this.propertyValues.filter((item)=>item.record_type == "replaceAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && (filteredItem.replacee == null || filteredItem.replacee == result.value)));
        });
        this.propertyValues.filter((item)=>item.record_type == "deleteAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && result.value == filteredItem.value));
        });
        return results;
    }
    get propertyValuesAll() {
        // return in reverse order
        function compare(a, b) {
            if (a.gt(b)) return -1;
            if (a.lt(b)) return 1;
            return 0;
        }
        return this._propertyValues.toSorted(compare);
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
        return this.propertyValuesNet.map((x)=>x.value);
    }
    setValues(value1, metadataRecord, actionType) {
        let results = [];
        let values = $0ff73647c93c411e$var$ensureArray(value1);
        for(let i = 0; i < values.length; i++)results.push(this.setValue(values[i], metadataRecord, actionType));
        return results;
    }
    setValue(value1, metadataRecord, actionType) {
        let newValueObject = value1;
        if (!(newValueObject instanceof (0, $9ef8378eb9810880$export$90601469cef9e14f))) newValueObject = new (0, $9ef8378eb9810880$export$90601469cef9e14f)(this.propertyID, value1, actionType);
        newValueObject.metadata.inheritMetadata(metadataRecord);
        this._propertyValues.push(newValueObject);
        newValueObject.metadata.position = this._propertyValues.length;
        return newValueObject;
    }
    printScreen(suffix = "") {
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



//import { KrListItem } from "../../../kraken_thing.js";
let $8b9cc78875f648b9$var$MAX_DEPTH = 6;
class $8b9cc78875f648b9$export$3138a16edeb45799 {
    /*

    attributes:
    - record_type:
    - record_id: 
    - record: 
    - ref:            returns dict with @type and @id
    - fullRecord:     returns native records from class objects (nested)
    - properties:     returns list of KrProperties
    - json:           returns this.record as json

    Methods
    - getProperty: 
    - setProperty:
    - get (same as getProperty):
    - set (same as setProperty):

    */ constructor(record_type = null, record_id = null){
        this._properties = [];
        this._callbacks = {};
        // metadata
        this.metadata = new (0, $5e45e66cef237559$export$4a4eb7d10588cc8d)();
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"]) this.setFullRecord(record_type);
        //
        if (record_type && !record_type["@type"]) this.setProperty("@type", record_type);
        if (record_id) this.setProperty("@id", record_id);
        if (!this.record_id || this.record_id == null) record_id = String((0, $5OpyM$v4)());
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
    dispatchEvent(eventType, data) {
        //if (this._callbacks[eventType] === undefined) return;
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
    get properties() {
        /**
         * Returns list of KrProperty object in alphabetical order
         */ //function compare(a, b) { return a.lt(b) }
        //return this._properties.toSorted(compare);
        return this._properties.toSorted((a, b)=>{
            return a.lt(b);
        });
    }
    get things() {
        // return all things 
        return this.getThings([
            this.record_type + "/" + this.record_id
        ]);
    }
    getThings(db = []) {
        let results = [];
        for (let p of this._properties){
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
    // ----------------------------------------------------
    // Records
    // ----------------------------------------------------
    get record() {
        return this.getFullRecord(0);
    }
    set record(value) {
        this.setFullRecord(value);
    }
    get fullRecord() {
        return this.getFullRecord(0);
    }
    set fullRecord(value) {
        this.setFullRecord(value);
    }
    get bestRecord() {
        return this.getBestRecord(0);
    }
    set bestRecord(value) {
        this.setBestRecord(value);
    }
    get refRecord() {
        return this.getRefRecord(0);
    }
    set refRecord(value) {
        this.setRefRecord(value);
    }
    getFullRecord(depth = 0) {
        if (depth && depth > $8b9cc78875f648b9$var$MAX_DEPTH) return this.ref;
        let record = {};
        let properties = this.properties;
        for (let p of properties)record[p.propertyID] = p.getFullRecord(depth + 1);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record = $8b9cc78875f648b9$var$simplify(record);
        return record;
    }
    setFullRecord(value) {
        this._properties = [];
        Object.keys(value).forEach((key)=>{
            this.addProperty(key, value[key]);
        });
    }
    getRefRecord(depth = 0) {
        let record = {};
        for(let i = 0; i < this.properties.length; i++)record[this.properties[i].propertyID] = this.properties[i].getRefRecord(depth);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record = $8b9cc78875f648b9$var$simplify(record);
        return record;
    }
    getBestRecord(depth = 0) {
        if (depth > $8b9cc78875f648b9$var$MAX_DEPTH) return this.ref;
        let record = {};
        for(let i = 0; i < this.properties.length; i++)record[this.properties[i].propertyID] = this.properties[i].getBestRecord(depth + 1);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        return record;
    }
    // ----------------------------------------------------
    // System records
    // ----------------------------------------------------
    get systemRecord() {
        return this.getSystemRecord(0);
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
    getSystemRecord(depth) {
        if (depth > $8b9cc78875f648b9$var$MAX_DEPTH) return this.ref;
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record.properties = {};
        record.summary = this.getFullRecord();
        for (let p of this.properties)record["properties"][p.propertyID] = p.getSystemRecord(depth);
        return record;
    }
    setSystemRecord(value) {
        // Load data into object
        if (!value || !value.properties) return;
        // Reset current properties
        this._properties = [];
        // convert sub things to KrThing
        var keys = Object.keys(value.properties);
        for (let key of keys){
            let properties = value.properties[key];
            properties = $8b9cc78875f648b9$var$ensureArray(properties);
            for (let propertyValue of properties)if (propertyValue?.object.value?.["@type"]) {
                var thing = this.new(propertyValue.object.value["@type"], propertyValue.object.value["@id"]);
                thing.setSystemRecord(propertyValue.object.value);
                propertyValue.object.value = thing;
            }
        }
        // load data
        var keys = Object.keys(value.properties);
        for (let key of keys){
            var property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(key);
            property.setSystemRecord(value.properties[key]);
            this._properties.push(property);
        }
    }
    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------
    getProperty(propertyID) {
        /**
         * Returns property of
         */ if (!propertyID || propertyID == null) return null;
        let propertiesID = propertyID.split(".");
        let pID = propertyID.split(".")[0];
        let otherIDS = propertyID.split(".").slice(1);
        // Find property object
        let property;
        for(let i = 0; i < this._properties.length; i++)if (this._properties[i].propertyID == pID) property = this._properties[i];
        // Create property object if missing
        if (!property || property == null) {
            property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
            this._properties.push(property);
        }
        // Recurse
        if (otherIDS.length > 0) {
            if (!property.value?.record_type) return null;
            else return property.value.getProperty(otherIDS.join("."));
        } else return property;
    }
    addProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "addAction");
    }
    deleteProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "deleteAction");
    }
    replaceProperty(propertyID, previousValue, newValue, credibility, observationDate) {
        return this._updateProperty(propertyID, newValue, credibility, observationDate, "replaceAction", previousValue);
    }
    setProperty(propertyID, value, credibility, observationDate) {
        return this.replaceProperty(propertyID, null, value, credibility, observationDate);
    }
    _updateProperty(propertyID, value, credibility, observationDate, actionType, previousValue) {
        // Handle dot notation
        if (propertyID.includes(".")) {
            let pID = propertyID.split(".")[0];
            let otherIDS = propertyID.split(".").slice(1);
            let p = this.getProperty(pID);
            // If not value, create new KrThing
            if (!p.value?.record_type) p.setValues(new $8b9cc78875f648b9$export$3138a16edeb45799("Thing"), metadataRecord, actionType, null);
            // Set value
            p.value.setProperty(otherIDS.join("."), value);
            return p;
        }
        // Get olf value
        let oldValue = this.getProperty(propertyID)?.value;
        // get or create property object
        let property = this.getProperty(propertyID);
        if (!property) {
            property = new (0, $0ff73647c93c411e$export$13f164945901aa88)(propertyID);
            this._properties.push(property);
        }
        // Iterate through values and convert to KrThing if required
        let values = $8b9cc78875f648b9$var$ensureArray(value);
        for(let i = 0; i < values.length; i++)if (values[i] && values[i]["@type"]) values[i] = this.new(values[i]);
        // Set metadata
        var metadataRecord = this.metadata.record;
        if (credibility) metadataRecord.credibility = credibility;
        if (observationDate) metadataRecord.observationDate = observationDate;
        // set property value
        var newValues = property.setValues(values, metadataRecord, actionType, previousValue);
        // dispatch event
        let newValue = this.getProperty(propertyID)?.value;
        if (oldValue != newValue) {
            let data = {
                propertyID: propertyID,
                oldValue: oldValue,
                newValue: newValue
            };
            this.dispatchEvent(actionType, data);
        }
        return newValues;
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
    // ----------------------------------------------------
    // Dot notation
    // ----------------------------------------------------
    dotGet(path) {}
    dotSet(path, value) {}
    // ----------------------------------------------------
    // Comparisons
    // ----------------------------------------------------
    lt(other) {
        if (this.record_type < other.record_type) return true;
        if (this.record_type > other.record_type) return false;
        if (this.record_id < other.record_id) return true;
        if (this.record_id > other.record_id) return false;
        return false;
    }
    gt(other) {
        if (this.record_type > other.record_type) return true;
        if (this.record_type < other.record_type) return false;
        if (this.record_id > other.record_id) return true;
        if (this.record_id < other.record_id) return false;
        return false;
    }
    eq(other) {
        if (this.record_type != other.record_type) return false;
        if (this.record_id != other.record_id) return false;
        return true;
    }
    printScreen() {
        console.log("----------------------------------");
        console.log(this.properties.length);
        console.log("thing:", this.record_type, this.record_id);
        this.properties.map((property)=>{
            property.printScreen("    ");
        });
    }
}
function $8b9cc78875f648b9$var$ensureNotArray(value) {
    let new_value = $8b9cc78875f648b9$var$ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function $8b9cc78875f648b9$var$ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function $8b9cc78875f648b9$var$simplify(data) {
    // Remove arrays of 1
    //return data
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $8b9cc78875f648b9$var$simplify(data[0]);
        else // Otherwise, process each element in the array
        return data.map($8b9cc78875f648b9$var$simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = $8b9cc78875f648b9$var$simplify(data[key]);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}




var $cf838c15c8b009ba$export$3138a16edeb45799 = (0, $8b9cc78875f648b9$export$3138a16edeb45799);
var $cf838c15c8b009ba$export$13f164945901aa88 = (0, $0ff73647c93c411e$export$13f164945901aa88);
var $cf838c15c8b009ba$export$90601469cef9e14f = (0, $9ef8378eb9810880$export$90601469cef9e14f);


export {$cf838c15c8b009ba$export$3138a16edeb45799 as KrThing, $cf838c15c8b009ba$export$13f164945901aa88 as KrProperty, $cf838c15c8b009ba$export$90601469cef9e14f as KrPropertyValue};
//# sourceMappingURL=main.js.map
