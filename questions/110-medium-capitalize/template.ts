type MyCapitalize<S extends string> = S extends ''
  ? ''
  : S extends `${infer R1}${infer R2}`
  ? `${Uppercase<R1>}${R2}`
  : never;
