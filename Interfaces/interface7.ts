interface Person5 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p7_1: Person5 = {
  name: "Mark",
  gender: "male",
};

// p7_1.gender = 'female'; error, 수정이 불가능하다.
