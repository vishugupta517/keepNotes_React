import { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("savedNotes")) || [
      {
        text: "Today's Task",
        time: "November 4, 2022 at 1:43 AM",
        id: nanoid(),
        color: "#fe9b72",
      },
      {
        text: "Important Topics",
        time: "November 4, 2022 at 12:43 AM",
        id: nanoid(),
        color: "#fec971",
      },
      {
        text: "Shopping List",
        time: "Octorber 12, 2022 at 09:43 PM",
        id: nanoid(),
        color: "#00d4fe",
      },
      {
        text: "Important",
        time: "March 4, 2022 at 1:43 PM",
        id: nanoid(),
        color: "#b693fd",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    // const tempNotes = [...notes];
    // tempNotes.unshift({
    //   text: "New note",
    //   time: Date.now(),
    //   id: nanoid(),
    //   color,
    // });
    // setNotes(tempNotes);
    setNotes((prevState) => [
      { text: "New note", time: new Date(), id: nanoid(), color },
      ...prevState,
    ]);
  };

  const handleDelete = (id) => {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        handleDelete={handleDelete}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
