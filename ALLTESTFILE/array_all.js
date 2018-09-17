var source = 250;
var sorces = [ source+1, source+2, source*2, source*10]
console.log(sorces)

//array() it is called the array constructr which is just define the five array length when -
var b = new Array(5);
console.log(b)


//this consotructor works as the normal array when it is oner more item in array
var bb = new Array(5, 4, 3, 2, 1, "testing, testing");

//inserting element inside the arrray
var b = [4,'flower', 'car']
b[3]='home'
i = 4;
b[i] = 'fourth value'
b
console.log(b.length)

//Array length
var num = ['a','b','c'].length
num

var arr = ['aks' ,' sjaib']
console.log(arr[0].length)

//array adding---------------------------------

var tnum = ['mithun']
tnum.push('sajib')

console.log(tnum)

tnum[2]= 'sacchidananda'
tnum

tnum.push('rudro', 'ghosh')
console.log(tnum)

tnum.length
console.log(tnum.length)

//array deleting

delete tnum[0]

tnum
console.log(0 in tnum)
console.log (tnum.length)

//array checking by index using in .

tnum
console.log(1 in tnum)

//---------------------------------------------------------------

//multidimentional array example


var table = new Array(10); //>>>>>>>>>>>>>>>>----------array means Array not others

// Create a multidimensional array
var table = new Array(10); // 10 rows of the table
for(var i = 0; i < table.length; i++)
table[i] = new Array(10); // Each row has 10 columns


for(var row = 0; row < table.length; row++) {
    for(col = 0; col < table[row].length; col++) {
    table[row][col] = row*col;
    }
    }
    
var pro = table[4][5]
pro


//array join method...............................................................
var abc = [1 , 2 , 3]

console.log(abc.join(' '))

var name = ['sajib', 'appele']
console.log(name.join('-'))

var a = new Array(20)
console.log(a.join('-'))

//array reverse method-----------------------------------------

var a = ['sajib', 'ghosh', 'lutia']
console.log(a.reverse().join(' * '))


//array sort method


//to do case insesitive sort-----------------------------
var alp = ['dog', 'CAT', 'aPPLE', 'book' , 'br']


alp.sort(function(a,b){

    var s = a.toUpperCase()
    var t = b.toUpperCase()
   
    if(s < t) return -1
    if(s > t) return 1
    return 0

})
console.log(alp)


var a = new Array ('banana', 'cherry', 'apple',undefined)
console.log(a.sort().join(' $ '))


var alp = ['dog', 'CAT', 'aPPLE', 'book']

var alpha = [33, 4, 1111, 222, 9999]

console.log(alpha.sort())

alpha.sort(function(a,b){return a-b})
alpha

alpha.sort(function(a,b){return b-a})
alpha

//array concate method-------------------
var arr = ['sajib', 'ajit', 'sakib']

var narr = arr.concat([4,[5,[6,7,8]]])
narr
console.log( narr)

// array slice method----------------
var num = [1, 9, 7, 8, 56, 54]
var n = num.slice(4, 6)
n

//splice method --------------------------

var num = [1,2,3,4,5,6,7,8]

console.log(num.splice(6,1))
console.log(num)

//splice deletion example
var a = [1,2,3,4,5]
var x = a.splice(2,1,'a', 'b')
x
a

//splice insertion after deletion--------
num = ['sajib', 'ghosh', 'lutia', 'moddha']

var n = num.splice(1,0, 'kumar')
n
num


//Array push and pop method much like lifo last in last out

var person = ['sajib', 'chandra','ghosh']

person.push('lutia')
person
person.pop()

person.pop()
person

// Array shift and unshift method first in first out like fifo
var person  =['jodu', 'modhu', 'king', 'element']
person.unshift('kodu')
person
person.shift()
person 


//array tolocalstrting method
var str = [5,6,7,8,9,10].toLocaleString()
str
console.log(typeof str[3])

//FIVE array method

//FOREACH EXAMPLE OF ARRAY METHODS
var num = [1,2, 3,4,5]
var sum = 0

num.forEach(function(a){
    
    sum = sum+a
 
})
sum
//-------------------------------------


var nam = [4,6,8,10]
var sum =0

for(var i =0; i<nam.length; i++){

    sum -= nam[i]

}
sum


// -------------------

var no = [2,4,5,6,7,8,9,10]


for(var i =0; i<no.length; i++){

    if(no[i] %2 == 0  ){
        console.log(no[i])
    }
    else {
   console.log('all are the even number')
    }

}


var no = [2,4,5,6,7,8,9,10]

no.forEach(function(item){
    if(item %2 == 0){
        console.log(item)
    }
    else{
        console.log(item)
    }
})

var person = ['ranu', 'panu', 'manu', 'sonu']

person.forEach(function(v, i, a){

    console.log(v)
    console.log(i)
    console.log(a)
})

//array map function 
var num = [2, 4, 5, 6, ]

var nom = num.map(function(x){
    return x/2
})
nom


var per = ['sajib', 'ghosh', 'lutia']

var person = per.map(function(x){

 return (x  + ' my name is   ')

})
person


//array filter method ---------------------------------------------------------

var value = [10, 8 , 9, 8, 0, null, undefined, 'sajib']

var newvalue = value.filter(function(x){
   
    if(typeof x === 'number'){

    
     return x

    }

 
    


})

newvalue


var various = ['sajib', 'ghosh', 'bang', null, undefined, true, 45,78]

var x = various.filter(function(y){
 
if(typeof y === 'string'){

  return y
}
 

})
x

//-------------------------------------------------EVERY METHOD AND SOME METHOD-------------------------------

var item = [10,20,30,40,50]
var nitem = item.every(function(x){
   return x >= 10
})
nitem

//----------------------------------

var a = [1,2,3,4,5];
var aa = a.every(function(x) { 
    return x < 10; }) 
aa

//---------------------------------
var a = [1,2,3,4,5];
var aa = a.every(function(x){
 
    return x * 1 === 0

})

aa

//---------------some method--------------
var a = [1,2,3,4, 5];
var aa = a.some(function(x){
    return x < 0
})
aa

var name =['bangla', 'pacchimbnga', 'kornatok']

var flrtd = name.some(function(x){
    return x === 'bangla'
})
flrtd

//--------------------------------------------------------REDUCE METHOD ------------------------------
var sum = [1, 2, 3, 4,8,0,23]

var n = sum.reduce(function(p,c){
    return p+c
})
n




var sum = [1, 2, 3, 4,8,0,23]

var nn = sum.reduce(function(p, c){

      console.log(p)
     console.log(c)

     return p+c
})

nn

//-----------------array index of 

