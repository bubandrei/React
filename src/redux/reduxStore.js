import { combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import { legacy_createStore as createStore } from 'redux';
import usersReducer from './usersReducer';



let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
let store = createStore(reducers);

window.store = store;

export default store;