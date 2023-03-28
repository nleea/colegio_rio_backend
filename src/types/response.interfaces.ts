export interface ErrorsInterfaces<T> {
  status: number;
  ok: boolean;
  data: T;
  header?: any;
}

export interface ResponseInterfaces<T> {
  status: number;
  ok: boolean;
  data: T;
  header?: any;
}
