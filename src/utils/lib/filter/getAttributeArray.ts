/** @format */

export const getAttributeArray = (arr: any[], property: string) =>
  arr.filter((e: any) => e[property] !== undefined).map((e: any) => e[property])

export const getAttributeArrayTest = (arr: any[], property: string) =>
  arr.map((e: any) => {
    console.log(e)
    console.log(property)
    console.log(e[property])
    if (e[property]) {
      console.log('passt')
      return e[property]
    }
  })
