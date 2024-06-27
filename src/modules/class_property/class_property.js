import { KrPropertyValue } from "../class_propertyValue/class_propertyValue.js";
import { KrMetadata } from "../class_metadata/class_metadata.js";

export class KrProperty {
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
    
    */

    constructor(propertyID = null) {
        this._propertyID = propertyID;
        this._propertyValues = [];
        this._propertyValuesNetCache = null; 
        this._propertyValuesNetCacheOld = null; 
        this._propertyValuesCache = null; 
        this._propertyValuesCacheOld = null; 


        
        this.metadata = new KrMetadata();
    }
    // Base
    get propertyID() {
        return this._propertyID;
    }
    set propertyID(record) {
        this._propertyID = ensureNotArray(value);
    }

    gt(other) {
        if (this.propertyID == other.propertyID) {
            return false;
        }
        if (this.propertyID == "@type") {
            return false;
        }
        if (other.propertyID == "@type") {
            return true;
        }
        if (this.propertyID == "@id") {
            return false;
        }
        if (other.propertyID == "@id") {
            return true;
        }

        if (this.propertyID > other.propertyID) {
            return true;
        }
        return false;
    }
    lt(other) {
        if (this.propertyID == other.propertyID) {
            return false;
        }
        if (this.propertyID == "@type") {
            return true;
        }
        if (other.propertyID == "@type") {
            return false;
        }
        if (this.propertyID == "@id") {
            return true;
        }
        if (other.propertyID == "@id") {
            return false;
        }

        if (this.propertyID < other.propertyID) {
            return true;
        }
        return false;
    }

    eq(other) {
        if (this.propertyID && this.propertyID == other.propertyID) {
            return true;
        }
        return false;
    }

    //
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    
    getFullRecord(depth=0) {
        return this.propertyValuesNet.map((x) => x.getFullRecord(depth) )
    }

    getRefRecord(depth=0){
        return this.propertyValuesNet.map((x) => x.getRefRecord(depth) )
    }

    getBestRecord(depth=0){

        let p = this.propertyValue
        if(p && p != null){
            
            return [p.getBestRecord(depth)]
        }
        return []
    }

    getDetailRecord(depth=0){
        return this.propertyValuesNet.map((x) => x.getDetailRecord(depth) )
    }
    
    
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------


    getSystemRecord(depth=0){
        
        return this._propertyValues.map((x) => x.getSystemRecord(depth) )
    }

    setSystemRecord(value){

        this._propertyValues=[];
        var values = ensureArray(value);
        for(let value of values){
            var propertyValue = new KrPropertyValue();
            propertyValue.setSystemRecord(value)
            this._propertyValues.push(propertyValue);
        };
    }
    

    // ----------------------------------------------------
    // PropertyValues 
    // ----------------------------------------------------

    get propertyValue() {
        // return best property value object
        if(this.propertyValues && this.propertyValues.length > 0){
            return this.propertyValues[0];
        }
        return null
    }

    get propertyValues(){
        // returns best pv for each different value

        // Serve from cache
        let cache = this._propertyValuesCache
        let cacheOld = this._propertyValuesCacheOld
        if(cache && cache != null && cache.length > 0){
            if(cache == cacheOld) { return cache }
        } 

        var results = [];
        var pvs = this.propertyValuesNet
        const values = [...new Set(pvs.map((x) => x.value ))];
        values.forEach((value) => {
            const filteredPV = pvs.filter((item) => item.value == value);
            let maxPV = filteredPV.reduce((maxItem, item) => maxItem.gt(item) ? maxItem : item);
            results.push(maxPV)
        })

        function compare(a, b) {
            if(a.gt(b)){return -1};
            if(a.lt(b)){return 1};
            return 0;
        };

        results.sort(compare);

        // Refresh cache
        this._propertyValuesCache = results
        this._propertyValuesCacheOld = results
        
        return results;
    }

    get propertyValuesNet(){

        let pv = this._propertyValues
        
        let cache = this._propertyValuesNetCache
        let cacheOld = this._propertyValuesNetCacheOld
        
        if(cache && cache != null && cache.length > 0){
            pv = cache
            if(cache == cacheOld) { return cache } 
        } 

        let results = [];

        // Process additions        
        results = results.concat(pv.filter((item) => item.record_type == 'addAction'));
        results = results.concat(pv.filter((item) => item.record_type == 'replaceAction'));
        
        // Process deletions and replacements
        pv.filter((item) => item.record_type == 'replaceAction').forEach((filteredItem) => {
            results = results.filter((result) => !(result.lt(filteredItem) && (filteredItem.replacee == null || filteredItem.replacee === undefined ||  filteredItem.replacee == result.value )));
        });
        
        pv.filter((item) => item.record_type == 'deleteAction').forEach((filteredItem) => {
            results = results.filter((result) => !(result.lt(filteredItem) && result.value == filteredItem.value));
        });

        function compare(a, b) {
            if(a.gt(b)){return -1};
            if(a.lt(b)){return 1};
            return 0;
        };

        results.sort(compare);
        this._propertyValuesNetCache = []
        this._propertyValuesNetCache = this._propertyValuesNetCache.concat(results)
        this._propertyValuesNetCacheOld = []
        this._propertyValuesNetCacheOld = this._propertyValuesNetCacheOld.concat(results)
        this._propertyValuesCache = null
        return results;
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
        if (this.propertyValue){
            return this.propertyValue.value;
        }
        return null;
    }

    set value(value) {
        return this.setValues(value);
    }
    
    get values() {
        // Return value elements of all propertyValue object in order
        return this.propertyValues.map((x) => x.value );
    }

    setValues(value, metadataRecord, actionType) {
        let results = [];
        let values = ensureArray(value);
        for (let i = 0; i < values.length; i++) {
            results.push(this.setValue(values[i], metadataRecord, actionType));
        }
        return results;
    }

    setValue(value, metadataRecord, actionType) {
        let newValueObject = value;
        if (!(newValueObject instanceof KrPropertyValue)) {
            newValueObject = new KrPropertyValue(this.propertyID, value, actionType);
        }
        newValueObject.metadata.inheritMetadata(metadataRecord);
        this._propertyValues.push(newValueObject);
        newValueObject.metadata.position = this._propertyValues.length;


        // Add to cache
        if(this._propertyValuesNetCache && this._propertyValuesNetCache != null){
            this._propertyValuesNetCache.push(newValueObject)
        }

        // Reset cache
        this._propertyValuesCache = null
        this._propertyValuesCacheOld = null
        
        return newValueObject;
    }
    printScreen(suffix=''){

        var v = this.value;
        if (this.value && this.value.record_type) {
            v = this.value.record_type + "/" + this.value.record_id;
        };

        console.log(suffix, " - ", this.propertyID, ": ", v);

       
        this.propertyValuesNet.map((propertyValue) => {

            propertyValue.printScreen(suffix + '    ');

        });
    }
    printScreenAll(suffix=''){

        var v = this.value;
        if (this.value && this.value.record_type) {
            v = this.value.record_type + "/" + this.value.record_id;
        };

        console.log(suffix, " - ", this.propertyID, ": ", v);

        console.log(suffix, "       Net");
        this.propertyValuesNet.map((propertyValue) => {

            propertyValue.printScreen(suffix + '        ');

        });
        console.log(suffix, "       Raw");
        this.propertyValuesAll.map((propertyValue) => {

            propertyValue.printScreen(suffix + '        ');

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
