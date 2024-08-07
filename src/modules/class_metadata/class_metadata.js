


export class KrMetadata {
    /* Contains metadata to qualify a value

    attributes:
    - credibility or c:    
    - observationDate or d: 
    - record:         Returns all metadata in a dict
    - object:         The original source of the data
    - Instrument:     What brought the data over
    - validFrom
    - validThrough


    Methods
    - equal:     Returns true if comes from same object
    - lt:        Worst metadata in order of c and d
    - gt:        Best metadata in order of c and d
    - isValid    Returns true if date between validfrom validthrough
    

    */

    
    constructor(record) {
        this._record = {};
        
        if(!this._record.createdDate || this._record.createdDate == null){
            this._record.createdDate = new Date();
        }
        
    }

    get record(){
        return this._record;
    }

    getFullRecord(depth){
        return JSON.parse(JSON.stringify(this._record));
    }

    setFullRecord(value){
        this._record = JSON.parse(JSON.stringify(value));
    }

    getRefRecord(depth){
        return JSON.parse(JSON.stringify(this._record));
    }

    getSystemRecord(depth){
        return JSON.parse(JSON.stringify(this._record));
    }

    setSystemRecord(value){
        if(!value || value == null) { return }
        this._record = JSON.parse(JSON.stringify(value));
    }

    inheritMetadata(metadataRecord){

       
        let currentPosition = this.position;
        this.record = metadataRecord;
        this.position = currentPosition;
        
        
    }
    
    set record(value){
        if(!value){return;};
        let tempCreatedDate = this.createdDate
        this._record = JSON.parse(JSON.stringify(value));
        if(!this.createdDate || this.createdDate == null){
            this.createdDate = tempCreatedDate
        }
    }
    
    get credibility(){
        return this._record.credibility;
    }

    set credibility(value){
        this._record.credibility = value;
    }
    get c(){
        return this.credibility;
    }

    set c(value){
        this.credibility = value;
    }

    get createdDate(){

        let createdDate = this._record?.createdDate

        if(createdDate instanceof String){
            createdDate =  new Date(createdDate)
        }
        
        return createdDate
        
    }

    set createdDate(value){

        
        if(value instanceof Date){
            this._record.createdDate = value
        } else {
            try{
                this._record.createdDate = new Date(value)
            } catch (error) {
                console.log(error)
            }
        }
    }

    get position(){
        return this._record.position;
    }

    set position(value){
        this._record.position = value;
    }
    
    get observationDate(){
        return new Date(JSON.parse(this._record.observationDate || null));
    }

    set observationDate(value){
        if(value && value instanceof Date){
            this._record.observationDate = JSON.stringify(value);
        };
    }
    get d(){
        return this.observationDate;
    }

    set d(value){
        this.observationDate = value;
    }

    get validFrom(){
        return this._record.validFrom;
    }
    set validFrom(value){
        this._record.validFrom = value;
    }

    get validThrough(){
        return this._record.validThrough;
    }
    set validThrough(value){
        this._record.validThrough = value;
    }

    get object(){
        return this._record.object;
    }
    set object(value){
        this._record.object = value;
    }


    eq(other){
        return this.equal(other)
    }
    
    equal(other){
        // returns true if data comes from same object
        if (this.object != other.object){ return false }
        if (this.instrument != other.instrument){ return false }
        if (this.credibility != other.credibility){ return false }
        if ( this.observationDate != other.observationDate){ return false };
        return true;
    }


    isValid(comparisonDate=null){
        // Returns true if value is within velidFrom, validThrough. Uses today's date if not provided
        if(comparisonDate==null){
            comparisonDate = new Date();
        }

        if (this.validFrom && comparisonDate < this.validFrom)  { return False };
        if (this.validThrough && comparisonDate >= this.validThrough)  { return False }
        return True
    }
    
    gt(other, comparisonDate){

        
        if (!this.credibility && other.credibility) { return false};
        if (this.credibility && !other.credibility) { return true};

        if ( this.credibility > other.credibility){ return true };
        if ( this.credibility < other.credibility){ return false };


        if (!this.observationDate && other.observationDate) { return false};
        if (this.observationDate && !other.observationDate) { return true};

        if ( this.observationDate > other.observationDate){ return true };
        if ( this.observationDate < other.observationDate){ return false };

        if (!this.createdDate && other.createdDate) { return false};
        if (this.createdDate && !other.createdDate) { return true};

        if ( this.createdDate > other.createdDate){ return true };
        if ( this.createdDate < other.createdDate){ return false };

        if (!this.position && other.position) { return false};
        if (this.position && !other.position) { return true};

        if ( this.position > other.position){ return true };
        if ( this.position < other.position){ return false };
        
        return false;
    };

    lt(other){

        if (!this.credibility && other.credibility) { return true};
        if (this.credibility && !other.credibility) { return false};
        
        if ( this.credibility < other.credibility){ return true };
        if ( this.credibility > other.credibility){ return false };

        
        if (!this.observationDate && other.observationDate) { return true};
        if (this.observationDate && !other.observationDate) { return false};

        if ( this.observationDate < other.observationDate){ return true };
        if ( this.observationDate > other.observationDate){ return false };
        

        if (!this.createdDate && other.createdDate) { return true};
        if (this.createdDate && !other.createdDate) { return false};

        if ( this.createdDate < other.createdDate){ return true };
        if ( this.createdDate > other.createdDate){ return false };

        if (!this.position && other.position) { return true};
        if (this.position && !other.position) { return false};

        if ( this.position < other.position){ return true };
        if ( this.position > other.position){ return false };
        
        return false;
    };

    
}