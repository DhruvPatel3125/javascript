// let number = 500;

// if (number%10==0) {
//     console.log(number,"is good number");
// }
// else{
//     console.log(number,"is bad number");
//   }

// let Age = prompt("Enter the Age:");
// let name = prompt("enter your name:");

// console.log(`${name} is ${Age} Year old`)

// let quarter = 1;

// switch(quarter){
//     case 1:
//         console.log("January", "February", "March");
//         break;
//     case 2:
//         console.log("April","May","June");
//         break;
//     case 3:
//         console.log("July","August","september");
//         break;
//     case 4:
//         console.log("October","November", "December");
//         break;
//     default:console.log("NOT a QUATER!!");
// }

// // let token = 0;

// // switch(token){
// //     case 1:
// //         console.log("this is token 1");
// //         break;
// //     case 2:
// //         console.log("this is token 2");
// //         break;
// //     case 3:
// //         console.log("this is token 3");
// //         break;
// //     default:console.log("404 Error!!!")
// // }

// // let str = "dhruv";

// // if((str[0]=='a')||(str[0]=='A')&&(str.length>5)){
// //     console.log(`${str} is a golden string`);
// // }
// // else{
// //     console.log(`${str} is not golden number`);
// // }

// // let a = 12;
// // let b = 52226;
// // let c = 110;

// // if(a > b){
// //     if(a > c){
// //     console.log(`${a} is largest number`);
// // } else{
// //     console.log(`${c} is largest number`);
// // }
// // } else{
// //     if(b > c){
// //         console.log(`${b} is largest number`);
// //     }else{
// //         console.log(`${c} is largest number`);
// //     }
// // }

// // let num1 = 32;
// // let num2 = 47852;

// // if((num1%10 == 0) == (num2%10 == 0)){
// //     console.log(`${num1} and ${num2} have a same last digit which is :${num1%10}`);
// // }
// // else{
// //     console.log("number dont have the same last digit");
// // }

// let arr = [7, 9, 0, -2];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans)

// let str = prompt("Please enter a string");

// if(str.length == 0){
//     console.log("string is empty");
// }
// else{
// //     console.log("string is not empty");
// // }

// let str = "Lloklo";
// let idx = 3;

// if(str[idx] == str[idx].toLocaleLowerCase()){
//     console.log("character is lowercase");
// }
// else{
//     console.log("character is not lowercase");
// // }

// let str = prompt("Plese enter a string");
// console.log(`original string = ${str}`);
// console.log(`String without spaces = ${str.trim()}`);

// let num = prompt("PLEASE ENTER THE NUMBEER");

// for(i = 1; i <= num; i++){
//     if (num%2 == 0) {
//         console.log(`${num} Is Even Number`);
//     }
//     else{
//         console.log(`${num} Is Not Even Number`);
//     }
// }

// function getsum(n){
//     let sum= 0;

//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// getsum(3)

// let string = ["hi", "hello", "bye", "!"];

// function concate(str){
//     let result;
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }

// function dh(funk, count){
//     for (let i=1; i<=count; i++){
//         funk();
//     }
// }

// // let greet = function(){
// //     console.log("kello");

// // }

// dh(function(){console.log("kjl")},2);

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 2;

// function getElement(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// getElement(arr, num);

// let arr = [1,2,3,4,5,6,7,8,8,7,5,4,3];
// let num = 2.3;

// function getelement(){
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getelement()

// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”
// let str = "abcabcbadcabcfghjei";

// function getunique(str){
//     let ans = " ";

// for (let i=0;i<str.length;i++){
//     let currchar = str[i];
//     if (ans.indexOf(currchar) === -1){
//         ans += currchar;
//     }
//     return ans;
// }
// }
// getunique(str);

// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

// let country = ["australia", "germany", "united states of america"];

// function longestName(country){
//     let ansidx =0;
//     for(let i=0;i<country.length;i++){
//         let anslen = country[ansidx].length;
//         let currlen = country[i].length;
//         if(currlen > anslen){
//             ansidx  = i;
//         }
//     }
//     return country[ansidx];
// }
// longestName(country);

// let start = 100;
// let end = 200;
// function generateRandom(start, end) {
// let diff = end - start;
// return Math.floor(Math.random() * diff) + start;
// }

// const student = {
//     name :'aman',
//     marks:96,
//     prop: this,
//     getname: function(){
//         return this.name;
//     },
// };
// const a = 5;

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let finalvalue = nums.reduce((res,el) => {
//     return res +el;
// })
// console.log(finalvalue)

// let nums = [20, 65, 85, 55, 51, 265];
// let result = nums.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(result);


// function createpara(){
//   const para =  document.createElement("p");
//   para.textContent="";
//   para.textContent = prompt("please enter some text");
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll("button");

// for(const button of buttons){
//   button.addEventListener("click",createpara);
// }

// function createpara(){
//   const para = document.createElement("p");
//   para.textContent = prompt("enter some text");
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll("button");

// for(let btn of buttons){
//   btn.addEventListener("click",createpara);
// }



// const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// dogNames.toString(); // Rocket,Flash,Bella,Slugger


// const person={
//     name:"dhruv",
//     age:30,
//     proffesion:"software developer",
//     greet:function(){
//         console.log("hello,my name is "+this.name);
//     },
//     intro:function(){
//         console.log(`hello my age is ${this.age}`);
//     }
// };

// console.log(person.name)
// console.log(person.age)

// person.greet();
// person.intro();


// const result={
//     name:"dhruv",
//     age:"15",
//     subject:"math",
//     marks:88,
//     res:function(){
//         console.log(`Hello my name is ${this.name},\nand i am ${this.age} old.\nmy subject is ${this.subject},\nand my total result is ${this.marks}`)

//     }
// }
// result.res();

