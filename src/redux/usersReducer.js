const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }

        default:
            return state;
    }
}
export const followAC = (userId) => { return { type: FOLLOW, userId } };
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersAC = (users) => { return { type: SET_USERS, users } };

export default usersReducer