/** @format */

export const sortArray = (arr: any[], property: string) => {
  return arr.sort((a: any, b: any) => (a[property] < b[property] ? 1 : b[property] < a[property] ? -1 : 0))
}
