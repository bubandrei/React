import React from "react";
import { useState } from "react";

const ProfileStatusWithHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      {true && (
        <div>
          <span onClick={""}>{props.status || "-------"}yo</span>
        </div>
      )}
      {false && (
        <div>
          <input
            onChange={""}
            autoFocus={true}
            onBlur={""}
            type="text"
            value={""}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHook;
