/** @format */

import {splitString} from './splitString'
import {createData} from '../../../components/table/salesTable'

const KPIs = ['Umsatz', 'Menge']

export const searchBoy = async (phrase: string, arr: any) => {
  const splittedArray: string[] = await splitString(phrase)
  let searchArrayCustomer = arr.revenue
  let searchOrder = arr.orderData
  let searchArrayProduct = await createData(arr.products).then((res: any) => {
    return res
  })
  let resultArray: any = []
  const findKPI = splittedArray.find((element: any) => {
    if (KPIs.includes(element)) {
      return element
    }
  })
  switch (findKPI) {
    case 'Umsatz':
      const customer = searchArrayCustomer.filter((element: any) => {
        if (phrase.includes(element.companyname)) {
          return true
        }
      })
      const product = searchArrayProduct.filter((element: any) => {
        if (phrase.includes(element.name)) {
          return true
        }
      })
      console.log(customer)
      if (customer.length > 0) {
        customer.map((cust: any) => {
          resultArray.push({name: cust.companyname, value: cust.revenue})
        })
      }
      if (product.length > 0) {
        product.map((prod: any) => {
          resultArray.push({name: prod.name, value: prod.revenue})
        })
      }
      break
    case 'Menge':
      const productMenge = searchArrayProduct.filter((element: any) => {
        if (phrase.includes(element.name)) {
          return true
        }
      })
      if (productMenge.length > 0) {
        productMenge.map((prod: any) => {
          resultArray.push({name: prod.name, value: prod.quantity})
        })
      }
      break

    default:
      const customerOrder = searchOrder.filter((element: any) => {
        if (phrase.includes(element.company.companyname)) {
          return true
        }
      })
      const productOrder = searchOrder.filter((element: any) => {
        const x = element.products.find((product: any) => phrase.includes(product.name))
        if (x) {
          return true
        }
      })
      if (customerOrder.length > 0) {
        customerOrder.map((cust: any) => {
          resultArray.push(cust)
        })
      }
      if (productOrder.length > 0) {
        productOrder.map((prod: any) => {
          resultArray.push(prod)
        })
      }
      break
  }
  return resultArray
}
