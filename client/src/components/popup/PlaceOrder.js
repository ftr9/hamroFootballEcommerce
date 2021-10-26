import { useState } from 'react';
import { useHistory } from 'react-router';
import reactdom from 'react-dom';
import Solidbutton from "../button/Solidbutton"
import './PlaceOrder.css';
import { connect } from 'react-redux';
import { PLACE_ORDER } from '../../redux/actions';

const PlaceOrder = (props) => {
    const { closeForm, carts, PLACE_ORDER, userInfo } = props;
    const [PhoneInputValue, setPhoneValue] = useState("");
    const [LocationInputValue, setLocationValue] = useState("");
    const [error, setError] = useState("")
    const History = useHistory();

    const onSubmit = () => {
        if (error.length === 0 && PhoneInputValue.length !== 0 && LocationInputValue.length !== 0) {
            const mainOrder = {
                orders: carts,
                location: LocationInputValue,
                phone: PhoneInputValue,
                userId: userInfo._id
            }
            //redux place order
            PLACE_ORDER(mainOrder);
            //close form 
            closeForm();
            //go to my orders
            setTimeout(() => {
                History.push("/myorders")
            }, 1000);
        }
    }

    const onPhoneInputChange = (e) => {
        const value = parseInt(e.target.value);
        setPhoneValue(value);
        if (value.toString().length !== 10) {
            setError("Please enter valid phone number");
        } else {
            setError("");
        }
    }

    return (
        reactdom.createPortal(
            <div className="Placeorder">
                <div className="Placeorder__form">
                    <div className="Placeorder__formClose" onClick={closeForm}><ion-icon name="close"></ion-icon></div>
                    <p className="PlaceOrder__formError">{error}</p>
                    <input type="tel" id="Phone number" onChange={onPhoneInputChange} required placeholder={"Enter phone number"}></input>
                    <input type="text" id="location" onChange={(val) => setLocationValue(val.target.value)} required placeholder="Enter full location"></input>
                    <div className="Placeorder__submit">
                        <Solidbutton type="submit" content="Order" icon={<ion-icon name="car"></ion-icon>} onClicked={onSubmit} />
                    </div>
                </div>
            </div>,
            document.querySelector("#details")
        )
    )
}

const mapStateToProp = (state) => {
    return {
        carts: state.carts,
        userInfo: state.userInfo.user
    }
}

export default connect(mapStateToProp, {
    PLACE_ORDER
})(PlaceOrder);
