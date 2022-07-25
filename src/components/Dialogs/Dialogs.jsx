import { Navigate, NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((el, index) => {
    return <DialogItem key={index} id={el.id} name={el.name} />;
  });
  let messageElements = state.messages.map((el, index) => {
    return <Message key={index} id={el.id} message={el.message} />;
  });
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  
  if(!props.isAuth) return <Navigate to={"/login"}/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <div>
            <textarea
              placeholder="enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
