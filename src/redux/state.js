const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
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
                { message: 'Hi!!!!!' },
                { message: 'How are you?' },
                { message: 'Yo???' },
                { message: 'React!!!!' },
                { message: 'Redux!!!!' },

            ],
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
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                count: 12,
                id: '3'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreate = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT, newPost: text }
}

window.store = store;
export default store
