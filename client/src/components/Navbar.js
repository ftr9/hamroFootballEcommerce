import { Link } from "react-router-dom"
import './Navbar.css';
import { useState } from "react";
const Navbar = () => {

    const [currentTab, setCurrentTab] = useState("Home");

    const updateActiveState = (currentState) => {
        setCurrentTab(currentState);
    }

    return (
        <ul className="Navbar">
            <li>
                <Link
                    to="/"
                    onClick={() => updateActiveState("Home")}
                    className={currentTab === "Home" ? "current" : ""}>

                    <ion-icon name="home"></ion-icon>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link
                    to="/products"
                    onClick={() => updateActiveState("Card")}
                    className={currentTab === "Card" ? "current" : ""}>

                    <ion-icon name="card"></ion-icon>
                    <p>Shop now</p>
                </Link>
            </li>
            <li>
                <Link
                    to="/cart"
                    onClick={() => updateActiveState("Cart")}
                    className={currentTab === "Cart" ? "current" : ""}>

                    <ion-icon name="cart"></ion-icon>
                    <p>Cart</p>
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    onClick={() => updateActiveState("About")}
                    className={currentTab === "About" ? "current" : ""}>

                    <ion-icon name="help-circle"></ion-icon>
                    <p>About</p>
                </Link>
            </li>
            <li>
                <Link
                    to="/myorders"
                    onClick={() => updateActiveState("Myorders")}
                    className={currentTab === "Myorders" ? "current" : ""}>

                    <ion-icon name="id-card"></ion-icon>
                    <p>My orders</p>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar
