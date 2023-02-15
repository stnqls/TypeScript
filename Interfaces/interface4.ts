interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined; //있어도 없어도 된다.

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`IPerson1의 ${this.name}입니다.`);
  }
}

const p5: IPerson1 = new Person("Mark");
p5.hello();
