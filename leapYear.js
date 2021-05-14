const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readl.question("Enter year: ", (year) => {
    
    //Cheak the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is leap year');
    } else {
        console.log(year + ' is not leap year');
    }

    readl.close();
  });