import './Leaguelist.css';
const Leaguelist = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '2rem', letterSpacing: '.5px' }}>Select from which league you want</h1>
            <div className="leagueList">
                <div className="leagueList__Card">
                    <img src="/images/league/bundesliga.webp" alt="bundesliga"></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/premierLeague.png" alt="Premierleague"></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/campeonato-brasileiro-serie-a_e4c38.jpg" alt={"campeonato-brasileiro"}></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/eredivise.png" alt={"Eredivise"}></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/ligue1.webp" alt="Ligue1"></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/major-league-soccer_25c0a.jpg" alt="Major league soccer"></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/seriaA.jpg" alt={"SerieA"}></img>
                </div>
                <div className="leagueList__Card">
                    <img src="/images/league/ufa.png" alt="uaefa champiins league"></img>
                </div>

            </div>
        </>
    )
}

export default Leaguelist
