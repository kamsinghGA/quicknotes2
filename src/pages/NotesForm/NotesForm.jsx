import { useState } from "react";
import { createNote } from '../../utilities/notes-service';

export default function NotesForm(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newNote = await createNote(text, props.user);
    props.addNotes(newNote);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>New Note</label>
        <input type="text" name="text" onChange={handleChange} />
        <button type="submit">Add note</button>
      </form>
    </>
  );
}