export function exclude<T, Key extends keyof T>(
  data: T,
  keys: Key[]
): Omit<T, Key> {
  for (let key of keys) {
    if((data as Array<T>).length){
        (data as Array<T>).forEach((d)=>{
            delete d[key];
        })
    }
    delete data[key];
  }
  return data;
}
