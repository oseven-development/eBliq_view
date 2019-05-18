/** @format */
import {getAttributeArray} from './filter/getAttributeArray'
import {getFilteredArray} from './filter/getFilteredArray'
import {sum, min, max, avg} from './measures/calculations'

export class cArray {
  private arr: any[]
  constructor(arr: any[]) {
    this.arr = arr
  }
  public getAttributeArray(attribute: string) {
    this.arr = getAttributeArray(this.arr, attribute)
    return this
  }
  public getFilteredArray(filterProperty: string, filterOperator: string, filterValue: number) {
    this.arr = getFilteredArray(this.arr, filterProperty, filterOperator, filterValue)
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
