const makeNumeral = require('./makeNumeral')

describe('makeNumeral', () => {
  it('handles 1', () => {
    expect(makeNumeral(1)).toEqual('I')
  })  
  it('handles 2', () => {
    expect(makeNumeral(2)).toEqual('II')
  })
})

