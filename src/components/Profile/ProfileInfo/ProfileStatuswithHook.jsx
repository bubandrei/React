import React from "react";
import { useState } from "react";

const ProfileStatusWithHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={() => activateEditMode()}>
            {props.status || "-------"}yo
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={""}
            autoFocus={true}
            onBlur={() => activateEditMode()}
            type="text"
            value={""}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHook;
