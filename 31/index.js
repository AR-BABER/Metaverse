"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = ["admin", "maria", "misbah", "bilal"];
if (user.length > 0) {
    console.log("array of users is not empty");
}
while (user.length > 0) {
    user.pop();
}
if (user.length > 0) {
    console.log("array of users is not empty");
}
else {
    console.log("we need to find some users");
}
