declare const maybe: unknown;

// const aNumber: number = maybe; err

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}

if (typeof maybe === "number") {
  const aNumber: number = maybe;
}
