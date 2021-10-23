import reactdom from 'react-dom';
import './Details.css';
import Solidbutton from '../button/Solidbutton';
const Details = () => {
    return (
        reactdom.createPortal(
            <div className="Details">
                <div className="Details__card">
                    <div className="Details__card--left">
                        <img src="/images/league/bundesliga/2010-2011-bundesliga-adidas-torfabrik-official-match-ball-small.png" alt="bundesliga"></img>
                    </div>
                    <div className="Details__card--right">
                        <div className="closeButton">
                            <div>
                                <ion-icon name="close"></ion-icon>
                            </div>
                        </div>
                        <h2>Name</h2>
                        <p className="detail_detail">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="status">
                            <div className="active">inStock</div>
                            <div>currently available</div>
                        </div>
                        <div className="brand">
                            <p>Adidas Brand</p>
                        </div>
                        <div className="sizes">
                            <p>sizes</p>
                            <div className="sizes__size">
                                <div className="sizes__box">3</div>
                                <div className="sizes__box">4</div>
                                <div className="sizes__box">5</div>
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

export default Details
