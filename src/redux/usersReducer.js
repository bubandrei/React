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

        default:
            return state;
    }
}
export const followAC = () => { return { type: FOLLOW } }
export const unfollowAC = (text) => { return { type: UNFOLLOW, newText: text } }
export default usersReducer