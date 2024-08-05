import { v4 as uuidv4 } from "uuid";

import { KrProperty } from "../class_property/class_property.js";
import { KrMetadata } from "../class_metadata/class_metadata.js";

import { fullRecord } from "./helpers/fullRecord.js";

import { systemRecord } from "./helpers/systemRecord.js";
import { thingComparison } from "./helpers/thingComparison.js";
import { propertyManipulation } from "./helpers/propertyManipulation.js";
import { recordHelpers } from "./helpers/recordHelpers.js";
import { consoleHelpers } from './helpers/consoleHelpers.js'
import { valueManipulation } from './helpers/valueManipulation.js'
import { itemListHelpers } from './helpers/itemListHelpers.js'


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
        this._properties = [];

        this._callbacks = {};
        this._blockEvents = false;

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
        return this.getProperty("@type").value;
    }
    set record_type(value) {
        if (!value) {
            return;
        }
        return this.setProperty("@type", value);
    }
    get record_id() {
        let record_id = this.getProperty("@id").value;
        if (!record_id || record_id == null) {
            this.record_id = String(uuidv4());
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
        return `${this.record_type}___${this.record_id}`;
    }

    

    get properties() {
        return propertyManipulation.getAll(this)
    }

    get things() {
        return this.getThings([this.record_type + "/" + this.record_id]);
    }

    getThings(db = []) {
        return valueManipulation.getThings(this, db)
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
 

    getFullRecord(maxDepth = MAX_DEPTH, currentDepth = 0) {
        return fullRecord.get(this, maxDepth, currentDepth);
    }

    setFullRecord(value) {
        return fullRecord.set(this, value);
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

    getSystemRecord(maxDepth = MAX_DEPTH, currentDepth = 0) {
        return systemRecord.get(this, maxDepth, currentDepth);
    }

    setSystemRecord(value) {
        return systemRecord.set(this, value);
    }

    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------

    getProperty(propertyID) {
        return propertyManipulation.get(this, propertyID);
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
        if (!newValue && newValue !== 0) {
            newValue = previousValue;
            previousValue = null;
        }

        if (
            newValue &&
            newValue != null &&
            Array.isArray(newValue) &&
            newValue.length > 0
        ) {
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

            return;
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
            undefined,
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
        return propertyManipulation.set(
            this,
            propertyID,
            value,
            credibility,
            observationDate,
            actionType,
            previousValue,
        );
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
    //  ListItem specific attributes and methods   
    // -----------------------------------------------------

    get item(){
        return this.getProperty('item').value
    }

    set item(value){
        return this.setProperty('item', value)
    }

    get previousItem(){
        return this.getProperty('previousItem').value
    }

    set previousItem(value){
        return this.setProperty('previousItem', value)
    }

    get nextItem(){
        return this.getProperty('nextItem').value
    }

    set nextItem(value){
        return this.setProperty('nextItem', value)
    }
    
    
    // -----------------------------------------------------
    //  ItemList specific attributes and methods  
    // -----------------------------------------------------

    get items(){
        return itemListHelpers.getItems(this)
    }

    set items(value){
        return itemListHelpers.setItems(this, value)
    }

    getItems(){
        return itemListHelpers.getItems(this)
    }

    setItems(value){
        return itemListHelpers.setItems(this, value)
    }

    get firstItem(){
        return itemListHelpers.getFirstItem(this)
    }

    get lastItem(){
        return itemListHelpers.getLastItem(this)
    }

    setItems(items){
        return itemListHelpers.setItems(this, items)
    }

    add(item){
        return itemListHelpers.pushItem(this, item)
    }
    
    pushItem( item){
        return itemListHelpers.pushItem(this, item)
    }

    reCalculatePosition(){
        return itemListHelpers.reCalculatePosition(this)
    }

    remove(item){
        return itemListHelpers.remove(this, item)
    }

    insertBefore(referenceItem, refItemtoInsert){
        return itemListHelpers.insertBefore(this, referenceItem, refItemtoInsert)
    }

    insertAfter(referenceItem, refItemtoInsert){
        return itemListHelpers.insertAfter(this, referenceItem, refItemtoInsert)
    }

    getItem(ref){
        return itemListHelpers.getItem(this, ref)
    }

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
    } item


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
