import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {
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

    let dialogsElements = dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} />
    })
    let messageElements = messages.map(el => <Message key={el.id} message={el.message} />)
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