let lemonJuice = 3
let water = 3
let sugar = 1.5
let iceCubes = 10

const lemonade =  {
  lemonJuice,
  water,
  sugar,
  iceCubes,
  [console.log('Hello World')]: 'Hi',
  calculatePrice() {
    return (
      this.lemonJuice * 0.3 +
      this.water * 0.01 + 
      this.sugar * 0.25 + 
      this.iceCubes * 0.05 + 
      0.75
    )
  }
}



function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
  return {
    ...lemonade,
    lemonJuice,
    water,
    sugar,
    iceCubes
  }
}

lemonade.water = 8

// console.log(updateLemonade(lemonade, 5, 2.5, 3, 7))
console.log({ ...lemonade, water: 5})
console.log(lemonade)