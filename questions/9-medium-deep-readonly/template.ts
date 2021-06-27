type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends (...args: any) => any
    ? T[K]
    : T[K] extends {}
    ? DeepReadonly<T[K]>
    : T[K];
};
