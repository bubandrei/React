import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])

  const activateEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      props.updateStatus(status);
    }
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={() => activateEditMode()}>
            {props.status || "-------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={(e) => onStatusChange(e)}
            autoFocus={true}
            onBlur={() => activateEditMode()}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHook;
