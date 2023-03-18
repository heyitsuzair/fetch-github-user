import cliTable from "cli-table";
import chalk from "chalk";
import footer from "./footer.js";
/**
 * @function showTable
 *
 * Show table in console with given data
 *
 * @param {object} details
 */
export default async function showTable(details) {
  const table = new cliTable({
    head: [chalk.yellow("Type"), chalk.yellow("Info")],
  });

  table.push(
    { Name: details.name || "Not Available" },
    { Company: details.company || "Not Available" },
    { Website: details.blog || "Not Available" },
    { Location: details.location || "Not Available" },
    { Email: details.email || "Not Available" },
    { "Twitter Username": details.twitter_username || "Not Available" },
    { "Public Repos": details.public_repos || "Not Available" },
    { "Public Gists": details.public_gits || "Not Available" },
    { "Total Followers": details.followers || "Not Available" },
    { "Total Followings": details.following || "Not Available" }
  );

  console.log(table.toString());
  footer();
}
