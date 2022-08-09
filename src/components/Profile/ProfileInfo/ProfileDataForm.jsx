import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormControls/FormsControl";
import { Field } from "react-final-form";

const ProfileDataForm = ({ handleSubmit, profile, goToEditMode }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={handleSubmit}>Save</button>
      </div>
      <div>
        <b>Full name</b>:{createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
        <div>
          <b>My professional skills</b>:
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>
      <div>
        <b>About me</b>:{profile.aboutMe}
        {createField("About me", "about me", [], Textarea)}
      </div>
      {/* <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((item) => {
          return (
            <div>
            <Contact
              key={item}
              contactTitle={item}
              contactValue={profile.contacts[item]}
            />
            </div>
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
