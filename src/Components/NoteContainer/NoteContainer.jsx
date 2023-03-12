import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
const NoteContainer = ({ notes, handleDelete, updateText }) => {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((note) => (
            <Note
              key={note.id}
              note={note}
              handleDelete={handleDelete}
              updateText={updateText}
            />
          ))
        ) : (
          <h2>Create Notes</h2>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
