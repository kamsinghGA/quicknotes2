import * as notesAPI from "./notes-api";

export async function createNote(text, user) {
  let newN = { text: text, user: user };
  return notesAPI.create(newN);
}

export async function getNotes(user) {
  let notes = await notesAPI.getNotes(user);
  return notes;
}

export async function checkToken() {
    return notesAPI.checkToken().then((dateStr) => new Date(dateStr));
}