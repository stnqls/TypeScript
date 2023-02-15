"use strict";
function hello1(person) {
    console.log(`이름은 ${person.name}입니다.`);
}
const p1 = {
    name: "Mark",
    age: 20,
};
// const p1: { name: string; age: number } = {
//   name: "Mark",
//   age: 20,
// };
hello1(p1);
