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



// ex-2


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

// By using an object constructor



// function person(age,name,proffesion){
//     this.age = age;
//     this.name = name;
//     this.proffesion = proffesion;
//     this.greet = function(){
//         console.log(`hellow,\nmy name is ${this.name}\nage is ${this.age}\nproffesion is ${this.proffesion}`)
//     }
// }

// const p1 = new person(21," parth "," ca ");
// const p2 = new person(22," pratham "," softwer developer ");


// p1.greet();
// p2.greet();




// Date constructor

let d1=new Date();
console.log(d1.toUTCString());

let d2 = new Date();
console.log(d2.toDateString());

let d3 = new Date();
console.log(d3.toISOString());

const d = new Date(1000000000000);
console.log(d);

const d4 = new Date();
d4.setDate(4)
console.log(d4); 

