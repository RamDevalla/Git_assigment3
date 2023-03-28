const Greet = (name) =>{
    return `Hello ${name}`
}

let Greeting = process.argv; // which takes the array of arguments in command Line
console.log(Greet(Greeting[2])); // At index 2 it will take "name"