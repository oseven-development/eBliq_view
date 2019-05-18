/** @format */

export const min = (arr: number[]) => Math.min(...arr)

export const max = (arr: number[]) => Math.max(...arr)

export const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

export const avg = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length

export const dif = (arr: number[] | any) => (arr.length > 1 ? sum(arr.pop()) / sum(arr) - 1 : 0)

export const pctDif = (arr: number[] | any) => dif(arr) - 1 * 100
