exports.getOutput=function(data){
    var returnData={
        title:data.Title,
        year:data.Year,
        runtime:data.Runtime,
        director:data.Director,
        production:data.Production
    }
    return JSON.stringify(returnData)
}

exports.getOutput1=function(data){
    let result=data.Search
    var returnResult=[]
    for(i=0;i<5;i++){
        returnResult.push(result[i])
    }
    return returnResult
}

exports.getOutput2=function(data){
    let result=data.Search
    var arr=[]
    for(i=0;i<5;i++){
        arr.push(result[i].Title)
    }
    return arr
}