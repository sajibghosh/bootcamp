
var names =  [45,90,78,67,78,78,78,56,56,65,45,54,35,35,45,90,78,56,65,35,35,35] 

var newnames = [] // declear a new var

for (var i =0; i<names.length; i++){ //for travers each element
 
var notun = names[i] // declear a new var and stored the value of arrays index no

if(newnames.indexOf(notun) == -1){ //condition for if there any index of notun means names inside the newnames
    newnames.push(notun) //push the new sorted element inside the newnames
}
}
console.log(newnames)





/*


var names = ['litu','pitu', 'pitu', 'mitu', 'mitu', 'dipu',' tipu','dipu', 'sona', 'mona','litu',
             'mona', 'fatu', 'feku', 'feku', 'meku']

var selected = []

for (var i =0; i<names.length; i++){
   var name = names[i]
   if(selected.indexOf(name) == -1){
       selected.push(name)
   }
}
console.log(selected)

*/
