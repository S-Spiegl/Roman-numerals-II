class NumeralConvertor {
  constructor(){
    this.output = ''
    this.symbols = [
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ]
  }
  makeNumeral = (input) => {
  
    this.symbols.forEach((symbol) => {
      while(input >= symbol[1]){
        this.output += symbol[0]
        input -= symbol [1]
      }
      
    })
    return this.output
   
  }
}


module.exports = NumeralConvertor