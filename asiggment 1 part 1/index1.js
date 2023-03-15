"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let english = 83;
let math = 65;
let averge = (83 + 65) / 2;
console.log(averge);
if (averge === 80 || averge > 80) {
    console.log("congrats you get an A");
}
else if (averge === 70 || averge > 70) {
    console.log("congrats you get a B");
}
else if (averge === 60 || averge > 60) {
    console.log("congrats you get a c");
}
else if (averge === 50 || averge > 50) {
    console.log("congrats you get a d");
}
else if (averge < 50) {
    console.log("Sorry you failed");
}
