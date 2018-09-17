function people(name, city) {

    this.name = name;
    this.city = city;
}


people.prototype.Hello = function () {
    console.log('Hello ' + this.name)
}

people.prototype.live = function () {
    console.log(this.name + ' lived in  ' + this.city + ' is ' + this.age + ' years old.' + 'email is ' + this.email)
}


people.prototype.age = 28;

people.prototype.email = 'sajib@gmail.com'



var person1 = new people('Mithun Ghosh', 'Dhaka')
var person2 = new people('Ishita Ghosh', 'Khulna')

console.log(person1)
console.log(person2)