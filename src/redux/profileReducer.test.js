import React from "react";
import profileReducer, { addPostActionCreate } from '../redux/profileReducer';

let state = {
    // 1. test data 
    posts: [
        { message: 'It\'s my first post!?!?!', count: 44, id: '1' },
        { message: 'Hi, how are you?', count: 77, id: '2' },
    ]
}
// 2. action
it('new post should be added', () => {
    let action = addPostActionCreate('My new post');
    let newState = profileReducer(state, action)
})
// 3. expect
newState.posts.length === 3 