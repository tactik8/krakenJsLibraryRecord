import { krakenHelpers as h } from 'krakenhelpers'


import { KrProperty } from "../../class_property/class_property.js";

export class ClassKrakenPropertyHelpers {
    constructor(thing) {
        this.thing = thing;
    }

    // -----------------------------------------------------
    //  Methods
    // -----------------------------------------------------

    get(propertyID) {
        return getProperty(this.thing, propertyID);
    }

    getAll(propertyID) {
        return getProperties(this.thing);
    }

    set(propertyID, value, credibility, observationDate) {
        if (h.isNull(value)) {
            return;
        }

        value = ensureArray(value);
        if (value.length == 0) {
            return;
        }

        setProperty(
            this.thing,
            propertyID,
            value[0],
            credibility,
            observationDate,
            "replaceAction",
            null,
        );

        if (value.length == 1) {
            return;
        }
        for (let i = 1; i < value.length; i++) {
            let v = value[i];
            setProperty(
                this.thing,
                propertyID,
                value,
                credibility,
                observationDate,
                "addAction",
                null,
            );
        }
    }

    add(propertyID, value, credibility, observationDate) {
        return setProperty(
            this.thing,
            propertyID,
            value,
            credibility,
            observationDate,
            "addAction",
            null,
        );
    }

    push(propertyID, value, credibility, observationDate) {
        return this.add(propertyID, value, credibility, observationDate);
    }

    replace(propertyID, oldValue, newValue, credibility, observationDate) {
        return setProperty(
            this.thing,
            propertyID,
            newValue,
            credibility,
            observationDate,
            "replaceAction",
            oldValue,
        );
    }

    delete(propertyID, value, credibility, observationDate) {
        return setProperty(
            this.thing,
            propertyID,
            value,
            credibility,
            observationDate,
            "deleteAction",
            null,
        );
    }

    // -----------------------------------------------------
    //  Attributes
    // -----------------------------------------------------

    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value;
    }
    set actionStatus(value) {
        let oldValue = this.thing.getProperty("actionStatus")?.value;
        return this.thing.replaceProperty("actionStatus", oldValue, value);
    }

    get endTime() {
        return this.thing.getProperty("endTime")?.value;
    }
    set endTime(value) {
        let oldValue = this.thing.getProperty("endTime")?.value;
        return this.thing.replaceProperty("endTime", oldValue, value);
    }

    get error() {
        return this.thing.getProperty("error")?.value;
    }
    set error(value) {
        let oldValue = this.thing.getProperty("error")?.value;
        return this.thing.replaceProperty("error", oldValue, value);
    }

    get familyName() {
        return this.thing.getProperty("familyName")?.value;
    }
    set familyName(value) {
        let oldValue = this.thing.getProperty("familyName")?.value;
        return this.thing.replaceProperty("familyName", oldValue, value);
    }

    get givenName() {
        return this.thing.getProperty("givenName")?.value;
    }
    set givenName(value) {
        let oldValue = this.thing.getProperty("givenName")?.value;
        return this.thing.replaceProperty("givenName", oldValue, value);
    }

    get name() {
        return this.thing.getProperty("name")?.value;
    }
    set name(value) {
        let oldValue = this.thing.getProperty("name")?.value;
        return this.thing.replaceProperty("name", oldValue, value);
    }

    get startTime() {
        return this.thing.getProperty("startTime")?.value;
    }
    set startTime(value) {
        let oldValue = this.thing.getProperty("startTime")?.value;
        return this.thing.replaceProperty("startTime", oldValue, value);
    }

    get position() {
        return this.thing.getProperty("position")?.value;
    }
    set position(value) {
        let oldValue = this.thing.getProperty("position")?.value;
        return this.thing.replaceProperty("position", oldValue, value);
    }

    get url() {
        return this.thing.getProperty("url")?.value;
    }
    set url(value) {
        let oldValue = this.thing.getProperty("url")?.value;
        return this.thing.replaceProperty("url", oldValue, value);
    }

    get contentUrl() {
        return this.thing.getProperty("contentUrl")?.value;
    }
    set contentUrl(value) {
        let oldValue = this.thing.getProperty("contentUrl")?.value;
        return this.thing.replaceProperty("contentUrl", oldValue, value);
    }

    get agent() {
        return this.thing.getProperty("agent")?.value;
    }
    set agent(value) {
        let oldValue = this.thing.getProperty("agent")?.value;
        return this.thing.replaceProperty("agent", oldValue, value);
    }

    get instrument() {
        return this.thing.getProperty("instrument")?.value;
    }
    set instrument(value) {
        let oldValue = this.thing.getProperty("instrument")?.value;
        return this.thing.replaceProperty("instrument", oldValue, value);
    }

    get object() {
        return this.thing.getProperty("object")?.value;
    }
    set object(value) {
        let oldValue = this.thing.getProperty("object")?.value;
        return this.thing.replaceProperty("object", oldValue, value);
    }

    get result() {
        return this.thing.getProperty("result")?.value;
    }
    set result(value) {
        let oldValue = this.thing.getProperty("result")?.value;
        return this.thing.replaceProperty("result", oldValue, value);
    }

    get startTime() {
        return this.thing.getProperty("startTime")?.value;
    }
    set startTime(value) {
        let oldValue = this.thing.getProperty("startTime")?.value;
        return this.thing.replaceProperty("startTime", oldValue, value);
    }

    get endTime() {
        return this.thing.getProperty("endTime")?.value;
    }
    set endTime(value) {
        let oldValue = this.thing.getProperty("endTime")?.value;
        return this.thing.replaceProperty("endTime", oldValue, value);
    }

    get actionStatus() {
        return this.thing.getProperty("actionStatus")?.value;
    }
    set actionStatus(value) {
        let oldValue = this.thing.getProperty("actionStatus")?.value;
        return this.thing.replaceProperty("actionStatus", oldValue, value);
    }

    get instrument() {
        return this.thing.getProperty("instrument")?.value;
    }
    set instrument(value) {
        let oldValue = this.thing.getProperty("instrument")?.value;
        return this.thing.replaceProperty("instrument", oldValue, value);
    }

    get error() {
        return this.thing.getProperty("error")?.value;
    }
    set error(value) {
        let oldValue = this.thing.getProperty("error")?.value;
        return this.thing.replaceProperty("error", oldValue, value);
    }

    get item() {
        return this.thing.getProperty("item")?.value;
    }
    set item(value) {
        let oldValue = this.thing.getProperty("item")?.value;
        return this.thing.replaceProperty("item", oldValue, value);
    }

    get previousItem() {
        return this.thing.getProperty("previousItem")?.value;
    }
    set previousItem(value) {
        let oldValue = this.thing.getProperty("previousItem")?.value;
        return this.thing.replaceProperty("previousItem", oldValue, value);
    }

    get nextItem() {
        return this.thing.getProperty("nextItem")?.value;
    }
    set nextItem(value) {
        let oldValue = this.thing.getProperty("nextItem")?.value ;
        return this.thing.replaceProperty("nextItem", oldValue, value);
    }

    get position() {
        return this.thing.getProperty("position")?.value ;
    }
    set position(value) {
        let oldValue = this.thing.getProperty("position")?.value;
        return this.thing.replaceProperty("position", oldValue, value);
    }
}


