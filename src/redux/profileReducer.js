const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { message: 'It\'s my first post!?!?!', count: 44, id: '1' },
        { message: 'Hi, how are you?', count: 77, id: '2' },
    ],
    newPostText: 'ManUTD',
    profile: null
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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}
export const addPostActionCreate = () => {
    return { type: ADD_POST }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_TEXT, newText: text }
}
export default profileReducer