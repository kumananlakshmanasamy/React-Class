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
// console.log(greetings("kumanan"))s
// assigning object attributes to variables

// let add = (x = 1,y = 2) => {
//     let b= x+y
//     return b;
// }
// console.log(add(5))

// let greet = x => console.log(x)
// greet("wlcome to my class")
// let age =20 
// let greets = (age>20)?
// ()=>console.log('adult'):
// ()=>console.log('baby')
// greets()

// function person(){
//     this.name='kumanan'
//     this.age=45,
//     this.sayme = ()=> {
//         return (this.age)
//     }
// }
// const Person =new person()
// Person.sayme()

// let x =(...x)=> {
//     console.log(x)
// }
// x(1,2,3)

// let data = function() {
//     console.log("hello")
// }
// let Data = new data(); 

// let name ="kumanan"
// const result = `hello ${name}`
// console.log(result)
// spread operator 
// const arr =[1,2,3,4,6]
// const arr2 =[9,6,8]
// let arr3=[...arr,...arr2]
// console.log(arr3)
// ...spread ...functional arguments rest

// const person ={
//     name :'kumanan',
//     age:25,
//     gender:"male"
// }
// // // destructuring
// let {name, ...rest } = person
// console.log(name,rest)

// console.log(name)
// console.log(age)
// console.log(name1)

// let arrvalues=[10,6]
// let [x=5, y=7] =arrvalues
// console.log(x)
// console.log(y)

// const object={name:'kumanan',age:25}
// const object2 ={names:'vimal',ages:25}
// let object3={...object,...object2}
// console.log(object3)

// let x = 9;
// let y = 10;

// [x,y] = [y,x]

// console.log(x)
// console.log(y)

// const arrvalues=[1,2,3]
// const [a,...c] =arrvalues
// console.log(a,c)

// const map1 =new Map()
// map1.set('name',{myname:'kumanan',myage:25})
// map1.set('year',2005)
// console.log(map1.get('year'))
// console.log(map1.has('year'))
// // map1.delete('year')
// console.log(map1.size)
// console.log(map1)

// for (let key of map1.values()){
//     console.log(key)
// }

// map1.forEach(function(val,key){
//     console.log(val,key)
// })
//  get() set() has() values() enteries() keys()

// const weakmap = new WeakMap();
// console.log(weakmap)
// let obj ={}
// weakmap.set(obj,"hello")

// for (let i of weakmap){
//     console.log(i)
// }

// set

// const set = new Set()
// console.log(set)

// const set2 = new Set([1,2,2,3,4,5])
// console.log(set2.values())
// console.log(set2.has(3))
// set2.add(8)
// console.log(set2)

// for (let i of set2){
//     console.log(i)
// }// for (let i of weakmap){
//     console.log(i)
// }

// const weakmap = new WeakSet();
// console.log(weakmap)
// let obj ={name:'tamil'}
// weakmap.add(obj)

// for (let i of weakmap){
//     console.log(i)
// }

// function union(a,b){
//     let intersectionSet =new Set()
//     for (let i of b){
//         if (set1.has(i)){
//             intersectionSet.add(i)
//         }
// //   console.log(i)
//     }
//     return intersectionSet
// }
// let set1 =new Set(['mango','orange','banana'])
// let set2 =new Set(['grapes','pomogranate','jackfruit' ,'banana'])
// console.log(set1,set2)
// console.log(union(set1,set2))

// class is a blueprint of an object 

// function House (){
//     this.window ='small size'
//     this.door ='Big size door'
// }
// const myhouse = new House()
// console.log(myhouse.door)
// console.log(myhouse.window)

// class House{
//     constructor(){
//         this.window ='small size'
//         this.door ='Big size door'
//     }
// }
// const house = new House()
// console.log(house.door)
// console.log(house.window)

