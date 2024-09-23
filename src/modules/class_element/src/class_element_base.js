

export class ElementBase{

    constructor(element){

        this.element = element

    }



    initObject(){

        

        
    }

    
    // Data attributes


    get elementType(){

        if(this.element.classList.contains('krThing')){ return 'thing' }
        if(this.element.classList.contains('krProperty')){ return 'property' }
        if(this.element.classList.contains('krValue')){ return 'value' }
        return null
    }
    
    get record_type(){

        let element = this.element.closest('.krThing')
        if(element){
            return element.getAttribute('data-record-type')
        }
        return null
    }

    set record_type(value){

        let element = this.element.closest('.krThing')
        if(element){
            return element.setAttribute('data-record-type', value)
        }
        return null
    }

    get record_id(){

        let element = this.element.closest('.krThing')
        if(element){
            return element.getAttribute('data-record-id')
        }
        return null
    }

    set record_id(value){

        let element = this.element.closest('.krThing')
        if(element){
            return element.setAttribute('data-record-id', value)
        }
        return null
    }

    get propertyID(){
        let value = null
        let element = this.element.closest('.krProperty')
        if(element){
            value =  element.getAttribute('data-propertyID')
            if(value && value.includes('.')){
                value = value.split('.')[-1]
            }
        }
        return value
    }

    get propertyPath(){

        let element = this.element.closest('.krProperty')
        if(element){
            return element.getAttribute('data-propertyID')
        }
        return null
    }

    set propertyID(value){

        let element = this.element.closest('.krProperty')
        if(element){
            return element.setAttribute('data-propertyID', value)
        }
        return null
    }

    get valueID(){

        let element = this.element.closest('.krValue')
        if(element){
            return element.getAttribute('data-valueID')
        }
        return null
    }

    set valueID(value){

        let element = this.element.closest('.krValue')
        if(element){
            return element.setAttribute('data-valueID', value)
        }
        return null
    }
    

    // Object Class Attributes

    getThingObjects(){

        let classNameToGet  = 'krThing'

        let classNameToStopDepth = 'krProperty'

        let propertyElements = getDirectChilds(this.element, classNameToGet, classNameToStopDepth)

        let classObjects = propertyElements.map(x => this.elementToBaseElements(x))

        return classObjects

    }

    getThingObject(record_type, record_id){

        for(let t of this.getThingObjects){
            if(t.record_type == record_type && t.record_id == record_id){
                return t
            }
        }
        return null
        
    }

    getParentThingObject(){

        let element = this.element.closest('.krThing')
        let result = null
        if(element){
            result = new ElementBase(element)
        }
        return result
    }

    getPropertyObjects(){

        let classNameToGet = 'krProperty'

        let classNameToStopDepth = 'krThing'

        let propertyElements = getDirectChilds(this.element, classNameToGet, classNameToStopDepth)

        let  classObjects = propertyElements.map(x => this.elementToBaseElements(x))

        return classObjects
        
    }

    getPropertyObject(propertyID){
        for(let t of this.getPropertyObjects){
            if(t.propertyID == propertyID){
                return t
            }
        }
        return null
    }

    getParentPropertyObject(){

        let element = this.element.closest('.krProperty')
        let result = null
        if(element){
            result = new ElementBase(element)
        }
        return result
    }
    
    getValueObjects(){

        let classNameToGet = 'krValue'

        let classNameToStopDepth = 'krThing'

        let propertyElements = getDirectChilds(this.element, classNameToGet, classNameToStopDepth)

        let  classObjects = propertyElements.map(x => this.elementToBaseElements(x))

        return classObjects

    }

    getValueObject(valueID){

        for(let t of this.getPropertyObjects){
            if(t.valueID == valueID){
                return t
            }
        }
        return null

    }

    getParentValueObject(){

        let element = this.element.closest('.krValue')
        let result = null
        if(element){
            result = new ElementBase(element)
        }
        return result
    }

    // Get element

    get thingHeaderElement(){
        return getDirectChild(this.element, 'krThingHeader', 'krProperty')
    }
    get thingBodyElement(){
        return getDirectChild(this.element, 'krThingBody', 'krProperty')
    }
    get thingFooterElement(){
        return getDirectChild(this.element, 'krThingFooter', 'krProperty')
    }
    get thingActionElement(){
        return getDirectChild(this.element, 'krThingAction', 'krProperty')
    }

    
    get propertyHeaderElement(){
        return getDirectChild(this.element, 'krPropertyHeader', 'krThing')
    }
    get propertyBodyElement(){
        return getDirectChild(this.element, 'krPropertyBody', 'krThing')
    }
    get propertyFooterElement(){
        return getDirectChild(this.element, 'krPropertyFooter', 'krThing')
    }
    get propertyActionElement(){
        return getDirectChild(this.element, 'krPropertyAction', 'krThing')
    }
    

    get valueHeaderElement(){
        return getDirectChild(this.element, 'krValueHeader', 'krThing')
    }
    get valueBodyElement(){
        return getDirectChild(this.element, 'krValueBody', 'krThing')
    }
    get valueFooterElement(){
        return getDirectChild(this.element, 'krValueFooter', 'krThing')
    }
    get valueActionElement(){
        return getDirectChild(this.element, 'krValueAction', 'krThing')
    }


    // 

    elementToBaseElements(element){
        // Converts a an element to a class object

        let newObject = new ElementBase(element)
        
        return newObject

    }
    
}


function getDirectChild(element, classNameToGet, classNameToStopDepth){
    let results = getDirectChilds(element, classNameToGet, classNameToStopDepth)
    if(results.length == 0){ return null }
    if(results.length >= 1){ return results[0]}
}

function getDirectChilds(element, classNameToGet, classNameToStopDepth){

    let childs = []

    for(let e of element.children){

        if(e.classList.contains(classNameToGet)){
            childs.push(e)
        }
        if(!e.classList.contains(classNameToStopDepth)){
            let recursiveChilds = getDirectChilds(e, classNameToGet, classNameToStopDepth)
            if(recursiveChilds.length > 0){
                childs = childs.concat(recursiveChilds)
            }
        }
        
    }
    return childs
    
}