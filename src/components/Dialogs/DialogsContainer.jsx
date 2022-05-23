import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import store from '../../redux/reduxStore';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsReducer;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />
            }
        }

        </StoreContext.Consumer>
    )
}
export default DialogsContainer