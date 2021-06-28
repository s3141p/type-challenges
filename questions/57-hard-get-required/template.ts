type GetRequired<T> = {
  [P in RequiredKeys<T>]: T[P];
};
