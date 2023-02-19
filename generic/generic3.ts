function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["Hello", "World"]);
helloArray(["Hello", 1]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["Hello", 2]);

function helloObject<T>(message: T): T {
  return message;
}

helloObject({ number: 1, name: "Mark" });
