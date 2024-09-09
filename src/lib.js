import fs from 'fs'

const curry = (f, arr = []) => (...args) =>
  (a => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args])

export const map = f => reducer => (acc, curr, ind, arr) => reducer(acc, f(curr, ind), ind, arr)

const calculateLemonadePrice = (lemonade) => {
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

const calculateOrderTotal = lemonades => {
  let result = 0
  for (let lemonade of lemonades) {
    result += lemonade.price
  }
  
  return result
}

export const writeFileSync = (fileName, order) => {
  fs.writeFileSync(fileName, JSON.stringify(order))
}

export const readAllFiles = dirName => {
  const orders = []
  for (let name of fs.readdirSync(dirName)) {
    orders.push(JSON.parse(fs.readFileSync(dirName + '/' + name)))
  }
  return orders
}

export const buildQuestionArray = (val, i) => [
  { type: 'number', name: `lemonJuice${i}`, message: `How many cups of lemon juice do you want in lemonade ${i + 1}?`},
  { type: 'number', name: `water${i}`, message: `How many cups of water do you want in lemonade ${i + 1}?`},
  { type: 'number', name: `sugar${i}`, message: `How many cups of sugar do you want in lemonade ${i + 1}?`},
  { type: 'number', name: `iceCubes${i}`, message: `How many ice cubes do you want in lemonade ${i + 1}?`}
]

export const createLemonade = curry((response, curr, i) => ({
    lemonJuice: Number.parseInt(response['lemonJuice' + (i)]),
    water: Number.parseInt(response['water' + i]),
    sugar: Number.parseInt(response['sugar' + i]),
    iceCubes: Number.parseInt(response['iceCubes' + i])
}))

export const addLemonadeToOrder = (acc, curr) => ({
  ...acc,
  lemonades: [
    ...acc.lemonades,
    {...curr, price: calculateLemonadePrice(curr)}
  ]
})

export const updateOrderTotal = order => ({
  ...order,
  total: calculateOrderTotal(order.lemonades)
})