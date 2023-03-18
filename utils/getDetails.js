import ora from "ora";
import axios from "axios";
import askUsername from "./askUsername.js";
import chalk from "chalk";
import showTable from "./showTable.js";

export default async function getDetails(username) {
  const spinner = ora(`${chalk.bold.dim("Fetching User Details...")}`).start();

  const url = `https://api.github.com/users/${username}`;

  try {
    const { data } = await axios.get(url);
    spinner.succeed(`${chalk.greenBright(`Details Of "${username}"`)}`);

    showTable(data);
  } catch (error) {
    spinner.fail(
      `${chalk.redBright("Invalid username. Please provide a valid username")}`
    );
    return askUsername();
  }
}
