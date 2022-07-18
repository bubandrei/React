import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar
        // state={props.state.dialogsPage} 
        />
        <div className='app-wrapper-conent'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/profile/:userId'
              element={<ProfileContainer />}
            />
            <Route path='/profile'
              element={<ProfileContainer />}
            />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
