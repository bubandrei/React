import { applyMiddleware, combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import { legacy_createStore as createStore } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;