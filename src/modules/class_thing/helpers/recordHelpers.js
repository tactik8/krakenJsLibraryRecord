

export const recordHelpers = {
    ensureNotArray:ensureNotArray,
    ensureArray: ensureArray,
    simplify: simplify
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

function simplify(data) {
    // Remove arrays of 1
    //return data

    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) {
            return simplify(data[0]);
        } else {
            // Otherwise, process each element in the array
            return data.map(simplify);
        }
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = simplify(data[key]);
            }
        }
        return newData;
    } else {
        // If the data is neither an array nor an object, return it as is
        return data;
    }
}