type Inf<T> = T extends (...args: infer Args) => infer R
  ? Args extends { length: 0 }
    ? T
    : Args extends [infer A, ...infer Rest]
    ? Rest extends { length: 0 }
      ? (a: A) => R
      : (a: A) => Inf<(...x: Rest) => R>
    : never
  : never;

declare function Currying<T>(fn: T): Inf<T>;
