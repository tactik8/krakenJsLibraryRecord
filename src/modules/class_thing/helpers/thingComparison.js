import { krakenHelpers as h } from 'krakenhelpers'

export const thingComparison = {

    lt: lt,
    gt: gt,
    eq: eq,
    merge: merge
    
}


function lt(thisThing, otherThing) {
    if (thisThing.record_type < otherThing.record_type) {
        return true;
    }
    if (thisThing.record_type > otherThing.record_type) {
        return false;
    }

    if (thisThing.record_id < otherThing.record_id) {
        return true;
    }
    if (thisThing.record_id > otherThing.record_id) {
        return false;
    }

    return false;
}

function gt(thisThing, otherThing) {
    if (thisThing.record_type > otherThing.record_type) {
        return true;
    }
    if (thisThing.record_type < otherThing.record_type) {
        return false;
    }

    if (thisThing.record_id > otherThing.record_id) {
        return true;
    }
    if (thisThing.record_id < otherThing.record_id) {
        return false;
    }
    return false;
}

function eq(thisThing, otherThing) {
    if (thisThing.record_type != otherThing.record_type) {
        return false;
    }
    if (thisThing.record_id != otherThing.record_id) {
        return false;
    }

    return true;
}


function merge(thisThing, otherThing){
    // Inserts otherThing in thisThing thing

    if(thisThing.eq(otherThing) == false){ return }


    if(thisThing.id == otherThing.id){
        return
    }


    // Merge db proeprties
    if(!thisThing._dbCollection || thisThing._dbCollection == null){
        thisThing._dbCollection = otherThing._dbCollection
    }
    if(!thisThing._dbId || thisThing._dbId == null){
        thisThing._dbId = otherThing._dbId
    }
    if(!thisThing._dbRecord || thisThing._dbRecord == null){
        thisThing._dbRecord = otherThing._dbRecord
    }

    
    // Merge properties
    for(let otherThingP of otherThing._properties){
        let thisThingP = thisThing.getProperty(otherThingP.propertyID)
        thisThingP.merge(otherThingP)
    }

    // Merge callbacks and reset other
    for(let k in otherThing._callbacks){
        for(let c of otherThing._callbacks[k]){
            thisThing.addEventListener(k, c)
        }
        
    }
    otherThing._callbacks = {}
    
    return

}