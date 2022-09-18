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
  it('handles 10', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(10)).toEqual('X')
  })
  it('handles 11', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(11)).toEqual('XI')
  })
  it('handles 14', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(14)).toEqual('XIV')
  })
  it('handles 17', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(17)).toEqual('XVII')
  })
  it('handles 19', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(19)).toEqual('XIX')
  })
  it('handles 20', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(20)).toEqual('XX')
  })
  it('handles 30', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(30)).toEqual('XXX')
  })
  it('handles 29', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(29)).toEqual('XXIX')
  })
  it('handles 39', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(39)).toEqual('XXXIX')
  })
  it('handles 40', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(40)).toEqual('XL')
  })
  it('handles 49', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(49)).toEqual('XLIX')
  })
  it('handles 60', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(60)).toEqual('LX')
  })
  it('handles 69', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(69)).toEqual('LXIX')
  })
  it('handles 70', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(70)).toEqual('LXX')
  })
  it('handles 79', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(79)).toEqual('LXXIX')
  })
  it('handles 90', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(90)).toEqual('XC')
  })
  it('handles 99', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(99)).toEqual('XCIX')
  })
  it('handles 100', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(100)).toEqual('C')
  })
  it('handles 399', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(399)).toEqual('CCCXCIX')
  })
  it('handles 400', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(400)).toEqual('CD')
  })
  it('handles 499', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(499)).toEqual('CDXCIX')
  })
  it('handles 500', () => {
    let numeralConvertor = new NumeralConvertor
    expect(numeralConvertor.makeNumeral(500)).toEqual('D')
  })

})
