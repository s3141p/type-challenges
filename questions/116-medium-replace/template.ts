type Replace<
  S extends string,
  From extends string,
  To extends string
> = '' extends From | To
  ? S
  : S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S;
