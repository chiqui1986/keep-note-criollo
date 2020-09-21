import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Draggable from "react-draggable";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Draggable>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </div>
    </Draggable>
  );
}

export default Note;
