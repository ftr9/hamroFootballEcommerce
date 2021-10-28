import './Orderedcart.css';
const Orderedcart = ({ price, name, selectedSize, quantitys, imageName, category }) => {
    return (
        <div className="Orderedcart">
            <div className="Orderedcart__left">
                <img src={`/images/league/${category}/${imageName}`} alt={name}></img>
            </div>
            <div className="Orderedcart__right">
                <div className="Orderedcart__right--price">{price} -/</div>
                <div className="Orderedcart__right--name">{name}</div>
                <div className="Orderedcart__right--sizeAndCount">
                    <div className="Orderedcart__right--size">
                        <p>Size</p>
                        <div className="Ordercart__right--sizebox">
                            {selectedSize}
                        </div>
                    </div>
                    <div className="Orderedcart__rightcount">
                        Count {quantitys}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orderedcart
