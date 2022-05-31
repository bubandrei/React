const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullname: 'Andrei', status: 'I am a boss', location: { city: 'Warszawa', country: 'Poland' } },
        { id: 2, followed: true, fullname: 'Sveta', status: 'I am a boss too', location: { city: 'Wrocław', country: 'Poland' } },
        { id: 3, followed: false, fullname: 'Amina', status: 'I am a big boss', location: { city: 'Krakow', country: 'Poland' } }
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
                users: state.users.map(ituserem => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }

        default:
            return state;
    }
}
export const followAC = () => { return { type: FOLLOW } }
export const unfollowAC = () => { return { type: UNFOLLOW } }
export default usersReducer