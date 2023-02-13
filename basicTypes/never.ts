function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";

if (typeof a !== "string") {
  a; // 잘못된 타입을 넣는 실수를 방지할 수 있다.
}

declare const b: string | number;

if (typeof b !== "string") {
  b; //b = number
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never; // T라는 타입이 string 이면   T & { [index: string]: any }을 아니면  never타입이다.

type ObjectIndexable = Indexable<{}>;
