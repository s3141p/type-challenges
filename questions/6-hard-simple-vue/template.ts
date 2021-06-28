declare function alert(a: any): void;

type MapComputed<T> = {
  [P in keyof T]: T[P] extends () => infer R ? R : never;
};

type Desc<Data, Computed, Methods> = {
  data: (this: unknown) => Data;
  computed: Computed & ThisType<Data>;
  methods: Methods & ThisType<Data & MapComputed<Computed> & Methods>;
};

declare function SimpleVue<Data, Computed, Methods>(
  options: Desc<Data, Computed, Methods>
): any;
