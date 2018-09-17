
//program with the filter method

var newname = ['yush', 'puja', 'nanacyli', 'colabrete', 'sajib']

var filtered =newname.filter(function(element){

    return element.length <= 4

});

filtered



//program of same above without filter menthod

var name = ['yush', 'puja', 'nanacyli', 'colabrete', 'sajib']
var newname = []
for(var i = 0; i<name.length; i++){

if(name[i].length <= 4 ){
    newname.push(name[i])
}
}
console.log(newname)




//output = two output means two new decleared var



var value = [40, 50, 90, 89, 9, 34, 76, 45]

var upfifty = value.filter(function(element){
 
    return element >= 50

});
upfifty

//---------------------------------------------



var underfifty = value.filter(function(element){

return element <= 45

});

underfifty




//-----------------------------------------------

var even = value.filter(function(element){
     return element % 2 === 0
})
even
 


//------------------------------------------------

var odd = value.filter(function(element){
    return element % 2 !== 0
});
odd



//------------------------------------------------

var people = ['joshep', 'johny', 90, 'jokarta', 'undefined', 'tony', 45, 30, 20 ]

var str = people.filter(function(element){

    return typeof element === 'string'
})
str

var numb = people.filter(function(element){

    return typeof element === 'number'
})

numb


//-------------------------------------------

var word = ['jom', 'tommy', 'israt', 'nmngyn', 'twoheporwr', 'uymkjfjd']

var upsix = word.filter(function(element){

    return element.length > 6 

})
upsix


var underfive = word.filter(function(element){

    return element.length <= 5

})
underfive
//-----------------------------------------------


