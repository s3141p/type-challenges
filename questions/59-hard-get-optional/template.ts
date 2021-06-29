type GetOptional<T, K extends keyof T = OptionalKeys<T>> = { [P in K]: T[P] };
