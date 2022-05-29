const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {
    posts: [
        { message: 'It\'s my first post!?!?!', count: 44, id: '1' },
        { message: 'Hi, how are you?', count: 77, id: '2' },
    ],
    newPostText: 'ManUTD'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                count: 12,
                id: '3'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreate = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT, newText: text }
}
export default profileReducer