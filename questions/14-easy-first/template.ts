type First<T extends any[]> = T extends { length: 0 } ? never : T[0];
