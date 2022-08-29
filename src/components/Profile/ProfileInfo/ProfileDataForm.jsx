import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormControls/FormsControl";
import { Field } from "react-final-form";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
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
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((item) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {item}:{createField(item, "contacts." + item, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfilDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfilDataFormReduxForm;
