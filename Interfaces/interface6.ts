interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`HelloPerson ${name}입니다.`);
};

helloPerson("Mark"); // 함수를 사용할때 interface와의 형식만 체크한다.
helloPerson("Mark", 30);

// 'age:number'를 작성하면, 구현할때 age가 필수인 요소가되어 error
// const helloPerson2: HelloPerson = function (name: string, age: number) {
//   console.log(`HelloPerson2 ${name}입니다.`);
// };
