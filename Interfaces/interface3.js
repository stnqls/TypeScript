"use strict";
const p4_1 = {
    name: "Mark",
    age: 40,
    hello: function () {
        console.log(`4번 ${this.name}입니다.`);
    },
};
const p4_2 = {
    name: "Mark",
    age: 40,
    hello() {
        console.log(`4번 ${this.name}입니다.`);
    },
};
p4_1.hello();
p4_2.hello();
