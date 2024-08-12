



export class ClassKrakenItemListHelpers {

    constructor(thing){
        this.thing = thing
    }



    new(){
        let newItemList = this.thing.new('ItemList')
        return newItemList
    }
    
    getFirstItem(){ 
        return getFirstItem(this.thing) 
    } 
    get firstItem(){
        return getFirstItem(this.thing)
    } 
    get first(){
        return getFirstItem(this.thing)
    } 
    
    getLastItem(){
        return getLastItem(this.thing)
    } 
    get lastItem(){
        return getLastItem(this.thing)
    } 
    get last(){
        return getLastItem(this.thing)
    } 



    // Items
    get items(){
        return getItems(this.thing)
    } 

    // Items
    getItems(){
        return getItems(this.thing)
    } 
    
    // ListItems
    
    get getListItems(){
        return getListItems(this.thing)
    } 
    set items(value){
        return pushItem(this.thing, value)
    } 

    getListItems(){
        return getListItems(this.thing)
    } 

    addItems(value){
        return pushItem(this.thing, value)
    } 
    setItems(value){
        return pushItem(this.thing, value)
    } 

    push(value){
        return pushItem(this.thing, value)
    } 
    add(value){
        return pushItem(this.thing, value)
    } 

    getItem(ref){
        return getItem(this.thing)
    } 
    pushItem(value){
        return pushItem(this.thing, value)
    }


    
    // ListItem


    get item(){
        return this.thing.p.item
    }
    
    set item(value){
        return this.thing.p.item = value
    }
    
    
    setItem(value){
        return this.thing.p.item = value
    } 


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    reCalculatePosition(){
        return reCalculatePosition(this.thing)
    } 
   
    remove(value){
        return remove(this.thing, value)
    } 
  
    insertBefore(refItem, itemToInsert){
        return insertBefore(this.thing, refItem, itemToInsert)
    } 
  
    insertAfter(refItem, itemToInsert){
        return insertAfter(this.thing, refItem, itemToInsert)
    } 
   
    getItem(ref){
        return getItem(this.thing, ref)
    } 
    
    
    getByListItem(listItem){
        return getByListItem(this.thing, listItem)
    } 
    
    getByItem(item){
        return getByItem(this.thing, item)
    } 


    get length(){
        return getListItems(this.thing).length
    }



    // -----------------------------------------------------
    //  filters 
    // -----------------------------------------------------

    
    filter(propertyID, value){
        // Basic filter, returns new ItemList
        return filter(this.thing, propertyID, value )
    }
    


    
}








function getFirstItem(thisThing) {
    let items = thisThing.p.get("itemListElement").values;

    if (items.length == 0) {
        return null;
    }

    for (let item of items) {
        if (!item.p.previousItem || item.p.previousItem == null) {
            return item;
        }
    }

    for (let item of items) {
        if (item.p.position == 0) {
            return item;
        }
    }

    return null;
}

function getLastItem(thisThing) {
    let items = thisThing.p.get("itemListElement").values;

    if (items.length == 0) {
        return null;
    }
    for (let item of items) {
        if (item.p.nextItem === undefined || item.p.nextItem == null) {
            return item;
        }
    }
    return null;
}

function getListItems(thisThing) {
    let results = [];
    let t = thisThing.list.first;

    while (t && t != null) {
        results.push(t);
        t = t.p.nextItem;
    }

    return results;
}


function getItems(thing){

    let listItems = getListItems(thing)
    let items = listItems.map(x => x?.p.get('item').value)
    items = items.filter( x => x !== undefined && x != null);
    return items
}


function pushItem(thisThing, listItems) {
    
    listItems = ensureArray(listItems);

    // Prepare listItems
    let newListItems = []
    for (let listItem of listItems) {

        // Check if thing, else convert to one
        if (!listItem.record_type) {
            let newListItem = thisThing.new();
            newListItem.export.record = listItem;
            listItem = newListItem;
        }

        // Check if ListItem, else convert to one
        if (listItem.record_type != "ListItem") {
            
            let newListItem = thisThing.new("ListItem");
            newListItem.p.item = listItem;
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
            listItem.p.position = lastListItem.p.position + 1;
            listItem.p.previousItem = lastListItem;
            lastListItem.p.nextItem = listItem
        } else {
            listItem.p.position = 0;
        }
        lastListItem = listItem

    }

    // Add to property
    thisThing.p.add("itemListElement", newListItems);
    
    return; //listItem
}

