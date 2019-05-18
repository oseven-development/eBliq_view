/** @format */

import {getAttributeArray} from '../getAttributeArray'

const testArr = [
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
