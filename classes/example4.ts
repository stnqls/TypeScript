class Person_c3 {
  public static city = "seoul";
  public hello() {
    console.log("hello!");
  }
  public change() {
    Person_c3.city = "LA";
  }
}

const p_c3 = new Person_c3();
p_c3.hello();
const p_c4 = new Person_c3();
p_c4.hello();

p_c3.change();
// Person_c3.hello();
Person_c3.city;
// 클래스로 만들어진 object로 부터 공통적으로 사용하고싶은 데이터가 있을경우 static을 사용한다.

// Singletons
class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 있으면 그걸 리턴하고, 없으면 만들어서 리턴한다.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor() {}
}

// const A = new ClassName() constructor가 private이기때문에 오류가 발생한다.
const B = ClassName.getInstance();
const C = ClassName.getInstance();

console.log(B === C); // TRUE
