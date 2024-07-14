import yargs from "yargs";
import { hideBin } from "yargs/helpers"
import chalk from "chalk";

const { x, y, oper } = yargs(hideBin(process.argv)).argv

if(typeof x !== "number" || typeof y !== "number" || typeof oper !== "string") {
    console.log(chalk.red("Invalid params"));
}

let result = 0;

switch (oper) {
    case "add":
        result = x + y
        break;

    case "sub":
        result = x - y
        break;

    case "div":
        result = x / y
        break;

    case "mul":
        result = x * y
        break;

    default:
        break;
}

console.log(`Result is: ${result}`)

// calculator.js 2 + 2
// calculator.js 2 - 2
// calculator.js 2 / 2
// calculator.js 2 x 2


// windows
// node .\demo\calculator.js 2 - 2

// MacOS or Linux
// node ./demo/calculator.js 2 - 2