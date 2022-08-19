import { expect, test } from 'vitest'
import { getHash, validateCamelCase } from '../src/utils'

const filename = Buffer.from('CustomComponent')

test('getHash', () => {
  expect(getHash(filename)).toBeTruthy()
})

test('validateCamelCase', () => {
  expect(validateCamelCase('CustomComponent')).toBeTruthy()
  expect(validateCamelCase('Marketing123')).toBeTruthy()

  expect(validateCamelCase('123CustomComponent')).toBeFalsy()
  expect(validateCamelCase('customComponent')).toBeFalsy()
  expect(validateCamelCase('everyname')).toBeFalsy()
},
)
