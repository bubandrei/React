import React from "react";
import { createField, Input } from "../../common/FormControls/FormsControl";

const ProfileDataForm = ({ profile, goToEditMode }) => {
  return (
    <form>
      {
        <div>
          <button onClick={goToEditMode}>Save</button>
        </div>
      }
      <div>
        <b>Full name</b>:{createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
        {createField('', "lookingForAJob", [], Input)}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>:{profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((item) => {
          return (
            <div></div>
            // <Contact
            //   key={item}
            //   contactTitle={item}
            //   contactValue={profile.contacts[item]}
            // />
          );
        })}
      </div>
    </form>
  );
};

export default ProfileDataForm;
