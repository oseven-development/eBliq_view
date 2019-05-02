export const divideRange = (left: IObjekt, right: IObjekt, parts: number) => {
  const xResult: number[] = []
  const yResult: number[] = []
  if (right.x === left.x) {
    for (let index = 0; index < parts - 1; index++) {
      xResult.push(right.x)
      yResult.push(right.y)
    }
  } else {
    const deltaX: number = (right.x - left.x) / (parts - 1)
    while (left.x < right.x) {
      xResult.push(left.x)
      left.x += deltaX
    }
    xResult.push(right.x)
    if (right.y > left.y) {
      const deltaY: number = (right.y - left.y) / (parts - 1)
      while (left.y < right.y) {
        yResult.push(left.y)
        left.y += deltaY
      }
      yResult.push(right.y)
    } else {
      const deltaY: number = (left.y - right.y) / (parts - 1)
      while (left.y > right.y) {
        yResult.push(left.y)
        left.y -= deltaY
      }
      yResult.push(right.y)
    }
  }
  const Result: any = xResult.map((e: number) => {
    const index: number = xResult.indexOf(e)

    return { x: xResult[index], y: yResult[index] }
  })
  return Result
}

interface IObjekt {
  x: number
  y: number
}
