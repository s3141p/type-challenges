type VueMapComputed<T> = {
  [P in keyof T]: T[P] extends () => infer R ? R : never;
};

type ValueMap<V> = V extends typeof String
  ? string
  : V extends typeof Number
  ? number
  : V extends typeof Boolean
  ? boolean
  : V extends new (...args: any[]) => unknown
  ? InstanceType<V>
  : any;

type TypeUnbox<Type> = Type extends (infer X)[] ? ValueMap<X> : ValueMap<Type>;

type ValueUnbox<V> = V extends { type: infer K } ? TypeUnbox<K> : TypeUnbox<V>;

type MapProps<T, K extends keyof T = keyof T> = {
  [P in K]: ValueUnbox<T[P]>;
};

type VueDesc<Props, Data, Computed, Methods> = {
  props: Props;
  data: (this: MapProps<Props>) => Data;
  computed: Computed & ThisType<Data & MapProps<Props>>;
  methods: Methods & ThisType<Data & VueMapComputed<Computed> & Methods & MapProps<Props>>;
};

declare function VueBasicProps<Props, Data, Computed, Methods>(
  options: VueDesc<Props, Data, Computed, Methods>
): any;
