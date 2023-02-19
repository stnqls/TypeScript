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
