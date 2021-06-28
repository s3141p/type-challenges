type Keys<A, B> = Exclude<keyof A | keyof B, keyof A>;

type Diff<A, B> = {
  [P in Keys<A, B> | Keys<B, A>]: P extends keyof A
    ? A[P]
    : P extends keyof B
    ? B[P]
    : never;
};
