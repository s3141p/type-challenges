type AppendArgument<Fn, A> = Fn extends (...args: infer Arg) => infer Res
  ? (...args: [...Arg, A]) => Res
  : Fn;
