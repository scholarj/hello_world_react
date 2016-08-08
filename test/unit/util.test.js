/* eslint-env node, mocha */
'use strict'
let assert = require('chai').assert  // chai API http://chaijs.com/api/assert
let myutil = require('../../src/util')

describe('basic acceptance tests', () => {
  it('true is true!', () => {
    assert(true)
  })

  it('add(1, 2) -> 3', () => {
    assert.equal(myutil.add(1, 2), 3)
  })

  it('multiply(6, 3) -> 18', () => {
    assert.equal(myutil.multiply(6, 3), 18)
  })

  it('less than 11. lt11([1, 5, 10, 11, 20, 30]) -> [1, 5, 10]', () => {
    let result = myutil.lt11([1, 5, 10, 11, 20, 30])
    let expect = [1, 5, 10]
    assert.equal(result.sort().toString(), expect.sort().toString())
  })
})
