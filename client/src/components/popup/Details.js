import reactdom from 'react-dom';
import './Details.css';
import Solidbutton from '../button/Solidbutton';
import { connect } from 'react-redux';
import { OPEN_POPUP_DETAIL } from '../../redux/actions/index';

const Details = (props) => {

    const { category, detail, OPEN_POPUP_DETAIL } = props;

    return (
        reactdom.createPortal(
            <div className="Details">
                <div className="Details__card">
                    <div className="Details__card--left">
                        <img src={`/images/league/${category}/${detail.image}`} alt={detail.name}></img>
                    </div>
                    <div className="Details__card--right">
                        <div className="closeButton" onClick={() => OPEN_POPUP_DETAIL('close', null)}>
                            <div>
                                <ion-icon name="close"></ion-icon>
                            </div>
                        </div>
                        <h2>{detail.name}</h2>
                        <p className="detail_detail">{detail.description}</p>
                        <div className="status">
                            <div className="active">{detail.inStock ? "InStock" : "Out of Stock"}</div>
                            <div>{detail.inStock ? "Currently available" : "Not available"}</div>
                        </div>
                        <div className="brand">
                            <p>{detail.brand} Brand</p>
                        </div>
                        <div className="sizes">
                            <p>sizes</p>
                            <div className="sizes__size">
                                {
                                    detail.sizes.map((el) => {
                                        return <div className="sizes__box" key={el}>{el}</div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="button">
                            <Solidbutton content="Add to cart" icon={<ion-icon name="cart-sharp"></ion-icon>} />
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector("#details")
        )
    )
}

const mapStateToProp = (state) => {
    const footballs = state.footballs.datas;
    const CurrentFootball = footballs.filter(el => {
        return el._id === state.detailPop.productId
    })
    return { category: state.footballs.category, detail: CurrentFootball[0] }
}

export default connect(mapStateToProp, {
    OPEN_POPUP_DETAIL
})(Details);
