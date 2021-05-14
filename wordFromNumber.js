const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Taking inpt from user
readl.question("Enter number from 1-:10 ", (num) => {
    
        //Printing Output as per users input
        if (num == 1) {
            console.log("One");
        }else if (num == 2) {
            console.log("Two");
        }else if (num == 3) {
            console.log("Three");
        }else if (num == 4) {
            console.log("Four");
        }else if (num == 5) {
            console.log("Five");
        }else if (num == 6) {
            console.log("Six");
        }else if (num == 7) {
            console.log("Seven");
        }else if (num == 8) {
            console.log("Eight");
        }else if (num == 9) {
            console.log("Nine");
        }else if (num == 10) {
            console.log("Ten");
        }else {
            console.log("Invalid input!!!")
        }

    readl.close();
});