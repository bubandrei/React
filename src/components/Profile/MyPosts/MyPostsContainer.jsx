import React from 'react';
import { addPostActionCreate, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
    let state = props.store.getState().profileReducer;

    let addPost = () => {
        let action = addPostActionCreate();
        props.store.dispatch(action)

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText} />
    )
}
export default MyPostsContainer 