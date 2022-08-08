import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHook from "./ProfileStatuswithHook";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  // debugger;
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
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
        <div>
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
        </div>
        <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
