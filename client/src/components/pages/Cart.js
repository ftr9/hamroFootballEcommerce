import './Cart.css';
import Cartcard from '../Cartcard';
import Solidbutton from '../button/Solidbutton';

import { connect } from 'react-redux';
import { useState } from 'react';

import PlaceOrder from '../popup/PlaceOrder';

const Cart = ({ cartItems, userInfo }) => {

    const [isPlaceOrderForm, setisPlaceOrderForm] = useState(false);

    const placeOrder = () => {

        if (!userInfo.user) {
            alert("Please login to continue");
            return;
        } else {
            setisPlaceOrderForm(true);
        }

    }

    const closeForm = () => {
        setisPlaceOrderForm(false);
    }

    const return_If_EmptyCart = () => {
        if (cartItems.length === 0) {
            return (
                <div className="cart__Empty">
                    <h5>Please added some items</h5>
                    <img src="/images/emptyCart.png" alt={"empty Cart"}></img>
                </div>
            )
        }
    }

    return (
        <div className='Cartpage'>
            <div className="Cartpage__title">
                My Cart
            </div>
            <div className="Cartpage__products">
                {
                    return_If_EmptyCart()
                }
                {
                    cartItems.map((el) => {
                        return <Cartcard key={el.id} id={el.id} quantitys={el.quantitys} category={el.category} price={el.price} sizess={el.sizess} name={el.name} imageName={el.imageName} selectedSize={el.selectedSize} />
                    })
                }
                {
                    isPlaceOrderForm ? <PlaceOrder closeForm={closeForm} /> : ""
                }

            </div>
            {
                cartItems.length === 0 ? "" :
                    <div className="Cartpage__button">
                        <Solidbutton content="Place order" icon={<ion-icon name="cart"></ion-icon>} onClicked={placeOrder} />
                    </div>
            }
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        cartItems: Object.values(state.carts),
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProp)(Cart)
