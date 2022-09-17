class NumeralConvertor {
  constructor(){
    this.output = ''
    this.symbols = [
      ["I", 1],
      ["IV", 4]
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