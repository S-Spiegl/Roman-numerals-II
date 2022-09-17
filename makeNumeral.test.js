const makeNumeral = require('./makeNumeral')

describe('makeNumeral', () => {
  it('handles I', () => {
    expect(makeNumeral(1)).toEqual('I')
  })  
})

