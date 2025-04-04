import { describe, it, expect } from 'vitest'
import {
  substitutionCipherEncryption,
  substitutionCipherDecryption
} from '../SubstitutionCipher.js'

describe('Substitution Cipher', () => {
  const key = 'QWERTYUIOPASDFGHJKLZXCVBNM'

  it('correctly encrypts a message', () => {
    const encrypted = substitutionCipherEncryption('HELLO WORLD', key)
    expect(encrypted).toBe('ITSSG VGKSR')
  })

  it('correctly decrypts a message', () => {
    const decrypted = substitutionCipherDecryption('ITSSG VGKSR', key)
    expect(decrypted).toBe('HELLO WORLD')
  })

  it('handles non-alphabetic characters', () => {
    const encrypted = substitutionCipherEncryption('Test! 123', key)
    expect(encrypted).toBe('ZTLZ! 123')
  })

  it('throws error for invalid key', () => {
    expect(() => substitutionCipherEncryption('HELLO', 'BADKEY')).toThrow(
      RangeError
    )
  })
  it('encrypts using default key if none provided', () => {
    const encrypted = substitutionCipherEncryption('HELLO WORLD')
    expect(encrypted).toBe('ITSSG VGKSR')
  })
  
  it('decrypts using default key if none provided', () => {
    const decrypted = substitutionCipherDecryption('ITSSG VGKSR')
    expect(decrypted).toBe('HELLO WORLD')
  })
  
  it('throws error for invalid key in decryption', () => {
    expect(() => substitutionCipherDecryption('HELLO', 'BADKEY')).toThrow(RangeError)
  })
  
})
