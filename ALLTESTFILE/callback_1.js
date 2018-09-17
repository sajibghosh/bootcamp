
//findmax number using arguments in a functions------------------------------------
function findMax() {
    
    var max = -1;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
          
            
            max = arguments[i];
            
        }
        
    }
   
    return max;
   
}

x = findMax(115, 1, 123, 500, 44, 88);
x

//create a function to sum all elements------------------------------------------

function allsum(arr){
              
         var sum = 0;
    for (var i = 0; i<arr.length; i++){
        
        sum =sum + arr[i]; 
         
    }

    return sum
}


var num = [12,2,8]
var newnum= allsum(num);
console.log(newnum)

//------------------------------------------------------