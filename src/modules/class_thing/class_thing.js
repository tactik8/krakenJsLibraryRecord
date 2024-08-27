import { v4 as uuidv4 } from "uuid";

import { KrProperty } from "../class_property/class_property.js";
import { KrMetadata } from "../class_metadata/class_metadata.js";


import { thingComparison } from "./helpers/thingComparison.js";
import { recordHelpers } from "./helpers/recordHelpers.js";
import { consoleHelpers } from './helpers/consoleHelpers.js'
import { valueManipulation } from './helpers/valueManipulation.js'
import { ClassKrakenPropertyHelpers } from './helpers/ClassKrakenPropertyHelpers.js'
import { ClassKrakenExportHelpers } from './helpers/ClassKrakenExportHelpers.js'
import { ClassKrakenItemListHelpers } from './helpers/ClassKrakenItemListHelpers.js'
import { ClassKrakenActionHelpers } from './helpers/ClassKrakenActionHelpers.js'
import { ClassKrakenApiHelpers } from './helpers/ClassKrakenApiHelpers.js'

import { ClassKrakenHeadingHelpers } from './helpers/ClassKrakenHeadingHelpers.js'
import { ClassKrakenCache } from './helpers/ClassKrakenCache.js'



let MAX_DEPTH = 10;

export class KrThing {
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

    */

    constructor(record_type = null, record_id = null) {


        this.id = String(crypto.randomUUID())

        
        this._properties = [];

        this._callbacks = {};
        this._blockEvents = false;


        // Load libraries
        // Property helpers
        this._p = new ClassKrakenPropertyHelpers(this)
        this._export = new ClassKrakenExportHelpers(this)
        this._itemList = new ClassKrakenItemListHelpers(this)
        this._action = new ClassKrakenActionHelpers(this)
        this._api = new ClassKrakenApiHelpers(this)
        this._headings = new ClassKrakenHeadingHelpers(this)


        // db references
        this._dbCollection = null   // The collection / table of database
        this._dbId = null           // The _id from database
        this._dbRecord = null       // The record as is from database
        
        // metadata
        this.metadata = new KrMetadata();


        // Local cache of things
        this._things = new ClassKrakenCache()
        
        
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"])
            this.setFullRecord(record_type);

        //
        if (record_type && !record_type["@type"]) {
            this.p.set("@type", record_type);
        }
        if (record_id) {
            this.p.set("@id", record_id);
        }

        if (!this.record_id || this.record_id == null) {
            record_id = String(uuidv4());
        }
    }

    toJSON() {
        return this.record;
    }

    toString() {

        let content = this.heading.getTextSummary
        return content
        //return JSON.stringify(this.record, null, 4);
    }



    // -----------------------------------------------------
    //  Libraries 
    // -----------------------------------------------------

    // Properties
    get p(){
        return this._p
    }
    get property(){
        return this._p
    }

    // Record export
    get export(){ 
        return this._export 
    }

    // ItemList
    get itemList(){ 
        return this._itemList 
    }
    get list(){ 
        return this._itemList 
    }
    get l(){ 
        return this._itemList 
    }

    // Action
    get action(){
        return this._action
    }
    get a(){
        return this._action
    }

    // API
    get api(){
        return this._api
    }

