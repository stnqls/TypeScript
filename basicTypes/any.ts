function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나(any)");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  // const a: number = obj.num a= number
  const a = obj.num; // a = any
  const b = a + 1; // b = any
  return b;
}

const c = leakingAny({ num: 0 }); // c = any
c.indexOf("0");
