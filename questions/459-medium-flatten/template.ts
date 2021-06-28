type Flatten<T extends any[]> = T extends [infer K, ...infer U]
  ? K extends any[]
    ? [...Flatten<K>, ...Flatten<U>]
    : [K, ...Flatten<U>]
  : [];
