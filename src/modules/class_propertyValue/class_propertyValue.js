import { v4 as uuidv4 } from 'uuid';

import { KrMetadata } from '../class_metadata/class_metadata.js';

export class KrPropertyValue {
    /*

    attributes:
    - proeprtyID:
    - value: 
    - c: 
    - d:

    */
    constructor(propertyID, value, actionType="replaceAction", previousValue) {


        
        this._record = {
            "@type": actionType,
            "@id": String(uuidv4()),
            "object": {
                "@type": "propertyValue",
                propertyID: propertyID,
                value: value,
            },
            actionStatus: 'completedActionStatus',
            replacee: previousValue,
            replacer: value,
            valid: true
        };

        this.metadata = new KrMetadata();

        this.schema = null
        
        }



    toString(){
        if(this.value.record_type){
            return `${this.value.record_type}/${this.value.record_id}`
        } else {
            return String(this.value)
        }
    }

    toJSON(){
        
        return this.value
    }


    
    // ----------------------------------------------------
    // Attributes - action
    // ----------------------------------------------------

    get record_type(){
        return this._record["@type"];
    }
    set record_type(value){
        this._record["@type"] = value;
    }
    get record_id(){
        return this._record["@id"];
    }
    set record_id(value){
        this._record["@id"] = value;
    }
    get object(){
        return this._record.object;
    }
    set object(value){
        this._record.object =value;
    }
    get replacer(){
        return this._record.replacer;
    }
    set replacer(value){
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
        }

    get valid(){
        return this._record.valid;
    }
    
    set valid(value){
        this._record.valid = value
        }

    
    get record(){

        let record = this._record
        
        
    }
    

    
    // ----------------------------------------------------
    // Attributes - object
    // ----------------------------------------------------
    
    get propertyID(){
        return this._record.object.propertyID;
    }
    set propertyID(value){
        this._record.object.object.propertyID = value;
    }
    get value(){
        return this._record.object.value;
    }
    set value(value){
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
        }

    // ----------------------------------------------------
    // Attributes - metadata
    // ----------------------------------------------------

    get t(){
        return this._record.t;
    }
    set t(value){
         this._record.t = value;
    }
    get value(){
        return this._record.object.value;
    }
    set value(value){
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
    }
    get agent(){
        return this.metadata.agent;
    }
    set agent(value){
        this.metadata.agent = value;
    }
    get instrument(){
        return this.metadata.instrument;
    }
    set instrument(value){
        this.metadata.instrument = value;
    }
    get credibility(){
        this.metadata.credibility;
    }
    set credibility(value){
        this.metadata.credibility = value;
    }
    get observationDate(){
        return this.metadata.observationDate;
    }
    set observationDate(value){
        this.metadata.observationDate = value;
    }
    get c(){
        return this.metadata.credibility;
    }
    set c(value){
        this.metadata.credibility = value;
    }
    get d(){
        return this.metadata.observationDate;
    }
    set d(value){
        this.metadata.observationDate = value;
    }

    get systemCreatedDate(){
        return this.metadata.createdDate
    }

    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    
    getFullRecord(maxDepth, currentDepth){
        
        if (this.value && this.value?.record_type ){ 

            if(['previousItem', 'nextItem'].includes(this.propertyID) ){
                return this?.value?.ref
            } else {
                return this.value.getFullRecord(maxDepth, currentDepth)  
            }
        }
        return this.value;
    }

    getRefRecord(maxDepth, currentDepth){

        let record = JSON.parse(JSON.stringify(this._record));
        record.metadata = this.metadata.getRefRecord(maxDepth, currentDepth);

        if (this.value && this.value.record_type){
            record['value'] = this.value.ref;
        };
        return record;        
    }

    getBestRecord(maxDepth, currentDepth){

        let value = this.value;
        if (this.value && this.value.record_type){
            value = this.value.getBestRecord(maxDepth, currentDepth);
        };
        return value;        
    }


    getDetailRecord(maxDepth, currentDepth){
        let record = {}
        record['@type'] = this.record_type
        record['@id'] = this.record_id
        record['actionStatus'] = this._record.actionStatus
        record['object'] = {}
        record.object['@type'] = this._record.object['@type']
        record.object['propertyID'] = this._record.object['propertyID']
        record.object['value'] =  null

        record.metadata = this.metadata.getSystemRecord();


        if(['previousItem', 'nextItem'].includes(this.propertyID) ){
            return this?.value?.ref || null
        } 


        if (this.value && this.value.record_type ){
            record.object['value'] = this.value.getDetailRecord(maxDepth, currentDepth);
        } else {
            record.object['value'] = this.value
        }
        return record;        
    }
    

    // ----------------------------------------------------
    // Raw records 
    // ----------------------------------------------------

    getSystemRecord(maxDepth, currentDepth){

        //console.log('Get system value', this.propertyID)
        let record = {}
        record['@type'] = this.record_type
        record['@id'] = this.record_id
        record['actionStatus'] = this._record?.actionStatus
        record['valid'] = this._record?.valid
        record['object'] = {}
        record.object['@type'] = this._record?.object?.['@type']
        record.object['propertyID'] = this._record?.object?.['propertyID']
        record.object['value'] =  null
        
        record.metadata = this.metadata.getSystemRecord(maxDepth, currentDepth);

        if(['previousItem', 'nextItem'].includes(this.propertyID) ){
            //console.log('x')
            record.object['value'] = this?.value?.ref
        } else if (this.value && this.value.record_type ){
            //console.log('s')
            record.object['value'] = this.value.export.getSystem(maxDepth, currentDepth);
        } else {
            //console.log('v')
            record.object['value'] = this.value
        }
        return record;
    }

    setSystemRecord(value){

        if(!value || value == null){ return }
        
        this.metadata.setSystemRecord(value?.metadata);
        delete value.metadata;
        this._record = JSON.parse(JSON.stringify(value));
        this._record = value;
    }

    
    // ----------------------------------------------------
    // Methods 
    // ----------------------------------------------------

    setValue(value, metadataRecord){
        this.value = value;
        this.metadata.inheritMetadata(metadataRecord);
    }

    equal(other){
        return this.eq(other);
    }
    
    eq(other){
        // returns true if equal

        
        if (this.value != other.value){ return false }
        if (this.metadata.eq(other.metadata) == false ){ return false }
        
        return true
       
    }
    
    gt(other){
        return this.metadata.gt(other.metadata);
    };
    
    lt(other){
        return this.metadata.lt(other.metadata);
    };

    printScreen(suffix = ''){

        var v = this.value;
        if (this.value && this.value.record_type) {
            v = this.value.record_type + "/" + this.value.record_id;
        };
        var t_string = this.record_type.replace('Action', '').padEnd(10);
        var c_string = String(this.metadata.c || 0).padStart(5);
        var p_string = String(this.metadata.position).padStart(5);
        var d_string = String(this.metadata.createdDate.toLocaleTimeString()).padStart(9);
        
        
        console.log(suffix, " - ", c_string, p_string, t_string, d_string, v);
        
    }


    // -----------------------------------------------------
    //  HTML values 
    // -----------------------------------------------------


    get valueHTML(){

        if (this.value.record_type){

            
        }
        
    }

    
};



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
