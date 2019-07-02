/** @format */

export const distinctOA = (arr: any[], property: string) => {
  return arr.map(item => item[property]).filter((value, index, self) => self.indexOf(value) === index)
}

export const groupBy = (array: any, attribute: any) =>
  array.reduce(
    (result: any, item: any) => ({
      ...result,
      [item[attribute]]: [...(result[item[attribute]] || []), item],
    }),
    {},
  )
