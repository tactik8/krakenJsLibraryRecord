
let API_ACTIONS_LOG = []

import { krakenHelpers as k } from 'krakenhelpers'




export class ClassKrakenApiHelpers{
    constructor(thing){
        this.thing = thing

        this._apiConfig = {}
        this._params = {}
        this._req = null
        this.instrument = { 
            "@type": "WebAPI", 
            "@id": "ClassKrakenApiHelpers", 
            "name": "ClassKrakenApiHelpers"
        }
    }
    
    // -----------------------------------------------------
    //  I/O 
    // -----------------------------------------------------

    async get(){

        let action = this.thing.action.new()
        action.a.name = `Get record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {
            
            let results = await k.api.get(this.apiUrl, null, this.thing.ref)
            this.thing.export.system = results
            action.a.setCompleted()
            action.a.result = this.thing
            
        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action

    }

    

    async search(){
        return await this.getThings()
    }
        
    async getThings(){

        let action = this.thing.action.new()
        action.a.name = `Get record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {

            let results = await k.api.get(this.apiUrl, null, this.params)
            this.thing.export.system = results
            action.a.setCompleted()
            action.a.result = this.thing

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action

    }


    async getThingRelated(){

        let action = this.thing.action.new()
        action.a.name = `Get record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {

            let things = this.thing.list.new()

            let additionalPath = `/${thing.record_type}/${thing.record_id}/related`

            let results = await k.api.get(this.apiUrl, additionalPath)
            things.export.system = results
            action.a.setCompleted()
            action.a.result = things

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
        
    }


    async post(){

        let action = this.thing.action.new()
        action.a.name = `Get record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {
            let results = await k.api.post(this.apiUrl, null, this.thing.export.system)
            action.a.setCompleted()
            action.a.result = this.thing

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
    }
    
    

    async delete(){

        let action = this.thing.action.new()
        action.a.name = `Delete record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {
            let results = await k.api.delete(this.apiUrl, null, this.thing.ref)
            action.a.setCompleted()
            action.a.result = this.thing

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
    }


    
    // -----------------------------------------------------
    //  Custom attributes 
    // -----------------------------------------------------

    get apiConfig(){
        return this._apiConfig
    }

    set apiConfig(value){
        this._apiConfig = value
    }
   
    get apiUrl(){
        return this._apiConfig.apiUrl
    }
    set apiUrl(value){
        this.apiConfig.apiUrl = value
    }

    get apiCollection(){
        return this._apiConfig.apiCollection
    }
    set apiCollection(value){
        this.apiConfig.apiCollection = value
    }
    
    get record_type(){
        return this._params.record_type 
    }
    set record_type(value){
        if(!value || value == null){ return }
        this._params.record_type = value
    }

    get record_id(){
        return this._params.record_type 
    }
    set record_id(value){
        if(!value || value == null){ return }
        this._params.record_type = value
    }

    get query(){
        let q = this._params.query || {}
        return q
    }
    set query(value){
        if(!value || value == null){ return }
        this._params.query = value
    }

    get limit(){
        return this._params.limit 
    }
    set limit(value){
        this._params.limit = value
    }

    get offset(){
        return this._params.offset 
    }
    set offset(value){
        this._params.offset = value
    }

    get orderBy(){
        return this._params.orderBy 
    }
    set orderBy(value){
        this._params.orderBy = value
    }

    get orderDirection(){
        return this._params.orderDirection 
    }
    set orderDirection(value){
        this._params.orderDirection = value
    }


    get params(){

        const params = {}

        if(this.query && this.query != null){
            params['query'] = JSON.stringify(this.query)
        }
        if(this.offset && this.offset != null){
            params['offset'] = this.offset
        }
        if(this.limit && this.limit != null){
            params['limit'] = this.limit
        }
        if(this.orderBy && this.orderBy != null){
            params['orderBy'] = this.orderBy
        }
        if(this.orderDirection && this.orderDirection != null){
            params['orderDirection'] = this.orderDirection
        }

        return params
    }


    get req(){
        return this._req
    }

    set req(value){
        this._req = value

        this.query = value.query["query"] || value.query["q"];
        this.offset = value.query["offset"] || value.query["o"];
        this.limit = value.query["limit"] || value.query["l"];
        this.orderBy = value.query["orderBy"] 
        this.orderDirection = value.query["orderDirection"] 
        this.record_type = value.query["record_type"]  
        this.record_type = value.query["@type"]  
        this.record_type = value.params["record_type"]  
        this.record_type = value.params["@type"]  
        this.record_id = value.query["record_id"]  
        this.record_id = value.query["@id"]  
        this.record_id = value.params["record_id"]  
        this.record_id = value.params["@id"]  
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    get actionsLog(){
        let logs = this.thing.a.getLogs('instrument', this.instrument)
        return logs
    }
    
    
}