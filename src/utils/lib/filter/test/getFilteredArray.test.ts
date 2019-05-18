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
  expect(getFilteredArray(testArr, 2, 'value', '>')).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 2, 'value', '>')).not.toContainEqual({id: 1, value: 1})
})
test('>= ', () => {
  expect(getFilteredArray(testArr, 1, 'value', '>=')).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 1, 'value', '>=')).not.toContainEqual({id: 0, value: 0})
})
test('===', () => {
  expect(getFilteredArray(testArr, 7, 'value', '===')).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 7, 'value', '===')).not.toContainEqual({id: 1, value: 1})
})
test('<', () => {
  expect(getFilteredArray(testArr, 2, 'value', '<')).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 2, 'value', '<')).not.toContainEqual({id: 4, value: 7})
})
test('<= ', () => {
  expect(getFilteredArray(testArr, 7, 'value', '<=')).toContainEqual({id: 4, value: 7})
  expect(getFilteredArray(testArr, 7, 'value', '<=')).not.toContainEqual({id: 3, value: 10})
})
test('!== ', () => {
  expect(getFilteredArray(testArr, 7, 'value', '!==')).toContainEqual({id: 1, value: 1})
  expect(getFilteredArray(testArr, 7, 'value', '!==')).not.toContainEqual({id: 4, value: 7})
})
