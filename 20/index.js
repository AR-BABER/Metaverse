"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let places = [];
let mountains = [];
while (true) {
    let placess = prompt("write your favourte place");
    if (placess == null) {
        break;
    }
    else {
        places.push(placess);
    }
}
while (true) {
    let mount = prompt("write your favourte mountain");
    if (mount == null) {
        break;
    }
    else {
        mountains.push(mount);
    }
}
console.log(places);
console.log(mountains);
