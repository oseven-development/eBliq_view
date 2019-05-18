/** @format */

export const getFilteredArray = (arr: any[], filterValue: number, filterProperty: string, filterOperator: string) => {
  switch (filterOperator) {
    case '>':
      return arr.filter((e: any) => e[filterProperty] > filterValue)
    case '>=':
      return arr.filter((e: any) => e[filterProperty] >= filterValue)
    case '===':
      return arr.filter((e: any) => e[filterProperty] === filterValue)
    case '<':
      return arr.filter((e: any) => e[filterProperty] < filterValue)
    case '<=':
      return arr.filter((e: any) => e[filterProperty] <= filterValue)
    case '!==':
      return arr.filter((e: any) => e[filterProperty] !== filterValue)
    default:
      return arr
  }
}
