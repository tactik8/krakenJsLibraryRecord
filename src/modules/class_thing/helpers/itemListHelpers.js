



export const itemListHelpers = {
    getFirstItem: getFirstItem,
    getLastItem: getLastItem,
    getItems: getItems,
    setItems: setItems,
    pushItem: pushItem,
    reCalculatePosition: reCalculatePosition,
    remove: remove,
    insertBefore: insertBefore,
    insertAfter: insertAfter,
    getItem: getItem,
    getByListItem: getByListItem,
    getByItem: getByItem,
};

function getFirstItem(thisThing) {
    let items = thisThing.getProperty("itemListElement").values;

    if (items.length == 0) {
        return null;
    }

    for (let item of items) {
        if (!item.previousItem || item.previousItem == null) {
            return item;
        }
    }

    for (let item of items) {
        if (item.position == 0) {
            return item;
        }
    }

    return null;
}

function getLastItem(thisThing) {
    let items = thisThing.getProperty("itemListElement").values;

    if (items.length == 0) {
        return null;
    }
    for (let item of items) {
        if (item.nextItem === undefined || item.nextItem == null) {
            return item;
        }
    }
    return null;
}

function getItems(thisThing) {
    let results = [];
    let t = thisThing.firstItem;

    while (t && t != null) {
        results.push(t);
        t = t.nextItem;
    }

    return results;
}

function setItems(thisThing, values) {
    values = ensureArray(values);

    pushItems(thisThing, values)
}

function pushItem(thisThing, listItems) {
    
    listItems = ensureArray(listItems);

    // Prepare listItems
    let newListItems = []
    for (let listItem of listItems) {

        // Check if thing, else convert to one
        if (!listItem.record_type) {
            let newListItem = thisThing.new();
            newListItem.record = listItem;
            listItem = newListItem;
        }

        // Check if ListItem, else convert to one
        if (listItem.record_type != "ListItem") {
            let newListItem = thisThing.new("ListItem");
            newListItem.item = listItem;
            listItem = newListItem;
        }
        newListItems.push(listItem)
    }


    
    // Set previous, next and position
    let lastListItem = getLastItem(thisThing);
    let newListItemsLength = newListItems.length
    
    for(let i=0; i< newListItemsLength; i++){
        
        let listItem = newListItems[i]
        
        if (lastListItem && lastListItem != null) {
            listItem.position = lastListItem.position + 1;
            listItem.previousItem = lastListItem;
            lastListItem.nextItem = listItem
        } else {
            listItem.position = 0;
        }
        lastListItem = listItem

    }

    // Add to property
    thisThing.addProperty("itemListElement", newListItems);
    
    return; //listItem
}

function reCalculatePosition(thisThing) {
    return;
    let t = thisThing.firstItem;

    var position = 0;

    while (t && t != null) {
        t.position = position;
        position = position + 1;
        t = t.nextItem;
    }
}

// -----------------------------------------------------
//  CRUD for items
// -----------------------------------------------------

function remove(thisThing, itemRef) {
    var item = thisThing.getItem(itemRef);
    if (!item) {
        return null;
    }

    var p = item.previousItem;
    var n = item.nextItem;

    // Ressign before and after links to one another
    if (p) {
        p.nextItem = n;
    }
    if (n) {
        n.previousItem = p;
    }

    // Remove from list
    thisThing.deleteProperty("itemListElement", item);

    // Sets position
    item.position = null;

    // Sets position
    let position = 0;
    if (n) {
        position = n.position - 1;
        n.position = position;
    }

    let nextItem = n?.nextItem;
    while (nextItem) {
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }

    //thisThing.reCalculatePosition()

    // Remove links
    item.previousItem = null;
    item.nextItem = null;

    return;
}

