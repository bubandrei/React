import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import { rernderEntireTree } from './render';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage} />
        <div className='app-wrapper-conent'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs store={props.store} state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              // updateNewPostText ={props.updateNewPostText}
            />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
