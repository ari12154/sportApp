import logo from './logo.svg';
import './App.css';

// import Login from './comps/logincomps/Login';
// import Openpage from './comps/logincomps/Openpage/Openpage';
import Winner from './comps/winner/winner';
import HomePage from './HomePage/HomePage';
import MainGame from './HomePage/MainGame';
import Allgames from './HomePage/Allgames';
import Footer from './HomePage/Footer';
import Register from './comps/logincomps/Register';
import Rating from './HomePage/Rating';

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Login/> */}
     {/* <Openpage/> */}
     {/* <Winner/> */}
     <HomePage/>
     <MainGame/>
     <Rating/>
     <Allgames/>
     <Footer/>
    </div>
  );
}

export default App;
