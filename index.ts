#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));
console.log(chalk.blueBright.bold("\n\t\t        Welcome to codewithFaheela - Currency_Convertor_App\n"));
console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));


const resp = await inquirer.prompt([
    { name:"userInput",
      type:"number",
      message:chalk.magenta.bold("please enter the amount of second"),
      validate : (input)=>{
        if (isNaN(input)) {
         return chalk.redBright("please enter valid number")
        } else if (input > 60){
          return chalk.greenBright("seconds must be in 60")
        } else {
            return true;
        }
      }
}
]);

let input = resp.userInput
function startTime(val:number) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime,currentTime);
        if(timeDiff <= 0) {
          console.log(chalk.redBright("Timer has expired"));
          process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`)
    },1000);
} 
startTime(input);




