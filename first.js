let n= prompt("enter the marks of student");
let grade;

if(n>=80 && n<=100){
    grade="A";
}else if(n>=70 && n<=79){
    grade="B";
}else if(n>=60 && n<=69){
    grade="C";
}else if(n>=0 && n<=59){
    grade="D";
}

console.log("accoerding your marks youe grade is", grade)