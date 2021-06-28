type StringToUnion<T extends string> = T extends ''
  ? never
  : T extends `${infer K}${infer U}`
  ? K | StringToUnion<U>
  : never;
