import { combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import { legacy_createStore as createStore } from 'redux';



let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer
})
let store = createStore(reducers);

window.store = store;
export default store;