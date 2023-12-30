const chalk = require('chalk')
const validator = require('validator')

// console.log(chalk.blue("hello"))
// console.log(chalk.red("red"))
// console.log(chalk.bgGreen("red"))
// console.log(chalk.underline("red"))
// console.log(chalk.blue.underline.inverse("red"))

let res = validator.isEmail("hello@hello.com")
console.log(res)
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))


