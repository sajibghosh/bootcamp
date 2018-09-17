var num = [2, 4, 5, 7, 81, 'sajib', ' ghosh' ]


newnum = num.map(function(x){
 
    if( typeof x === 'number'){
        console.log(x * 2)  
    }
    else {
        console.log(x)
    }
   
    

})



//we can do the same out put by using the for loop.

for (let i=0; i<num.length; i++)
if (typeof num[i] === 'number'){
    console.log(num[i]*2)
}

else{
    console.log(num[i])
}

//-------------------------------------

var value = [30, 98, 'sajib', 'kumar', 'ghosh', undefined, true,  ]

// [30, 98, '', ' ', ' ', undefined, boolean ]

var newvalue = value.map(function(item){

    if( typeof item === 'string'){
        return  ' '
        
    }
    else if (typeof item === 'boolean' ){

        return 'boolean'
    }

    else if(typeof item === 'number')
    {
        return item
    }


else{
    item
}

});

newvalue