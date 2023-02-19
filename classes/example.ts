class Person_c {
  public name: string = "Mark";
  public age!: number;
  //할당하지 않으면, undefined에러가 난다.(age!:string을사용할경우, 사용자가 할당해줘야해서 오류를 잡기 힘들다.)
  // = 생성자에서 값을 할당하지 않는 경우에 '!'를 사용한다.

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p_c1 = new Person_c(30);

console.log(p_c1);

// class 이름은 보통 대문자를 이용하며, new 를 이용해 object를 만들수 있다.
// constructor를 이용해 object를 생성하면서 값을 전달할 수 있다.
// ES5인경우 js에서는 class를 function으로 변경한다.

// 기본값은 public으로, 클래스의 생성자, 프로퍼티, 메서드에 설정이 가능하다.
// private는 클래스 외부에서 접근할수 없으며, 이름 앞에 '_'를 붙여서 표현한다.
// protected는 상속관계에서 사용한다.
