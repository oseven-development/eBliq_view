/** @format */
import {getAttributeArray} from './filter/getAttributeArray'
import {getFilteredArray} from './filter/getFilteredArray'
import {sum, min, max, avg} from './measures/calculations'

export class cArray {
  private arr: any[]
  private measure: number
  constructor(arr: any[]) {
    this.arr = arr
    this.measure = 0
  }
  public getAttributeArray(attribute: string) {
    this.arr = getAttributeArray(this.arr, attribute)
    return this
  }
  public getFilteredArray(filterValue: number, filterProperty: string, filterOperator: string) {
    this.arr = getFilteredArray(this.arr, filterValue, filterProperty, filterOperator)
    return this
  }
  public sum() {
    return sum(this.arr)
  }
  public max() {
    return max(this.arr)
  }
  public min() {
    return min(this.arr)
  }
  public avg() {
    return avg(this.arr)
  }
}
