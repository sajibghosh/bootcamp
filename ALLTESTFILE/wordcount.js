
//vowel count korar function


function myfunction(x){
    var count = 0;
    for (var i = 0; i<x.length; i++){
        if (x[i] =='a' ){
            count++;
        }

        else if(x[i]=='e') {
            count++
        }
        
        
        else if (x[i]=='i'){
            count++
        }
    
        else if(x[i]=='o') {
            count++
        }
        
        
        else if (x[i]=='u'){
            count++
        }
        
    
        
    }
    
    return count
    
    }
    
    var word = myfunction ('my country name is bangladesh')
    console.log(word)


   