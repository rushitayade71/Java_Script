let a = Math.floor(1 + ((Math.random() * 10) % 6)),
    b = Math.floor(1 + ((Math.random() * 10) % 6)),
    c = Math.floor(1 + ((Math.random() * 10) % 6));

let Result1 = a + b * c;
let Result2 = c + a / b;
let Result3 = (a % b) + c;
let Result4 = a * b + c;
console.log(Result1);
console.log(Result2);
console.log(Result3);
console.log(Result4);
let maximum = Math.max(Result1, Result2, Result3, Result4);
console.log(maximum);
let minimum = Math.min(Result1, Result2, Result3, Result4);
console.log(minimum);