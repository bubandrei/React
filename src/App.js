import logo from './logo.svg';
import './App.css';
import Nav from './cmp/Nav';
import Cnen from './cmp/Cnen';
import Header from './cmp/Header';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Cnen />
    </div>
  );
}

export default App;
 