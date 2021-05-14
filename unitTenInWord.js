const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//Taking inpt from user
readl.question("Enter number like 1,10,...10000: ", (num) => {
    
        //Printing Output as per users input
        if (num == 1) {
            console.log("Unit");
        }else if (num == 10) {
            console.log("Ten");
        }else if (num == 100) {
            console.log("Hundred");
        }else if (num == 1000) {
            console.log("Thousand");
        }else if (num == 10000) {
            console.log("Ten Thousand's");
        }else if (num == 100000) {
            console.log("Lakh");
        }else if (num == 1000000) {
            console.log("Ten Lakh's");
        }else {
            console.log("Invalid input!!!")
        }

    readl.close();
});