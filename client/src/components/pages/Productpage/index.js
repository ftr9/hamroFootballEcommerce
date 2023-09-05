import './Productpage.css';
import Leaguelist from '../../Leaguelist';
import FootballList from '../../FootballList';
import { connect } from 'react-redux';
import { CHANGE_SEARCH } from '../../../redux/actions/index';
import Details from '../../popup/Details';

const Productpage = props => {
  const { footballs, CHANGE_SEARCH, isDetailPoPOpen } = props;

  const checkCategory_And_Return_List = () => {
    if (footballs.category === 'league') {
      return <Leaguelist />;
    } else {
      return <FootballList />;
    }
  };

  const checkFlag_Open_Popup = () => {
    if (isDetailPoPOpen) {
      return <Details />;
    }
  };

  return (
    <div className="Products">
      <div className="Products__top">
        <div className="Products__top--name">{footballs.category}</div>
        <div className="Products__top--input">
          <ion-icon name="search"></ion-icon>
          <input type="text" placeholder="Search"></input>
        </div>
        <select
          defaultValue="League"
          className="options"
          onChange={e => CHANGE_SEARCH(e.target.value)}
        >
          <option>League</option>
          <option>worldCup</option>
        </select>
      </div>

      {checkCategory_And_Return_List()}
      {checkFlag_Open_Popup()}
    </div>
  );
};

const mapStateToProp = state => {
  return {
    footballs: state.footballs,
    isDetailPoPOpen: state.detailPop.isOpen,
  };
};

export default connect(mapStateToProp, {
  CHANGE_SEARCH,
})(Productpage);
