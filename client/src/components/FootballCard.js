import './FootballCard.css';
import Solidbutton from './button/Solidbutton';
import { connect } from 'react-redux';
import { OPEN_POPUP_DETAIL } from '../redux/actions';
const FootballCard = ({ imageName, category, footballName, inStock, totalSold, price, brand, id, OPEN_POPUP_DETAIL }) => {



    return (

        <div className="footballCard">
            <img src={`/images/league/${category}/${imageName}`} alt={footballName}></img>
            <div className="footballCard__name">
                <h3>{footballName}</h3>
            </div>
            <div className="footballCard__buttons">
                <Solidbutton content="Add to cart" icon={<ion-icon name="cart"></ion-icon>} />
                <Solidbutton content="Details" icon={<ion-icon name="chevron-forward"></ion-icon>} color="blue" onClicked={() => { OPEN_POPUP_DETAIL('open', id) }} />
            </div>
            <div className="footballCard__status">
                <p>{inStock ? "inStock" : "out of Stock"}</p>
                <p>{totalSold} sold</p>
            </div>
            <div className="footballCard__details">
                <p>{brand}</p>
                <p>{price} -/</p>
            </div>
        </div>

    )
}

export default connect(null, {
    OPEN_POPUP_DETAIL
})(FootballCard);
