type Includes<T extends readonly any[], U> = T extends readonly (
  | string
  | number
)[]
  ? U extends T[number]
    ? true
    : false
  : false;
