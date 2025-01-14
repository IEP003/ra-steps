import { TData } from "../components/InputForm/InputForm"


export const sorting = (arr : TData[]) => {
  return arr.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    return dateB.getTime() - dateA.getTime();
  })
}
