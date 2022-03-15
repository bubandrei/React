import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


let dialogs = [
    { name: 'Viktor!', id: '1' },
    { name: 'Andrei', id: '2' },
    { name: 'Jon!', id: '3' },
    { name: 'Badi!', id: '4' },
    { name: 'Amina', id: '5' },
    { name: 'Sveta', id: '6' },
]

let messages = [
    { message: 'Hi!!!!!' },
    { message: 'How are you?' },
    { message: 'Yo???' },
    { message: 'React!!!!' },
    { message: 'Redux!!!!' },

]

const Dialogs = (props) => {
    let dialogsElements = dialogs.map((el, index) => {
        return <DialogItem key={index} id={el.id} name={el.name} />
    })
    let messageElements = messages.map((el, index) => {
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