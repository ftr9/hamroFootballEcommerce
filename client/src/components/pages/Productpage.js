import './Productpage.css';
import Leaguelist from '../Leaguelist';
//import FootballList from '../FootballList';
const Productpage = () => {
    return (
        <div className="Products">

            <div className="Products__top">
                <div className="Products__top--name">League</div>
                <div className="Products__top--input">
                    <ion-icon name="search"></ion-icon>
                    <input type="text" placeholder="Search"></input>
                </div>
                <select defaultValue="League" className="options">
                    <option>League</option>
                    <option>World cup</option>
                </select>
            </div>

            <Leaguelist />
        </div>
    )
}

export default Productpage
