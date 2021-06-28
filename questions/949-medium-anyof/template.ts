type Or<A, B> = A extends true ? true : B extends true ? true : false;

type Predicate<T> = T extends 1
  ? true
  : T extends string
  ? T extends ''
    ? false
    : true
  : T extends any[]
  ? T extends { length: 0 }
    ? false
    : true
  : T extends object
  ? keyof T extends never
    ? false
    : true
  : T extends boolean
  ? T
  : false;

type AnyOf<T extends readonly any[]> = T extends [infer K, ...infer U]
  ? Predicate<K> extends true
    ? true
    : AnyOf<U>
  : false;
