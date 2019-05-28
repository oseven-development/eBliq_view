/** @format */

import {splitString} from './splitString'

const KPIs = ['Umsatz', 'Ausfall']
const Years = ['2017', '2018', '2019', '2020']
const Customers = ['Müller', 'Maier', 'Hofmann', 'Baumann']
const Products = ['AZ12', 'AV54', 'DF19', 'WZ12']
const Machines = ['ZS123', 'ZS234', 'XY124', 'XY432']

export const searchBoy = async (phrase: string, arr: any) => {
  const splittedArray: string[] = await splitString(phrase)
  let searchArray = arr
  console.log(searchArray)
  const findKPI = splittedArray.find((element: any) => {
    if (KPIs.includes(element)) {
      return element
    }
  })
  const findYear = splittedArray.find((element: any) => {
    if (Years.includes(element)) {
      return element
    }
  })
  const findCustomer = splittedArray.find((element: any) => {
    if (Customers.includes(element)) {
      return element
    }
  })
  const findProduct = splittedArray.find((element: any) => {
    if (Products.includes(element)) {
      return element
    }
  })
  const findMachine = splittedArray.find((element: any) => {
    if (Machines.includes(element)) {
      return element
    }
  })
  // console.log(findKPI)
  // console.log(findYear)
  // console.log(findCustomer)
  // console.log(findProduct)
  // console.log(findMachine)
  switch (findKPI) {
    case 'Umsatz':
      if (findYear) {
        searchArray = searchArray.getFilteredArray('year', '===', findYear)
      }
      if (findCustomer) {
        searchArray = searchArray.getFilteredArray('customer', '===', findCustomer)
      }
      if (findProduct) {
        searchArray = searchArray.getFilteredArray('product', '===', findProduct)
      }
      return searchArray.getAttributeArray('value').sum()
    case 'Ausfall':
      if (findYear) {
        searchArray = searchArray.getFilteredArray('year', '===', findYear)
      }
      if (findMachine) {
        searchArray = searchArray.getFilteredArray('customer', '===', findMachine)
      }
    default:
      break
  }
}
