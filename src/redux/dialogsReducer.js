const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    activeFriendReducer: [
        { name: 'Crish!', id: '1' },
        { name: 'Sancho!', id: '2' },
        { name: 'Phill!', id: '3' },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => {
    return ({ type: SEND_MESSAGE, newMessageBody })
}

export default dialogsReducer