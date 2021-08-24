const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    },
  },
  handler: (argv) => {
  notes.addNote(argv.title,argv.body)

  },
});

yargs.command({
  command: "remove",
  describe: "Remove note",
  builder:{
    title:{
      describe: "Note title",
      demandOption: true,
      type:"string"
    }
  },
  handler: (argv) => {
notes.removeNote(argv.title)  },
});

yargs.command({
  command: "list",
  describe: "create list",
  handler: () => {
    console.log(chalk.blue("list note"));
  },
});

yargs.command({
  command: "read",
  describe: "read note",
  builder: {},
  handler: () => {
    console.log(chalk.blue("read  note"));
  },
});

yargs.version("1.1.0");

yargs.parse();
