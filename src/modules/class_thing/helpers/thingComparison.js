
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

    for(let otherThingP of otherThing._properties){

        let thisThingP = thisThing.getProperty(otherThingP.propertyID)
        thisThingP.merge(otherThingP)

    }
    return

}