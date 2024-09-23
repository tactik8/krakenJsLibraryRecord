import { krakenHelpers as h } from 'krakenhelpers'


// todo: add ability to change starting position from 0


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

    get listItems(){
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


function getListItem(thisThing, record_type, record_id){
    // Retrieve list item by giving either, record, thing or record or thing of its item

    record_id = record_id || record_type?.record_id || record_type?.['@id']
    record_type = record_type?.record_type || record_type?.['@type'] || record_type

    if(h.isNull(record_type)){ return null }
    
    for(let l of thisThing.p.get('itemListElement')?.values || []){
        if(l?.record_type == record_type && l?.record_id == record_id){
            return l
        }
        let item = l.p.item
        if(item?.record_type == record_type && item?.record_id == record_id){
            return l
        }
    }
    return null
}

function getListItems(thisThing) {

    let listItems = thisThing.p.get('itemListElement').values

    function sortListItems(item1, item2){

        let item1Position = item1.p.position || null
        let item2Position = item2.p.position || null

        if(h.isNull(item1Position) && h.isNull(item2Position)){
            return 0
        }

        if(h.isNull(item1Position) && h.isNotNull(item2Position)){
            return -1
        }

        if(h.isNotNull(item1Position) && h.isNull(item2Position)){
            return 1
        }
        
        if(item1.p.position < item2.p.position){
            return -1
        }  
        if(item1.p.position > item2.p.position){
            return 1
        }    
        return 0 
    }

    // sort by position
    //listItems.sort(getListItems)
    
    return listItems;
}


function getFirstItem(thisThing) {

    let listItems = getListItems(thisThing)
    
    if(h.isNull(listItems)){ return null }

    // Get item 1st position 0
    for(let l of listItems){
        if(h.isNotNull(l.p.position) && l.p.position === 0){
            return l
        }
    }
    
   // Get item no previousItem if only one
    let filteredItems = listItems.filter(x => h.isNull(x?.p?.previousItem))
    if(filteredItems.length == 1){
        return filteredItems[0]
    }

    // Else 
    let firstItem = listItems[0]
    return firstItem
    
}

function getLastItem(thisThing) {
    let listItems = getListItems(thisThing)

    if(h.isNull(listItems)){ return null }

    if(listItems.length == 1){ return listItems[0] }

    let filteredItems = listItems.filter(x => h.isNotNull(x?.p?.position))
    if(filteredItems.length == 1){
        return filteredItems[0]
    } else {
        return filteredItems[filteredItems.length - 1]
    }

    // Else 
    let lastItem = listItems[listItems.length -1]
    
    return lastItem
}


function getItems(thing){

    let listItems = getListItems(thing)
    listItems = ensureArray(listItems)
    let items = listItems.map(x => x?.p.get('item').value)
    items = items.filter( x => !h.isNull(x));
    items = ensureArray(items)
    return items
}


function pushItem(thisThing, listItems) {

    listItems = ensureArray(listItems);

    // Prepare listItems
    let newListItems = []
    let lastItem = getLastItem(thisThing)
    
    for (let listItem of listItems) {

        listItem = createListItem(thisThing, listItem)
        if(h.isNull(lastItem)){
           
            listItem.p.position = 0
            thisThing.p.add('itemListElement', listItem)
            
        } else {

            listItem.p.position = lastItem.p.position + 1
            insertAfter(thisThing, lastItem, listItem)
           
        }
        lastItem = listItem
    }

    recalculatePosition(thisThing)
    
    return; 
}

function recalculatePosition(thisThing){

    
    let position = 0
    let item = getFirstItem(thisThing)

    while (h.isNotNull(item)){

        if(item.p.get('position')?.value != position){
            item.p.set('position', position)
        }
        let nextItem = item.p.get('nextItem')?.value
        item = getListItem(thisThing, nextItem)
        
        position += 1
        
    }

    return

}


// -----------------------------------------------------
//  CRUD for items
// -----------------------------------------------------

function remove(thisThing, itemRef) {
    var item = getListItem(thisThing, itemRef)
    if (!item) {
      
        return null;
    }
   
    var p = item.p.previousItem;
    var n = item.p.nextItem;

    // Ressign before and after links to one another
    if (h.isNotNull(p)) {
        p.p.nextItem = n;
    }
    if (h.isNotNull(n)) {
        n.p.previousItem = p;
    }

    // Remove from list
    thisThing.p.delete('itemListElement', item)

    
    let p1 = thisThing.p.get('itemListElement')


    // Sets position
    recalculatePosition(thisThing)
    
    // Remove links
    item.p.previousItem = null;
    item.p.nextItem = null;

    return;
}


function createListItem(thisThing, listItem){
    // Create a list item given a listitem, thing, record or item

    // Convert to thing
    if(!listItem?.record_type){
        listItem = thisThing.new(listItem)
    }

    // Add lsitItem if not one
    if(listItem.record_type != 'ListItem'){
        let newListItem = thisThing.new()
        newListItem.record_type = 'ListItem'
        newListItem.p.add('item', listItem)
        listItem = newListItem
    }

    return listItem
    
}




function insertBefore(thisThing, referenceItem, itemToInsert) {


    // Get inputItem (create if not in listitemelement)
    let item = getListItem(thisThing, itemToInsert)
    if(h.isNull(item)){
        item = createListItem(thisThing, itemToInsert)
    } 

    // Get referenceItem
    let n = getListItem(thisThing, referenceItem)

    if(h.isNull(n)){ throw('Error, invalid reference item')}
    
    // Get referenceitem previous item
    let p = n.p.get('previousItem')?.value || null
    p = getListItem(thisThing, p)
    
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
    remove(thisThing, item)

    
    // Change allocation
    item.p.previousItem = p
    item.p.nextItem = n

    if (p) {
        p.p.nextItem = item
    }
    if (n) {
        n.p.previousItem = item
        
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
    


    // Add item
    thisThing.p.add("itemListElement", item);

    recalculatePosition(thisThing)

    
    return item;
}

function insertAfter(thisThing, referenceItem, itemToInsert) {
    /**
     *
     */

    // Get inputItem (create if not in listitemelement)
    let item = getListItem(thisThing, itemToInsert)
    if(h.isNull(item)){
        item = createListItem(thisThing, itemToInsert)
    } 

    // Get referenceItem
    let p = getListItem(thisThing, referenceItem)

    if(h.isNull(p)){ throw('Error, invalid reference item')}

    // Get referenceitem previous item
    let n = p.p.nextItem || null
    n = getListItem(thisThing, n)

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
    remove(thisThing, item)

    // Change allocation
    item.p.previousItem = p
    item.p.nextItem = n

    if (p) {
        p.p.nextItem = item
    }
    if (n) {
        n.p.previousItem = item

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


    if(1 == 0 ){
        // Sets position
        let position = 0;
        if (p) {
            position = p.p.position + 1;
        }


        let whileItem = item
        while(!h.isNull(whileItem)){
            whileItem.p.set('position', position);
            whileItem = whileItem.p.get('nextItem')?.value || null;
            position = position + 1;
        }
    }

    // Add item
    thisThing.p.add("itemListElement", item);

    recalculatePosition(thisThing)
    return item;
}

function getItem(thisThing, ref) {
    

    return getListItem(thisThing, ref)
    if (!ref) {
        return null;
    }

    if (ref && ref.ref) {
        ref = ref.ref;
    }

    if ( h.isNull(ref?.['@type'])) {
        return null;
    }

    if (ref["@type"] == "ListItem") {
        return getByListItem(thisThing, ref);
    } else {
        return getByItem(thisThing, ref);
    }
}

function getByListItemOLD(thisThing, ref) {
    let items = thisThing.p.get("itemListElement").values;

    for (let item of items) {
        if (item.record_type == ref["@type"] && item.record_id == ref["@id"]) {
            return item;
        }
    }
    return null;
}

function getByItemOLD(thisThing, ref) {
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
    if (h.isNull(thisThing._params)) {
        return {};
    } else {
        params = thisThing._params;
    }

    let keys = ["limit", "offset", "orderBy", "orderDirection"];
    for (let k of keys) {
        let v = this[k];
        if (!h.isNull(v)) {
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
