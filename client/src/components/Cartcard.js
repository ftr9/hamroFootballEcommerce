import './Cartcard.css';
import Solidbutton from './button/Solidbutton';
import { UPDATE_CART, DELETE_CART, UPDATE_CART_SIZE } from '../redux/actions/index';
import { connect } from 'react-redux';

const Cartcard = ({ id, quantitys, category, price, sizess, name, imageName, selectedSize, UPDATE_CART, DELETE_CART, UPDATE_CART_SIZE }) => {


    const setQuantityIncrement = () => {
        //setQuantity(++quantity);
        UPDATE_CART(id, 'icr', price);
    }

    const setQuantityDecrement = () => {
        if (quantitys > 1) {
            //setQuantity(--quantity);
            UPDATE_CART(id, 'dcr', price);
        }
    }

    const setSize = (size) => {
        UPDATE_CART_SIZE(id, size);
    }

    return (
        <div className="Cartcard">
            <div className="Cartcard__left">
                <img src={`/images/league/${category}/${imageName}`} alt={name}></img>
            </div>
            <div className="Cartcard__middle">
                <div className="Cartcard__price">
                    {price} -/
                </div>
                <div className="Cartcard__name">
                    {name}
                </div>
                <div className="Cartcard__sizes">
                    sizes <div className="sizes__card" id={selectedSize === 3 ? "active" : ""} onClick={() => setSize(3)}>3</div>
                    <div className="sizes__card" id={selectedSize === 4 ? "active" : ""} onClick={() => setSize(4)}>4</div>
                    <div className="sizes__card" id={selectedSize === 5 ? "active" : ""} onClick={() => setSize(5)}>5</div>
                </div>
            </div>

            <div className="Cartcard__right">
                <Solidbutton content="cancel" onClicked={() => DELETE_CART(id)} />
                <div className="Cartcard__quantity">
                    <div className="Cartcard__increase" onClick={() => setQuantityIncrement()}><ion-icon name="chevron-up-outline"></ion-icon></div>
                    <div className="Cartcard__quantityBox">{quantitys}</div>
                    <div className="Cartcard__decrease" onClick={() => setQuantityDecrement()}><ion-icon name="chevron-down-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { UPDATE_CART, DELETE_CART, UPDATE_CART_SIZE })(Cartcard);
