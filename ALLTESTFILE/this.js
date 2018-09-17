
// function f1() {
    
//     return this
// }
// console.log(f1())

//  //-------------------------------------

// function f2() {
//     'use strict'
//     return this;
//   }
//   console.log(f2())


// //----------------------------------

 


//   var a = 'Global'
  
//   function wow() {
//     return this.a;  
   
//   }


// var res = wow()

// console.log(res)

// //------------------------

// var obj = {
//     a:10,
//     b:20,

//     fun : function(){
//         console.log(this.a)
                
//        var  my =  function (){
          
//             console.log(this.b)
//         }.bind(this)

//         my()
//     }
// }

// obj.fun()

// function myfn(){
    
// }

// var rr = myfn()
// console.log(rr)

//----------------------------------------------------

// var obj = {
  
//     a: 'sajib',


//    myfun:  function (){

//     console.log(this)
//     function myfunc (){
//       console.log(this)
//   }

//   myfunc()

//     }


// }

// obj.myfun()

//-----------------------------------------------------

// var obj ={
 
//     name: 'sajib ghosh',

//     print: function (){
//         console.log(' Hello ' + this.name)
//     }
// }




// // var name1 = obj.name
// // name1


// var print1 = obj.print
// result = print1()

//-------------------------------------------------------BIND METHOD

// var obj1 ={
//     sum:10
// }

// var obj2 = {
//     sum:20
// }

// function myfun (value){
//  return value + this.sum
// }

// myfun()

// var add = myfun.bind(obj1)
// var res =add(4)
// res
//--------------------------------------------------------------------


// function profile(name, age, city, mobile, profession){
//     console.log(' My name is ' + this.name + '. ' )
//     console.log(' I am  ' + this.age + ' years ' + ' old. ')
//     console.log(' I live in ' + this.city +  '.' )
//     console.log(' My mobile number is ' + this.mobile + '.' )
//     console.log(' I am a/an ' + this.profession + '.' )
// }

// var obj1 = {
//     name:'sajib ghosh',
//     age:'28',
//     city:'Dhaka',
//     mobile:'01714479736',
//     profession:'software engineer'
// }

// var obj2 = {
//     name:'sandy ghosh',
//     age:'20',
//     city:'london',
//     mobile:'1714476',
//     profession:'computer engineer'

// }

// //now first the name of function then the obj name inside bind function
// var print =  profile.bind(obj2) 
// var result = print()

//-------------------------------------------------------------------------------------- 


var obj ={
    student:'sajib ghosh',



    print: function(){
    // console.log(this.student)
    var name = this.student 

    setTimeout( function print1(){
    console.log('The name of the student is ' + name)
     },3000)
    }
}

obj.print()

//-----------------------------------------

var obj = {
    name:'sajib ghosh',
   
    

    print: function(){
        console.log(this.name)
        var nam = this.name
        function a(){
          console.log('Jete hobe bohu dur')
          function b (){
              console.log('aro dure jau')
              function c (){
                  console.log('or durse')
                  function d (){
                      console.log(nam)
                  }
                  d()
              }
              c()
          }
          b()
        }
        a()
    }



}
obj.print()

