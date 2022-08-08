import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormControls/FormsControl";
import { Field } from "react-final-form";

const ProfileDataForm = ({ profile, goToEditMode }) => {
  return (
    <form>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      <div>
        {/* <b>Full name</b>:{createField("Full name", "fullName", [], Input)} */}
        <b>Full name</b>:{Input}
      </div>
      {/* <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:{profile.lookingForAJobDescription}
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>
      )}
      <div>
        <b>About me</b>:{profile.aboutMe}
        {createField("About me", "about me", [], Textarea)}
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
      </div> */}
    </form>
  );
};

// const ProfilDataFormReduxForm = reduxForm({form:"edit-profile"})(ProfileDataForm);

const ProfilDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfilDataFormReduxForm;
