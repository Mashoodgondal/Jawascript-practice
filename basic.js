// let weight=12;
// for(let i=0; i<=weight; i++){
//     if (i==13) {
//         continue;
//     }
//     console.log(i);
// }

// *****
// *****
// *****
// *****


// let row=4;
// let col=5;
// let str ='';
// for(let i=0;i<row ; i++){
//     for(let j=0;j<col;j++){
//         str= str +'*';
//     }
//     console.log(str)
//     str='';
// }

// table


// let num=23;
// for(let i=1;i<=10;i++){
//     console.log(`${num} *${i}=${num*i}`)
// }


// Array


// let age=[4,5];
// console.log(age[1])


// let age = [5,34,5,2,78,24,8];
// for(let i=0;i<age.length;i++){
//     console.log(age[i]*3)
// }

// Find maximum from Array
// Formula: Maximum  =  Numbar.MIN_SAFE_INTEGER;

// let age =[304,455,57,900,68,740];
// let maximum=Number.MIN_SAFE_INTEGER;
// for(i=0;i<age.length;i++){
//     if(maximum<age[i]){
//         maximum=age[i]
//     }
// }
// console.log(maximum)



// FIND MINIMUM
// Number.MAX_SAFE_INTEGER;



// let age =[304,5,57,0,8,740];
// let MINIMUM=Number.MAX_SAFE_INTEGER;
// for(i=0;i<age.length;i++){
//     if(MINIMUM>age[i]){
//         MINIMUM=age[i]
//     }
// }
// console.log(MINIMUM)



//function:



// let person={
//     name: "ali",
//     age: 32,
//     height: 5

// }
// console.log(person)


// let person={
//     name: "ali",
//         age: 32,
//         height: 5
    
// }
// let animal={
//     type: 'cow',
//     age2: 67,

// }
// let all={
//     ...animal,
//     ...person

// }
// console.log(all)





// Distruction :
// All remaining Elements are store in an other variable:

// let names=['ali', 'asghar', 'ahmad', 'akram']
// let [name1, name2, ...other]=names;
// console.log( name1,name2, other);




// let person={
//     name: 'ali',
//     age: '43',
//     hobies:['hockey','love']
     
// }
// let {name,age, hobies}=person;
// console.log(name, age, hobies[1])



// Functions


// function addTowNumbers(num1,num2){
//     return  num1+num2;
// }


// let result= addTowNumbers(4,8)
// console.log(result)


// my function [syntex]

// const myfunction=()=>{

// };


// const addition=(num1,num2)=>{
//     return  num1+num2;
// }

// let result=addition(6,3)
// console.log(result)


//   To find type:

// function addition(num1,num2){
//    console.log(typeof(num1))
//     return num1+num2;
// }

// let result= addition('3',4)
// console.log(result)



// Function into a function:

// const rutien=(massege,name)=>{
//     console.log(massege);
//     const dailyRutien=(username)=>{
//     console.log(username);
//     }
//     dailyRutien(name)

// }
// rutien('Hellow','Mashood')


// Default parameters


// const myfunction=(num1=5,num2=7)=>{
//     result=num1*num2;
//     return result;
// }
// console.log(myfunction())

// Simple function practice:

// function fun1(){
//     console.log('this function')
//     function fun2(){
//         console.log('2nd')
//     }
// fun2()    
// }
// fun1()





// sort the array in accending order by using functions:

// make function
// function replace( num1,num2){
// let temp=num1;
// num1=num2;
// temp=num2;
// }


// let arr=[23,56,3,5,8,90,223,456,3,123,-87,-67,456,9];

// for(let j=0 ; j<arr.length;j++)
// for( let i=0;i>arr.length-j;i++){
//     if(arr[i]>arr[i+1]){
//         replace(arr[i],arr[i+1])
//     }
   
// }



// For each method

// let arr = [2, 3 ,4, 5];
// let sum = 0;
// arr.forEach(function(element) { 
//     sum =+ element;
// });
//    console.log(sum);



