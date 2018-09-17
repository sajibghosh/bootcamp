00
var value = ['ghosh', 'saha', 'sudro', 'nomo']

var cast = []

for ( var i=0; i<value.length; i++)

cast.push(value[i])

cast

//--------------------------------------------------

//we can do the same thing by using the foreach loop

var jat = ['ghosh', 'saha', 'sudro', 'nomo']

var casts = []

jat.forEach(function(element){

    casts.push(element)

})
casts

//--------------------------------------------------


//out put add 10 with the even number ; and substitute 5 with the odd number;  and print the 
//The even with addition of ten 'then the numbers'
//The odd by less of five 'then the numbers'
//[30, 62, 108, 32, 98, 84, 20]



var num = [20, 67, 98, 37, 88, 89, 25]

num.forEach(function(item){

    if( item %2!== 0 ){
        console.log( 'The even with addition of ten ' +  '= ' + (item-5)  )
    }
   
    else if(item % 2 ===0){
        console.log ('The odd by less of five ' + ' = ' +     (item + 10))
    }

    console.log('-------------x--------------')

})
//---------------------------------------------------

//output define all type of element of the arr
//string = 'johnny' 'tommy' 'rowson', 'sajib' 
//undefined = undefined
//number =  654, 24
//arry = []

var arr = ['johnny', 'tommy', 'rowson', 654,  'sajib', 28, [], undefined ]



arr.forEach(function(data){

if( typeof data === 'string' ){

    console.log('string = ' +data)
}
else if ( typeof data === 'number'){
    console.log('number = ' + data)
}

else if ( typeof data === 'undefined'){
    console.log('undefined data ' + '= '  +  data)
}

else{
    console.log(data )
}


})


//['', '', '' , number, '', number, nothing, undefined]

var arr = ['johnny', 'tommy', 'rowson', 654,  'sajib', 28, [], undefined ]



arr.forEach(function(data){

if( typeof data === 'string' ){

    console.log('empty string')
}
else if ( typeof data === 'number' )
{
    console.log('number')
}

else if (typeof data === 'undefined')
{ 
    console.log('undefined')
    }

else {
    console.log(data)
}

})