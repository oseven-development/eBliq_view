/** @format */

export const createChartData = (arr: any, xProperty: string, yProperty: string, length?: number) => {
  const newArr: any = []
  var options = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
  let i = 0
  arr.map((e: any) => {
    // console.log(`${new Date(e[xProperty]).toLocaleDateString('de-DE', options)}`)
    if (e[yProperty]) {
      xProperty === 'date'
        ? // ? newArr.push({x: e[xProperty].toLocaleDateString('de-DE', options), y: e[yProperty]})
          newArr.push({
            x: new Date(e[xProperty]),
            y: e[yProperty],
          })
        : //   newArr.push({x: i, y: e[yProperty]})
          newArr.push({x: e[xProperty], y: e[yProperty]})
    }
  })
  return length && newArr.length >= length ? newArr.slice(newArr.length - length, newArr.length) : newArr
}
