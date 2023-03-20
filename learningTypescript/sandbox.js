// const character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
// const character="batman";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// inputs.forEach(input => {
//   console.log(input);
// });
// ---------TYPE BASICS------------------
// let diameters=89;
// // diameters='youcantchangeitsdatatypeokay';
// const circ=(diameter:number)=>{
//   return diameter*Math.PI;
// }
// //console.log(circ("sasad")); // NAN // numeber laganey k baad no hi input hooga
// console.log(circ(17));
//-----------ARRAYS & OBJECT ------------------------
// let arr1=['add','sub','mul'];
// // arr1.push(23);// error arr1 is string  simmilar incase of no array if we are going to insert string
// // but if we initialize the array with both data type then we can input both data types
// let mixed=['add',12,'sub'];
// mixed.push(12);
// let car={
//   name:'SONATA',
//   model:1234,
//   engine:17
// };
// // we cant change data type of name model engine nor we can add a new variable in it and also if we want to overide values of car we have to ptut all these variables in it not more not less
// ----------------FUCNTION BASIC--------------------
// let greet: Function;
// // greet=67; // error 
// greet=()=>{
//     console.log("acha");
// }
// const add=(a: number, b: number, c?:number|string)=>{
// console.log(a+b);
// }
// add(2,4);
// const add=(a: number, b: number, c:number|string=10)=>{
//     console.log(a+b);
//     console.log(c);
//     }
//     add(23,4.23);
// ----------------FUNCTION SIGNATURE-------------------------
// let greet:Function;
// example 1
// let greet: (a:string,b:string)=> void;
// greet=(name,location)=>{
//     return (`I ${name} lives in ${location}.`);
// }
// console.log(greet("amir","karachi"));
// // example 2
// let calc=(a:Number, b:Number, c:string)=> Number;
// calc=(numOne, numTwo, student)=>{
//     if (student==="amir") {
//         return (numOne + numTwo);
//     } else {
//         return (numOne - numTwo);
//     }
// }
// console.log(calc(2,3,"amir"));
// // example 3
// let logDetails: (obj:{name:string, age:number})=>void;
// var ninja = {
//     name: "amir",
//     age: 21
// }
// logDetails=(ninja:{name: string, age:number})=>{
//     console.log(`${ninja.name} is ${ninja.age} years old.`);
// }
// logDetails(ninja);
