import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class ProfileContainer extends React.Component  {
    render(){
        return (
            <div>
                <ProfileInfo />
                <MyPostsContainer 
                />
            </div>
        )
    }

}
export default ProfileContainer
