type Chainable<U = {}> = {
  option<T extends string, K>(key: T, value: K): Chainable<U & { [P in T]: K }>;
  get(): U;
};
