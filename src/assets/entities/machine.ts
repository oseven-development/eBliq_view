/** @format */

import {avg, sum, max, min, pctDif, dif} from '../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../utils/lib/filter/getAttributeArray'
import {getFilteredArray} from '../../utils/lib/filter/getFilteredArray'

/** @format */

// ? IDEE: für jedes Event / Eventtype das reinkommt eine Entity, sodass man einfach die Werte abfragen kann
// ? man übergibt daten und bekommt direkt dann so ja xyz. zurück
// ? exp. const machine 1 = new machine(data)
// ? in js dann value={machine1.sum()}

export class machineTemplate {
  public data: any

  constructor(data: any) {
    this.data = data.arr
  }
  public sum(property: string) {
    return sum(getAttributeArray(this.data, property))
  }
  public avg(property: string) {
    return avg(getAttributeArray(this.data, property))
  }
  public max(property: string) {
    return max(getAttributeArray(this.data, property))
  }
  public min(property: string) {
    return min(getAttributeArray(this.data, property))
  }
  public dif(property: string) {
    return dif(getAttributeArray(this.data, property))
  }
  public pctDif(property: string) {
    return pctDif(getAttributeArray(this.data, property))
  }
}
