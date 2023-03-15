"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = ["admin", "maria", "misbah", "bilal"];
for (let i = 0; i < user.length; i++) {
    if (user[i] === "admin") {
        console.log("special welcome to our admin.");
    }
    else {
        console.log(user[i], "welcome");
    }
}
