
let ACTIONS_LOG = []

export class ClassKrakenActionHelpers{

    constructor(thing) {
        this.thing = thing
    }


    // -----------------------------------------------------
    //  Logs 
    // -----------------------------------------------------

    
    get logs(){
        return this.getLogs()
    }
    
    getLogs(propertyID, value){
        // Returns ListItem with all actions
        let actionsLogThing = this.thing.list.new()
        actionsLogThing.list.add(ACTIONS_LOG)

        if(propertyID && propertyID != null){
            actionsLogThing = actionsLogThing.list.filter(propertyID, value)
        }

        return actionsLogThing
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    
    new(){
        let action = this.thing.new('Action')
        action.a.startTimer()
        ACTIONS_LOG.push(action)
        return action
    }

    get name(){
        return this.thing.p.get('name').value
    }

    set name(value){
        this.thing.p.set('name', value)
    }

    
    get object(){
        let object = this.thing.p.get('object').value
        if(!object){
            this.setProperty('object', this.thing.new('Thing'))
        }
        return this.thing.p.get('object').value
    }

    set object(value){
        this.thing.p.set('object', value)
    }

    get instrument(){
        return this.thing.p.get('instrument').value
    }

    set instrument(value){
            this.thing.p.set('instrument', value)
    }

    get result(){
        return this.thing.p.get('result').value
    }

    set result(value){
            this.thing.p.set('result', value)
        this.setCompleted()
    }

    get startTime(){
        return this.thing.p.get('startTime').value
    }

    set startTime(value){
        this.thing.p.replace('startTime', null, value)
    }

    get endTime(){
        return this.thing.p.get('endTime').value
    }

    set endTime(value){
            this.thing.p.set('endTime', value)
    }

    get actionStatus(){
        return this.thing.p.get('actionStatus').value
    }

    set actionStatus(value){
        this.thing.p.replace('actionStatus', null, value)
    }

    get error(){
        return this.thing.p.get('error').value
    }

    set error(value){
            this.thing.p.set('error', value)
    }


    // time shortcuts

    start(){
        this.startTimer()
    }
    startTimer(){

        let date = new Date()
        this.startTime = date
        this.actionStatus = 'ActiveActionStatus'
    }

    stop(){
        this.stopTimer()
    }
    stopTimer(){
        this.endTime = new Date()
    }

    duration(){
        let startTime = this.startTime
        let endTime = this.endTime || new Date()

        if(startTime){
            return endTime - startTime
        }
        return undefined
    }


    // Action Status shortcuts

    isSuccess(){
        return this.actionStatus == "CompletedActionStatus"
    }

    setCompleted(){
        this.actionStatus = "CompletedActionStatus"
        if(!this.startTime){ this.startTimer() }
        if(!this.endTime){ this.stopTimer() }
        this.error = undefined
    }

    setFailed(errorMessage){
        this.actionStatus = "FailedActionStatus"
        this.error = errorMessage
    }

    // HTML shortcuts

    get htmlStatus(){
        if(this.isSuccess == true){
            return 200
        } else {
            return 400
        }
    }

    get htmlContent(){
        if(!this.result || this.result== null) { return null }
        if(Array.isArray(this.result)){
            return this.result.map(x=> x.getSystemRecord(10))
        } else if (this.result.record_type){
            return this.result.getSystemRecord(10)
        } else {
            return this.result
        }
    }

    // Text output
    get textContent(){

        let date = convertToDate(this.startTime)
        if(date && date != null){ date = date.toISOString().split('T')[0]}

        let time = convertToDate(this.startTime)
        if(time && time != null){ time = time.toLocaleTimeString()}

        let status = this.actionStatus
        if(status && status != null){ status = status.replace('ActionStatus', '').toUpperCase()}

        let name = this.name
        if(!name || name == null){ name = ''}

        let error = this.error
        if(!error || error == null){ error = ''}

        let record_type = this.record_type
        if(record_type && record_type != null){ record_type = record_type.replace('Action', '')}

        let content = `${date}, ${time} - ${status || ''} - ${record_type || ''} ${name || ''} ${error || ''}`
        return content
    }


}



function convertToDate(value) {
    if (value instanceof Date && !isNaN(value)) {
        return value;
    }

    const date = new Date(value);
    if (!isNaN(date.getTime())) {
        return date;
    }

    return null;
}