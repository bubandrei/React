import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialogsReducer;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }

//                 return <Dialogs
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={state} />
//             }
//         }

//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
let AuthRedirectComponent = (props) =>{
    if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return <Dialogs {...props}/>
  }
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer