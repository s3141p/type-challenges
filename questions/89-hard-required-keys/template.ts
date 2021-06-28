type RequiredKeys<
  T,
  R extends Required<T> = Required<T>,
  K extends keyof T = keyof T
> = K extends K ? (T[K] extends R[K] ? K : never) : never;
