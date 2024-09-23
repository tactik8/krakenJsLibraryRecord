import { ElementBase } from "./class_element_base.js";

import { krakenHtml as k } from "krakenhtml";
import { KrakenSchemas } from "krakenschema";
import { krakenHelpers as h } from "krakenhelpers";


let initializedDb = {}


export class ElementForm {
    constructor(thing, url) {
        this._thing = thing;
        this._url = url;
        this._elementObject = null;
        this.initObject();
    }

    initObject() {
        this.initObjectContent()
        this.initMutationObserver()
        this.initElements()
    }

    initObjectContent() {
        let content = k.form.generic(
            this._url,
            this._thing.record_type,
            this._thing.record,
        );
        let temp = document.createElement("div");
        temp.innerHTML = content;
        let element = temp.firstElementChild;
        this._elementObject = new ElementBase(element);

        //Temp - correct inputs lacking key data
        let inputs = element.querySelectorAll("input");
        for (let i of inputs) {
            i.setAttribute("name", i.getAttribute("id"));
            let propertyElement = i.closest("krProperty");
            if (propertyElement) {
                propertyElement.setAttribute("name", i.getAttribute("id"));
            }
        }
    }
    

    initMutationObserver(){

        const config = { attributes: true, childList: true, subtree: true };

        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                for(let n of mutation.addedNodes){
                    this.initElement(n)
                }
            } else if (mutation.type === "attributes") {
            }
          }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(this._elementObject.element, config);
    }

    initElements(){

        // Add id to all objects
        
        let classes = ['krThing', 'krProperty', 'krValue']
       
        for(let c of classes){
            let q = '.' + c
            let elements = this._elementObject.element.querySelectorAll(q);
            for(let e of elements){ this.initElement(e) }
        }
    }
    

    initElement(element){

        // Check if already initialized
        if(element.id && element.id != null && element.id != ''){
            if(initializedDb?.[element.id] == true){ return }
        }

        // Init ID
        this.initElementId(element)

        // Init krTing
        if(element.classList.contains('krThing')){
            this.initPropertyDrag(element)
        }

        // Init krProperty
        if(element.classList.contains('krProperty')){
            this.initPropertyActionElement(element)
            this.initPropertyDragDrop(element)
            this.initPropertyDrag(element)
        }

        // Init krValue
        if(element.classList.contains('krValue')){
            this.initValueActionElement(element)
            this.initPropertyDragDrop(element)
            this.initPropertyDrag(element)
        }

        // Set as initizlized
        initializedDb[element.id] = true
        
    }

    
    initElementId(element){

        if(!element.id || element.id == null || element.id == ''){
            element.id = String(crypto.randomUUID())
        }
    }

    initPropertyActionElement(element){

        if(initializedDb?.[element.id] == true){ return }

        let thisObject = this
        let p = new ElementBase(element)
        p.propertyActionElement.addEventListener("click", (event) => {
            thisObject.addValue(p);
        });   
    }

    initValueActionElement(element){

        if(initializedDb?.[element.id] == true){ return }

        let thisObject = this
        let v = new ElementBase(element)
        v.valueActionElement.addEventListener("click", (event) => {
            thisObject.removeValue(v);
        });
    }

 
    initPropertyDragDrop(element){

        
        if(initializedDb?.[element.id] == true){ return }

        let thisObject = this
        let p = new ElementBase(element)
        
        p.element.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        
        p.element.addEventListener("drop", (event) => {
            event.preventDefault();
            event.stopPropagation()

           
            let itemNo = 0
            for (const item of event.dataTransfer.items) {
                if (item.kind === "string") {
                    itemNo += 1

                    if(item.type == 'text/plain'){
                        item.getAsString(value => {

                            console.log('v', value)
                            try {
                                value = JSON.parse(value);
                                
                            } catch {

                                let tmp = document.createElement('div')
                                tmp.innerHTML = value
                                value = tmp.textContent
                            }
                            if(p.elementType == 'value'){
                                let parentP = p.getParentPropertyObject()
                                thisObject.removeValue(p);
                                thisObject.addValue(parentP, value);
                            } else {
                                thisObject.addValue(p, value);
                            }
                            
                        });
                    }
                }
            }
        });
    }


    initPropertyDrag(element){


        if(initializedDb?.[element.id] == true){ return }

        let thisObject = this
        let p = new ElementBase(element)

        element.draggable=true

        p.element.addEventListener("dragstart", (event) => {
            //event.preventDefault();
            event.stopPropagation()

            console.log('drag', thisObject.getRecord(p))

            event.dataTransfer.setData("text/plain", JSON.stringify(thisObject.getRecord(p)))

        });
        
        p.element.addEventListener("drag", (event) => {
             event.preventDefault();
            
        });
    }

    
    // Attributes

    get element() {
        return this._elementObject.element;
    }

    //


    get record(){
        return this.getRecord(this._elementObject)
    }
    
    getRecord(elementObject) {

        
        if(elementObject.elementType=='thing'){
            let record = {}
            for(let p of elementObject.getPropertyObjects()){
                let newRecord = this.getRecord(p)
                record = { ...record, ...this.getRecord(p) } 
            }
            return record
        }

        else if(elementObject.elementType=='property'){
            let record = {}
            record[elementObject.propertyID] = []
            for(let v of elementObject.getValueObjects()){
                record[elementObject.propertyID].push(this.getRecord(v))
            }
            
            return record
        }

        else if(elementObject.elementType=='value'){
            
            let values = []
            
            let things = elementObject.getThingObjects()
            
            if(things && things.length != 0){

                for(let t of things){
                    values = values.concat(this.getRecord(t))
                }
                
            } else {

                let inputs
                inputs = elementObject.element.querySelectorAll('input')
                for(let i of inputs){
                    values.push(i.value)
                   
                }

                inputs = elementObject.element.querySelectorAll('select')
                for(let i of inputs){
                    values.push(i.value)
                }
                
            }
            
            return values
            
        } 

        else {
            let results = []
            for(let t of elementObject.getThingObjects()){
                results.push(this.getRecord(t))
            }
            return results
        }
        
    }

    //

    addValue(propertyObject, value) {


        if(!propertyObject || propertyObject == null){ return }
        
        if(propertyObject.elementType != 'property'){
            return this.addValue(propertyObject.getParentPropertyObject(), value)
        }
        
        let s0 = KrakenSchemas.get(propertyObject.propertyID);
        let s = s0.expectedType;
        

        let noOfValues =
            propertyObject.propertyBodyElement.children.length;
        let propertyPath = propertyObject.propertyID.split(".");
        propertyPath[propertyPath.length - 1] =
            propertyPath[propertyPath.length - 1] +
            "[" +
            String(noOfValues) +
            "]";

        let content = k.form.json(
            s.jsonSchemaLight,
            value,
            propertyObject.propertyID,
            propertyPath,
        );
        let temp = document.createElement("div");
        temp.innerHTML = content;
        let newValueElement = temp.firstElementChild;

        let propertyBody = propertyObject.propertyBodyElement;
        propertyBody.appendChild(newValueElement);
    }

    removeValue(valueObject){

        valueObject.element.remove()
        
    }


}
