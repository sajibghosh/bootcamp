
function myfunction(x){
var count = 0;
for (var i = 0; i<x.length; i++){
    if (x[i] =='.' ){
        count++;
    }
    else if(x[i]=='?') {
        count++
    }
    
    
    else if (x[i]=='!'){
        count++
    }
    
}

return count

}

var sentences = myfunction ('amer akta ndodi. cilo janli ? nato keu.o tai naki!')
console.log(sentences)
