function client(name, email){
    this.name = name
    this.email = email
    
    this.showdata = function (){
        console.log('client name: ' + this.name + ' , ' + ' email: ' + this.email)
    }

    this.namelength = function(){
        console.log('The length of the name is ' + this.name.length)
    }
}

var cli = new client('mr:Oberoy sadhukha', 'mr90@gmail.com')

cli.showdata()
cli.namelength()

//-----------------------------------------------------------------------------------------------------------------


function city(name, population, city_volume){
    this.name = name
    this.population = population
    this.city_volume = city_volume
    
}

city.prototype.cityname = function(){
    console.log('The name of this city is ' +  this.name)
}

city.prototype.cityvol = function(){
    console.log('The volume of this city is ' + this.city_volume) 
}  

city.prototype.citypopulation = function(){
    console.log('The total population of this city is '  + this.population )
}

city.prototype.country = 'Bangladesh'


var citynews = new city('Dhaka', '3 crore', '1098 sqrt')
var citynews2 = new city('khulna', '2 crore', '108 sqrt')
var citynews3 = new city('jessore', '1crore', '109 sqrt')


console.log(citynews)
console.log(citynews2)
console.log(citynews3)
console.log(citynews2.country)



//-----------------------------------------------------------------------------------------------------
