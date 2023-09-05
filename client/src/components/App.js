import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Myorder from './pages/Myorder';
import Productpage from './pages/Productpage';
import Navbar from './Navbar';
import Adminpage from './pages/Adminpage';
import CheckOut from './pages/Checkout';
import Successfull from './pages/Successfull';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="App__navigation">
          <h2>HamroFoot.</h2>
          <Navbar />
        </div>
        <div className="App__pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/myorders" element={<Myorder />}></Route>
            <Route path="/products" element={<Productpage />}></Route>
            <Route path="/admin" element={<Adminpage />}></Route>
            <Route path="/success" element={<Successfull />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
