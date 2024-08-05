import { KrProperty } from "../../class_property/class_property.js";


export const propertyManipulation = {
    get: getProperty,
    getAll: getProperties,
    set: setProperty
}


function getProperty(thisThing, propertyID) {
    /**
     * Returns property of
     */


    if(!propertyID || propertyID == null){ return null }

    let propertiesID =  propertyID.split('.')
    let pID =  propertyID.split('.')[0]
    let otherIDS = propertyID.split('.').slice(1)

    // Find property object
    let property 
    for (let i = 0; i < thisThing._properties.length; i++) {
        if (thisThing._properties[i].propertyID == pID) {
            property = thisThing._properties[i];
        }
    }

    // Create property object if missing
    if(!property || property == null){
        property = new KrProperty(propertyID);
        thisThing._properties.push(property);
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



function getProperties(thisThing) {
    /**
     * Returns list of KrProperty object in alphabetical order
     */
    return thisThing._properties.toSorted((a, b) => {
        return a.lt(b);
    });
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
    if(propertyID.includes('.')){

        let pID = propertyID.split('.')[0]
        let otherIDS = propertyID.split('.').slice(1)

        let p = thisThing.getProperty(pID);

        // If not value, create new KrThing
        if(!p.value?.record_type){
            p.setValues(
                thisThing.new('Thing'),
                metadataRecord,
                actionType,
                null,
            );
        }

        // Set value
        p.value.setProperty(otherIDS.join('.'), value)
        return p

    }

    // Get old value
    let oldValue = thisThing.getProperty(propertyID)?.values;

    // get or create property object

    let property = thisThing.getProperty(propertyID);
    if (!property) {
        property = new KrProperty(propertyID);
        thisThing._properties.push(property);
    }

    // Iterate through values and convert to KrThing if required
    let values = ensureArray(value);
    for (let i = 0; i < values.length; i++) {
        if (values[i] && values[i]["@type"]) {
            values[i] = thisThing.new(values[i]);
        }
    }

    // Set metadata
    var metadataRecord = thisThing.metadata.record;
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