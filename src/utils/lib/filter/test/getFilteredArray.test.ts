/** @format */

import {getFilteredArray} from '../getFilteredArray'

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
  {
    id: 3,
    value: 10,
  },
  {
    id: 4,
    value: 7,
  },
  {
    id: 5,
    value: 8,
  },
]

test('> ', () => {
  expect(getFilteredArray(testArr, 'value', '>', 2)).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 'value', '>', 2)).not.toContainEqual({id: 1, value: 1})
})
test('>= ', () => {
  expect(getFilteredArray(testArr, 'value', '>=', 1)).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 'value', '>=', 1)).not.toContainEqual({id: 0, value: 0})
})
test('===', () => {
  expect(getFilteredArray(testArr, 'value', '===', 7)).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 'value', '===', 7)).not.toContainEqual({id: 1, value: 1})
})
test('<', () => {
  expect(getFilteredArray(testArr, 'value', '<', 2)).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 'value', '<', 2)).not.toContainEqual({id: 4, value: 7})
})
test('<= ', () => {
  expect(getFilteredArray(testArr, 'value', '<=', 7)).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 'value', '<=', 7)).not.toContainEqual({id: 3, value: 10})
})
test('!== ', () => {
  expect(getFilteredArray(testArr, 'value', '!==', 7)).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 'value', '!==', 7)).not.toContainEqual({id: 4, value: 7})
})
