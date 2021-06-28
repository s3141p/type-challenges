type UnionToIntersection<U> = (
  U extends infer R ? (x: R) => any : never
) extends (x: infer V) => any
  ? V
  : never;

type C = UnionToIntersection<{ foo: string } | { bar: string }>;
