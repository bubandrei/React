import React from "react";

const ProfileDataForm = ({ profile, goToEditMode }) => {
  return (
    <form>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Save</button>
        </div>
      )}
      <div>
        <b>Full name</b>:{profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
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
            <Contact
              key={item}
              contactTitle={item}
              contactValue={profile.contacts[item]}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ProfileDataForm;
