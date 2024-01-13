// variable
//variable is a container to hold data 

//  let var const 
// difference between let var const 
// scope  --- 
// redeclare ------
// reaassign ------
// Hoisted

//      scope  redeclare   reassign   Hoisted 
// var    NO       yes        yes       yes
// let    yes      No         yes        No
// const  yes      No         No         No

// console.log(num)

// Datatype

// string 
// number 
// bigint
// Boolean
// null 
// symbol 
// object 
// const name ='kumanan'
// const number = 5
// const big = 1n
// const bool = true
// const value1= Symbol('helo')
// const student={
//   name:'kumanan',
//   age:25
// }
// const val=null
// let value;
// console.log(typeof(value))

// opeators

// special symbols used to perform operations
// arithmetic operators 
// assignment operators
// comparison operators 
// logical operators 
// bitwise operators 
// string operators 
// other operators 

// &&
// ||
//  !


// ,
/*let a = (1,5,7,9) 
console.log(a)*/
// if (5 < 6){
//   console.log("hello")
// }

// console.log(5 > 6 ? "hello" : "not Hello ")
// + -- concardination 
//  - * % oparands 
// value= 'hello ' - 'world'
// console.log(value)

// var a= 5
// var A = 8
// console.log(A)
//  javascript is a case sensitive language 

// var a = 5
// console.log(typeof(a))
// var b = String(a)
// number 
// string 
// boolean 
// parseInt
// console.log(typeof(b))

// control flow statements:
// 1. if else statement
// 2 .for loop 
// 3. while loop
// 4. break
// 5. continue
// 6. switch

// let a=4
// let b=5

// if ( a > b  ){
//     console.log(" a is greater ")
// }else {
//   console.log( " b is greater")
// }
//  const arr=[1, 2, 3, 4 ,5]

//  for (let i= 0;i< 5;i++){
//     if (i== 2){
//         continue;
//     }
//     console.log(i)
//  }

// let i= 0
//  while (i<=5){
//     console.log(i)
//     i=i+1
//  }

// let a= 1

// switch(a){
//     case 1:
//         console.log("1")
//     break;

//     case 2:
//         console.log("2")
//     break;

//     case 3:
//         console.log("3")
//     break;

//     default:
//         console.log("defaut")
// }

// javascript functions

// function myfunction(a,b){
//     return a+b
// }

// console.log(myfunction(5,6))

// let x = function(num){return num*2}
// let y= x(3)
// console.log(y)

// javascript object is a non primitative data type 

// const student = {
//     name:"kumanan",
//     age:25,
//     address:{
//      no:25,
//      city:"pondicherry"
//     },
//     get getName(){
//         return this.name
//     },
//     set getname(newname){
//         this.name=newname
//     }
//     ,
//     greet: function(){console.log("welcome everyone to the class "+this.name)}
// }
// student.getname="Balu"
// console.log(student.name)

// let student = {}
// student.name = "kumanan"
// student.greet=function(){
//     console.log("hello")
// }
// console.log(student)
// console.log(student.greet())

// function Person(){
//     this.name="kumanan",
//     this.age= 25
// }

// const person = new Person()
// const person1 = new Person()

// Person.prototype.age = 22

// console.log(person)
// array literals
// const array1=["apple","orange","Mango"]
// console.log(array1)
// new keyword
// const arr2= new Array("apple",1,"Mango")
// console.log(arr2[2])
// array1.push("pomogranate")
// array1.unshift("bannana")
// array1[1]="kuman"
// array1.pop()
// array1.shift()
// array1.sort()
// console.log(array1.indexOf("kumanan"))
// console.log(array1)
// console.log(array1.length)
// console.log(array1.slice(1))
// const name='kumanan'
// const demo="     kumanan      "
// const demo2=`kumanan`
// const result=`${name}`
// console.log(demo.charAt(1))
// console.log(name.length)
// console.log(demo.toLowerCase())
// console.log(demo.toUpperCase())
// console.log(demo.trim())
// const names ='my name is \'kumanan\''
// console.log(names)
// const res =String(225)
// console.log(typeof(res))
// const fruits={
//     "1":"apple",
//     "2":"Mango",
//     "3":"banana"
// }
// for (let i in fruits){
//     console.log(fruits[i])
// }

// const a= 5 - NaN
// console.log(a)
// const b= isNaN(a)
// console.log(b)
// const c = -2 / 0
// console.log(c)
// const d = 0.1+0.2
// console.log(d.toFixed(1))
// const e="5"
// console.log(Number.isInteger(e))
// console.log(Number.MAX_SAFE_INTEGER)

// try {
//     // business logics
// } catch (error) {
//     // throws error
// }finally{
//     // code executed anyway
// }
// import greetings from "./greetings.js";
// console.log(greetings("kumanan"))