function reCalculatePosition(thisThing) {
    return;
    let t = thisThing.list.first;

    var position = 0;

    while (t && t != null) {
        t.p.position = position;
        position = position + 1;
        t = t.p.nextItem;
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

    var p = item.p.previousItem;
    var n = item.p.nextItem;

    // Ressign before and after links to one another
    if (p) {
        p.p.nextItem = n;
    }
    if (n) {
        n.p.previousItem = p;
    }

    // Remove from list
    thisThing.deleteProperty("itemListElement", item);

    // Sets position
    item.p.position = null;

    // Sets position
    let position = 0;
    if (n) {
        position = n.p.position - 1;
        n.p.position = position;
    }

    let nextItem = n?.nextItem;
    while (nextItem) {
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }

    //thisThing.reCalculatePosition()

    // Remove links
    item.p.previousItem = null;
    item.p.nextItem = null;

    return;
}

function insertBefore(thisThing, referenceItem, refItemtoInsert) {
    let item;
    // Convert to ListItem if not one already
    if (!(refItemtoInsert instanceof KrListItem)) {
        refItemtoInsert = new KrListItem(refItemtoInsert);
        item = refItemtoInsert;
    } else {
        item = thisThing.list.getItem(refItemtoInsert.ref);
    }

    // Retrieve latest ListItem record

    var n = thisThing.list.getItem(referenceItem);
    var p = p.p.previousItem;

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
        (item.p.previousItem && item.p.previousItem != null) ||
        (item.p.nextItem && item.p.nextItem != null)
    ) {
        thisThing.remove(item.ref);
    }

    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;

    if (p) {
        p.p.nextItem = item;
    } else {
        p.p.nextItem = null;
    }
    if (n) {
        n.p.previousItem = item;
    } else {
        n.p.previousItem = null;
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
        position = p.p.position + 1;
    }

    item.position = position;
    let nextItem = item.p.nextItem;
    while (nextItem) {
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }

    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) {
        thisThing.p.add("itemListElement", refItemtoInsert);
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
        (item.p.previousItem && item.p.previousItem != null) ||
        (item.p.nextItem && item.p.nextItem != null)
    ) {
        thisThing.remove(item.ref);
    }

    var p = thisThing.list.getItem(referenceItem);
    var n = p.p.nextItem;

    // Change allocation
    item.p.previousItem = p;
    item.p.nextItem = n;

    if (p) {
        p.p.nextItem = item;
    } else {
        p.p.nextItem = null;
    }
    if (n) {
        n.p.previousItem = item;
    } else {
        n.p.previousItem = null;
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
        position = p.p.position + 1;
    }

    item.p.position = position;
    let nextItem = item.p.nextItem;
    while (nextItem) {
        nextItem.p.position = position + 1;
        position = position + 1;
        nextItem = nextItem.p.nextItem;
    }

    //  Add to list
    let t = thisThing.getItem(refItemtoInsert.ref);
    if (!t || t == null) {
        thisThing.p.add("itemListElement", refItemtoInsert);
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
    let items = thisThing.p.get("itemListElement").values;

    for (let item of items) {
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) {
            return item;
        }
    }
    return null;
}

function getByItem(thisThing, ref) {
    let items = thisThing.p.get("itemListElement").values;
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






function filter(thing, propertyID, value) {
    //

    // Convert to thing if one
    if(value['@type']){
        value = thing.new(value)
    }

    // Init new list
    let newList = thing.list.new()

    // Iterate through values
    for(let item of thing.list.items){
        let values = item.p.get(propertyID)?.values
        for(let v of values){
            if(v.record_type){
                if(v.eq(value)){
                    newList.list.add(item)
                    continue
                }
            } else {
                if(v == value){
                    newList.list.add(item)
                    continue
                }
            }   
        }
    }
    return newList

}

function filterAdvanced(thisThing, propertyValueSpecifications) {
    /**
     * Returns new Things with filtered items
     */

    let newThings = new KrThings();

    for (let item of getItems(thisThing)) {
        let result = propertyValueSpecifications.map((pvs) =>
            pvs.test(item.item),
        );

        if (result.every(Boolean) == true) {
            newThings.list.add(item.item);
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
