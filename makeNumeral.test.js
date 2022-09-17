const makeNumeral = require('./makeNumeral')

describe('makeNumeral', () => {
  it('handles 1', () => {
    expect(makeNumeral(1)).toEqual('I')
  })  
  it('handles 2', () => {
    expect(makeNumeral(2)).toEqual('II')
  })
  it('handles 3', () => {
    expect(makeNumeral(3)).toEqual('III')
  })
  // it('handles 4', () => {
  //   expect(makeNumeral(4)).toEqual('IV')
  // })
  // it('handles 5', () => {
  //   expect(makeNumeral(5)).toEqual('V')
  // })
})

