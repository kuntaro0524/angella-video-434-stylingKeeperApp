import { Fab, Zoom } from "@material-ui/core";
import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // expandするかどうかのフラグを準備する
  const [isExpand, setIsExpand] = useState();

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });

    setIsExpand(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setIsExpand(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isExpand ? (
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={isExpand ? 3 : 1}
            />
            <Zoom in={true}>
              <Fab onClick={submitNote}>Add</Fab>
            </Zoom>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default CreateArea;
