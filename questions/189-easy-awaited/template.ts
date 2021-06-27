type Awaited<T extends Promise<any>> = T extends Promise<infer K> ? K : T;
