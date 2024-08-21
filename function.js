// const arrowsum = (a , b) => {
//    return a*b;
// };



// const dhruv = (a , b) => {
//     return a/b;
// }


// function countvov(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count)
// }

// const countvov = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count)
// }



// let number = [2, 3, 4, 5, 6, ];
// number.forEach((n) =>{
//     console.log(n**2)
// });


function flipCoin() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
  
    // Check if it's heads or tails based on the random number
    let result = randomNumber < 0.5 ? "Heads" : "Tails";
  
    // Display the result (you can modify this part to fit your needs)
    console.log("You flipped: " + result);
  }
  
  // Call the flipCoin function to simulate a coin toss
  flipCoin();
  