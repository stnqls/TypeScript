interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p4_1: Person4 = {
  name: "Mark",
  age: 40,
  hello: function (): void {
    console.log(`4번 ${this.name}입니다.`);
  },
};

const p4_2: Person4 = {
  name: "Mark",
  age: 40,
  hello(): void {
    console.log(`4번 ${this.name}입니다.`);
  },
};

p4_1.hello();
p4_2.hello();
