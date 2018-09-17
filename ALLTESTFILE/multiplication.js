
//multiplication of 10
var n = 10

for (var i=1; i<=10; i++){
    console.log(n + ' * ' + i + ' = '+ n*i)

}
//--multiplication from 1 to 10---------------------------------------------------------
for (var j=1; j<=10; j++){
 
    console.log('Multiplication of ' +  j)
    for(var i=1; i<=10; i++){
    console.log(j + ' * ' + i + ' = ' + j*i )
    }
    console.log('--------------x-----------')

}

//--------------------------------------------------------------------
 
for (var i =5; i<=10; i++){
    console.log('The value of ' +  i + ' * '+ i + ' = ' + i*i ) 
    }

 
   


//------------------akta for ar moddhe duto conditions

var i, j;
for(i = 10, j = 1; i >= 1, j <= 10; i--, j++) {
    console.log( i + " * " + j + " =");
}