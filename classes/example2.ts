class Person_c2 {
  public constructor(private _name: string, public age: number) {}

  get name() {
    console.log("get");
    return this._name + "Lee";
  }

  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p_c2 = new Person_c2("Mark", 30);

console.log(p_c2.name); // get
p_c2.name = "Subin"; // set

// getter만 있고, setter는 없는경우 읽기만 가능해진다.
// getter가 없는경우 오류는 발생하지 않지만 undefined가 출력된다.
