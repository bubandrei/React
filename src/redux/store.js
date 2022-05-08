import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'It\'s my first post!?!?!', count: 44, id: '1' },
                { message: 'Hi, how are you?', count: 77, id: '2' },
            ],
            newPostText: 'ManUTD'
        },
        dialogsPage: {
            dialogs: [
                { name: 'Hamilton!', id: '1' },
                { name: 'Andrei!', id: '2' },
                { name: 'Rashford!', id: '3' },
                { name: 'Badi!', id: '4' },
                { name: 'Amina!', id: '5' },
                { name: 'Sveta!', id: '6' },
                { name: 'Rassel', id: '7' },
            ],
            messages: [
                { id: 1, message: 'Hi!!!!!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo???' },
                { id: 4, message: 'React!!!!' },
                { id: 5, message: 'Redux!!!!' },

            ],
            newMessageBody: '',
            activeFriend: [
                { name: 'Crish!', id: '1' },
                { name: 'Sancho!', id: '2' },
                { name: 'Phill!', id: '3' },
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store
