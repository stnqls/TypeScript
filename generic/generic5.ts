interface IPerson {
  name: string;
  age: number;
}

const genericPerson2: IPerson = {
  name: "Mark",
  age: 30,
};

// type Keys = keyof IPerson;

// const keys:Keys= "name"

// IPerson[keyof IPerson]
// = IPerson["name" | "age"] = IPerson["name"] | IPerson["age"]
// = string | number

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(genericPerson2, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
  return;
}

setProp(genericPerson2, "name", "Anna");

setProp(genericPerson2, "age", 25);
