import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

const AddMyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newMyPost"}
          component={"textarea"}
          type={"textarea"}
          validate={[required,maxLength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddMyPostsReduxForm = reduxForm({
  form: "myPostAddForm",
})(AddMyPostsForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => {
    return (
      <Post key={index} message={el.message} count={el.count} id={el.id} />
    );
  });
  const addMyNewPost = (value) => {
    props.addPost(value.newMyPost);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddMyPostsReduxForm onSubmit={addMyNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
