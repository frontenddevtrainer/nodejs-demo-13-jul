const [bin, bin2, numberOne, operation, numberTwo] = process.argv;

// console.log(process.argv[2]); [0, 1, 2]

// int - 5, 7, 66, 87, 3434324
// float - 3.14, 65.89
// parseFloat, parseInt, Number

const numberOneFloat = Number(numberOne)
const numberTwoFloat = Number(numberTwo)
let result = 0;



switch (operation) {
    case "+":
        result = numberOneFloat + numberTwoFloat
        break;

    case "-":
        result = numberOneFloat - numberTwoFloat
        break;

    case "/":
        result = numberOneFloat / numberTwoFloat
        break;

    case "x":
        result = numberOneFloat * numberTwoFloat
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