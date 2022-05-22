import React from 'react';
import { addPostActionCreate, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().profileReducer;
                let addPost = () => {
                    let action = addPostActionCreate();
                    store.dispatch(action)

                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.posts}
                    newPostText={state.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer 