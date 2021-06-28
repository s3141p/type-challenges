type IsUnion<T, K extends T = T> = T extends T
  ? [K] extends [T]
    ? false
    : true
  : never;
