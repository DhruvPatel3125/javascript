let todo = []

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }

    if(req == "list"){
        console.log("-----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------------");
    }
}