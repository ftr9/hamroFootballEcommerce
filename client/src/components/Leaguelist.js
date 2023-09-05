import './Leaguelist.css';
import { connect } from 'react-redux';
import { CHANGE_SEARCH } from '../redux/actions';

const Leaguelist = props => {
  const { CHANGE_SEARCH } = props;

  return (
    <>
      <h1 className="leagueList_info_header">
        Select from which league you want
      </h1>
      <div className="leagueList">
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('bundesliga')}
        >
          <img src="/images/league/bundesliga.webp" alt="bundesliga"></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('englishpremiereleague')}
        >
          <img src="/images/league/premierLeague.png" alt="Premierleague"></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('eredivise')}
        >
          <img src="/images/league/eredivise.png" alt={'Eredivise'}></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('ligue1')}
        >
          <img src="/images/league/ligue1.webp" alt="Ligue1"></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('majorLeagueSoccer')}
        >
          <img
            src="/images/league/major-league-soccer_25c0a.jpg"
            alt="Major league soccer"
          ></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('serieATM')}
        >
          <img src="/images/league/seriaA.jpg" alt={'SerieA'}></img>
        </div>
        <div
          className="leagueList__Card"
          onClick={() => CHANGE_SEARCH('championsLeague')}
        >
          <img src="/images/league/ufa.png" alt="uaefa champiins league"></img>
        </div>
      </div>
    </>
  );
};

export default connect(null, {
  CHANGE_SEARCH,
})(Leaguelist);
