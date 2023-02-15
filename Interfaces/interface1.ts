// 실제 컴파일 된 이우에는 interface가 사라지며, 컴파일단계에서만 사용된다.
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`이름은 ${person.name}입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 20,
};

// const p1: { name: string; age: number } = {
//   name: "Mark",
//   age: 20,
// };

hello1(p1);
