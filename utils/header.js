import chalk from "chalk";
import * as fs from "fs";
const cli = JSON.parse(fs.readFileSync("./package.json"));

export default function header() {
  console.log(
    chalk.bgBlue(`fetch-github-user`),
    chalk.blackBright(cli.version),
    "by Muhammad Uzair"
  );
}
