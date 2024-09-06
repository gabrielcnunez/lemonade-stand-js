import Vorpal from "vorpal"
import { 
  writeFileSync, 
  readAllFiles, 
  buildQuestionArray,
  createLemonade,
  addLemonadeToOrder,
  updateOrderTotal 
} from "./lib"

const vorpal = Vorpal()

vorpal
  .command(
    'createOrder <name> <phoneNumber>', 
    'Create an order and saves it as a JSON file'
  )
  .action(function (args, callback) {
    const order = {
      total: 0,
      lemonades: [],
      customer: {
        name: args.name,
        phoneNumber: args.phoneNumber
      },
      lemonadeStand: {
        name: 'Cooksys Lemonade Stand'
      }
    }

  this.prompt(
    {
      type: 'number',
      name: 'numLemonades',
      default: 1,
      message: 'How many lemonades would you like to order?'
    }, 
    ({ numLemonades }) => {
      let questions = []

      for (let i = 1; i <= numLemonades; i++) {
        questions = buildQuestionArray(questions, i)
      }
      this.prompt(questions, response => {
        for (let i = 1; i <= numLemonades; i++) {
          order = updateOrderTotal(
            addLemonadeToOrder(createLemonade(response, i))
          )
        }

        writeFileSync(
          order.lemonadeStand.name + '/' + order.customer.name + '.json', 
          order
        )
        callback()
      })
    }
  )
})

vorpal
  .command(
    'getOrders <lemonadeStand>',
    'Get all orders for the given lemonade stand'
  )
  .action(function ({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand)
    this.log(`There are ${orders.length} orders at ${lemonadeStand}`)
    for (let order of orders) {
      this.log(`Order 1:`)
      this.log(`Total Price: ${order.total}`)
      this.log(`Lemonades:}`)
      this.log(order.lemonades)
      this.log(`Customer:`)
      this.log(order.customer)
    }
    callback()
  })

vorpal.delimiter('lemonade-stand$').show()