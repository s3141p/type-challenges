type Spaces = ' ' | '\t' | '\n';

type Trim<S extends string> = S extends `${Spaces}${infer R}${Spaces}`
  ? Trim<R>
  : S extends `${Spaces}${infer U}`
  ? Trim<U>
  : S extends `${infer J}${Spaces}`
  ? Trim<J>
  : S;
