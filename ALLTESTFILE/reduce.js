var num = [3,53, 39, 9, 28, 65, 45]

var sum = 0
for( var i =0; i<num.length; i++)
sum += num[i];


console.log(sum)


//-------------------we can do it by using reduce method

var nnum = [2, 3, 3, 2]

newval = nnum.reduce(function(a, b){
return a - b 
})
newval

//-----------------------

var name = ['alpha', 'beta', 'eama', 'bangla']


var newname = name.reduce(function(a, b){
    return a = b
});
console.log(newname)

//=---------------------------------------------

