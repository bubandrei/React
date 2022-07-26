import React from "react";

const ProfileStatus = (props) => {
  return (
    <>
      <div>{props.status}</div>
      <div><input type="text" value={props.status} /></div>
    </>
  );
};
export default ProfileStatus;
