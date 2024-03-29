import React, { useEffect } from 'react';
import './CheckOut.css';
import { useDispatch, useSelector } from 'react-redux';
import useShipAddressFormState from './hooks/useShipAddressFormState';
import StripePayment from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
  return (
    <div className="checkout_container">
      <CheckOut.CheckOutForm />
    </div>
  );
};

const CheckOutForm = () => {
  const {
    name,
    setName,
    confirmationEmail,
    setConfirmationEmail,
    phoneNumber,
    setPhoneNumber,
    location,
    SetLocation,
    hasAnyFormError,
    formError,
  } = useShipAddressFormState();
  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts);
  const navigation = useNavigate();

  const payWithKhaltiHandle = async token => {
    if (hasAnyFormError()) {
      return;
    }

    const mainOrder = {
      name,
      confirmationEmail,
      phoneNumber,
      location,
      carts,
      stripeToken: token,
      paymentType: 'payed digitally',
    };

    const confirmedOrder = await axios.post(
      '/api/v1/hamrofootball/stripe',
      mainOrder
    );
    console.log(confirmedOrder);
    if (confirmedOrder.data.status !== 'fail') {
      alert('successfull payment');
      localStorage.removeItem('addedToCart');
      dispatch({ type: 'change', body: {} });
    }
  };

  const payWthCODHandle = async () => {
    if (hasAnyFormError()) {
      return;
    }
    const mainOrder = {
      name,
      confirmationEmail,
      phoneNumber,
      location,
      carts,
      paymentType: 'cash on delivery',
    };
    const id = toast.loading('Please Hold on !!!!');
    const confirmedOrder = await axios.post(
      '/api/v1/hamrofootball/order',
      mainOrder
    );
    if (confirmedOrder.data.status !== 'fail') {
      localStorage.removeItem('addedToCart');
      dispatch({ type: 'change', body: {} });
      toast.update(id, {
        render: 'Your Order was successfull',
        type: 'success',
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    } else {
      toast.update(id, {
        render: 'Something went wrong  !!!!',
        type: 'error',
        autoClose: true,
        isLoading: false,
        closeOnClick: true,
      });
    }
  };

  useEffect(() => {
    if (Object.values(carts).length === 0) {
      navigation('/products');
    }
  }, [carts, navigation]);

  return (
    <>
      <div className="checkout_container--left">
        <h3>Shipping Address</h3>

        <div className="shipping_input_container">
          <label className="shipping_label">* FullName</label>
          <input
            className="shipping_input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Name"
          />
          {formError.name.hasError && (
            <span className="shipping_input_error">
              {formError.name.errorMessage}
            </span>
          )}
        </div>

        <div className="shipping_input_container">
          <label className="shipping_label">* Confirmation Email</label>
          <input
            className="shipping_input"
            type="email"
            value={confirmationEmail}
            onChange={e => setConfirmationEmail(e.target.value)}
            placeholder="Email"
          />
          {formError.confirmationEmail.hasError && (
            <span className="shipping_input_error">
              {formError.confirmationEmail.errorMessage}
            </span>
          )}
        </div>

        <div className="shipping_input_container">
          <label className="shipping_label">* Phone Number</label>
          <input
            className="shipping_input"
            type="text"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder="phonenumber"
          />
          {formError.phoneNumber.hasError && (
            <span className="shipping_input_error">
              {formError.phoneNumber.errorMessage}
            </span>
          )}
        </div>

        <div className="shipping_input_container">
          <label className="shipping_label">* Full Location</label>
          <input
            className="shipping_input"
            type="text"
            value={location}
            onChange={e => SetLocation(e.target.value)}
            placeholder="Enter full Location"
          />
          {formError.location.hasError && (
            <span className="shipping_input_error">
              {formError.location.errorMessage}
            </span>
          )}
        </div>
      </div>
      <CheckOut.CheckOutSummary
        onPaywithKhalti={payWithKhaltiHandle}
        onPayWithCashOnDelivery={payWthCODHandle}
      ></CheckOut.CheckOutSummary>
    </>
  );
};

CheckOut.CheckOutForm = CheckOutForm;

const CheckOutSummary = ({ onPaywithKhalti, onPayWithCashOnDelivery }) => {
  const carts = useSelector(state => state.carts);

  const TotalCartItemsPrice = Object.values(carts).reduce(
    (prev, newPrice) => prev + newPrice.price,
    0
  );

  return (
    <div className="checkout_container--right">
      <h3>Your Orders</h3>
      <div className="right_container_info">
        <p className="secondary_txt">Subtotal</p>
        <p className="secondary_txt">{TotalCartItemsPrice} Rs</p>
      </div>
      <div className="right_container_info">
        <p className="secondary_txt">Shipment Cost</p>
        <p className="secondary_txt">100 Rs</p>
      </div>
      <div className="right_container_info">
        <p className="primary_txt">Total Cost</p>
        <p className="primary_txt">{TotalCartItemsPrice + 100} Rs</p>
      </div>
      <div className="right_container_buttons">
        <StripePayment
          amount={TotalCartItemsPrice + 100}
          token={token => onPaywithKhalti(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          name={'Hamro football'}
        >
          <button type="submit" className="cta_buttons">
            Pay With Stripe
          </button>
        </StripePayment>
        <p className="secondary_txt">OR</p>
        <button
          onClick={onPayWithCashOnDelivery}
          type="submit"
          className="cta_buttons"
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  );
};
CheckOut.CheckOutSummary = CheckOutSummary;

export default CheckOut;