    // Headings
    get headings(){
        return this._headings
    }
    get heading(){
        return this._headings
    }
    get h(){
        return this._headings
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

    blockEvents() {
        this._blockEvents = true;
    }
    allowEvents() {
        this._blockEvents = false;
    }

    dispatchEvent(eventType, data) {
        //if (this._callbacks[eventType] === undefined) return;

        if (this._blockEvents == true) {
            return;
        }

        const event = {
            type: eventType,
            target: this,
            data: data,
        };

        if (this._callbacks[eventType] === undefined) {
            this._callbacks[eventType] = [];
        }

        if (this._callbacks["all"] === undefined) {
            this._callbacks["all"] = [];
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
        return this.p.get("@type").value;
    }
    set record_type(value) {
        if (!value) {
            return;
        }
        return this.p.set("@type", value);
    }
    get record_id() {
        let record_id = this.getProperty("@id").value;
        if (!record_id || record_id == null) {
            this.record_id = String(uuidv4());
        }
        return this.p.get("@id").value;
    }
    set record_id(value) {
        if (!value) {
            return;
        }
        return this.p.set("@id", value);
    }
    
    get ref() {
        return { "@type": this.record_type, "@id": this.record_id };
    }

    set ref(value){
        this.record_type = value['@type']
        this.record_id = value['@id']
    }

    get recordRef(){
        return this.ref
    }

    set recordRef(value){
        this.ref = value
    }
    
    get refID() {
        return `${this.record_type}/${this.record_id}`;
    }


    get things() {
        return this.getThings();
    }

    getThings() {
        // Returns itself and all things references in values
        return valueManipulation.getThings(this)
    }


    get childThings() {
        return this.getChildThings();
    }

    getChildThings() {
        // Returns itself and all things references in values
        return valueManipulation.getChildThings(this)
    }

    get pvs(){
        return this.getPvs()
    }

    getPvs(){

        let pvs = []
        for(let p of this._properties){
            for (let pv of p._propertyValues){
                pvs.push(pv)
            }
        }
        return pvs
    }
    
    // -----------------------------------------------------
    //  System attributes
    // -----------------------------------------------------

    get systemCreatedDate() {
        return valueManipulation.getSystemCreatedDate(this)
    }

    get systemUpdatedDate() {
        return valueManipulation.getSystemUpdatedDate(this)
    }

    
    
    // -----------------------------------------------------
    //  Records - Legacy shortcuts 
    // -----------------------------------------------------
    
    get record(){ return this._export.record }
    set record(value){ return this._export.record = value }
    get systemRecord(){ return this._export.system }
    set systemRecord(value){ return this._export.system = value }
    get bestRecord(){ return this._export.best }

    getFullRecord(){ return this._export.record }
    setFullRecord(value){ return this._export.record = value }
    getSystemRecord(){ return this._export.system }
    setSystemRecord(value){ return this._export.system = value }
    getBestRecord(){ return this._export.best }
    
    // ----------------------------------------------------
    // Properties - Legacy shortcuts
    // ----------------------------------------------------

    getProperty(propertyID) {
        return this.p.get(propertyID);
    }

    addProperty(propertyID, value, credibility, observationDate) {
        return this.p.add(propertyID, value, credibility, observationDate)
    }

    deleteProperty(propertyID, value, credibility, observationDate) {
        return this.p.delete(propertyID, value, credibility, observationDate)
    }

    replaceProperty(propertyID,oldValue,newValue,credibility,observationDate) {
        return this.p.replace(propertyID, oldValue, newValue, credibility, observationDate)
    }

    setProperty(propertyID, value, credibility, observationDate) {
        return this.p.set(propertyID, value, credibility, observationDate)
    }

    get properties() {
        return this.p.getAll()
    }
    
    get(propertyID) {
        return this.p.get(propertyID);
    }
    
    set(propertyID, value) {
        return this.p.set(propertyID, value);
    }

    new(record_type, record_id) {
        return new KrThing(record_type, record_id);
    }

    // -----------------------------------------------------
    //  Query
    // -----------------------------------------------------

    findValue(value) {
        // Returns the properties with given value
        let properties = [];
        for (let p of this._properties) {
            if (p.containsValue(value)) {
                properties.push(p.propertyID);
            }
        }
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
        return thingComparison.lt(this, other);
    }

    gt(other) {
        return thingComparison.gt(this, other);
    }

    eq(other) {
        return thingComparison.eq(this, other);
    }

    merge(other) {
        return thingComparison.merge(this, other);
    }



    
    
    // -----------------------------------------------------
    //  ItemList specific attributes and methods  
    // -----------------------------------------------------

    


    // -----------------------------------------------------
    //  Query specific attributes and methods 
    // -----------------------------------------------------

    
    get limit(){
        return this._limit
    }    

    set limit(value){
        this._limit = value
    } 

    get offset(){
        return this._offset
    }    

    set offset(value){
        this._offset = value
    } 

    get orderBy(){
        return this._orderBy
    }    

    set orderBy(value){
        this._orderBy = value
    } 

    get orderDirection(){
        return this._orderDirection
    }    

    set orderDirection(value){
        this._orderDirection = value
    } 

    get query(){
        return this._query
    }    

    set query(value){
        this._query = value
    } 


    get basePath(){
        return this._basePath
    }    

    set basePath(value){
        this._basePath = value
    } 

    get params(){

        let params = {}
        if(!this._params || this._params == null) {
            return {}
        } else {
            params = this._params
        }

        let keys = ['limit', 'offset', 'orderBy', 'orderDirection']
        for(let k of keys){
            let v = this[k]
            if(v && v != null){
                params[k] = v
            }
        }        
        return params
    }    

    set params(value){
        this._params = value
    } 



    
    
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------

    print() {
        return consoleHelpers.print()
    }

    printScreen() {
        return consoleHelpers.printScreen()
    }

    printScreenAll() {
        return consoleHelpers.printScreenAll()
    }
}
