import inquirer from "inquirer";
import chalk from "chalk";
import getDetails from "./getDetails.js";

export default async function askUsername() {
  const input = await inquirer.prompt({
    name: "usernameInput",
    type: "input",
    prefix: "?",
    message: `${chalk.blueBright("Enter Github Username:")}`,
  });
  getDetails(input.usernameInput);
}
