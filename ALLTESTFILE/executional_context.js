var a = 10;

console.log(a)
 
function sqrs(a){

    var b =a*a

    if(b > 100){
        console.log('i am bigger')
    }
    else{
        b=b*2
    }
return b+a
}

a = 5

var c = sqrs(a)
console.log(c)


//Global executional context

//creational context--------------
//a=undefined.
//sqrs=reference
//c=undefined

//executional phase-------------
//a=10
//log
//a=5
//pasued and created the new context for the function
//start again with value 55
//c=55
//log c

//creational phase-----------
//a=undefined
//b=undefined

//executional phase---------
//a=5
//b=5*5
//b=25
//return 55 -------finish
//now after finish the function scope condition then the upper paused option will restart



//-----------------------------------another---------
var a = 10
 for(var i =0; i<a; i++){
     var c =function(){
         return i*i +a
     }
     var result = c()
     console.log(result)
 }

//global executional context-----------------
//creational phase
//a=undefined
//i=undefined
//c=undefined
//result=undefined

//executional phase
//a=10
//for loop start
//i=0; i=9
//c=ref  
//executional phase pause and start new executional context for funciton c()
//again start with the returnde value and assign into result
//result = value
//conosle.log
//update i++

//executional phase for function c()
//return 0*0+a
//result = 10, 


