import './Orderedcart.css';
const Orderedcart = () => {
    return (
        <div className="Orderedcart">
            <div className="Orderedcart__left">
                <img src="/images/league/bundesliga/2010-2011-bundesliga-adidas-torfabrik-official-match-ball-small.png" alt={"BUDESLI"}></img>
            </div>
            <div className="Orderedcart__right">
                <div className="Orderedcart__right--price">1400 -/</div>
                <div className="Orderedcart__right--name">Rahul dotel</div>
                <div className="Orderedcart__right--sizeAndCount">
                    <div className="Orderedcart__right--size">
                        <p>Size</p>
                        <div className="Ordercart__right--sizebox">
                            3
                        </div>
                    </div>
                    <div className="Orderedcart__rightcount">
                        Count 5
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orderedcart
