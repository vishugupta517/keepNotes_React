import React from "react";
import "./Note.css";
import { deleteIcon } from "../../assets/icons";

const Note = ({ note, handleDelete, updateText }) => {
  let timer = 500,
    timeout;
  const time = note.time;
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = time.toLocaleString("en-US", options);

  const debounce = (fucn) => {
    clearTimeout(timeout);
    timeout = setTimeout(fucn, timer);
  };

  // const debouncedText = (text, id) => {
  //   debounce(() => updateText(text, id));
  // };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(e) => updateText(e.target.value, note.id)}
      />
      <div className="note_footer">
        <p>{formattedDate}</p>
        <div onClick={() => handleDelete(note.id)} className="trash_btn">
          {deleteIcon}
        </div>
      </div>
    </div>
  );
};

export default Note;
