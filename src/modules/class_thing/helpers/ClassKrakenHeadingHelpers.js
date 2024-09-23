import { krakenHelpers as h } from 'krakenhelpers'



export class ClassKrakenHeadingHelpers{
    constructor(thing){
        this.thing = thing

    }


    get heading1(){
        return this.getHeading1()
    }
    
    getHeading1(thing){

        thing = thing ?? this.thing
        
        switch(thing.record_type){
            case "Action":
                return thing.p.name || thing.refID
            default: 
                return thing.p.name || thing.refID
        }
    }

    get heading2(){
        return this.getHeading2()
    }
    
    getHeading2(thing){

        thing = thing ?? this.thing
        
        switch(thing.record_type){
            case "Action":
                return thing.p.name || thing.refID
                
            default: 
                return thing.p.name || thing.refID
        }
    }

    get textSummary(){
        return this.getTextSummary()
    }
    
    getTextSummary(thing){
        
        thing = thing ?? this.thing
        
        switch(thing.record_type){
            case "Action":
                let action_name = this.getHeading1(thing)
                let action_status = thing.p.actionStatus.replace('ActionStatus', "")  
                let action_content =  `* ${action_name} - ${action_status}`
                return action_content
            
            case "ItemList":
                let ItemList_name = this.getHeading1(thing)
                let ItemList_length = String(thing.list.length)
                let ItemList_content =  `${ItemList_name} (${ItemList_length})`
                return ItemList_content
            case "ListItem":
                let ListItem_name = this.getHeading1(thing)
                let ListItem_position = String(thing.list.length)
                let ListItem_content =  `[${ListItem_position}] ${ListItem_name}`
                return ListItem_content
            default: 
                return thing.p.name || thing.refID
        }
    }

    get textDetails(){
        return this.getTextDetails()
    }
    
    getTextDetails(thing){

        thing = thing ?? this.thing
        
        switch(thing.record_type){
            case "ItemList":
                let contentItems = []
                contentItems.push(this.getTextSummary(thing))
                thing.list.items.map(x => contentItems.push('- ' + String(this.getTextSummary(x))))
                let content = contentItems.join('\n')
                return content

            default: 
                return thing.p.name || thing.refID
        }
    }
}