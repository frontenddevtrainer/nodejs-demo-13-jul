
import time from "./fs.js";
import chalk from "chalk";

export default function printMessage(message) {
    console.log(`${message} : ${chalk.bgGreen(time())}`);
}