import { useRef } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, followed: false, fullname: 'Andrei', status: 'I am a boss', location: { city: 'Warszawa', country: 'Poland' } },
        // { id: 2, followed: true, fullname: 'Sveta', status: 'I am a boss too', location: { city: 'Wrocław', country: 'Poland' } },
        // { id: 3, followed: false, fullname: 'Amina', status: 'I am a big boss', location: { city: 'Krakow', country: 'Poland' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}
export const followAC = (userID) => { return { type: FOLLOW } };
export const unfollowAC = (userID) => { return { type: UNFOLLOW } };
export const setUsers = (users) => { return { type: SET_USERS } };

export default usersReducer