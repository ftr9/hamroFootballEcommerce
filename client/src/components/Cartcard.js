import './Cartcard.css';
import Solidbutton from './button/Solidbutton';
import { useState } from 'react';
const Cartcard = () => {


    const [sizes, setSizes] = useState(5);
    let [quantity, setQuantity] = useState(1);

    const setQuantityIncrement = () => {
        setQuantity(++quantity);
    }

    const setQuantityDecrement = () => {
        if (quantity > 1) {
            setQuantity(--quantity);
        }
    }

    const setSize = (size) => {
        setSizes(size);
    }

    return (
        <div className="Cartcard">
            <div className="Cartcard__left">
                <img src="/images/league/bundesliga/2010-2011-bundesliga-adidas-torfabrik-official-match-ball-small.png" alt="league"></img>
            </div>
            <div className="Cartcard__middle">
                <div className="Cartcard__price">
                    400 -/
                </div>
                <div className="Cartcard__name">
                    Vedas
                </div>
                <div className="Cartcard__sizes">
                    sizes <div className="sizes__card" id={sizes === 3 ? "active" : ""} onClick={() => setSize(3)}>3</div>
                    <div className="sizes__card" id={sizes === 4 ? "active" : ""} onClick={() => setSize(4)}>4</div>
                    <div className="sizes__card" id={sizes === 5 ? "active" : ""} onClick={() => setSize(5)}>5</div>
                </div>
            </div>

            <div className="Cartcard__right">
                <Solidbutton content="cancel" />
                <div className="Cartcard__quantity">
                    <div className="Cartcard__increase" onClick={() => setQuantityIncrement()}><ion-icon name="chevron-up-outline"></ion-icon></div>
                    <div className="Cartcard__quantityBox">{quantity}</div>
                    <div className="Cartcard__decrease" onClick={() => setQuantityDecrement()}><ion-icon name="chevron-down-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    )
}

export default Cartcard
