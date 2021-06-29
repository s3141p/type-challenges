type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};

type ParsePrintFormat<T extends string> =
  T extends `${infer start}%${infer Letter}${infer Rest}`
    ? Letter extends keyof ControlsMap
      ? [ControlsMap[Letter], ...ParsePrintFormat<Rest>]
      : ParsePrintFormat<Rest>
    : [];
