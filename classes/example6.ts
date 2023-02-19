//Abstract

abstract class AbstractPerson {
  protected _name: string = "Mark";
  abstract setName(name: string): void;
}

//new AbstractPerson() error!

// 구현을 해야 사용이 가능하다.
class Person_c4 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const abstractP = new Person_c4();
abstractP.setName("Mark");
