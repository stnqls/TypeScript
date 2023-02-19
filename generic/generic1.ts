function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 들어오는 인자와 리턴타입이 일정한, 같은 로직을 반복하는 함수

function helloAny(message: any): any {
  return message;
}

console.log(helloAny("Mark").length); // number가 아닌 any형으로 추론된다.
console.log(helloAny(30)); // undefined가 나타난다.

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("Mark").length);
console.log(helloGeneric(20));
console.log(helloGeneric(true));
