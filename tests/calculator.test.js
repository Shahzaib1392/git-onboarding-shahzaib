import { test, describe } from 'node:test'
import assert from 'node:assert'
import { add, subtract, multiply, divide } from '../src/calculator.js'

describe('calculator', () => {
    test('test add', () => {
        assert.strictEqual(34, add([12, 12, 10]))
    })
    test('test subtract', () => {
        assert.strictEqual(34, subtract([54, 10, 10]))
    })
    test('test multiply', () => {
        assert.strictEqual(1440, multiply([12, 12, 10]))
    })
    test('test divide', () => {
        assert.strictEqual(1, divide([36, 0, 6]))
    })
})