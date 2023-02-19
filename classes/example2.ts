class Person_c2 {
  public readonly name: string = "Mark";
  private readonly country: string;

  public constructor(private _name: string, public age: number) {
    this.country = "Korea";
  }

  // hello() {
  //   this.country = 'China'; error
  // }
}

const p_c2 = new Person_c2("Mark", 30);

console.log(p_c2.name); // get
// p_c2.name = "Subin"; // set error
console.log(p_c2.name);
