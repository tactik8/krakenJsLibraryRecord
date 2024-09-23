
import { ElementForm } from './src/class_element_form.js'

export class ClassKrakenElement{
    constructor(thing){
        this.thing = thing
    }

    form(url){

        return new ElementForm(this.thing, url)
        
    }
}