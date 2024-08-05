

export const valueManipulation = {

    getThings: getThings,
    getSystemCreatedDate: getSystemCreatedDate,
    getSystemUpdatedDate:getSystemUpdatedDate
}


function getThings(thisThing, db = []) {
    let results = [];

    for (let p of thisThing._properties) {
        for (let v of p.values) {
            if (v?.record_type) {
                let id = v?.record_type + "/" + v.record_id;
                if (!db.includes(id)) {
                    results.push(v);
                    db.push(id);
                    results = results.concat(v.getThings(db));
                }
            }
        }
    }
    results = results.filter(function (el) {
        return el != null;
    });

    return results;
}



function  getSystemCreatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties) {
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate < resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}

function getSystemUpdatedDate(thisThing) {
    let resultDate = null;
    for (let pv of thisThing.properties) {
        let itemDate = pv.systemCreatedDate;
        if (itemDate && (resultDate == null || itemDate > resultDate)) {
            resultDate = itemDate;
        }
    }
    return resultDate;
}