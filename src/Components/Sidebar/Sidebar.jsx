import React, { useState } from "react";
import { addIcon } from "../../assets/icons";
import "./Sidebar.css";
const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <div
        onClick={() => setListOpen((prevState) => !prevState)}
        className="btn-add"
      >
        {addIcon}
      </div>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""} `}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
