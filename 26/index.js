"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let aline = 'green';
if (aline === 'green') {
    console.log("true, its green, you earned 5 points");
}
else if (aline !== 'green') {
    console.log("its not green, you still earned 10 points");
}
aline = 'blue';
if (aline === 'green') {
    console.log("true, you earned 5 points");
}
else if (aline !== 'green') {
    console.log("its not green, you still earned 10 points");
}
