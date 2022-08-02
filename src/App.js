import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render(){
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar/>
          <div className='app-wrapper-conent'>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
