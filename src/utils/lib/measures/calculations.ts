/** @format */

export const min = (arr: number[]) => Math.min(...arr)

export const max = (arr: number[]) => Math.max(...arr)

export const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

export const count = (arr: number[]) => arr.length

export const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length

export const dif = (arr: number[] | any) => {
  if (arr.length > 1) {
    return 1 - avg(arr.slice(0, arr.length - 1)) / avg(arr)
  } else return 0
}

export const pctDif = (arr: number[] | any) => dif(arr) * 100

export const latest = (arr: number[] | any) => arr[arr.length - 1]
