
let API_ACTIONS_LOG = []

export class ClassKrakenApiHelpers{
    constructor(thing){
        this.thing = thing

        this._apiConfig = {}
        this._params = {}
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
        
        const requestOptionsGet = {
            method: 'GET',
            headers: this.headers
        };

        try {
            let url = this.url
            url.search = new URLSearchParams(this.thing.ref);
            
            const response = await fetch(url, requestOptionsGet)

            if(response.status != 200){  
                throw new Error(String(response.status) + ' ' +response.statusText);
            }
            
            this.thing.export.system = await response.json() 
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
        action.name = `Get records `
        action.a.instrument = this.instrument

        
        const requestOptionsGet = {
            method: 'GET',
            headers: this.headers
        };

        try {
            let url = this.url
            url.search = new URLSearchParams(this.params);
            const response = await fetch(url, requestOptionsGet)
            
            if(response.status != 200){  
                throw new Error(String(response.status) + ' ' +response.statusText);
            }
            let results = await response.json()
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
        action.name = `Get related records to ${this.thing.refID}`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        const requestOptionsGet = {
            method: 'GET',
            headers: this.headers
        };

        try {

            let additionalPath = `/api/${this.apiCollection}/${thing.record_type}/${thing.record_id}/related`
            let url = new URL(additionalPath, this.apiUrl);
            
            url.search = new URLSearchParams();
            const response = await fetch(url, requestOptionsGet)
            
            if(response.status != 200){  
                throw new Error(String(response.status) + ' ' +response.statusText);
            }
                        
            let relatedThings = this.thing.list.new()
            relatedThings.export.system = await response.json()  

            action.a.setCompleted()
            action.a.result = relatedThings
           
        } catch (error) {
            action.setFailed(String(error))
        }

        return action

    }


    async post(){

        let action = this.thing.a.new()
        action.a.name = `Post record (${this.thing.refID})`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        //Post 
        try { 
            let requestOptions = {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(this.thing.export.system)
            };
            let url = String(this.url)
            
            const response = await fetch(url, requestOptions)
            
            if(response.status != 200){  
                throw new Error(String(response.status) + ' ' +response.statusText);
            }
            
            action.a.setCompleted()
           
        } catch (error) {
            action.a.setFailed(String(error))
        }

        return action
    }

    async delete(){

        let action = this.thing.a.new()
        action.p.name = `Delete record (${this.thing.refID})`
        action.a.object = this.thing.ref
        action.a.instrument = this.instrument

        const requestOptionsGet = {
            method: 'DELETE',
            headers: this.headers,
        };

        try{
            let url = this.url
            url.search = new URLSearchParams(this.thing.ref);
            const response = await fetch(url, requestOptionsGet)
            if(response.status != 200){  
                throw new Error(String(response.status) + ' ' + response.statusText);
            }
            action.a.setCompleted()
           
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
        this._params.record_type = value
    }

    get record_id(){
        return this._params.record_type 
    }
    set record_id(value){
        this._params.record_type = value
    }

    get query(){
        return this._params.query 
    }
    set query(value){
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


    get url(){

        let additionalPath = '/api/' + this.apiCollection
        let new_url = new URL(additionalPath, this.apiUrl);
        return new_url
    }


    
    get headers(){

        return {
            "Content-Type": "application/json",
            "Authorization": "bob"
        };

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


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    get actionsLog(){
        let logs = this.thing.a.getLogs('instrument', this.instrument)
        return logs
    }
    
    
}