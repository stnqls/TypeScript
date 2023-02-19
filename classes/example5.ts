class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}, 나이는 ${this._age}입니다.`);
  }
  protected printName(): void {
    console.log(this._name);
  }
}

const p = new Parent("Mark", 40);
p.print();

class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    super("Mark Jr", age);
    this.printName();
  }
}

const child1 = new Child(5);
child1.print();
