"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
let a = "hello";
if (typeof a !== "string") {
    a; // 잘못된 타입을 넣는 실수를 방지할 수 있다.
}
if (typeof b !== "string") {
    b; //b = number
}
