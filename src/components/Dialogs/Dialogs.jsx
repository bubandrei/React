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
let dialogData = [
    { name: 'Viktor', id: '1' },
    { name: 'Andrei', id: '2' },
    { name: 'Jon', id: '3' },
    { name: 'Badi', id: '4' },
    { name: 'Amina', id: '4' },
    { name: 'Sveta', id: '4' },
]
let messageData = [
    { message: 'Hi' },
    { message: 'How are you?' },
    { message: 'Yo' },
    { message: 'React' },
    { message: 'Redux' },

]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
                <DialogItem name={dialogData[5].name} id={dialogData[5].id} />

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
                <Message message={messageData[4].message} />
            </div>
        </div>
    )
}
export default Dialogs