import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreate,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => {
    return (
      <Post key={index} message={el.message} count={el.count} id={el.id} />
    );
  });

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <form onSubmit={props.hadleSubmit}>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <Field
              name={"post"}
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </form>
  );
};
export default MyPosts;
