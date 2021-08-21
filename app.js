// const validator =require("validator")
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOutput: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOutput: true,
      type: "string"
    },
  },
  handler: (argv) => {
    console.log(chalk.blue("Title: " + argv.title));
    console.log(chalk.blue("Body: " + argv.body));

  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove note",
  handler: () => {
    console.log(chalk.blue("removing note"));
  },
});

// Create list command

yargs.command({
  command: "list",
  describe: "create list",
  handler: () => {
    console.log(chalk.blue("list note"));
  },
});

// Create read command

yargs.command({
  command: "read",
  describe: "read note",
  builder: {},
  handler: () => {
    console.log(chalk.blue("read  note"));
  },
});

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
// console.log(yargs.argv);

yargs.parse();
