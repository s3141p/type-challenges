type Pop<T extends any[]> = T extends [...infer args, any] ? args : any;
