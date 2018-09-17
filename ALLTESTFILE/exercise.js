var i = ['dhaka', 'india', 'chitaggong', ' shylhet', 'india', 90, 89, 78, 67, 67]

console.log(i.lastIndexOf('india'))

console.log(i.indexOf('india'))

console.log(i.lastIndexOf(67))

console.log(i.indexOf(67))


var paragraph = 'The quick brown fox jumped over the lazy dog. If the dog barked, was it really lazy?';

// expected output: "The index of the first "dog" from the beginning is 41"
// expected output: "The index of the 2nd "dog" is 53"


var p = paragraph.indexOf('dog')
console.log('The index of the first "dog" from the beginning is ' + p )


var p = paragraph.lastIndexOf('dog')
console.log('The index of the 2nd "dog" is ' + p )