// let target = document.getElementById('container')
// console.log(target)


// let target1 = document.getElementsByClassName('para')
// console.log(target1)

// let target = document.getElementsByTagName('div')
// console.log(target)


// let newelement = document.createElement('a')

// let parent = document.getElementById('box')
// parent.appendChild(newelement)


// let element = document.getElementById('container')
// element.remove()

// let parent = document.getElementById('parent')
// let child = document.getElementById('child')

// parent.removeChild(child)

// let element = document.getElementById('box')
// console.log(box.textContent)


// let heading = document.getElementById('h1')
// heading.style.cssText="color:blue;background-color:black"

// heading.style.backgroun


// let para = document.createElement('p');
// para.innerText = "HEY I AM RED";
// document.querySelector("body").append(para)

// let val = document.createElement('p');
// val.innerText = "HEY I AM RED";
// document.querySelector("body").append(val);

// val.classList.add("red");


// let head = document.createElement('h3');
// head.innerText = "I am a blue heading";
// document.querySelector("body").append(head);

// head.classList.add("blue");

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// h1.innerText = "I am div";
// p.innerText = "Me too";

// div.append(h1);
// div.append(p);

// div.classList.add("box");
// document.querySelector("body").prepend(div);

// let bu = document.createElement("button");
// let input = document.createElement("input");
// bu.innerText = "click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(bu);

// bu.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

// bu.setAttribute("id","btn");
// input.setAttribute('placeholder',"username");

// let btn = document.querySelector("#btn");
// btn.classList.add("btnstyle")

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u> Practice </u>";
// document.querySelector("body").append(h1);

// let p = document.createElement("p");
// p.innerHTML = "this is dhruv patel namaste";
// document.querySelector("body").append(p);

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event)
//     console.log("button clicked");
// })


// btn.addEventListener("dblclick", function(event){
//     console.log(event)
//     console.log("button clicked");
// });

// let imp = document.querySelector("input");
// imp.addEventListener("keyup",function(){
//     console.log("key was press")
// })
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let input = document.querySelector("input");
//     console.dir(input);
//     console.log(input.value);
// });

// l et form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let imp = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(imp.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
// let user = document.querySelector("#user");
// user.addEventListener("change event",function(){
//     console.log("input changed");
//     console.log("final value =",user.value);
// });

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value =",user.value);
// });

// let imp = document.querySelector("#text");
// let p = document.querySelector("p");
// imp.addEventListener("input",function(){
//     console.log(imp.value);
//     p.innerText = imp.value;
// });

// let btn=document.querySelector("button")
// console.dir(btn);
// btn.onclick = function(){
//     alert("button was clicked")
// }

// let btn = document.querySelectorAll("button");

// for (butt of btn) {
//     butt.addEventListener("click", sayhello);
//     butt.addEventListener("click",sayname);
// }

// function sayhello(){
//     alert("hello mf");
// };

// function sayname(){
//     alert("hello mkc");
// };


// let btns = document.querySelectorAll("button");
// for (btne of btns) {

//     // btne.addEventListener("click",dhruv);
//     // btne.addEventListener("click",janu);
//     btne.addEventListener("mouseenter", function(){
//         console.log("you doubble click me");
//     });
// }

// function dhruv(){
//     alert("this is dhruv patel")
// }

// function janu(){
//     alert("this is janu ben vasava");
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h1 = document.querySelector("h1");
//     let randomcolor = getrandomcolor();
//     h1.innerText = randomcolor;


//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;

//     console.log("color updated");
// });

// function getrandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h1 = document.querySelector("h1");
//     let randomcolor = getrandomcolor();
//     h1.innerText = randomcolor;
    
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
// })


// function getrandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let div = document.querySelector("div");

// function change(){
//     console.dir(this.innerText);
//     this.style.height = "100vh";
//     this.style.backgroundColor="blue";
// }

// // btn.addEventListener("click",change);
// // h1.addEventListener("click",change);
// div.addEventListener("click",change);

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input")
// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText = input.value;
//     console.log(input.value)
//     ul.appendChild(item);
//     input.value="";

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     item.appendChild(delbtn);
// });

// let delbtns = document.querySelectorAll(".delete");
//     for (delbtn of delbtns) {
//         delbtn.addEventListener("click",function(){
//             let per = this.parentElement;
//             console.log(per);
//             per.remove();
//         });
//     }


// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let input = document.querySelector("input");
// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = input.value;
//     console.log(input.value);
//     ul.appendChild(item);
//     input.value = "";

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     item.appendChild(delbtn);
// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON "){
//         let dhruv = event.target.parentElement;
//         dhruv.remove();
//         console.log("deleted");
//     }
// });

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let per = this.parentElement;
//         console.log(per);
//         per.remove();
//     })
// }

// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello(); 
// }
// console.log("calling demo fnx");
// demo();
// console.log("bye!!!")

// let h1 = document.querySelector('h1');

// function changecolor(color,delay,next){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(next) next();
//     },delay);
// }

// changecolor("red",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("orange",1000,()=>{
//             changecolor("blue",1000)
//         })
//     })
// })

// function savetodb(data,success,faile){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         success();
//     }else{
//         faile();
//     }
// }

// savetodb("Apnacollege",() => {
//     console.log("success1:your data was saved ");
//     savetodb("Sutex college",()=>{
//         console.log("success2:your data was saved in sutex");
//         savetodb("vnsgu",()=>{
//             console.log("success3:your data was saved ")
//         },()=>{
//             console.log("faliur3:week connection")
//         })
//     },
//     ()=>{
//         console.log("faliur2:week connection")
//     })
// },
// ()=>{
//     console.log("faliur1:week conection.data not saved");

// });
// function savetodb(data){
//     return new Promise((resolve,reject) =>{
//         let internetspeed =Math.floor(Math.random()*10)+1;
//         if(internetspeed > 4){
//             resolve("success:data was saved");
//         }
//         else{
//             reject("faliure: weak connection");
//         }
//     });
// }


// savetodb("apnacollege")
// .then((result) =>{
//     console.log("result :",result);
//     console.log("data 1 saved:");
//     return savetodb("hello world");
// })
// .then((result)=>{
//     console.log("result :",result);
//     console.log("data 2 saved:");
//     return savetodb("hiii");
// })
// .then((result)=>{
//     console.log("result :",result);
//     console.log("data 3 saved:")
// })
// .catch((error) =>{
//     console.log("error :",error);
//     console.log("promise was rejected");
// })

// async function dhruv(){
//     throw "week connection"
//     return "hello!";

// }
// dhruv()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with error");
//     console.log("error was:",err);
// })

function getnum(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let num  = Math.floor(Math.random()*10) +1;
            console.log(num);
            resolve();
        },1000);
    });
}

// async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
// }

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

const person = {
    name:["dhruv","patel"],
    age:12,
    bio:function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);

    },
    IntroduceSelf : function(){
        console.log(`Hi! i am ${this.name[0]}`);
    },
};

