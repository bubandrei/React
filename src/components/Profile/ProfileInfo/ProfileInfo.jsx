import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg'></img>
            </div>
            <div className={s.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo