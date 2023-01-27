import { expect, test } from 'vitest'
import { formatter } from './formatter.js'

test('formatter', () => {
  const string = 'ABCDEFJHIJKLMNOPQRSTUVWXYZ123456789'
  const formattedString = formatter(string)
  expect(formattedString).toBe('ABCDEFJHIJKLMNOPQRSTUVWXYZ123456\n789')
})
