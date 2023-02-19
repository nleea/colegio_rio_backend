export interface ErrorsInterfaces<T> {
  status: number;
  ok: boolean;
  data: T;
}

export interface ResponseInterfaces<T> {
  status: number;
  ok: boolean;
  data: T;
}
