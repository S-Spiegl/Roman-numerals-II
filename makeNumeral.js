makeNumeral = (input) => {
  output = []
  // switch(input){
  //   case 1:
  //     return 'I'
  //   case 2:
  //     return 'II'
  //   case 3:
  //     return 'III'
  //   case 4:
  //     return 'IV';
  //   case 5:
  //     return 'V';
  // }
  if(input <= 3){
    for(let i = 0; i < input; i++){
      output.push('I')
    }
  }
  if(input == 4){
    output.push('IV')
  }
  if(input == 5){
    output.push('V')
  }
  return output.join('')
}

module.exports = makeNumeral