export const minimum = (arr: number[]) => Math.min(...arr)

export const maximum = (arr: number[]) => Math.max(...arr)

export const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

export const average = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length
