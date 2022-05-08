import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    // let postFriend = React.createRef();
    // let addPostFriend = () => {
    //     let text = postFriend.current.value;
    //     alert(text)
    // }


    return (
        <div className={s.dialog}>
            {/* <textarea ref={postFriend}></textarea>
            <button className={s.btnAddPost} onClick={addPostFriend}></button> */}
            {props.message}
        </div>
    )
}

export default Message