function getProperty(thisThing, propertyID) {
    /**
     * Returns property of
     */

    if (!propertyID || propertyID == null) {
        return null;
    }

    let propertiesID = propertyID.split(".");
    let pID = propertyID.split(".")[0];
    let otherIDS = propertyID.split(".").slice(1);

    // Find property object
    let property;
    for (let i = 0; i < thisThing._properties.length; i++) {
        if (thisThing._properties[i].propertyID == pID) {
            property = thisThing._properties[i];
        }
    }

    // Create property object if missing
    if (!property || property == null) {
        property = new KrProperty(propertyID);
        thisThing._properties.push(property);
    }

    // Recurse when dot notation
    if (otherIDS.length > 0) {
        if (!property.value?.record_type) {
            return null;
        } else {
            return property.value.getProperty(otherIDS.join("."));
        }
    } else {
        return property;
    }
}

function getProperties(thisThing) {
    /**
     * Returns list of KrProperty object in alphabetical order
     */

    let properties = ensureArray(thisThing._properties);
    properties = properties.filter((x) => h.isNotNull(x));
    
    properties = properties.toSorted((a, b) => {
        return a.lt(b);
    });

    properties = ensureArray(properties)
    return properties
}

function setProperty(
    thisThing,
    propertyID,
    value,
    credibility,
    observationDate,
    actionType,
    previousValue,
) {
    // Handle dot notation
    if (propertyID.includes(".")) {
        let pID = propertyID.split(".")[0];
        let otherIDS = propertyID.split(".").slice(1);

        let p = thisThing.getProperty(pID);

        // If not value, create new KrThing
        if (h.isNull(p.value?.record_type)) {
            p.setValues(
                thisThing.new("Thing"),
                metadataRecord,
                actionType,
                null,
            );
        }

        // Set value
        p.value.setProperty(otherIDS.join("."), value);
        return p;
    }

    // Get old value
    let oldValue = thisThing.getProperty(propertyID)?.values;

    // get or create property object
    let property = thisThing.getProperty(propertyID);
    if (h.isNull(property)) {
        property = new KrProperty(propertyID);
        thisThing._properties.push(property);
    }

    // Iterate through values and convert to KrThing if required
    let values = ensureArray(value);
    for (let i = 0; i < values.length; i++) {
        if (h.isNotNull(values?.[i]?.['@type'])) {
            values[i] = thisThing.new(values[i]);
        }
    }

    // Set metadata
    var metadataRecord = thisThing.metadata.record;
    if (h.isNotNull(credibility)) {
        metadataRecord.credibility = credibility;
    }
    if (h.isNotNull(observationDate)) {
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
    let newValue = thisThing.getProperty(propertyID)?.values;

    if (oldValue != newValue) {
        let data = {
            propertyID: propertyID,
            oldValue: oldValue,
            newValue: newValue,
        };
        thisThing.dispatchEvent(actionType, data);
    }

    return newValues;
}

function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
