function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("string"); // T를 string으로 지정해서, string만 가능하다.
helloBasic(20);

function helloBasic2<T, U>(message: T, comment: U): T {
  return message;
}
helloBasic2<string, number>("string", 30);
helloBasic2(10, 20);
