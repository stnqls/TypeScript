"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`IPerson1의 ${this.name}입니다.`);
    }
}
const p5 = new Person("Mark");
p5.hello();
