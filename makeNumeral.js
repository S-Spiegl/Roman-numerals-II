makeNumeral = (input) => {
  switch(input){
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV';
    case 5:
      return 'V';
  }
  
}

module.exports = makeNumeral