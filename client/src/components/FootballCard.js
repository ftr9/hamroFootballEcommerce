import './FootballCard.css';
import Solidbutton from './button/Solidbutton';
const FootballCard = () => {
    return (
        <div className="footballCard">
            <img src="/images/league/bundesliga/2010-2011-bundesliga-adidas-torfabrik-official-match-ball-small.png" alt="2010-2011-bundesliga-adidas-torfabrik-official-match-ball-small"></img>
            <div className="footballCard__name">
                <h3>Mirasdo</h3>
            </div>
            <div className="footballCard__buttons">
                <Solidbutton content="Add to cart" icon={<ion-icon name="cart"></ion-icon>} />
                <Solidbutton content="Details" icon={<ion-icon name="chevron-forward"></ion-icon>} color="blue" />
            </div>
            <div className="footballCard__status">
                <p>inStock</p>
                <p>0 sold</p>
            </div>
            <div className="footballCard__details">
                <p>Adidas</p>
                <p>1200 -/</p>
            </div>
        </div>
    )
}

export default FootballCard
