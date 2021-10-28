import { Link } from "react-router-dom"
import './Navbar.css';
import { useState } from "react";
import { connect } from 'react-redux';

import { useLocation } from "react-router";
import { useEffect } from "react";



const Navbar = ({ totalAddedItem }) => {

    const [currentTab, setCurrentTab] = useState("Home");

    //problem was after the successfull order placement currentTab is not chaning after we redirect to my orders 
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setCurrentTab("Home");
                break;
            case '/products':
                setCurrentTab("Card");
                break;
            case '/cart':
                setCurrentTab("Cart");
                break;
            case '/about':
                setCurrentTab("About");
                break;
            case '/myorders':
                setCurrentTab("Myorders");
                break;
            default:
                setCurrentTab("none")

        }

    }, [location.pathname]);


    const updateActiveState = (currentState) => {
        setCurrentTab(currentState);
    }

    const renderOnUserRole = () => {
        if (location.pathname === '/admin') {
            return <ul className="Navbar">
                <li>
                    <Link
                        to="/admin"
                        onClick={() => updateActiveState("admin")}
                        className={currentTab === "admin" ? "current" : ""}>

                        <ion-icon name="id-card"></ion-icon>
                        <p>My orders</p>
                    </Link>
                </li>
            </ul>
        } else {
            return <ul className="Navbar">
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
                <li id="ADDTOCART">
                    <div className="ADDTOCART__NUM">{totalAddedItem}</div>
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
        }
    }



    return (
        renderOnUserRole()
    )
}

const mapStateToProp = (state) => {
    let quantity = 0;
    Object.values(state.carts).forEach((el) => quantity += el.quantitys);
    return {
        totalAddedItem: quantity
    }
}

export default connect(mapStateToProp)(Navbar);
