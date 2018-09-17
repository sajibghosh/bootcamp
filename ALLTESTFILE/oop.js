// var person = {
//     name: 'sajib ghosh',
//     email: 'sajibghosh36@gmail.com',
//     phone: 171689765,
//     city: 'dhaka'

// }

// // console.log(person)

// // console.log(person.name + ' lives in '+ person.country + '.')

// person.country = 'bangladesh'

// // console.log(person.name + ' lives in '+ person.country + '.')

// person['age'] = 28

// // console.log(person.name + ' is ' + person.age + ' years '+ 'old')

// for (var me in person) {
//     console.log('All the key properties for person object is ' + me +  ' = ' + person[me])
// }


//--------------constructor function creating class

// function person(name, email) {

//     this.name = name
//     this.email = email
//     this.print = function () {
//         console.log('I am : ' + this.name)
//     }

// }

// var res = new person('sajib ghosh', 'saibghosh367@gmial.com')
// var res1 = new person('sajibk', 'jahak@ghksi.com')
// var res3 = new person('souyl', 'souyl@ghksi.com')

// var people = [res, res1, res3]

// people.forEach(function (element) {
//     console.log('the name of the people is ' + element.name + ' and the email is :' + element.email)
//     element.print()
// })

// for (var see in res) {
//     console.log(see)
// }




//another class for book 

function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;

}


var book = new Book('js', 'karl', '550')
console.log(book)

console.log(book.constructor)

//----------