import './Cart.css';
import Cartcard from '../Cartcard';
import Solidbutton from '../button/Solidbutton';
const Cart = () => {
    return (
        <div className='Cartpage'>
            <div className="Cartpage__title">
                My Cart
            </div>
            <div className="Cartpage__products">
                <Cartcard />
                <Cartcard />
                <Cartcard />

            </div>
            <div className="Cartpage__button">
                <Solidbutton content="Place order" icon={<ion-icon name="cart"></ion-icon>} />
            </div>
        </div>
    )
}

export default Cart
