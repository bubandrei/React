import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((el, index) => {
        return <DialogItem key={index} id={el.id} name={el.name} />
    })
    let messageElements = props.state.messages.map((el, index) => {
        return <Message key={index} id={el.id} message={el.message} />
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs