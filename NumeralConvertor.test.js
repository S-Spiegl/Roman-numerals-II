const NumeralConvertor = require('./NumeralConvertor')
const makeNumeral = require('./NumeralConvertor')

describe('makeNumeral', () => {
  it('handles 1', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(1)).toEqual('I')
  })  
  it('handles 2', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(2)).toEqual('II')
  })
  it('handles 3', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(3)).toEqual('III')
  })
  it('handles 4', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(4)).toEqual('IV')
  })
  it('handles 5', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(5)).toEqual('V')
  })
})
