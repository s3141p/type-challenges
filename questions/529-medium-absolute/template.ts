type NumberLike = number | string | bigint;

type ToString<N extends NumberLike> = `${N}`;

type Absolute<
  T extends NumberLike,
  Str extends string = ToString<T>
> = Str extends `-${infer R}` ? R : Str;
