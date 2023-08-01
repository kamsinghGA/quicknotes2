import NotesForm from "../NotesForm/NotesForm";

export default function NotesPage(p) {
  return (
    <>
      &nbsp;
      <NotesForm
        notes={p.notes}
        addNotes={p.addNotes}
        user={p.user}
      />
      {p.notes.length == 0 ? (
        <p>None available</p>
      ) : (
        p.notes.map((note) => {
            <div key={note._id}>{note.text}</div>
        })
      )}
    </>
  );
}