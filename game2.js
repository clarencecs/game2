var readlineSync = require('readline-sync');
console.log("Clarence: Hello, my name is Clarence");
let name = readlineSync.question("What is your name?");
console.log("Clarence: Huh, so your name's " + name + "...");
console.log("Clarence: well... " + name + "... I don't like the way you smile...");
loop1();

function loop1(){
    console.log("How would you like to respond?");
    let choice1 = readlineSync.question("Options: thank him, punch him, walk away");
    switch(choice1){
        case "thank him":
            console.log("Clarence: You are absolutely welcome..." + name);
            loop2("thank him");
            break;
        case "punch him":   
            console.log("Clarence: OOooOowww... what was that for?");
            loop2("punch him");
            break;
        case "walk away":
            console.log("you walked away. The end");
            break;
        default:
            console.log("invalid answer");
            loop1();
    }
}

function loop2(x){
    switch(x){
        case "thank him":
            console.log("What would you like to do?");
            let choice2 = readlineSync.question("Options: be friends, punch him, walk away");
            ending(choice2);
            break;
        case "punch him":
            console.log("What would you like to do?");
            let choice3 = readlineSync.question("Options: punch him again, walk away");
            ending(choice3);
            break;
    }
}

function ending(x){
    switch(x){
        case "be friends":
            console.log("You guys are friends now!");
            break;
        case "punch him":
            console.log("Clarence ran away.");
            break;
        case "walk away":
            console.log("You walked away.");
            break;
        case "punch him again":
            console.log("Clarence was knocked out. You walk away.");
            break;
        default:
            console.log("invalid answer.");
            console.log("What would you like to do?");
    }
}