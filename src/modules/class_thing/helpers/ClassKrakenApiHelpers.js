
let API_ACTIONS_LOG = []

import { krakenHelpers as k } from 'krakenhelpers'



export class ClassKrakenApiHelpers{
    /**
     * Attributes:
     * - apiUrl: The base url to call the api
     * - apiBasePath: The base path of the api (api)
     * - apiCollection: The base collection to use (test1)
     */
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

        // Load from system 

        //this.apiUrl = process.env.apiUrl || null
        //this.apiBasePath = process.env.apiBasePath || null
        //this.apiCollection = process.env.apiCollection || null

        
    }
    
    // -----------------------------------------------------
    //  I/O 
    // -----------------------------------------------------


    async getThing(){
        return await this.get()
    }
    
    async get(){

        
        let action = this.thing.action.new()
        action.a.name = `Get record ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {
            let results = await k.api.get(this.apiUrl, this.path, this.thing.ref)
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
        action.a.name = `Get records `
        action.a.instrument = this.instrument

        try {
            let results = await k.api.get(this.apiUrl, this.path, this.params)
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
        action.a.name = `Get thing related ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument
        
        try {

            let things = this.thing.list.new()

            
            let results = await k.api.get(this.apiUrl, this.path + '/related' , this.thing.ref)
            
            things.export.system = results
            action.a.setCompleted()
            action.a.result = things

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
        
    }

    async autoComplete(textQuery){

        let action = this.thing.action.new()
        action.a.name = `Get thing related ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        try {

            let things = this.thing.list.new()

            let q = this.params
            q.propertyID = "_heading1"
            q.textQuery = textQuery
           
            let results = await k.api.get(this.apiUrl, this.path + '/autoComplete' , q)

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
            let results = await k.api.post(this.apiUrl, this.path, this.thing.export.system)
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
            let results = await k.api.delete(this.apiUrl, this.path, this.thing.ref)
            action.a.setCompleted()
            action.a.result = this.thing

        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
    }


    async getCollections(){

        let action = this.thing.action.new()
        action.a.name = `Get collections`
        action.a.instrument = this.instrument
        
        let path = ''
        if(this.apiBasePath && this.apiBasePath != null){
            path = this.apiBasePath + '/collection'
        } else {
            path = 'collection'
        }
        
        try {
            let results = await k.api.get(this.apiUrl, path)

            this.thing.export.system = results
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


    get path(){
        return [this.apiBasePath, this.apiCollection].join('/')
    }
    
    get apiConfig(){
        return this._apiConfig
    }

    set apiConfig(value){
        this._apiConfig = value
    }
   
    get apiUrl(){
        return this.apiConfig.apiUrl
    }
    
    set apiUrl(value){
        if(!value || value == null){ return }

        if(!value.startsWith('http')){
            value = 'https://' + value
        }
        
        let url = new URL(value)
        this.apiConfig.apiUrl = 'https://' + url.hostname
        this.apiConfig.apiBasePath = url.pathname
    }

    get apiCollection(){
        return this.apiConfig.apiCollection
    }
    set apiCollection(value){
        if(!value || value == null){ return }
        this.apiConfig.apiCollection = value
    }

    get apiBasePath(){
        return this.apiConfig.apiBasePath
    }
    set apiBasePath(value){
        if(!value || value == null){ return }
        this.apiConfig.apiBasePath = value
    }
    
    get record_type(){
        return this._params.record_type 
    }
    set record_type(value){
        if(!value || value == null){ return }
        this._params.record_type = value
    }

    get record_id(){
        return this._params.record_id
    }
    set record_id(value){
        if(!value || value == null){ return }
        this._params.record_id = value
    }

    get query(){
        let q = this._params.query 
        if(!q || q ==null){
            this._params.query = {}
        }
        return this._params.query
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

        if(this.record_type && this.record_type != null){
            params['record_type'] = this.record_type
        }

        if(this.record_id && this.record_id != null){
            params['record_id'] = this.record_id
        }

        return params
    }


    get req(){
        return this._req
    }

    set req(value){
        this._req = value

        this.apiCollection = value.params["collection"]  
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
        this.actionName = value.params["actionName"]  
        if(!this.apiUrl || this.apiUrl == null){
            this.apiUrl = value.hostname + '/api'
        }
        

        
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    get actionsLog(){
        let logs = this.thing.a.getLogs('instrument', this.instrument)
        return logs
    }
    
    
}