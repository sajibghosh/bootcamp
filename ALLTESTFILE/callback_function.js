
//callback function example:



function callme(name, cb){
    console.log('hello ' + name)
    
    cb(name)
    console.log('code is running')
}



callme('sajib', function(name){
    var newname = name.split('').join(' - ')
    console.log(newname)

})


callme('sajib', function(name){

    console.log(name.toUpperCase())
})


callme('sajib', function(name){

    console.log(name.toLowerCase())
})


callme('bangladesh', function(name){
    var newname = name.split('').join(' * ')
    console.log(newname)
})

//CALLBACK EXAMPLE FOR REDUCE, MAP, FILTER, ETC---------------------------------------------------------------


//making Foreach using callback-------------------------------------------------------------------------

function myforeach(arr, cb){
    for(var i = 0; i<arr.length; i++){
     
         cb(arr[i], i, arr)
    }

}

var item = [9, 89, 76, 56, 45, 45]

myforeach(item, function(saj, u, ele){

    console.log(saj)
    console.log(u)
    console.log(ele)

})


//making map function using simple trick

function mmap(arr ){
    var newarr = []
    for (var i =0; i<arr.length; i++){
        
     newarr.push(arr[i]*2)
    
}
return newarr
}


var item = [9, 89, 76, 56, 45, 45]

var c = mmap(item)
c



/// making map function using callback function----------------------------------------------------------------

function mymap(arr, cb){
   
  var newarry=[]

  for(var i = 0; i<arr.length; i++){

    var result = cb(arr[i], i, arr)
    
     newarry.push(result)
  }
  
 return newarry



}

var item = [9, 89, 76,]

var fol = mymap(item, function(data, u, i){
   console.log(data)
   console.log(u)
   console.log(i)
    
   return data * 10
} )

console.log(fol)

//-------------------------------creating filter function ---------------------------------------

function myfilter(arr, cb){
    var newarry = []
    for(var i =0; i<arr.length; i++)
    if(cb(arr[i])){

        newarry.push(arr[i])
    }
    return newarry
}

var tem = [9, 89, 76]

var rslt = myfilter(tem, function (data){

    return data > 8;
})

console.log(rslt)


//........................................creating reduce function...................................

var tem = [1, 2, 3, 5]

function myreduce(arr, cb){
    var result = null;
    
    for(var i =0; i<arr.length; i++){
        if(result===null){
            result = arr[i]
        }
        else{
            result = cb(arr[i], result)
        }
    }
    return result;
}

var tem1 = myreduce(tem, function (a, b){
    return a * b;
})
console.log(tem1)

//-----------------------------------------------------------------------------------------------------------

