/** @format */

import {getAttributeArray} from '../getAttributeArray'
import {getFilteredArray} from '../getFilteredArray'
import {sum} from '../../measures/calculations'
import {cArray} from '../../index'
const testArr: any = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 6,
    value: 3,
  },
  {
    id: 2,
    value: 4,
  },
]

test('get Attribute Array ', () => {
  expect(getAttributeArray(testArr, 'value')).toEqual([1, 3, 4])
})

test('test Chain', () => {
  expect(sum(getAttributeArray(getFilteredArray(testArr, 'value', '>', 1), 'value'))).toEqual(7)
  const arr = new cArray(testArr)
  expect(
    arr
      .getFilteredArray('value', '>', 1)
      .getAttributeArray('value')
      .sum(),
  ).toEqual(7)
})
