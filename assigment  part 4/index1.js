"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let price = 6;
const factoriell = function (price) {
    var fact = price;
    for (let i = price - 1; i > 1; i--) {
        fact = fact * i;
    }
    console.log("factoriel of number " + price, "is " + fact);
};
factoriell(price);
