/** @format */

import {Reducer} from 'redux'
import {sum} from '../utils/lib/measures/calculations'
import {getAttributeArray} from '../utils/lib/filter/getAttributeArray'
import {sortArray} from '../utils/lib/sortArray'
import {groupBy} from '../utils/lib/distinctOA'
var flatten = require('flat')

const initialMachineState: any = {
  machineData: [],
}
const initialAiState: any = {
  aiData: [],
}
const initialOrderState: any = {
  orderData: [],
  products: [],
  revenue: [],
}

export const machineReducer: Reducer<any, any> = (state = initialMachineState, action) => {
  switch (action.type) {
    case 'ADDM': {
      return {
        machineData: [...state.machineData, flatten(JSON.parse(action.payload))],
      }
    }
    default:
      return state
  }
}

export const orderReducer: Reducer<any, any> = (state = initialOrderState, action) => {
  switch (action.type) {
    case 'ADDO': {
      const data = [...state.orderData, JSON.parse(action.payload)].flat()
      const revenue = calculateCustomerRevenue(data)
      const products = data.map((e: any) => e.products).flat()
      return {
        orderData: data,
        products: products,
        revenue: sortArray(revenue, 'revenue'),
      }
    }
    default:
      return state
  }
}
export const aiReducer: Reducer<any, any> = (state = initialAiState, action) => {
  switch (action.type) {
    case 'ADDA': {
      return {
        aiData: [...state.aiData, JSON.parse(action.payload)],
      }
    }
    default:
      return state
  }
}

const calculateCustomerRevenue = (data: any) => {
  return data
    .map((order: any) => {
      const revenue = sum(getAttributeArray(order.products, 'price'))
      return {companyname: order.company.companyname, revenue}
    })
    .reduce(
      (map => (r: any, a: any) => {
        map.set(a.companyname, map.get(a.companyname) || r[r.push({companyname: a.companyname, revenue: 0}) - 1])
        map.get(a.companyname).revenue += a.revenue
        return r
      })(new Map()),
      [],
    )
}
