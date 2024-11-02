let globalVar = "I'm a global variable";

function myFunction() {
    let localVar = "I'm a local variable";

    console.log(globalVar); //  global variable from inside the function
    console.log(localVar);  // local variable within the function
}

myFunction();

console.log(globalVar); //  global variable outside the function
console.log(localVar);  // This will throw an error as localVar is not accessible outside the function

