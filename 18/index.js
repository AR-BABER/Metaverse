"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["canada", "Australia", "america", "zimbabwa", "india", "afganaistan"];
console.log(places);
let sortP = places.slice().sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
});
console.log("sorted list", sortP);
console.log("origna list", places);
console.log("reverse alphabatic order is below");
for (let i = sortP.length; i >= 0; i--) {
    console.log(sortP[i]);
}
console.log("orignal list", places);
console.log("reverse orignal", places.reverse());
console.log("sorted list again", sortP);
