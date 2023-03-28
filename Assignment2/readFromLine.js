// Import the Node.js readline module.
const readLine = require("readline");

const read_Line_interface = readLine.createInterface({  // Create an instance of readline interface.
    
    input: process.stdin,           // Assign process.stdin as input.
    output: process.stdout          // Assign process.stdout as output. 
});

read_Line_interface.question("Enter the Input :  ", function(input) {
        
        console.log(`Hello ${input}`);   // Print user input data in the console.
        
        read_Line_interface.close();    // Close readline interface.
    });

// When the readline prompt is closed, it will trigger this function.
read_Line_interface.on("close", function() {

    console.log("\nHave a nice day !!!");  // Print have a nice day on the console.
    process.exit(0);                      // Exit the process.
    
});