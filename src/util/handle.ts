import { ChangeEvent } from "react";

export const onChangeInput = (e: ChangeEvent<HTMLInputElement>, key: string, data: Object, setData: (val: any) => void) => {
  const val = e.target.value;
  data[key] = val
  return setData({...data})
}