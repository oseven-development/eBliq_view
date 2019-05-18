/** @format */

export const getFilteredArray = (
  arr: any[],
  filterProperty: string,
  filterOperator: string,
  filterValue: string | number,
) => {
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
