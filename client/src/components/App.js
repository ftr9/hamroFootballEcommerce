import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Myorder from './pages/Myorder';
import Productpage from './pages/Productpage';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="App">
            <Router>
                <div className="App__navigation">
                    <h2>HamroFoot.</h2>
                    <Navbar />
                </div>
                <div className="App__pages">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/about" component={About}>About</Route>
                        <Route exact path="/myorders" component={Myorder}></Route>
                        <Route exact path="/products" component={Productpage}></Route>
                    </Switch>
                </div>
            </Router>
        </div>

    )
}

export default App
