class NumeralConvertor {
  constructor(){
    this.output = ''
    this.symbols = [
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
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

//when the input is passed in it is naturally a higher number than at least one of the
//Arabic numbers in the array of symbols
//iterate over each of the subarray pairs
//decrement the Arabic input while incrementing the output with the corresponding 
//Roman numeral
//work downwards from the highest number - i.e. for 11, push X to the output, 
//11 become 1, JS loops through the array until it finds 1 and then pushes that to the
//output, resulting in XI. 
module.exports = NumeralConvertor