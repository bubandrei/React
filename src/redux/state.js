import { renderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { message: 'It\'s my first post!?!?!', count: 44, id: '1' },
            { message: 'Hi, how are you?', count: 77, id: '2' },
        ],
        newPostText:'ManUTD'
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
}
// window.state = state;
export let addPost = () => {
    let newPost = {
        message:  state.profilePage.newPostText,

        count: 12,
        id: '3'
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    renderEntireTree(state);
}

export default state
