const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Taking inpt from user
readl.question("Enter number from 0-6: ", (num) => {
    
        //Printing Output as per users input
        if (num == 0) {
            console.log("Sunday");
        }else if (num == 1) {
            console.log("Monday");
        }else if (num == 2) {
            console.log("Tuesday");
        }else if (num == 3) {
            console.log("Wednesday");
        }else if (num == 4) {
            console.log("Thursday");
        }else if (num == 5) {
            console.log("Friday");
        }else if (num == 6) {
            console.log("Saturday");
        }else {
            console.log("Invalid input!!!")
        }

    readl.close();
});