function insertBefore(thisThing, referenceItem, refItemtoInsert) {
    let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else {
        item = thisThing.getItem(refItemtoInsert.ref);
    }

    // Retrieve latest ListItem record

    var n = thisThing.getItem(referenceItem);
    var p = p.previousItem;

    // Stop events
    thisThing.blockEvents();
    if (item) {
        item.blockEvents();
    }
    if (p) {
        p.blockEvents();
    }
    if (n) {
        n.blockEvents();
    }

    // Remove previous links of items
    if (
        (item.previousItem && item.previousItem != null) ||
        (item.nextItem && item.nextItem != null)
    ) {
        thisThing.remove(item.ref);
    }

    // Change allocation
    item.previousItem = p;
    item.nextItem = n;

    if (p) {
        p.nextItem = item;
    } else {
        p.nextItem = null;
    }
    if (n) {
        n.previousItem = item;
    } else {
        n.previousItem = null;
    }

    // Start events
    thisThing.allowEvents();
    if (item) {
        item.allowEvents();
    }
    if (p) {
        p.allowEvents();
    }
    if (n) {
        n.allowEvents();
    }

    // Sets position
    let position = 0;
    if (p) {
        position = p.position + 1;
    }

    item.position = position;
    let nextItem = item.nextItem;
    while (nextItem) {
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }

    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) {
        thisThing.addProperty("itemListElement", refItemtoInsert);
    }

    return item;
}

function insertAfter(thisThing, referenceItem, refItemtoInsert) {
    /**
     *
     */

    let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else {
        item = thisThing.getItem(refItemtoInsert.ref);
    }

    // Stop events
    thisThing.blockEvents();
    if (item) {
        item.blockEvents();
    }
    if (p) {
        p.blockEvents();
    }
    if (n) {
        n.blockEvents();
    }

    // Remove previous links of items
    if (
        (item.previousItem && item.previousItem != null) ||
        (item.nextItem && item.nextItem != null)
    ) {
        thisThing.remove(item.ref);
    }

    var p = thisThing.getItem(referenceItem);
    var n = p.nextItem;

    // Change allocation
    item.previousItem = p;
    item.nextItem = n;

    if (p) {
        p.nextItem = item;
    } else {
        p.nextItem = null;
    }
    if (n) {
        n.previousItem = item;
    } else {
        n.previousItem = null;
    }

    // Start events
    thisThing.allowEvents();
    if (item) {
        item.allowEvents();
    }
    if (p) {
        p.allowEvents();
    }
    if (n) {
        n.allowEvents();
    }

    // Change position
    let position = 0;
    if (p) {
        position = p.position + 1;
    }

    item.position = position;
    let nextItem = item.nextItem;
    while (nextItem) {
        nextItem.position = position + 1;
        position = position + 1;
        nextItem = nextItem.nextItem;
    }

    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) {
        thisThing.addProperty("itemListElement", refItemtoInsert);
    }

    return item;
}

function getItem(thisThing, ref) {
    if (!ref) {
        return null;
    }

    if (ref && ref.ref) {
        ref = ref.ref;
    }

    if (!ref || !ref["@type"] || ref["@type"] == null) {
        return null;
    }

    if (ref["@type"] == "ListItem") {
        return getByListItem(thisThing, ref);
    } else {
        return getByItem(thisThing, ref);
    }
}

function getByListItem(thisThing, ref) {
    let items = thisThing.getProperty("itemListElement").values;

    for (let item of items) {
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) {
            return item;
        }
    }
    return null;
}

function getByItem(thisThing, ref) {
    let items = thisThing.getProperty("itemListElement").values;
    for (let item of items) {
        if (
            item.item.record_type == ref["@type"] &&
            item.item.record_id == ref["@id"]
        ) {
            return item;
        }
    }
    return null;
}

// -----------------------------------------------------
//  Query attributes
// -----------------------------------------------------

function getParams(thisThing) {
    let params = {};
    if (!thisThing._params || thisThing._params == null) {
        return {};
    } else {
        params = thisThing._params;
    }

    let keys = ["limit", "offset", "orderBy", "orderDirection"];
    for (let k of keys) {
        let v = this[k];
        if (v && v != null) {
            params[k] = v;
        }
    }
    return params;
}

function setParams(thisThing, value) {
    thisThing._params = value;
}

// -----------------------------------------------------
//  Filters
// -----------------------------------------------------

function filter(thisThing, propertyValueSpecifications) {
    /**
     * Returns new Things with filtered items
     */

    let newThings = new KrThings();

    for (let item of getItems(thisThing)) {
        let result = propertyValueSpecifications.map((pvs) =>
            pvs.test(item.item),
        );

        if (result.every(Boolean) == true) {
            newThings.add(item.item);
        }
    }

    return newThings;
}

function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
