import { v4 as uuidv4 } from 'uuid';



import { KrProperty } from "../class_property/class_property.js";

import { KrMetadata } from "../class_metadata/class_metadata.js";
//import { KrListItem } from "../../../kraken_thing.js";

let MAX_DEPTH = 6;

export class KrThing {
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

    */

    constructor(record_type = null, record_id = null) {
        this._properties = [];

        this._callbacks = {};

        // metadata
        this.metadata = new KrMetadata();

        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"])
            this.setFullRecord(record_type);

        //
        if (record_type && !record_type["@type"]) {
            this.setProperty("@type", record_type);
        }
        if (record_id) {
            this.setProperty("@id", record_id);
        }

        if (!this.record_id || this.record_id == null) {
            record_id = String(uuidv4());
        }
    }

    // -----------------------------------------------------
    //  events
    // -----------------------------------------------------

    addEventListener(eventType, callback) {
        if (typeof callback !== "function") return;

        if (!eventType || eventType == null) {
            eventType == "all";
        }
        if (this._callbacks[eventType] === undefined) {
            this._callbacks[eventType] = [];
        }
        

        this._callbacks[eventType].push(callback);
    }

    dispatchEvent(eventType, data) {
        //if (this._callbacks[eventType] === undefined) return;

        const event = {
            type: eventType,
            target: this,
            data: data,
        };

        if (this._callbacks[eventType] === undefined) {
            this._callbacks[eventType] = [];
        }

        if (this._callbacks['all'] === undefined) {
            this._callbacks['all'] = [];
        }
        
        this._callbacks[eventType].forEach((callback) => {
            callback(event);
        });

        this._callbacks["all"].forEach((callback) => {
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
        if (!value) {
            return;
        }
        return this.setProperty("@type", value);
    }
    get record_id() {
        let record_id =  this.getProperty("@id").value;
        if(!record_id || record_id == null){
            this.record_id = String(uuidv4())
        }
        return this.getProperty("@id").value;
    }
    set record_id(value) {
        if (!value) {
            return;
        }
        return this.setProperty("@id", value);
    }
    get ref() {
        return { "@type": this.record_type, "@id": this.record_id };
    }

    get properties() {
        /**
         * Returns list of KrProperty object in alphabetical order
         */

        //function compare(a, b) { return a.lt(b) }
        //return this._properties.toSorted(compare);
        return this._properties.toSorted((a, b) => {
            return a.lt(b);
        });
    }

    get things(){
        // return all things 

        return this.getThings([this.record_type + '/' + this.record_id])
    }

    getThings(db=[]){

        let results = []

        for(let p of this._properties){
            for(let v of p.values){
                if (v?.record_type){
                    let id = v?.record_type + '/' + v.record_id
                    if(!db.includes(id)){
                        results.push(v)
                        db.push(id)
                        results = results.concat(v.getThings(db))
                    }
                }
            }
        }
        results = results.filter(function (el) {
            return el != null;
        });

        return results

        
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
        if (depth && depth > MAX_DEPTH) {
            return this.ref;
        }

        let record = {};
        let properties = this.properties;
        for (let p of properties) {
            record[p.propertyID] = p.getFullRecord(depth+1);
        }
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;

        record = simplify(record)
        return record;
    }

    setFullRecord(value) {
        this._properties = [];
        Object.keys(value).forEach((key) => {
            this.addProperty(key, value[key]);
        });
    }

    getRefRecord(depth = 0) {
        let record = {};

        for (let i = 0; i < this.properties.length; i++) {
            record[this.properties[i].propertyID] =
                this.properties[i].getRefRecord(depth);
        }
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record = simplify(record)
        return record;
    }

    getBestRecord(depth = 0) {
        if (depth > MAX_DEPTH) {
            return this.ref;
        }

        let record = {};

        for (let i = 0; i < this.properties.length; i++) {
            record[this.properties[i].propertyID] = this.properties[
                i
            ].getBestRecord(depth+1);
        }
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
        if (depth > MAX_DEPTH) {
            return this.ref;
        }

        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record.properties = {}
        record.summary = this.getFullRecord()
       
        
        for (let p of this.properties) {
            record['properties'][p.propertyID] = p.getSystemRecord(depth);
        }

        
        return record;
    }

    setSystemRecord(value) {
        // Load data into object

        if (!value || !value.properties) {
            return;
        }
        // Reset current properties
        this._properties = [];

        // convert sub things to KrThing
        var keys = Object.keys(value.properties);
        for (let key of keys) {
            let properties = value.properties[key];
            properties = ensureArray(properties)
            for (let propertyValue of properties) {
               
                if (propertyValue?.object.value?.["@type"]) {
                    var thing = this.new(
                        propertyValue.object.value["@type"],
                        propertyValue.object.value["@id"],
                    );
                    thing.setSystemRecord(propertyValue.object.value);
                    propertyValue.object.value = thing;
                }
            }
        }

        // load data
        var keys = Object.keys(value.properties);
        for (let key of keys) {
            var property = new KrProperty(key);
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
         */


        if(!propertyID || propertyID == null){ return null }
        
        let propertiesID =  propertyID.split('.')
        let pID =  propertyID.split('.')[0]
        let otherIDS = propertyID.split('.').slice(1)

        // Find property object
        let property 
        for (let i = 0; i < this._properties.length; i++) {
            if (this._properties[i].propertyID == pID) {
                property = this._properties[i];
            }
        }

        // Create property object if missing
        if(!property || property == null){
            property = new KrProperty(propertyID);
            this._properties.push(property);
        }

        // Recurse

        if( otherIDS.length > 0){

            if (!property.value?.record_type){
                return null
            } else {
                return property.value.getProperty(otherIDS.join('.'))
            }
            
        } else {
            return property;
            
        }

    }

    addProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(
            propertyID,
            value,
            credibility,
            observationDate,
            "addAction",
        );
    }

    deleteProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(
            propertyID,
            value,
            credibility,
            observationDate,
            "deleteAction",
        );
    }

    replaceProperty(
        propertyID,
        previousValue,
        newValue,
        credibility,
        observationDate,
    ) {
        if(!newValue && newValue != null){
            newValue = previousValue
            previousValue = null
        }

       
        
        if(newValue && newValue != null && Array.isArray(newValue) && newValue.length > 0){
            
            this._updateProperty(
                propertyID,
                newValue[0],
                credibility,
                observationDate,
                "replaceAction",
                previousValue,
            );
            this._updateProperty(
                propertyID,
                newValue.slice(1),
                credibility,
                observationDate,
                "addAction",
                previousValue,
            );
            
        
        return
        } 
        return this._updateProperty(
            propertyID,
            newValue,
            credibility,
            observationDate,
            "replaceAction",
            previousValue,
        );
    }

    setProperty(propertyID, value, credibility, observationDate) {
        return this.replaceProperty(
            propertyID,
            null,
            value,
            credibility,
            observationDate,
        );
    }

    _updateProperty(
        propertyID,
        value,
        credibility,
        observationDate,
        actionType,
        previousValue,
    ) {


        // Handle dot notation
        if(propertyID.includes('.')){

            let pID = propertyID.split('.')[0]
            let otherIDS = propertyID.split('.').slice(1)
            
            let p = this.getProperty(pID);

            // If not value, create new KrThing
            if(!p.value?.record_type){
                p.setValues(
                    new KrThing('Thing'),
                    metadataRecord,
                    actionType,
                    null,
                );
            }

            // Set value
            p.value.setProperty(otherIDS.join('.'), value)
            return p
            
        }



        
        // Get olf value
        let oldValue = this.getProperty(propertyID)?.value;

        // get or create property object
        
        let property = this.getProperty(propertyID);
        if (!property) {
            property = new KrProperty(propertyID);
            this._properties.push(property);
        }

        // Iterate through values and convert to KrThing if required
        let values = ensureArray(value);
        for (let i = 0; i < values.length; i++) {
            if (values[i] && values[i]["@type"]) {
                values[i] = this.new(values[i]);
            }
        }

        // Set metadata
        var metadataRecord = this.metadata.record;
        if (credibility) {
            metadataRecord.credibility = credibility;
        }
        if (observationDate) {
            metadataRecord.observationDate = observationDate;
        }

        // set property value
        var newValues = property.setValues(
            values,
            metadataRecord,
            actionType,
            previousValue,
        );

        // dispatch event
        let newValue = this.getProperty(propertyID)?.values;

        if (oldValue != newValue) {
            let data = {
                propertyID: propertyID,
                oldValue: oldValue,
                newValue: newValue,
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
        return new KrThing(record_type, record_id);
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
        if (this.record_type < other.record_type) {
            return true;
        }
        if (this.record_type > other.record_type) {
            return false;
        }

        if (this.record_id < other.record_id) {
            return true;
        }
        if (this.record_id > other.record_id) {
            return false;
        }

        return false;
    }

    gt(other) {
        if (this.record_type > other.record_type) {
            return true;
        }
        if (this.record_type < other.record_type) {
            return false;
        }

        if (this.record_id > other.record_id) {
            return true;
        }
        if (this.record_id < other.record_id) {
            return false;
        }
        return false;
    }

    eq(other) {
        if (this.record_type != other.record_type) {
            return false;
        }
        if (this.record_id != other.record_id) {
            return false;
        }

        return true;
    }

    printScreen() {
        console.log("----------------------------------");
        console.log(this.properties.length);
        console.log("thing:", this.record_type, this.record_id);
        this.properties.map((property) => {
            property.printScreen("    ");
        });
    }
}

function ensureNotArray(value) {
    let new_value = ensureArray(value);
    if (new_value.length > 0) {
        return new_value[0];
    } else {
        return null;
    }
}

function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}

function simplify(data) {
    // Remove arrays of 1
    //return data

    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) {
            return simplify(data[0]);
        } else {
            // Otherwise, process each element in the array
            return data.map(simplify);
        }
    } else if (data !== null && typeof data === 'object') {
        // If the data is an object, process each key
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = simplify(data[key]);
            }
        }
        return newData;
    } else {
        // If the data is neither an array nor an object, return it as is
        return data;
    }
}
