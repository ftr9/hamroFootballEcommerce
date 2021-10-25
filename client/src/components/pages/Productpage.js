import './Productpage.css';
import Leaguelist from '../Leaguelist';
import FootballList from '../FootballList';
import { connect } from 'react-redux';
import { CHANGE_SEARCH } from '../../redux/actions/index';
const Productpage = (props) => {

    const { footballs, CHANGE_SEARCH } = props;
    const checkCategory_And_Return_List = () => {

        if (footballs.category === 'league') {
            return <Leaguelist />
        } else {
            return <FootballList />
        }

    }

    return (
        <div className="Products">

            <div className="Products__top">
                <div className="Products__top--name">{footballs.category}</div>
                <div className="Products__top--input">
                    <ion-icon name="search"></ion-icon>
                    <input type="text" placeholder="Search"></input>
                </div>
                <select defaultValue="League" className="options" onChange={(e) => CHANGE_SEARCH(e.target.value)}>
                    <option>League</option>
                    <option>worldCup</option>
                </select>
            </div>

            {
                checkCategory_And_Return_List()
            }
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        footballs: state.footballs
    }
}

export default connect(mapStateToProp, {
    CHANGE_SEARCH
})(Productpage);
