const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const notes = loadNotes()

const addNote = (title, body) => {
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("new note added"));
  } else {
    console.log(chalk.red("Note title is unavailable"));
  }
};

const readNote = (title) => {
  const note = notes.find((note) => note.title === title);
  if(note){
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  }else{
    console.log(chalk.red.inverse("No note found"));
  }
};

const removeNote = (title) => {
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green("Note revomed"));
  } else {
    console.log(chalk.red("No note found"));
  }
};

const listNotes = () => {
  notes.forEach((note) => {
    console.log(note.title);
  });
  console.log(chalk.green.inverse("Your Notes"));
};



module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
