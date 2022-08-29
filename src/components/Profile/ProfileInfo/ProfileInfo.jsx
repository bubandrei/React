import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHook from "./ProfileStatuswithHook";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  const goToEditMode = () => {
    setEditMode(!editMode);
  };

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    saveProfile(formData);
    // setEditMode(false);
  };
  return (
    <div>
      {/* <div>
        <img src="http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"></img>
      </div> */}
      <div className={s.discriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt=""
          className={s.mainPhoto}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
          initialValues={profile}
            profile={profile}
            goToEditMode={goToEditMode}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => setEditMode(true)}
          />
        )}
        <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
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
    </div>
  );
};
// const ProfileDataForm = ({ profile, goToEditMode }) => {
//   return (
//     <div>
//       <div>form</div>
//       <div>
//         <button onClick={goToEditMode}>edit</button>
//       </div>
//     </div>
//   );
// };

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
