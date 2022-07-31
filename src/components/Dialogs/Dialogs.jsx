import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormsControl";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newMessageBody"}
        placeholder="enter your message"
        component={Textarea}
        validate={[required,maxLength]}
        type={"textarea"}
      ></Field>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

const Dialogs = (props) => {
  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((el, index) => {
    return <DialogItem key={index} id={el.id} name={el.name} />;
  });
  let messageElements = state.messages.map((el, index) => {
    return <Message key={index} id={el.id} message={el.message} />;
  });
  let newMessageBody = state.newMessageBody;

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
