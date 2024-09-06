export const calculateLemonadePrice = lemonade => {
  let result = 0
  for (let key in lemonade) {
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * .30
        break
      case 'water':
        result += lemonade[key] * .01
        break
      case 'sugar':
        result += lemonade[key] * .20
        break
      case 'iceCubes':
        result += lemonade[key] * .05
        break
      default:
          break
    }
  }

  return result
}

export const calculateOrderTotal = ({ lemonades }) => {
  let result = 0
  for (let lemonade of lemonades) {
    result += lemonade.price
  }
  
  return result
}