// methods
// function House (){
//     this.window ='small size'
//     this.door ='Big size door'
//     this.greet =function(){
//         return ('Welcome to my home')
//     }
// }
// const myhouse = new House()
// console.log(myhouse.door)
// console.log(myhouse.window)
// console.log(myhouse.greet())

// class House{
//     constructor(){
//         this.window ='small size'
//         this.door ='Big size door'
//     }

//     greet(){
//         return ('Welcome to my home')
//     }

//     get greetname(){
//         return this.window
//     }
//     set greetname(x){
//         return  this.window=x
//     }
// }
// const house = new House()
// console.log(house.door)
// console.log(house.window)
// console.log(house.greet())
// house.greetname ='big size window'
// console.log(house.greetname)

// inheritance 
// enable functionalites properties from parent class to child class

// class House{
//     constructor(){
//         this.window ='small size'
//         this.door ='Big size door'
//     }

//     greet(){
//         return ('Welcome to my home')
//     }

//     get greetname(){
//         return this.window
//     }
//     set greetname(x){
//         return  this.window=x
//     }
// }

// class NewHouse extends House{
//     greet(){
//         return ('Welcome to my newhouse')
//     }
// }
// const house = new House()
// console.log(house.door)
// console.log(house.window)
// console.log(house.greet())
// house.greetname ='big size window'
// console.log(house.greetname)

// const newhouse = new NewHouse()
// console.log(newhouse.greet())

// overriding

// inheritance:
// functionalities of parents class in child class
// code clean maintain , code reuse 
// child class can create its own functionalities and 
// // even can change its parent functionalities
// class house{}
// console.log(typeof(house))

// for of  ES
// const students =['Hareesh','jaya','keerthana','dishanth']
// for (let i of students){
//     console.log(i)
// }

// iterable objects --> map, array ,set  for in 
// for of loop non iterable --> object keys 

// javascript Asynchronous
// async ---> multi thread -->parallel
// sync ---> single thread

// set timeout
// function hello(name){
//     console.log(`welcome to my class MR ${name}`)
// }
// function bye(){
//     console.log(" i will execute last")
// }
// setTimeout(bye,6000)
// setTimeout(hello,4000,'kumanan')
// console.log("i will execute first ")
// function showtime(){
//     let date= new Date()
//     let time = date.toLocaleTimeString()
//     console.log(time)
    // setTimeout(showtime,3000)
// }
// setInterval(showtime,3000)
// showtime()

// function startme(name){
//     console.log("hi"+ name)
// }

// function callme(){
//     console.log("i am called")
//     startme('peter')
// }

// setTimeout(callme,2000,'kumanan',startme)
// promise
// Pending ,rejected ,fullfilled

// let promise = new Promise(function(resolve,reject){
//     if (true){
//         resolve("this is the resolve")
//     }else{
//         reject("this is the reject")
//     }
// })

// promise.then(function success(result){
//     console.log(result)
// }).catch(function reject(result){
//     console.log(result)
// }).finally(function re(){
//     console.log("i am always executed")
// })

// setInterval()
// function greet(){
//     console.log("hello world")
// }
// setInterval(greet,2000)

// asyc await

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("promise resolved")
//     },4000)
// })
// async function myfunction(){
//     console.log("hello1")
//     try {
//         let result = await promise;
//         console.log(result)
//         console.log("hello2")
//     } catch (error) {
//         console.log(error)
//     }

// }
// myfunction()

// JSON
// const data = {
//     "name":"kumanan",
//     "age":43
// }
// console.log(data['age'])
// const date = new Date(2022,1,20,1,12,12)
// console.log(date)

// javascript date methords or functions 
// const time =new Date
// const date = time.getDate()
// const date = time.getTime()
// const date = time.getFullYear()
// const date = time.getMonth()
// const date = new Date(2023,14,35)
// console.log(date)
 
// regular exression -->regex

// const string = 'find me'
// const pattern = /[\s,]+/
// const res =string.split(pattern)
// console.log(res)
// const a=5
// const b=10
// const c =a+b
// debugger
// console.log(c)