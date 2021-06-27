type Unwrap<T> = T extends PromiseLike<infer R> ? R : T;
type UnwrapList<T> = T extends [infer x, ...infer rest]
  ? [Unwrap<x>, ...UnwrapList<rest>]
  : [];

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<UnwrapList<T>>;
