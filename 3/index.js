"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let c = 'abdul rehman baber';
console.log(c.toUpperCase());
console.log(c.toLowerCase());
function titlecase(a) {
    return a.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titlecase(c));
