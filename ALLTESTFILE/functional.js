
 //function stored as obj and array
    
 var arr = ['jso', 'joshdf', fun, 909, function (){console.log('jodi ata')}]
    
 obj = {

     ghosh : function(){console.log('aksathe royeci')},
     name : 'sajib'
     
 }


//............................................
//Pure function{input and output must be the same}
var func = function(name){
 return name.length;
}

var b = func('sajib ghosh')
console.log(b) 


//impure function the input and output will not same

var func = function(name){
var rand = Math.random() * 10 + 1
return name.length + rand;
}

var b = func('sajib ghosh')
console.log(b)

//..........................................
//impure function where the value of a is  15 at the last;
var a = 10;
function hk(){
    a=a+5
}
hk()
a
//------------------------------------------
//impure function
var obj = {

    a:55
}

function chan(value){
value.a= 100;
console.log(value)

}
chan(obj)
console.log(obj)

//---------------------------------------------
//pure function
var g =10
function sajib(ghosh){
 ghosh =100;
 console.log(ghosh) 
}
sajib(g)
g

//--------------------- impure to pure  immuteabel -----------------

var obj = {

    a:55
}

function chan(value){
    var newvalue = Object.assign({}, value )
newvalue.a= 100;
console.log(newvalue)

}
chan()
obj

//------------------------return inner and outer function---------
function outer (){

    console.log('i am the  host function')
    
       function inner (){
           console.log('i am the return function')
       }
    
       return inner
    
    }
    
    var a = outer()()


    //--------------------------------------exemple of outer inner function
    function welcome (msg){

        return function (name){
        
        console.log(msg + ' ' + name)
        
        }
        }
        
        var com = welcome('hello')('bangladku')
//........................................create a power function
//create a  power function with the help of return function.
function power(base){
    var result=1;
    return function(num){
    for(var i=0; i<base; i++){
     result=result*num
         
    }
    
    
    return result
    }
    
    }
    
    var demo = power(5)(6)
    demo       
    
//............................................
//function as an argument

function abc (a, b, bla ){
    return bla(a,b)
 }
 
 function sum(a,b){
     return a + b
 }
 
 function sub (a,b){
     return a-b
 }
 
 
 
 rslt1= abc(10,20,sum)
 console.log(rslt1)
 
 rslt2= abc(10,20,sub)
 console.log(rslt2)
 
 rslt3= abc(10,20, function (a,b){
     return a*b
 })
 console.log(rslt3)
 //--------------------------------------------------
 var num = [1,2,3,4,5,6,7,8,9];


// map() making in call back function;
function myMap(value,cbf) {
    let sum =[];
    for (let i = 0; i <num.length; i++) {
        sum.push(cbf(value[i]));
        
    }

    return sum;
}


var result = myMap(num,function (item) {
    return item + 10 ;
})

result;