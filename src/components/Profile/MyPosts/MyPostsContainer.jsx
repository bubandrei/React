import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().profileReducer;
//                     let addPost = () => {
//                         let action = addPostActionCreate();
//                         store.dispatch(action)
//                     }
//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.posts}
//                         newPostText={state.newPostText} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        posts: state.posts,
        newPostText: state.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreate();
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer 