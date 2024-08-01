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

    getPropertyValueById(propertyValueID){

        if(!propertyValueID || propertyValueID == null) { return }

        for(let pv of this._propertyValues){

            if (pv.record_id == propertyValueID){
                return pv
            }
            
        }
        return null
        
    }

    merge(other){
        // merge other property with this property

        if(!other || other == null){ return }
        console.log(other.propertyID)
        for(let otherPV of other._propertyValues){
            let thisPV = this.getPropertyValueById(otherPV.record_id)
            if(thisPV == null){
                console.log('push')
                this._propertyValues.push(otherPV)
            }
        }

        this.compilePropertyValues(true)
        
    }

    //
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    
    getFullRecord(maxDepth, currentDepth) {
        return this.propertyValuesNet.map((x) => x.getFullRecord(maxDepth, currentDepth) )
    }

    getRefRecord(maxDepth, currentDepth){
        return this.propertyValuesNet.map((x) => x.getRefRecord(maxDepth, currentDepth) )
    }

    getBestRecord(maxDepth, currentDepth){

        let p = this.propertyValue
        if(p && p != null){
            
            return [p.getBestRecord(maxDepth, currentDepth)]
        }
        return []
    }

    getDetailRecord(maxDepth, currentDepth){
        return this.propertyValuesNet.map((x) => x.getDetailRecord(maxDepth, currentDepth) )
    }
    
    
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------


    getSystemRecord(maxDepth, currentDepth){
        
        return this._propertyValues.map((x) => x.getSystemRecord(maxDepth, currentDepth) )
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
    


    // -----------------------------------------------------
    //  System attributes 
    // -----------------------------------------------------

    get systemCreatedDate(){

        let resultDate = null
        for(let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate
            if(itemDate && (resultDate == null || itemDate < resultDate )){
                resultDate = itemDate
            }
        }
        return resultDate
        
    }

    get systemUpdatedDate(){

        let resultDate = null
        for(let pv of this._propertyValues){
            let itemDate = pv.systemCreatedDate
            if(itemDate && (resultDate == null || itemDate > resultDate )){
                resultDate = itemDate
            }
        }
        return resultDate
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

        
        this.compilePropertyValues()

        return this._propertyValuesNetCache
        

    }


    compilePropertyValues(force=false){
        
        let pv = this._propertyValues

        let cache = this._propertyValuesNetCache
        let cacheOld = this._propertyValuesNetCacheOld

        if(force == false){
            if(cache && cache != null && cache.length > 0){
                pv = cache
                if(cache == cacheOld) { return cache } 
            } 
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


        // Disable validity
        for(let pv of this._propertyValues){
            pv.valid = false
        }

        // Reenable validity 
        for(let pv of this._propertyValuesNetCache){
            pv.valid = true
        }
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


        // Check if date
        let d = convertToDate(newValueObject)
        if(d && d != null){
            newValueObject = d
        }
        
        
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

    // -----------------------------------------------------
    //  Query 
    // -----------------------------------------------------

    containsValue(value){
        // Return true if value is part of values

        if(value.record_type){
            value = value.ref
        }

        if(value['@type']){
            value = {"@type": value?.["@type"], "@id": value?.["@id"]}
        }
        
        for(let pv of this.propertyValues){
            let value0 = pv.value
            if(value0.record_type){
                value0 = value0.ref
            }

            if(value0['@type']){
                value0 = {"@type": value0?.["@type"], "@id": value0?.["@id"]}
            }

            if(JSON.stringify(value)==JSON.stringify(value0)){ 
                return true 
            }
        }
        return false   
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






function convertToDate(value) {
    if (value instanceof Date && !isNaN(value)) {
        return value;
    }

    const date = new Date(value);
    if (!isNaN(date.getTime())) {
        return date;
    }

    return null;
}