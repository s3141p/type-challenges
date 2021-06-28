type OptionalKeys<T> = keyof Omit<T, RequiredKeys<T>>;
