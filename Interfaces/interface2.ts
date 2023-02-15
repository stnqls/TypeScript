interface Person2 {
  name: string;
  age?: number; // 있을수도 있고, 없을수도 있는경우 '?'를 사용한다.
}

function hello2(person: Person2): void {
  console.log(`2번 ${person.name} 입니다.`);
}

hello2({ name: "Mark", age: 20 });
hello2({ name: "Anna" });

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떤이름과 형식의 프로퍼티가 추가되어도 상관이 없다.
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 3번 ${person.name} 입니다.`);
}

const p3_1: Person3 = {
  name: "Mark",
  age: 30,
};

const p3_2: Person3 = {
  name: "Anna",
  systers: ["Sung", "Chan"],
};

const p3_3: Person3 = {
  name: "Bokdaengi",
  father: p3_1,
  mother: p3_2,
};

hello3(p3_3);
