import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



const App = (props) => {
  // console.log(props.state.profilePage)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage}/>
        <div className='app-wrapper-conent'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path="/profile" element= {<Profile state={props.state.profilePage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
