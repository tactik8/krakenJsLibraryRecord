



function getLimit(thisThing){
    return thisThing._limit
}    

function setLimit(thisThing, value){
    thisThing._limit = value
} 

function getOffset(thisThing){
    return thisThing._offset
}    

function setOffset(thisThing, value){
    thisThing._offfunction set= value
} 

function getOrderBy(thisThing){
    return thisThing._orderBy
}    

function setOrderBy(thisThing, value){
    thisThing._orderBy = value
} 

function getOrderDirection(thisThing){
    return thisThing._orderDirection
}    

function setOrderDirection(thisThing, value){
    thisThing._orderDirection = value
} 

function getQuery(thisThing){
    return thisThing._query
}    

function setQuery(thisThing, value){
    thisThing._query = value
} item


function getBasePath(thisThing){
    return thisThing._basePath
}    

function setBasePath(thisThing, value){
    thisThing._basePath = value
} 

function getParams(thisThing){

    let params = {}
    if(!thisThing._params || thisThing._params == null) {
        return {}
    } else {
        params = thisThing._params
    }

    let keys = ['limit', 'offset', 'orderBy', 'orderDirection']
    for(let k of keys){
        let v = this[k]
        if(v && v != null){
            params[k] = v
        }
    }        
    return params
}    

function setParams(thisThing, value){
    thisThing._params = value
} 
