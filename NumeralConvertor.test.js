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
  it('handles 6', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(6)).toEqual('VI')
  })
  it('handles 7', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(7)).toEqual('VII')
  })
  it('handles 8', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(8)).toEqual('VIII')
  })
  it('handles 9', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(9)).toEqual('IX')
  })
})
