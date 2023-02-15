"use strict";
function hello2(person) {
    console.log(`2번 ${person.name} 입니다.`);
}
hello2({ name: "Mark", age: 20 });
hello2({ name: "Anna" });
function hello3(person) {
    console.log(`안녕하세요 3번 ${person.name} 입니다.`);
}
const p3_1 = {
    name: "Mark",
    age: 30,
};
const p3_2 = {
    name: "Anna",
    systers: ["Sung", "Chan"],
};
const p3_3 = {
    name: "Bokdaengi",
    father: p3_1,
    mother: p3_2,
};
hello3(p3_3);
