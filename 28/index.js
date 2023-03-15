"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = [2, 3, 4, 13, 20];
for (let i = 0; i <= age.length; i++) {
    if (age[i] === 2 || age[i] < 4) {
        console.log("the person is a toddler.");
    }
    else if (age[i] === 4 && age[i] < 13) {
        console.log(" the person is a kid");
    }
    else if (age[i] === 13 && age[i] < 20) {
        console.log(" the person is a teenage");
    }
    else if (age[i] === 20 && age[i] < 65) {
        console.log(" the person is a adult");
    }
}
