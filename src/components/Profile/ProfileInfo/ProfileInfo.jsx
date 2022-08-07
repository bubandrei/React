import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatuswithHook";

const ProfileInfo = (profile, status, updateStatus) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"></img>
      </div>
      <div className={s.discriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="" className={s.mainPhoto} />
        <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
